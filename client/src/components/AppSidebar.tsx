import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { 
  Users, MapPin, GraduationCap, FileText, AlertCircle, Smartphone, 
  Settings, LayoutDashboard, Sprout, TrendingUp, DollarSign, 
  Building2, MapPinned, CreditCard, Leaf, Award, UserCheck, 
  Activity, Boxes, ChartBar, Layers, TreeDeciduous, Calculator
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";

const leftColumnItems = [
  { title: "Farmers", url: "/producers", icon: Users },
  { title: "Planting Campaigns", url: "/campaigns", icon: Sprout },
  { title: "Farming Inputs", url: "/inputs", icon: Leaf },
  { title: "Harvests", url: "/harvests", icon: Boxes },
  { title: "Traceability", url: "/traceability", icon: Activity },
  { title: "Training", url: "/trainings", icon: GraduationCap },
  { title: "Surveys", url: "/surveys", icon: FileText },
  { title: "Accounts", url: "/accounts", icon: CreditCard },
  { title: "Locations", url: "/locations", icon: MapPinned },
  { title: "Loans", url: "/loans", icon: DollarSign },
  { title: "Savings", url: "/savings", icon: TrendingUp },
  { title: "Company Sales", url: "/sales", icon: ChartBar },
  { title: "Partners", url: "/partners", icon: Building2 },
  { title: "Devices", url: "/devices", icon: Smartphone },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "System", url: "/system", icon: Settings },
];

const rightColumnItems = [
  { title: "Area Types", url: "/area-types" },
  { title: "Certificate States", url: "/certificate-states" },
  { title: "Certifications", url: "/certifications" },
  { title: "Family Member Education", url: "/family-education" },
  { title: "Family Member Relationships", url: "/family-relationships" },
  { title: "Family Members", url: "/family-members" },
  { title: "Farm Object Images", url: "/farm-images" },
  { title: "Farm Objects", url: "/farm-objects" },
  { title: "Farmer Certifications", url: "/farmer-certifications" },
  { title: "Farmer Last Activity", url: "/farmer-activity" },
  { title: "Farmer Premiums", url: "/farmer-premiums" },
  { title: "Farmers", url: "/producers" },
  { title: "Farmers Attributes", url: "/farmer-attributes" },
  { title: "Farms", url: "/farms" },
  { title: "Field Quotas", url: "/field-quotas" },
  { title: "Fields", url: "/fields" },
  { title: "Fields Deforestation", url: "/fields-deforestation" },
  { title: "Fields Deforestation Summary", url: "/deforestation-summary" },
  { title: "GA Operator Costs", url: "/operator-costs" },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar data-testid="sidebar-main" className="border-r">
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
            <Sprout className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-sm font-semibold">Farmforce</h2>
            <p className="text-xs text-muted-foreground">Traceable Palm Oil</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <ScrollArea className="h-full">
          <div className="grid grid-cols-2 gap-px bg-border">
            {/* Left Column */}
            <div className="bg-background">
              <SidebarGroup className="p-0">
                <SidebarGroupContent>
                  <SidebarMenu className="gap-px">
                    {leftColumnItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={location === item.url}
                          className="rounded-none justify-start gap-2 h-9 px-3"
                          data-testid={`link-sidebar-${item.title.toLowerCase().replace(/\s/g, '-')}`}
                        >
                          <Link href={item.url}>
                            <item.icon className="h-4 w-4 flex-shrink-0" />
                            <span className="text-xs">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </div>

            {/* Right Column */}
            <div className="bg-background">
              <SidebarGroup className="p-0">
                <SidebarGroupContent>
                  <SidebarMenu className="gap-px">
                    {rightColumnItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={location === item.url}
                          className="rounded-none justify-start h-9 px-3"
                          data-testid={`link-sidebar-${item.title.toLowerCase().replace(/\s/g, '-')}`}
                        >
                          <Link href={item.url}>
                            <span className="text-xs">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </div>
          </div>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
}
