import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Users, MapPin, Smartphone, Monitor, Maximize2, Layers, MapPinOff, AlertTriangle, FileText, BarChart3, Sprout, TrendingUp, Package, GraduationCap, FileCheck, Boxes, ClipboardList } from "lucide-react";
import { Link } from "wouter";
import fieldImage from "@assets/generated_images/Aerial_farm_field_view_84f23bc5.png";

//todo: remove mock functionality
const reportLinks = [
  { id: 1, name: "Completed Surveys", icon: FileCheck, href: "/surveys" },
  { id: 2, name: "Crop Yield Forecast", icon: BarChart3, href: "/reports/yield" },
  { id: 3, name: "Inputs Used For Growing Activities", icon: Sprout, href: "/reports/inputs" },
  { id: 4, name: "Loans Issued", icon: TrendingUp, href: "/reports/loans" },
  { id: 5, name: "Training by Staff", icon: GraduationCap, href: "/trainings" },
  { id: 6, name: "Trainings", icon: GraduationCap, href: "/trainings" },
  { id: 7, name: "Warehouse Inventory", icon: Package, href: "/reports/inventory" },
  { id: 8, name: "Container ID Certification Data", icon: Boxes, href: "/reports/certification" },
  { id: 9, name: "Crop Yield Forecast Per Month", icon: BarChart3, href: "/reports/monthly-yield" },
  { id: 10, name: "Delivery Traceability and Diligence Report", icon: ClipboardList, href: "/reports/delivery" },
  { id: 11, name: "Farmer Group Quotas", icon: Users, href: "/reports/quotas" },
];

export default function Dashboard() {
  const [showDeforestation, setShowDeforestation] = useState(false);
  const [markerClusters, setMarkerClusters] = useState(true);

  return (
    <div className="space-y-6 -m-6">
      {/* Stats Cards */}
      <div className="px-6 pt-6 grid gap-6 md:grid-cols-3">
        {/* Farms Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium text-muted-foreground">Farms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-semibold text-primary" data-testid="text-stat-farmers">1,012</div>
                <p className="text-xs text-muted-foreground mt-1">Farmers</p>
              </div>
              <div>
                <div className="text-2xl font-semibold text-primary" data-testid="text-stat-fields">1,024</div>
                <p className="text-xs text-muted-foreground mt-1">Fields</p>
              </div>
              <div>
                <div className="text-2xl font-semibold text-primary" data-testid="text-stat-fields-mapped">39</div>
                <p className="text-xs text-muted-foreground mt-1">Fields Mapped</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Volume Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium text-muted-foreground">Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-semibold text-primary" data-testid="text-stat-campaigns">1</div>
                <p className="text-xs text-muted-foreground mt-1">Open Production Campaigns</p>
              </div>
              <div>
                <div className="text-2xl font-semibold text-primary" data-testid="text-stat-volume">230,662</div>
                <p className="text-xs text-muted-foreground mt-1">Volume Kg</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium text-muted-foreground">Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-semibold text-primary" data-testid="text-stat-mobile-users">8</div>
                <p className="text-xs text-muted-foreground mt-1">Mobile Users</p>
              </div>
              <div>
                <div className="text-2xl font-semibold text-primary" data-testid="text-stat-devices">17</div>
                <p className="text-xs text-muted-foreground mt-1">Devices Syncing</p>
              </div>
              <div>
                <div className="text-2xl font-semibold text-primary" data-testid="text-stat-web-users">16</div>
                <p className="text-xs text-muted-foreground mt-1">Web Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content: Reports Sidebar + Map */}
      <div className="px-6 pb-6 grid gap-6 lg:grid-cols-[300px_1fr]">
        {/* Reports Sidebar */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {reportLinks.map((report) => (
                <Link key={report.id} href={report.href}>
                  <button
                    className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md hover-elevate text-left"
                    data-testid={`link-report-${report.id}`}
                  >
                    <report.icon className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground hover:text-foreground transition-colors">
                      {report.name}
                    </span>
                  </button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Map View */}
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-3">
            <CardTitle className="text-lg">Geographic Overview</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" data-testid="button-map-fullscreen">
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Map Controls Overlay */}
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 space-y-2">
                <div className="bg-background/95 backdrop-blur-sm rounded-md border p-3 space-y-3">
                  <div className="space-y-2">
                    <Label className="text-xs font-medium">Map View</Label>
                    <div className="flex gap-2">
                      <Button variant="secondary" size="sm" className="text-xs">
                        Satellite
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        Map
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border-t pt-3 space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <Label htmlFor="marker-clusters" className="text-xs font-normal">
                        Marker Clusters
                      </Label>
                      <Switch
                        id="marker-clusters"
                        checked={markerClusters}
                        onCheckedChange={setMarkerClusters}
                        data-testid="switch-marker-clusters"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <Label htmlFor="deforestation" className="text-xs font-normal">
                        Show Deforestation
                      </Label>
                      <Switch
                        id="deforestation"
                        checked={showDeforestation}
                        onCheckedChange={setShowDeforestation}
                        data-testid="switch-deforestation"
                      />
                    </div>
                  </div>

                  <div className="border-t pt-3">
                    <Button variant="outline" size="sm" className="w-full text-xs" data-testid="button-map-layers">
                      <Layers className="h-3 w-3 mr-2" />
                      Map Layers
                    </Button>
                  </div>
                </div>
              </div>

              {/* Map Image */}
              <div className="relative h-[500px] bg-muted">
                <img 
                  src={fieldImage} 
                  alt="Geographic map showing farm locations" 
                  className="w-full h-full object-cover"
                />
                
                {/* Map Markers - Simulated */}
                <div className="absolute inset-0">
                  {/* West Africa */}
                  <div className="absolute top-[45%] left-[35%]">
                    <div className="relative group cursor-pointer">
                      <div className="h-8 w-8 rounded-full bg-destructive/90 flex items-center justify-center border-2 border-white shadow-lg">
                        <span className="text-xs font-bold text-white">12</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* East Africa */}
                  <div className="absolute top-[52%] left-[48%]">
                    <div className="relative group cursor-pointer">
                      <div className="h-8 w-8 rounded-full bg-yellow-500/90 flex items-center justify-center border-2 border-white shadow-lg">
                        <span className="text-xs font-bold text-white">8</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Southeast Asia */}
                  <div className="absolute top-[55%] left-[78%]">
                    <div className="relative group cursor-pointer">
                      <div className="h-8 w-8 rounded-full bg-yellow-500/90 flex items-center justify-center border-2 border-white shadow-lg">
                        <span className="text-xs font-bold text-white">5</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Attribution */}
                <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded">
                  Map data ©2024 Google, Imagery ©2023 NASA
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
