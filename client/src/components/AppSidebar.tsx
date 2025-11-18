import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { 
  Users, MapPin, GraduationCap, FileText, AlertCircle, Smartphone, 
  Settings, LayoutDashboard, Sprout, TrendingUp, DollarSign, 
  Building2, MapPinned, CreditCard, Leaf, Award, UserCheck, 
  Activity, Boxes, ChartBar, Layers, TreeDeciduous, Calculator,
  ClipboardList, Package, Warehouse, TruckIcon, BarChart3,
  GitBranch, Navigation, FlaskConical, CheckCircle2, Database,
  ShieldCheck, UserCircle, Home
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MenuItem {
  title: string;
  url: string;
  icon: any;
}

interface SubMenuItem {
  title: string;
  url: string;
}

interface CategoryMenu {
  category: string;
  items: SubMenuItem[];
}

const mainCategories: MenuItem[] = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Farmers", url: "/producers", icon: Users },
  { title: "Planting Campaigns", url: "/planting-campaigns", icon: Sprout },
  { title: "Farming Inputs", url: "/farming-inputs", icon: Leaf },
  { title: "Harvests", url: "/harvests", icon: Boxes },
  { title: "Traceability", url: "/traceability", icon: Activity },
  { title: "Training", url: "/trainings", icon: GraduationCap },
  { title: "Surveys", url: "/surveys", icon: FileText },
  { title: "Financial Services", url: "/accounts", icon: CreditCard },
  { title: "Administration", url: "/users", icon: Settings },
  { title: "Master Data", url: "/area-types", icon: Database },
  { title: "Cases", url: "/cases", icon: AlertCircle },
  { title: "Reports", url: "/reports", icon: ChartBar },
];

const categorySubmenus: Record<string, SubMenuItem[]> = {
  "Dashboard": [],
  "Farmers": [
    { title: "All Farmers", url: "/producers" },
    { title: "Fields", url: "/fields" },
  ],
  "Planting Campaigns": [
    { title: "All Campaigns", url: "/planting-campaigns" },
    { title: "Cropping Cycle Financials", url: "/cropping-cycle-financials" },
    { title: "Field Productivity", url: "/field-productivity" },
    { title: "Campaign Groups", url: "/planting-campaign-groups" },
    { title: "Campaign Templates", url: "/planting-campaign-templates" },
    { title: "Weekly Yield Forecasts", url: "/weekly-yield-forecasts" },
  ],
  "Farming Inputs": [
    { title: "All Inputs", url: "/farming-inputs" },
    { title: "Input Costs", url: "/input-costs" },
    { title: "Input Distribution", url: "/input-distribution" },
    { title: "Input Purchases", url: "/input-purchases" },
  ],
  "Harvests": [
    { title: "All Harvests", url: "/harvests" },
    { title: "Group Bags", url: "/harvest-group-bags" },
    { title: "Activities", url: "/harvest-activities" },
    { title: "Alerts", url: "/harvest-alerts" },
    { title: "Costs", url: "/harvest-costs" },
    { title: "Batches", url: "/harvest-batches" },
    { title: "Collections", url: "/harvest-collections" },
    { title: "Deliveries", url: "/harvest-deliveries" },
    { title: "Forecasts", url: "/harvest-forecasts" },
    { title: "Input Store", url: "/harvest-input-store" },
    { title: "Input Unit", url: "/harvest-input-unit" },
    { title: "Purchases", url: "/harvest-purchases" },
    { title: "Quality Control", url: "/harvest-quality" },
    { title: "Reports", url: "/harvest-reports" },
    { title: "Scheduling", url: "/harvest-scheduling" },
    { title: "Tracking", url: "/harvest-tracking" },
    { title: "Warehouse", url: "/harvest-warehouse" },
  ],
  "Traceability": [
    { title: "Overview", url: "/traceability" },
    { title: "Containers", url: "/traceability-containers" },
    { title: "Farmer Harvest", url: "/traceability-farmer-harvest" },
    { title: "Input Usage", url: "/traceability-input-usage" },
    { title: "Locations", url: "/traceability-locations" },
    { title: "Purchases", url: "/traceability-purchases" },
    { title: "Section Deliveries", url: "/traceability-section-deliveries" },
  ],
  "Training": [
    { title: "All Training", url: "/trainings" },
    { title: "Trainer Groups", url: "/trainer-groups" },
    { title: "Trainers", url: "/trainers" },
    { title: "Training Events", url: "/training-events" },
    { title: "Training Topics", url: "/training-topics" },
  ],
  "Surveys": [
    { title: "All Surveys", url: "/surveys" },
    { title: "Compliance Categories", url: "/survey-compliance-categories" },
    { title: "Farmer Compliance", url: "/survey-farmer-compliance" },
    { title: "Proposed Actions", url: "/survey-proposed-actions" },
    { title: "Questions Ranking", url: "/survey-questions-ranking" },
    { title: "Responses by Staff", url: "/survey-responses-by-staff" },
    { title: "Surveys by Staff", url: "/survey-surveys-by-staff" },
  ],
  "Financial Services": [
    { title: "Accounts", url: "/accounts" },
    { title: "Locations", url: "/locations" },
    { title: "Loans", url: "/loans" },
    { title: "Savings", url: "/savings" },
    { title: "Company Sales", url: "/company-sales" },
  ],
  "Administration": [
    { title: "Users", url: "/users" },
    { title: "Devices", url: "/devices" },
    { title: "Partners", url: "/partners" },
  ],
  "Master Data": [
    { title: "Area Types", url: "/area-types" },
    { title: "Certifications", url: "/certifications" },
    { title: "Family Members", url: "/family-members" },
    { title: "Farms", url: "/farms" },
  ],
  "Cases": [
    { title: "All Cases", url: "/cases" },
  ],
  "Reports": [
    { title: "All Reports", url: "/reports" },
  ],
};

function getCurrentCategory(pathname: string): string {
  if (pathname === "/") return "Dashboard";
  
  // Check for exact matches first
  for (const category of Object.keys(categorySubmenus)) {
    const submenu = categorySubmenus[category];
    if (submenu.some(item => item.url === pathname)) {
      return category;
    }
  }
  
  // Fallback to path-based detection
  if (pathname.startsWith("/planting-campaign") || pathname.startsWith("/cropping-cycle") || pathname.startsWith("/field-productivity") || pathname.startsWith("/weekly-yield")) {
    return "Planting Campaigns";
  }
  if (pathname.startsWith("/input-") || pathname === "/farming-inputs") {
    return "Farming Inputs";
  }
  if (pathname.startsWith("/harvest")) {
    return "Harvests";
  }
  if (pathname.startsWith("/traceability")) {
    return "Traceability";
  }
  if (pathname.startsWith("/trainer") || pathname.startsWith("/training")) {
    return "Training";
  }
  if (pathname.startsWith("/survey")) {
    return "Surveys";
  }
  if (pathname.startsWith("/case")) {
    return "Cases";
  }
  if (pathname.startsWith("/report")) {
    return "Reports";
  }
  if (pathname.startsWith("/producer") || pathname === "/fields") {
    return "Farmers";
  }
  if (pathname.startsWith("/account") || pathname.startsWith("/location") || pathname.startsWith("/loan") || pathname.startsWith("/saving") || pathname.startsWith("/company-sales")) {
    return "Financial Services";
  }
  if (pathname.startsWith("/user") || pathname.startsWith("/device") || pathname.startsWith("/partner")) {
    return "Administration";
  }
  if (pathname.startsWith("/area-type") || pathname.startsWith("/certification") || pathname.startsWith("/family-member") || pathname.startsWith("/farm")) {
    return "Master Data";
  }
  
  return "Dashboard";
}

export function AppSidebar() {
  const [location] = useLocation();
  const currentCategory = getCurrentCategory(location);
  const submenuItems = categorySubmenus[currentCategory] || [];

  return (
    <Sidebar data-testid="sidebar-main" className="border-r">
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
            <Sprout className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-sm font-semibold">Farmforce</h2>
            <p className="text-xs text-muted-foreground">Agricultural Management</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <ScrollArea className="h-full">
          <div className="grid grid-cols-2 gap-px bg-border">
            {/* Left Column - Main Categories */}
            <div className="bg-background">
              <SidebarGroup className="p-0">
                <SidebarGroupLabel className="px-3 py-2 text-xs font-semibold text-muted-foreground">
                  Main Menu
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className="gap-px">
                    {mainCategories.map((item) => {
                      const isActive = currentCategory === item.title;
                      return (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            asChild
                            isActive={isActive}
                            className="rounded-none justify-start gap-2 h-9 px-3"
                            data-testid={`link-sidebar-${item.title.toLowerCase().replace(/\s/g, '-')}`}
                          >
                            <Link href={item.url}>
                              <item.icon className="h-4 w-4 flex-shrink-0" />
                              <span className="text-xs">{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </div>

            {/* Right Column - Submenu Items */}
            <div className="bg-background">
              <SidebarGroup className="p-0">
                <SidebarGroupLabel className="px-3 py-2 text-xs font-semibold text-muted-foreground">
                  {currentCategory === "Dashboard" ? "Quick Access" : currentCategory}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  {submenuItems.length > 0 ? (
                    <SidebarMenu className="gap-px">
                      {submenuItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            asChild
                            isActive={location === item.url}
                            className="rounded-none justify-start h-9 px-3"
                            data-testid={`link-submenu-${item.title.toLowerCase().replace(/\s/g, '-')}`}
                          >
                            <Link href={item.url}>
                              <span className="text-xs">{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  ) : (
                    <div className="px-3 py-6 text-center">
                      <p className="text-xs text-muted-foreground">No submenu items</p>
                    </div>
                  )}
                </SidebarGroupContent>
              </SidebarGroup>
            </div>
          </div>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
}
