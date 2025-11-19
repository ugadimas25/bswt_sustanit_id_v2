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
} from "@/components/ui/sidebar";
import { 
  Users, GraduationCap, FileText, 
  Settings, LayoutDashboard, Sprout, TrendingUp, DollarSign, 
  MapPinned, Leaf, 
  Activity, Boxes, BarChart3,
  ShieldCheck, ChevronDown, ChevronRight
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import farmforceLogo from "@assets/Farmforce_Logo_WHITE_1763527950704.png";

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
    title: "Dashboard", 
    url: "/", 
    icon: LayoutDashboard,
    submenu: []
  },
  { 
    title: "Farmer Management", 
    url: "/producers", 
    icon: Users,
    submenu: [
      { title: "All Farmers", url: "/producers" },
      { title: "Farmer Certifications", url: "/farmer-certifications" },
      { title: "Farmer Last Activity", url: "/farmer-last-activity" },
      { title: "Farmers Attributes", url: "/farmers-attributes" },
      { title: "Family Members", url: "/family-members" },
      { title: "Family Member Education", url: "/family-member-education" },
      { title: "Family Member Relationships", url: "/family-member-relationships" },
      { title: "GA Operator Costs", url: "/ga-operator-costs" },
      { title: "Partners", url: "/partners" },
    ]
  },
  { 
    title: "Land & Field Management", 
    url: "/fields", 
    icon: MapPinned,
    submenu: [
      { title: "GPS-Mapped Fields", url: "/fields" },
      { title: "Farms", url: "/farms" },
      { title: "Planted Area", url: "/planted-area" },
      { title: "Field Quotas", url: "/field-quotas" },
      { title: "Area Types", url: "/area-types" },
      { title: "Farm Objects", url: "/farm-objects" },
      { title: "Farm Object Images", url: "/farm-object-images" },
      { title: "Fields Deforestation", url: "/fields-deforestation" },
      { title: "Deforestation Summary", url: "/fields-deforestation-summary" },
    ]
  },
  { 
    title: "Crop Production", 
    url: "/planting-campaigns", 
    icon: Sprout,
    submenu: [
      { title: "Planting Campaigns", url: "/planting-campaigns" },
      { title: "Campaign Groups", url: "/planting-campaign-groups" },
      { title: "Campaign Templates", url: "/planting-campaign-templates" },
      { title: "Field Productivity", url: "/field-productivity" },
      { title: "Cropping Cycle Financials", url: "/cropping-cycle-financials" },
    ]
  },
  { 
    title: "Input Management", 
    url: "/farming-inputs", 
    icon: Leaf,
    submenu: [
      { title: "Farming Inputs Overview", url: "/farming-inputs" },
      { title: "Input Distribution", url: "/input-distribution" },
      { title: "Input Purchases", url: "/input-purchases" },
      { title: "Input Costs", url: "/input-costs" },
      { title: "Fertilizers", url: "/fertilizers" },
      { title: "Fertilizer Applications", url: "/fertilizer-applications" },
      { title: "Chemical Applications", url: "/chemical-applications" },
      { title: "Chemical Targets", url: "/chemical-application-targets" },
      { title: "Chemical Varieties", url: "/chemical-application-varieties" },
      { title: "Other Inputs", url: "/other-inputs" },
      { title: "Other Applications", url: "/other-applications" },
    ]
  },
  { 
    title: "Harvest Operations", 
    url: "/harvests", 
    icon: Boxes,
    submenu: [
      { title: "All Harvests", url: "/harvests" },
      { title: "Collections", url: "/harvest-collections" },
      { title: "Deliveries", url: "/harvest-deliveries" },
      { title: "Activities", url: "/harvest-activities" },
      { title: "Scheduling", url: "/harvest-scheduling" },
      { title: "Tracking", url: "/harvest-tracking" },
      { title: "Quality Control", url: "/harvest-quality" },
      { title: "Batches", url: "/harvest-batches" },
      { title: "Group Bags", url: "/harvest-group-bags" },
      { title: "Warehouse", url: "/harvest-warehouse" },
      { title: "Purchases", url: "/harvest-purchases" },
      { title: "Costs", url: "/harvest-costs" },
      { title: "Input Store", url: "/harvest-input-store" },
      { title: "Input Unit", url: "/harvest-input-unit" },
      { title: "Alerts", url: "/harvest-alerts" },
      { title: "Reports", url: "/harvest-reports" },
    ]
  },
  { 
    title: "Supply Chain & Traceability", 
    url: "/traceability", 
    icon: Activity,
    submenu: [
      { title: "Traceability Overview", url: "/traceability" },
      { title: "Farmer Harvest Traceability", url: "/traceability-farmer-harvest" },
      { title: "Custom Transaction Fields", url: "/traceability/custom-fields" },
      { title: "Purchases", url: "/traceability-purchases" },
      { title: "Processing", url: "/traceability-processing" },
      { title: "Shipment", url: "/traceability-shipment" },
      { title: "Containers", url: "/traceability-containers" },
      { title: "Locations", url: "/traceability-locations" },
      { title: "Input Usage", url: "/traceability-input-usage" },
      { title: "Section Deliveries", url: "/traceability-section-deliveries" },
      { title: "Quota Management", url: "/traceability-quotas" },
      { title: "Deductions", url: "/traceability-deductions" },
    ]
  },
  { 
    title: "Financial Management", 
    url: "/accounts", 
    icon: DollarSign,
    submenu: [
      { title: "Accounts", url: "/accounts" },
      { title: "Loans", url: "/loans" },
      { title: "Loan Deductions", url: "/loan-deductions" },
      { title: "Savings", url: "/savings" },
      { title: "Company Sales", url: "/company-sales" },
      { title: "Farmer Premiums", url: "/farmer-premiums" },
      { title: "Premium Rules", url: "/premium-rules" },
      { title: "Volume Tracking", url: "/premium-volume-tracking" },
      { title: "Payment Locations", url: "/locations" },
    ]
  },
  { 
    title: "Compliance & Certification", 
    url: "/certifications", 
    icon: ShieldCheck,
    submenu: [
      { title: "Certifications", url: "/certifications" },
      { title: "Certificate States", url: "/certificate-states" },
      { title: "Farmer Compliance", url: "/survey-farmer-compliance" },
      { title: "Compliance Categories", url: "/survey-compliance-categories" },
      { title: "Questions Ranking", url: "/survey-questions-ranking" },
      { title: "Proposed Actions", url: "/survey-proposed-actions" },
      { title: "Cases & Incidents", url: "/cases" },
    ]
  },
  { 
    title: "Surveys & Assessments", 
    url: "/surveys", 
    icon: FileText,
    submenu: [
      { title: "All Surveys", url: "/surveys" },
      { title: "Custom Surveys", url: "/surveys/custom" },
      { title: "Responses by Staff", url: "/survey-responses-by-staff" },
      { title: "Surveys by Staff", url: "/survey-surveys-by-staff" },
    ]
  },
  { 
    title: "Training & Development", 
    url: "/trainings", 
    icon: GraduationCap,
    submenu: [
      { title: "Training Programs", url: "/trainings" },
      { title: "Training Events", url: "/training-events" },
      { title: "Trainers", url: "/trainers" },
      { title: "Trainer Groups", url: "/trainer-groups" },
      { title: "Training Topics", url: "/training-topics" },
    ]
  },
  { 
    title: "Forecasting & Analytics", 
    url: "/weekly-yield-forecasts", 
    icon: TrendingUp,
    submenu: [
      { title: "Weekly Yield Forecasts", url: "/weekly-yield-forecasts" },
      { title: "Harvest Forecasts", url: "/harvest-forecasts" },
    ]
  },
  { 
    title: "Sustainability & Reports", 
    url: "/reports", 
    icon: BarChart3,
    submenu: [
      { title: "Sustainability Reports", url: "/reports" },
      { title: "Custom Dashboards", url: "/reports/dashboards" },
      { title: "Report Builder", url: "/reports/builder" },
    ]
  },
  { 
    title: "Administration", 
    url: "/users", 
    icon: Settings,
    submenu: [
      { title: "Users", url: "/users" },
      { title: "Staff Management", url: "/admin/staff" },
      { title: "Buyers", url: "/admin/buyers" },
      { title: "Country Settings", url: "/admin/country" },
      { title: "Region Settings", url: "/admin/regions" },
      { title: "Data Import (AI)", url: "/admin/import" },
      { title: "User Login Logs", url: "/admin/login-logs" },
      { title: "Devices", url: "/devices" },
      { title: "Office Matters", url: "/admin/office" },
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
  const [location] = useLocation();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (title: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <Sidebar data-testid="sidebar-main" className="border-r">
      <SidebarHeader className="p-6 border-b border-sidebar-border bg-sidebar">
        <div className="flex items-center justify-center">
          <img 
            src={farmforceLogo} 
            alt="Farmforce" 
            className="h-10 w-auto"
            data-testid="img-farmforce-logo"
          />
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
                          className="h-12 px-4 text-base font-medium"
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
    </Sidebar>
  );
}
