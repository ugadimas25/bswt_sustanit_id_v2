import { useMemo } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, Download, Filter, Calendar, FileText, TrendingUp, Users, Boxes } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell,
} from "recharts";

type Column = { key: string; label: string; align?: "left" | "right" };
type Summary = { label: string; value: string; hint?: string; icon?: React.ReactNode };
type ChartPoint = { name: string; value: number; color?: string };

type Preset = {
  title?: string;
  description: string;
  columns: Column[];
  rows: (rng: () => number) => Record<string, any>[];
  summary: (rng: () => number) => Summary[];
  chart: (rng: () => number) => { title: string; data: ChartPoint[] };
};

// --- deterministic PRNG seeded by slug (so reload shows same numbers) ---
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hashSeed(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#06b6d4", "#f97316"];

const farmers = [
  "Budi Saputra", "Rizal Pratama", "Hasan Lubis", "Joko Hidayat", "Eko Manurung",
  "Made Sukamto", "Maman Wijaya", "Sutrisno Siregar", "Dedi Hutabarat", "Rahmat Pohan",
  "Bambang Daulay", "Faisal Sembiring", "Slamet Sinaga", "Kurnia Pasaribu", "Wahyu Tanjung",
];
const villages = ["Sari Galuh", "Petapahan", "Sungai Lilin", "Pangkatan", "Aek Nabara", "Pusat Damai", "Kuala Tripa"];
const provinces = ["Riau", "Sumatera Utara", "Sumatera Selatan", "Jambi", "Aceh", "Kalimantan Tengah", "Kalimantan Barat"];
const plots = Array.from({ length: 30 }, (_, i) => `PLT-${String(i + 1).padStart(4, "0")}`);

const slugToTitle = (s: string) =>
  s.split("-").map((w) => (w === "kml" ? "KML" : w === "v2" ? "v2" : w === "ims" ? "IMS" : w[0].toUpperCase() + w.slice(1))).join(" ");
const dateOf = (offsetDays: number) => {
  const d = new Date();
  d.setDate(d.getDate() - offsetDays);
  return d.toISOString().slice(0, 10);
};
const pick = <T,>(arr: T[], rng: () => number) => arr[Math.floor(rng() * arr.length)];
const rint = (rng: () => number, min: number, max: number) => Math.floor(rng() * (max - min + 1)) + min;
const rupiah = (n: number) => "Rp " + n.toLocaleString("id-ID");

// ---------- presets ----------
const presets: { match: (slug: string) => boolean; build: (slug: string) => Preset }[] = [
  {
    match: (s) => s.includes("input"),
    build: () => ({
      description: "Detail penggunaan input pertanian (pupuk, herbisida, bibit) per plot dan per petani.",
      columns: [
        { key: "date", label: "Tanggal" },
        { key: "farmer", label: "Petani" },
        { key: "plot", label: "Plot" },
        { key: "input", label: "Input" },
        { key: "quantity", label: "Qty", align: "right" },
        { key: "unit", label: "Unit" },
        { key: "cost", label: "Biaya", align: "right" },
      ],
      rows: (rng) => {
        const items = [
          { name: "Urea", unit: "kg", cost: 8500 },
          { name: "NPK Phonska", unit: "kg", cost: 12000 },
          { name: "Glyphosate", unit: "L", cost: 75000 },
          { name: "Bibit Sawit Tenera", unit: "pcs", cost: 35000 },
          { name: "Dolomite", unit: "kg", cost: 3500 },
          { name: "Roundup", unit: "L", cost: 88000 },
        ];
        return Array.from({ length: 28 }, (_, i) => {
          const it = pick(items, rng);
          const q = rint(rng, 10, 250);
          return {
            date: dateOf(i * 2 + rint(rng, 0, 1)),
            farmer: pick(farmers, rng),
            plot: pick(plots, rng),
            input: it.name,
            quantity: q,
            unit: it.unit,
            cost: rupiah(q * it.cost),
          };
        });
      },
      summary: (rng) => [
        { label: "Total Cost", value: rupiah(rint(rng, 80, 220) * 1_000_000), hint: "30 hari terakhir", icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Active Plots", value: String(rint(rng, 90, 140)), hint: `dari ${plots.length * 6} plot` },
        { label: "Top Input", value: "Urea", hint: `${rint(rng, 35, 55)}% dari total kg`, icon: <Boxes className="h-4 w-4" /> },
        { label: "Avg per Plot", value: rupiah(rint(rng, 800, 1500) * 1000), hint: "per bulan" },
      ],
      chart: (rng) => ({
        title: "Volume per Jenis Input (kg/L)",
        data: [
          { name: "Urea", value: rint(rng, 3000, 6000) },
          { name: "NPK", value: rint(rng, 2200, 4500) },
          { name: "Glyphosate", value: rint(rng, 200, 800) },
          { name: "Dolomite", value: rint(rng, 1500, 3500) },
          { name: "Bibit", value: rint(rng, 100, 600) },
        ].map((d, i) => ({ ...d, color: COLORS[i] })),
      }),
    }),
  },
  {
    match: (s) => s.includes("loan"),
    build: () => ({
      description: "Daftar pinjaman yang diberikan kepada petani beserta status pelunasan.",
      columns: [
        { key: "date", label: "Tgl. Pencairan" },
        { key: "farmer", label: "Petani" },
        { key: "purpose", label: "Tujuan" },
        { key: "amount", label: "Jumlah", align: "right" },
        { key: "tenor", label: "Tenor", align: "right" },
        { key: "status", label: "Status" },
      ],
      rows: (rng) => {
        const purposes = ["Pupuk", "Bibit", "Alat Panen", "Renovasi Lahan", "Modal Operasional"];
        const statuses = ["Lancar", "Lancar", "Lancar", "Tunggakan", "Lunas"];
        return Array.from({ length: 25 }, (_, i) => ({
          date: dateOf(i * 5 + rint(rng, 0, 3)),
          farmer: pick(farmers, rng),
          purpose: pick(purposes, rng),
          amount: rupiah(rint(rng, 2, 25) * 1_000_000),
          tenor: `${rint(rng, 6, 24)} bln`,
          status: pick(statuses, rng),
        }));
      },
      summary: (rng) => [
        { label: "Total Disbursed", value: rupiah(rint(rng, 800, 1500) * 1_000_000), icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Active Loans", value: String(rint(rng, 120, 180)) },
        { label: "Repayment Rate", value: `${rint(rng, 86, 96)}%` },
        { label: "Overdue", value: String(rint(rng, 5, 18)), hint: "perlu follow-up" },
      ],
      chart: (rng) => ({
        title: "Disbursement per Bulan (Juta Rp)",
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m, i) => ({
          name: m, value: rint(rng, 80, 220), color: COLORS[i],
        })),
      }),
    }),
  },
  {
    match: (s) => s.includes("training"),
    build: () => ({
      description: "Catatan pelatihan yang diberikan kepada petani dan stafnya.",
      columns: [
        { key: "date", label: "Tanggal" },
        { key: "topic", label: "Topik" },
        { key: "trainer", label: "Trainer" },
        { key: "village", label: "Desa" },
        { key: "attendees", label: "Peserta", align: "right" },
        { key: "duration", label: "Durasi", align: "right" },
      ],
      rows: (rng) => {
        const topics = ["GAP Sawit", "Pemupukan Berimbang", "Pengendalian Hama", "EUDR Compliance", "K3 Panen", "Manajemen Air"];
        const trainers = ["Pak Wijaya", "Bu Sari", "Pak Hendra", "Bu Lestari", "Pak Anton"];
        return Array.from({ length: 22 }, (_, i) => ({
          date: dateOf(i * 4),
          topic: pick(topics, rng),
          trainer: pick(trainers, rng),
          village: pick(villages, rng),
          attendees: rint(rng, 12, 45),
          duration: `${rint(rng, 2, 6)} jam`,
        }));
      },
      summary: (rng) => [
        { label: "Sessions (90d)", value: String(rint(rng, 24, 38)) },
        { label: "Farmers Trained", value: String(rint(rng, 480, 750)), icon: <Users className="h-4 w-4" /> },
        { label: "Avg Attendance", value: `${rint(rng, 22, 32)}` },
        { label: "Top Topic", value: "GAP Sawit" },
      ],
      chart: (rng) => ({
        title: "Peserta per Topik",
        data: ["GAP Sawit", "Pemupukan", "Hama", "EUDR", "K3", "Air"].map((m, i) => ({
          name: m, value: rint(rng, 60, 220), color: COLORS[i],
        })),
      }),
    }),
  },
  {
    match: (s) => s.includes("survey"),
    build: () => ({
      description: "Survei yang sudah diselesaikan beserta petani dan staf surveyor.",
      columns: [
        { key: "date", label: "Tanggal" },
        { key: "survey", label: "Survei" },
        { key: "farmer", label: "Petani" },
        { key: "staff", label: "Staf" },
        { key: "score", label: "Skor", align: "right" },
        { key: "status", label: "Status" },
      ],
      rows: (rng) => {
        const surveys = ["EUDR Baseline", "Sosial Ekonomi", "Cek Kepatuhan", "Profil Lahan", "Survei Panen"];
        const staff = ["Andi", "Rina", "Tomi", "Sari", "Adi"];
        const status = ["Complete", "Complete", "Complete", "Pending Review"];
        return Array.from({ length: 26 }, (_, i) => ({
          date: dateOf(i * 2),
          survey: pick(surveys, rng),
          farmer: pick(farmers, rng),
          staff: pick(staff, rng),
          score: rint(rng, 65, 98),
          status: pick(status, rng),
        }));
      },
      summary: (rng) => [
        { label: "Surveys (30d)", value: String(rint(rng, 180, 280)) },
        { label: "Avg Score", value: `${rint(rng, 78, 92)}%` },
        { label: "Pending Review", value: String(rint(rng, 8, 22)) },
        { label: "Active Surveyors", value: String(rint(rng, 12, 18)) },
      ],
      chart: (rng) => ({
        title: "Surveys per Provinsi",
        data: provinces.map((p, i) => ({ name: p.split(" ")[0], value: rint(rng, 20, 90), color: COLORS[i % COLORS.length] })),
      }),
    }),
  },
  {
    match: (s) => s.includes("warehouse") || s.includes("inventory"),
    build: () => ({
      description: "Stok input pada setiap gudang termasuk level kuantitas saat ini.",
      columns: [
        { key: "warehouse", label: "Gudang" },
        { key: "input", label: "Input" },
        { key: "stock", label: "Stok", align: "right" },
        { key: "unit", label: "Unit" },
        { key: "min", label: "Min Level", align: "right" },
        { key: "status", label: "Status" },
      ],
      rows: (rng) => {
        const wh = ["Gudang Pekanbaru", "Gudang Medan", "Gudang Palembang", "Gudang Pontianak"];
        const items = [
          { name: "Urea", unit: "kg" },
          { name: "NPK Phonska", unit: "kg" },
          { name: "Glyphosate", unit: "L" },
          { name: "Dolomite", unit: "kg" },
          { name: "Bibit Sawit", unit: "pcs" },
        ];
        return Array.from({ length: 20 }, (_, i) => {
          const it = pick(items, rng);
          const stock = rint(rng, 200, 12000);
          const min = rint(rng, 500, 1500);
          return {
            warehouse: pick(wh, rng),
            input: it.name,
            stock: stock.toLocaleString("id-ID"),
            unit: it.unit,
            min: min.toLocaleString("id-ID"),
            status: stock < min ? "Low" : stock < min * 2 ? "OK" : "Healthy",
          };
        });
      },
      summary: (rng) => [
        { label: "SKUs Tracked", value: String(rint(rng, 18, 32)) },
        { label: "Low Stock Alerts", value: String(rint(rng, 3, 9)) },
        { label: "Total Value", value: rupiah(rint(rng, 1200, 2400) * 1_000_000) },
        { label: "Warehouses", value: "4" },
      ],
      chart: (rng) => ({
        title: "Stok per Gudang (relative)",
        data: ["Pekanbaru", "Medan", "Palembang", "Pontianak"].map((m, i) => ({
          name: m, value: rint(rng, 40, 100), color: COLORS[i],
        })),
      }),
    }),
  },
  {
    match: (s) => s.includes("traceability") || s.includes("delivery") || s.includes("lot") || s.includes("container"),
    build: () => ({
      description: "Riwayat pelacakan lot dan pengiriman dari kebun hingga ke pabrik.",
      columns: [
        { key: "lot", label: "Lot" },
        { key: "date", label: "Tanggal" },
        { key: "farmer", label: "Petani Asal" },
        { key: "weight", label: "Berat (kg)", align: "right" },
        { key: "destination", label: "Tujuan" },
        { key: "compliance", label: "EUDR" },
      ],
      rows: (rng) => {
        const dest = ["PKS Pekanbaru", "PKS Medan", "PKS Palembang", "Buyer A", "Buyer B"];
        const compliance = ["Compliant", "Compliant", "Compliant", "Compliant", "Pending"];
        return Array.from({ length: 24 }, (_, i) => ({
          lot: `LOT-${String(rint(rng, 1000, 9999)).padStart(4, "0")}`,
          date: dateOf(i * 2),
          farmer: pick(farmers, rng),
          weight: (rint(rng, 800, 6500)).toLocaleString("id-ID"),
          destination: pick(dest, rng),
          compliance: pick(compliance, rng),
        }));
      },
      summary: (rng) => [
        { label: "Lots (30d)", value: String(rint(rng, 240, 360)) },
        { label: "Volume Total", value: `${rint(rng, 380, 520)} t` },
        { label: "EUDR Compliant", value: `${rint(rng, 92, 99)}%` },
        { label: "Active Buyers", value: String(rint(rng, 5, 9)) },
      ],
      chart: (rng) => ({
        title: "Volume per Tujuan (ton)",
        data: ["PKS-1", "PKS-2", "PKS-3", "Buyer A", "Buyer B"].map((m, i) => ({
          name: m, value: rint(rng, 40, 180), color: COLORS[i],
        })),
      }),
    }),
  },
  {
    match: (s) => s.includes("yield") || s.includes("forecast") || s.includes("harvest"),
    build: () => ({
      description: "Prediksi dan realisasi panen per plot/petani.",
      columns: [
        { key: "month", label: "Periode" },
        { key: "farmer", label: "Petani" },
        { key: "plot", label: "Plot" },
        { key: "forecast", label: "Forecast (kg)", align: "right" },
        { key: "actual", label: "Realisasi (kg)", align: "right" },
        { key: "variance", label: "Variance" },
      ],
      rows: (rng) => {
        const months = ["2026-01", "2026-02", "2026-03", "2026-04", "2026-05"];
        return Array.from({ length: 26 }, (_, i) => {
          const f = rint(rng, 1500, 6000);
          const a = Math.round(f * (0.8 + rng() * 0.35));
          const v = (((a - f) / f) * 100).toFixed(1);
          return {
            month: pick(months, rng),
            farmer: pick(farmers, rng),
            plot: pick(plots, rng),
            forecast: f.toLocaleString("id-ID"),
            actual: a.toLocaleString("id-ID"),
            variance: `${Number(v) >= 0 ? "+" : ""}${v}%`,
          };
        });
      },
      summary: (rng) => [
        { label: "Forecast Total", value: `${rint(rng, 220, 320)} t` },
        { label: "Realisasi", value: `${rint(rng, 200, 300)} t` },
        { label: "Akurasi", value: `${rint(rng, 88, 96)}%` },
        { label: "Top Plot", value: pick(plots, rng) },
      ],
      chart: (rng) => ({
        title: "Forecast vs Realisasi (ton)",
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m, i) => ({
          name: m, value: rint(rng, 35, 75), color: COLORS[i],
        })),
      }),
    }),
  },
  {
    match: (s) => s.includes("quota"),
    build: () => ({
      description: "Kuota grup petani per komoditas dan periode.",
      columns: [
        { key: "group", label: "Grup" },
        { key: "commodity", label: "Komoditas" },
        { key: "quota", label: "Kuota (t)", align: "right" },
        { key: "used", label: "Realisasi (t)", align: "right" },
        { key: "remaining", label: "Sisa (t)", align: "right" },
        { key: "status", label: "Status" },
      ],
      rows: (rng) => {
        const groups = ["KUD Sawit Jaya", "KUD Riau Makmur", "Koperasi Tamiang", "Kelompok Mekar", "KUD Banyuasin"];
        const commodities = ["Kelapa Sawit", "Karet", "Kakao", "Kopi"];
        return Array.from({ length: 18 }, (_, i) => {
          const q = rint(rng, 80, 320);
          const u = Math.round(q * (0.4 + rng() * 0.55));
          return {
            group: pick(groups, rng),
            commodity: pick(commodities, rng),
            quota: q,
            used: u,
            remaining: q - u,
            status: u >= q ? "Full" : u / q > 0.85 ? "Near Limit" : "On Track",
          };
        });
      },
      summary: (rng) => [
        { label: "Total Quota", value: `${rint(rng, 1800, 2500)} t` },
        { label: "Used", value: `${rint(rng, 60, 78)}%` },
        { label: "Active Groups", value: String(rint(rng, 12, 22)) },
        { label: "Near Limit", value: String(rint(rng, 2, 6)) },
      ],
      chart: (rng) => ({
        title: "Penggunaan Kuota per Grup",
        data: ["Sawit Jaya", "Riau Makmur", "Tamiang", "Mekar", "Banyuasin"].map((m, i) => ({
          name: m, value: rint(rng, 40, 95), color: COLORS[i],
        })),
      }),
    }),
  },
  {
    match: (s) => s.includes("deforestation") || s.includes("kml") || s.includes("field"),
    build: () => ({
      description: "Status deforestasi & batas lahan per plot.",
      columns: [
        { key: "plot", label: "Plot" },
        { key: "farmer", label: "Petani" },
        { key: "province", label: "Provinsi" },
        { key: "area", label: "Luas (ha)", align: "right" },
        { key: "alert", label: "Alert" },
        { key: "status", label: "Status" },
      ],
      rows: (rng) => {
        const alerts = ["None", "None", "None", "Forest Loss", "Buffer Encroach"];
        const status = ["Compliant", "Compliant", "Compliant", "Review", "Non-Compliant"];
        return Array.from({ length: 24 }, (_, i) => ({
          plot: pick(plots, rng),
          farmer: pick(farmers, rng),
          province: pick(provinces, rng),
          area: (2 + rng() * 23).toFixed(2),
          alert: pick(alerts, rng),
          status: pick(status, rng),
        }));
      },
      summary: (rng) => [
        { label: "Plots Monitored", value: String(rint(rng, 140, 220)) },
        { label: "Compliant", value: `${rint(rng, 92, 98)}%` },
        { label: "Active Alerts", value: String(rint(rng, 2, 8)) },
        { label: "Total Area", value: `${rint(rng, 1200, 2400)} ha` },
      ],
      chart: (rng) => ({
        title: "Plot per Provinsi",
        data: provinces.map((p, i) => ({ name: p.split(" ")[0], value: rint(rng, 8, 40), color: COLORS[i % COLORS.length] })),
      }),
    }),
  },
];

const fallback: Preset = {
  description: "Ringkasan data laporan.",
  columns: [
    { key: "date", label: "Tanggal" },
    { key: "farmer", label: "Petani" },
    { key: "village", label: "Desa" },
    { key: "value", label: "Nilai", align: "right" },
    { key: "status", label: "Status" },
  ],
  rows: (rng) =>
    Array.from({ length: 22 }, (_, i) => ({
      date: dateOf(i * 3),
      farmer: pick(farmers, rng),
      village: pick(villages, rng),
      value: rint(rng, 100, 9000).toLocaleString("id-ID"),
      status: pick(["OK", "OK", "Review", "Pending"], rng),
    })),
  summary: (rng) => [
    { label: "Total Records", value: String(rint(rng, 200, 600)) },
    { label: "Active", value: String(rint(rng, 80, 180)) },
    { label: "This Month", value: String(rint(rng, 30, 90)) },
    { label: "Pending", value: String(rint(rng, 3, 12)) },
  ],
  chart: (rng) => ({
    title: "Distribusi per Provinsi",
    data: provinces.map((p, i) => ({ name: p.split(" ")[0], value: rint(rng, 20, 80), color: COLORS[i % COLORS.length] })),
  }),
};

function getPreset(slug: string): Preset {
  for (const p of presets) if (p.match(slug)) return p.build(slug);
  return fallback;
}

function statusBadge(value: string) {
  const v = value.toLowerCase();
  if (["lunas", "compliant", "lancar", "complete", "ok", "healthy", "on track", "none"].some((k) => v.includes(k))) {
    return <Badge className="bg-green-500 text-white">{value}</Badge>;
  }
  if (["tunggakan", "non-compliant", "low", "full", "forest loss"].some((k) => v.includes(k))) {
    return <Badge variant="destructive">{value}</Badge>;
  }
  if (["pending", "review", "near limit", "buffer"].some((k) => v.includes(k))) {
    return <Badge className="bg-amber-500 text-white">{value}</Badge>;
  }
  return <Badge variant="secondary">{value}</Badge>;
}

export default function ReportDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const title = slugToTitle(slug);
  const preset = useMemo(() => getPreset(slug), [slug]);
  const seed = useMemo(() => hashSeed(slug), [slug]);

  const data = useMemo(() => {
    const rngRows = mulberry32(seed);
    const rngSum = mulberry32(seed + 1);
    const rngChart = mulberry32(seed + 2);
    return {
      rows: preset.rows(rngRows),
      summary: preset.summary(rngSum),
      chart: preset.chart(rngChart),
    };
  }, [preset, seed]);

  return (
    <div className="space-y-6 -m-6 p-6">
      {/* Header */}
      <div className="space-y-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/reports">Reports</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-3">
              <Link href="/reports">
                <Button variant="ghost" size="icon" data-testid="button-report-back">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                <FileText className="h-6 w-6 text-muted-foreground" />
                {title}
              </h1>
            </div>
            <p className="text-sm text-muted-foreground mt-2 ml-12">{preset.description}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" /> Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" /> Export
            </Button>
          </div>
        </div>
      </div>

      {/* Filter bar (decorative) */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">From</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9" defaultValue={dateOf(60)} />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">To</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9" defaultValue={dateOf(0)} />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Province</label>
              <Input defaultValue="All Provinces" />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Search</label>
              <Input placeholder="Search by farmer / plot..." />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {data.summary.map((s, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{s.label}</CardTitle>
              <span className="text-muted-foreground">{s.icon}</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{s.value}</div>
              {s.hint && <p className="text-xs text-muted-foreground mt-1">{s.hint}</p>}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{data.chart.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data.chart.data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" name="Value">
                {data.chart.data.map((entry, idx) => (
                  <Cell key={idx} fill={entry.color || COLORS[idx % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Detail</CardTitle>
          <span className="text-sm text-muted-foreground">{data.rows.length} rows</span>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  {preset.columns.map((c) => (
                    <TableHead key={c.key} className={c.align === "right" ? "text-right" : ""}>{c.label}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.rows.map((row, i) => (
                  <TableRow key={i} className="hover:bg-muted/30">
                    {preset.columns.map((c) => (
                      <TableCell key={c.key} className={c.align === "right" ? "text-right" : ""}>
                        {c.key === "status" || c.key === "compliance" || c.key === "alert"
                          ? statusBadge(String(row[c.key]))
                          : row[c.key]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
