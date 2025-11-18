import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter, MapPin, AlertTriangle, CheckCircle } from "lucide-react";
import fieldImage from "@assets/generated_images/Aerial_farm_field_view_84f23bc5.png";

//todo: remove mock functionality
const mockFields = [
  { id: "F001", name: "North Field", producer: "John Omondi", size: "2.5 ha", crop: "Coffee", status: "compliant", location: "Kisumu, Kenya" },
  { id: "F002", name: "South Field", producer: "John Omondi", size: "3.2 ha", crop: "Tea", status: "compliant", location: "Kisumu, Kenya" },
  { id: "F003", name: "East Field", producer: "John Omondi", size: "1.8 ha", crop: "Coffee", status: "pending", location: "Kisumu, Kenya" },
  { id: "F004", name: "Highland Plot", producer: "Maria Santos", size: "4.1 ha", crop: "Rice", status: "compliant", location: "Benguet, Philippines" },
  { id: "F005", name: "Valley Field", producer: "Maria Santos", size: "2.9 ha", crop: "Vegetables", status: "warning", location: "Benguet, Philippines" },
  { id: "F006", name: "Coffee Estate", producer: "Carlos Rodriguez", size: "5.3 ha", crop: "Coffee", status: "compliant", location: "Antioquia, Colombia" },
];

export default function Fields() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFields = mockFields.filter((field) =>
    field.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    field.producer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    field.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    field.crop.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "compliant": return "secondary";
      case "warning": return "outline";
      case "pending": return "outline";
      default: return "outline";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "compliant": return <CheckCircle className="h-4 w-4 text-primary" />;
      case "warning": return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-semibold" data-testid="text-page-title">Fields</h1>
          <p className="text-muted-foreground mt-1">Manage field boundaries and compliance</p>
        </div>
        <Button data-testid="button-add-field">
          <Plus className="h-4 w-4 mr-2" />
          Map New Field
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Field Map Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative rounded-md overflow-hidden border">
              <img 
                src={fieldImage} 
                alt="Field map overview" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="secondary" size="sm" data-testid="button-map-fullscreen">
                  View Full Map
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="text-center p-3 rounded-md bg-muted/50">
                <p className="text-2xl font-semibold text-primary">{mockFields.filter(f => f.status === "compliant").length}</p>
                <p className="text-xs text-muted-foreground mt-1">Compliant</p>
              </div>
              <div className="text-center p-3 rounded-md bg-muted/50">
                <p className="text-2xl font-semibold text-yellow-600">{mockFields.filter(f => f.status === "warning").length}</p>
                <p className="text-xs text-muted-foreground mt-1">Warnings</p>
              </div>
              <div className="text-center p-3 rounded-md bg-muted/50">
                <p className="text-2xl font-semibold text-muted-foreground">{mockFields.filter(f => f.status === "pending").length}</p>
                <p className="text-xs text-muted-foreground mt-1">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search fields..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                  data-testid="input-search-fields"
                />
              </div>
              <Button variant="outline" size="sm" data-testid="button-filter">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {filteredFields.map((field) => (
                <div 
                  key={field.id}
                  className="flex items-center gap-3 p-3 rounded-md border hover-elevate cursor-pointer"
                  data-testid={`card-field-${field.id}`}
                >
                  <div className="flex-shrink-0">
                    {getStatusIcon(field.status)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-medium text-sm">{field.name}</h4>
                      <Badge variant={getStatusColor(field.status)} className="text-xs">
                        {field.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {field.producer} • {field.size} • {field.crop}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span className="truncate max-w-[150px]">{field.location}</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredFields.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground text-sm">No fields found matching your search.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Compliance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-md bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">All fields within allowed zones</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">No deforestation alerts detected</p>
                </div>
              </div>
              <Badge variant="secondary">All Clear</Badge>
            </div>
            <div className="flex items-center justify-between p-4 rounded-md border">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <div>
                  <h4 className="font-medium">1 field requires verification</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">Valley Field (F005) - Boundary review needed</p>
                </div>
              </div>
              <Button variant="outline" size="sm" data-testid="button-review-field">Review</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
