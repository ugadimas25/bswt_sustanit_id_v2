import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { 
  Users, GraduationCap, FileText, 
  Settings, LayoutDashboard, Sprout, TrendingUp, DollarSign, 
  MapPinned, Leaf, 
  Activity, Boxes, BarChart3,
  ShieldCheck, ChevronDown, ChevronRight, GitBranch,
  BookOpen, HelpCircle, Calendar as CalendarIcon, ClipboardCheck, LogOut
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import bentangSawitLogo from "@assets/bswt coklat_1763558253607.png";

interface MenuItem {
  title: string;
  url: string;
  icon: any;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  url: string;
}

const menuStructure: MenuItem[] = [
  { 
    title: "Beranda", 
    url: "/", 
    icon: LayoutDashboard,
    submenu: [
      { title: "Ringkasan Dashboard", url: "/" },
      { title: "Laporan Keberlanjutan", url: "/reports" },
      { title: "Dashboard Kustom", url: "/reports/dashboards" },
      { title: "Pembuat Laporan", url: "/reports/builder" },
    ]
  },
  { 
    title: "Petani", 
    url: "/producers", 
    icon: Users,
    submenu: [
      { title: "Semua Petani", url: "/producers" },
      { title: "Sertifikasi Petani", url: "/farmer-certifications" },
      { title: "Aktivitas Terakhir", url: "/farmer-last-activity" },
      { title: "Atribut Petani", url: "/farmers-attributes" },
      { title: "Anggota Keluarga", url: "/family-members" },
      { title: "Mata Pencaharian", url: "/farmer-livelihood" },
      { title: "Pinjaman", url: "/loans" },
      { title: "Potongan Pinjaman", url: "/loan-deductions" },
      { title: "Tabungan", url: "/savings" },
      { title: "Lokasi Pembayaran", url: "/locations" },
      { title: "Lahan GPS", url: "/fields" },
      { title: "Kebun", url: "/farms" },
      { title: "Area Tanam", url: "/planted-area" },
      { title: "Kuota Lahan", url: "/field-quotas" },
      { title: "Tipe Area", url: "/area-types" },
      { title: "Objek Kebun", url: "/farm-objects" },
      { title: "Foto Objek Kebun", url: "/farm-object-images" },
      { title: "Deforestasi Lahan", url: "/fields-deforestation" },
      { title: "Ringkasan Deforestasi", url: "/fields-deforestation-summary" },
    ]
  },
  { 
    title: "Penilaian", 
    url: "/penilaian", 
    icon: ClipboardCheck,
    submenu: [
      { title: "Penilaian Keberlanjutan", url: "/penilaian" },
      { title: "ISPO", url: "/penilaian/ispo" },
      { title: "RSPO", url: "/penilaian/rspo" },
      { title: "Survei", url: "/surveys" },
      { title: "Survei Kustom", url: "/surveys/custom" },
      { title: "Regulasi EUDR", url: "/workflow/eudr" },
      { title: "Kategori Kepatuhan", url: "/survey-compliance-categories" },
      { title: "Peringkat Pertanyaan", url: "/survey-questions-ranking" },
      { title: "Tindakan yang Diusulkan", url: "/survey-proposed-actions" },
      { title: "Kasus & Insiden", url: "/cases" },
    ]
  },
  { 
    title: "Ketertelusuran", 
    url: "/ketertelusuran", 
    icon: Activity,
    submenu: [
      { title: "Ringkasan Ketertelusuran", url: "/ketertelusuran" },
      { title: "Panen Keseluruhan", url: "/harvests" },
      { title: "Pengumpulan", url: "/harvest-collections" },
      { title: "Pengiriman", url: "/harvest-deliveries" },
      { title: "Pembelian", url: "/harvest-purchases" },
      { title: "Aktivitas", url: "/harvest-activities" },
      { title: "Penjadwalan", url: "/harvest-scheduling" },
      { title: "Pelacakan", url: "/harvest-tracking" },
    ]
  },
  { 
    title: "Pengetahuan", 
    url: "/pengetahuan", 
    icon: BookOpen,
    submenu: [
      { title: "Pusat Pengetahuan", url: "/pengetahuan" },
      { title: "Program Pelatihan", url: "/trainings" },
    ]
  },
  { 
    title: "Harga Pasar", 
    url: "/harga-pasar", 
    icon: DollarSign,
  },
  { 
    title: "Kalender", 
    url: "/kalender", 
    icon: CalendarIcon,
  },
  { 
    title: "Bantuan", 
    url: "/bantuan", 
    icon: HelpCircle,
  },
  { 
    title: "Pengaturan", 
    url: "/admin/import", 
    icon: Settings,
    submenu: [
      { title: "Import Data (AI Adapter)", url: "/admin/import" },
      { title: "Pengguna & Tingkat Persetujuan", url: "/users" },
      { title: "Manajemen Staf", url: "/admin/staff" },
      { title: "Pengaturan Wilayah & Rantai Pasok", url: "/admin/regions" },
      { title: "Pengaturan Wizard Ketertelusuran", url: "/traceability/custom-fields" },
      { title: "Perangkat", url: "/devices" },
      { title: "Pembeli", url: "/admin/buyers" },
      { title: "Pengaturan Negara", url: "/admin/country" },
    ]
  },
];

function isPathActive(currentPath: string, itemUrl: string, submenu?: SubMenuItem[]): boolean {
  if (currentPath === itemUrl) return true;
  if (submenu) {
    return submenu.some(sub => currentPath === sub.url);
  }
  return false;
}

export function AppSidebar() {
  const [location, setLocation] = useLocation();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (title: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("rememberedEmail");
    setLocation("/login");
  };

  return (
    <Sidebar data-testid="sidebar-main" className="border-r">
      <SidebarHeader className="p-4 sm:p-6 border-b border-sidebar-border bg-sidebar">
        <div className="flex flex-col items-center justify-center gap-2">
          <img 
            src={bentangSawitLogo} 
            alt="Bentang Sawit" 
            className="h-10 sm:h-12 w-auto"
            data-testid="img-bentang-sawit-logo"
          />
          <p className="text-xs text-muted-foreground text-center">Platform Keberlanjutan</p>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <ScrollArea className="h-full">
          <SidebarGroup className="px-2 py-2">
            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {menuStructure.map((item) => {
                  const hasSubmenu = item.submenu && item.submenu.length > 0;
                  const isActive = isPathActive(location, item.url, item.submenu);
                  const isOpen = openMenus[item.title] || isActive;

                  if (!hasSubmenu) {
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive}
                          className="min-h-12 px-4 text-sm sm:text-base font-medium"
                          data-testid={`link-sidebar-${item.title.toLowerCase().replace(/\s/g, '-')}`}
                        >
                          <Link href={item.url}>
                            <item.icon className="h-5 w-5 flex-shrink-0" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  }

                  return (
                    <Collapsible
                      key={item.title}
                      open={isOpen}
                      onOpenChange={() => toggleMenu(item.title)}
                    >
                      <SidebarMenuItem>
                        <div className="flex items-center">
                          <SidebarMenuButton
                            asChild
                            isActive={isActive}
                            className="h-12 px-4 text-base font-medium flex-1"
                            data-testid={`link-sidebar-${item.title.toLowerCase().replace(/\s/g, '-')}`}
                          >
                            <Link href={item.url}>
                              <item.icon className="h-5 w-5 flex-shrink-0" />
                              <span className="flex-1">{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                          <CollapsibleTrigger asChild>
                            <button 
                              className="h-12 w-10 flex items-center justify-center hover-elevate active-elevate-2 text-sidebar-foreground rounded-md"
                              data-testid={`button-toggle-${item.title.toLowerCase().replace(/\s/g, '-')}`}
                            >
                              {isOpen ? (
                                <ChevronDown className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                            </button>
                          </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent>
                          <SidebarMenuSub className="ml-4 border-l-2 border-sidebar-border pl-0">
                            {item.submenu?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.url}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={location === subItem.url}
                                  className="h-10 pl-6 text-sm"
                                >
                                  <Link 
                                    href={subItem.url}
                                    data-testid={`link-submenu-${subItem.title.toLowerCase().replace(/\s/g, '-')}`}
                                  >
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-sidebar-border p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              className="min-h-12 px-4 text-sm sm:text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
