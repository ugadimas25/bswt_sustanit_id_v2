import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "bentang_sawit",
});

type Region = {
  province: string;
  centerLat: number;
  centerLng: number;
  districts: { district: string; subdistricts: string[]; villages: string[] }[];
};

const regions: Region[] = [
  {
    province: "Riau",
    centerLat: 0.35,
    centerLng: 101.7,
    districts: [
      { district: "Kampar", subdistricts: ["Tapung", "Bangkinang"], villages: ["Sari Galuh", "Petapahan", "Air Tiris"] },
      { district: "Pelalawan", subdistricts: ["Pangkalan Kerinci", "Bunut"], villages: ["Sering", "Lubuk Keranji", "Pangkalan Bunut"] },
      { district: "Siak", subdistricts: ["Tualang", "Minas"], villages: ["Perawang", "Maredan", "Minas Jaya"] },
    ],
  },
  {
    province: "Sumatera Utara",
    centerLat: 2.6,
    centerLng: 99.7,
    districts: [
      { district: "Asahan", subdistricts: ["Kisaran Timur", "Buntu Pane"], villages: ["Sei Renggas", "Buntu Maraja", "Sentang"] },
      { district: "Labuhanbatu", subdistricts: ["Bilah Hulu", "Pangkatan"], villages: ["Aek Nabara", "Tebing Linggahara", "Pangkatan"] },
    ],
  },
  {
    province: "Sumatera Selatan",
    centerLat: -2.6,
    centerLng: 104.4,
    districts: [
      { district: "Banyuasin", subdistricts: ["Talang Kelapa", "Betung"], villages: ["Pangkalan Balai", "Sukajadi", "Tanjung Lago"] },
      { district: "Musi Banyuasin", subdistricts: ["Sungai Lilin", "Bayung Lencir"], villages: ["Sungai Lilin", "Mangsang", "Bayung Lencir"] },
    ],
  },
  {
    province: "Jambi",
    centerLat: -1.5,
    centerLng: 103.2,
    districts: [
      { district: "Muaro Jambi", subdistricts: ["Sungai Bahar", "Kumpeh"], villages: ["Marga", "Berembang", "Sungai Bahar"] },
      { district: "Tanjung Jabung Barat", subdistricts: ["Tungkal Ulu", "Pengabuan"], villages: ["Pelabuhan Dagang", "Suban", "Mekar Jaya"] },
    ],
  },
  {
    province: "Aceh",
    centerLat: 4.1,
    centerLng: 96.6,
    districts: [
      { district: "Aceh Tamiang", subdistricts: ["Karang Baru", "Kejuruan Muda"], villages: ["Kebun Tanah Terban", "Sungai Liput", "Bukit Tempurung"] },
      { district: "Nagan Raya", subdistricts: ["Kuala Pesisir", "Tripa Makmur"], villages: ["Padang Rubek", "Kuala Tripa", "Lhok Pawoh"] },
    ],
  },
  {
    province: "Kalimantan Tengah",
    centerLat: -2.3,
    centerLng: 113.0,
    districts: [
      { district: "Kotawaringin Barat", subdistricts: ["Pangkalan Lada", "Kumai"], villages: ["Pandu Sanjaya", "Sungai Tendang", "Pangkalan Banteng"] },
      { district: "Seruyan", subdistricts: ["Hanau", "Danau Seluluk"], villages: ["Pembuang Hulu", "Tabiku", "Asam Baru"] },
    ],
  },
  {
    province: "Kalimantan Barat",
    centerLat: -0.4,
    centerLng: 110.5,
    districts: [
      { district: "Sanggau", subdistricts: ["Parindu", "Kembayan"], villages: ["Pusat Damai", "Beringin", "Tanjung Bunga"] },
      { district: "Ketapang", subdistricts: ["Matan Hilir Utara", "Manis Mata"], villages: ["Sungai Awan", "Suka Karya", "Manis Mata"] },
    ],
  },
];

const firstNames = [
  "Budi", "Sutrisno", "Joko", "Ahmad", "Maman", "Dedi", "Rahmat", "Hendra", "Iwan", "Rudi",
  "Bambang", "Slamet", "Eko", "Agus", "Hasan", "Yusuf", "Sapto", "Wahyu", "Kurnia", "Made",
  "Rizal", "Faisal", "Nasrul", "Ridwan", "Taufik", "Pardi", "Sukamto", "Cahyono", "Sumarno", "Marwan",
];
const lastNames = [
  "Saputra", "Wijaya", "Pratama", "Hidayat", "Siregar", "Nasution", "Lubis", "Manurung", "Hutabarat", "Tampubolon",
  "Simanjuntak", "Sembiring", "Sinaga", "Marpaung", "Pasaribu", "Harahap", "Pohan", "Tanjung", "Daulay", "Aritonang",
];

const commodities = [
  { name: "Kelapa Sawit", weight: 70 },
  { name: "Karet", weight: 15 },
  { name: "Kakao", weight: 8 },
  { name: "Kopi", weight: 7 },
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickWeighted<T extends { weight: number }>(items: T[]): T {
  const total = items.reduce((s, it) => s + it.weight, 0);
  let r = Math.random() * total;
  for (const it of items) {
    r -= it.weight;
    if (r <= 0) return it;
  }
  return items[items.length - 1];
}

function randomFarmer(): string {
  return `${pick(firstNames)} ${pick(lastNames)}`;
}

// area in ha → square side in degrees (~111km per degree near equator)
// 1 ha = 10,000 m² → side(m) = sqrt(area * 10000); side(deg) = side(m) / 111000
function buildPolygon(centerLat: number, centerLng: number, areaHa: number): { polygon: string; latlng: string } {
  const sideM = Math.sqrt(areaHa * 10000);
  const halfDeg = sideM / 111000 / 2;
  const corners: [number, number][] = [
    [centerLat - halfDeg, centerLng - halfDeg],
    [centerLat - halfDeg, centerLng + halfDeg],
    [centerLat + halfDeg, centerLng + halfDeg],
    [centerLat + halfDeg, centerLng - halfDeg],
    [centerLat - halfDeg, centerLng - halfDeg],
  ];
  const polygon = `POLYGON((${corners.map(([la, ln]) => `${la.toFixed(6)} ${ln.toFixed(6)}`).join(", ")}))`;
  const latlng = `${centerLat.toFixed(6)},${centerLng.toFixed(6)}`;
  return { polygon, latlng };
}

function randomDateBetween(startYear: number, endYear: number): string {
  const start = new Date(startYear, 0, 1).getTime();
  const end = new Date(endYear, 11, 31).getTime();
  const t = start + Math.random() * (end - start);
  const d = new Date(t);
  return d.toISOString().slice(0, 10);
}

async function main() {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query("TRUNCATE TABLE plots_ady");

    let plotCounter = 1;
    const rows: any[] = [];

    for (const region of regions) {
      for (const district of region.districts) {
        for (const village of district.villages) {
          const farmersInVillage = 2 + Math.floor(Math.random() * 2); // 2-3
          for (let f = 0; f < farmersInVillage; f++) {
            const farmer = randomFarmer();
            const plotsPerFarmer = 1 + Math.floor(Math.random() * 2); // 1-2
            for (let p = 0; p < plotsPerFarmer; p++) {
              // jitter center within ±0.15° (~16 km) from province center
              const lat = region.centerLat + (Math.random() - 0.5) * 0.3;
              const lng = region.centerLng + (Math.random() - 0.5) * 0.3;
              const areaHa = +(2 + Math.random() * 23).toFixed(2); // 2..25 ha
              const { polygon, latlng } = buildPolygon(lat, lng, areaHa);
              const commodity = pickWeighted(commodities).name;
              const plotId = `PLT-${String(plotCounter++).padStart(4, "0")}`;
              const subdistrict = pick(district.subdistricts);
              const firstplanting = randomDateBetween(2008, 2022);

              rows.push([
                "Indonesia",
                region.province,
                district.district,
                subdistrict,
                village,
                farmer,
                plotId,
                latlng,
                polygon,
                areaHa,
                commodity,
                firstplanting,
              ]);
            }
          }
        }
      }
    }

    const insertSql = `
      INSERT INTO plots_ady
        (country, province, district, subdistrict, village, farmer, plot, latlong, polygon, polygonarea, commodity, firstplanting)
      VALUES
        ${rows.map((_, i) => `($${i * 12 + 1},$${i * 12 + 2},$${i * 12 + 3},$${i * 12 + 4},$${i * 12 + 5},$${i * 12 + 6},$${i * 12 + 7},$${i * 12 + 8},$${i * 12 + 9},$${i * 12 + 10},$${i * 12 + 11},$${i * 12 + 12})`).join(",\n        ")}
    `;
    await client.query(insertSql, rows.flat());
    await client.query("COMMIT");
    console.log(`✓ Seeded ${rows.length} plots across ${regions.length} provinces.`);
  } catch (e) {
    await client.query("ROLLBACK");
    console.error("Seed failed:", e);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

main();
