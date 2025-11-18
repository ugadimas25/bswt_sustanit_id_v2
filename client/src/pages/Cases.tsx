import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, AlertCircle, CheckCircle, Clock, User, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

//todo: remove mock functionality
const mockCases = [
  {
    id: "C001",
    title: "Field Boundary Verification Required",
    producer: "Maria Santos",
    fieldId: "F005",
    category: "Compliance",
    priority: "high",
    status: "open",
    createdDate: "May 10, 2024",
    assignedTo: "Admin User",
    description: "Field boundary crosses into protected zone",
  },
  {
    id: "C002",
    title: "Training Attendance Discrepancy",
    producer: "John Omondi",
    category: "Administrative",
    priority: "medium",
    status: "in-progress",
    createdDate: "May 8, 2024",
    assignedTo: "James Kipchoge",
    description: "Attendance records need reconciliation",
  },
  {
    id: "C003",
    title: "Survey Response Follow-up",
    producer: "Carlos Rodriguez",
    category: "Compliance",
    priority: "low",
    status: "resolved",
    createdDate: "Apr 28, 2024",
    assignedTo: "Sarah Johnson",
    description: "Additional information collected and verified",
    resolvedDate: "May 5, 2024",
  },
  {
    id: "C004",
    title: "Organic Certification Documentation",
    producer: "Grace Mutua",
    category: "Certification",
    priority: "high",
    status: "open",
    createdDate: "May 12, 2024",
    assignedTo: "Admin User",
    description: "Missing required documentation for certification renewal",
  },
];

export default function Cases() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredCases = mockCases.filter((caseItem) => {
    const matchesSearch = 
      caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.producer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || caseItem.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const openCases = mockCases.filter(c => c.status === "open").length;
  const inProgressCases = mockCases.filter(c => c.status === "in-progress").length;
  const resolvedCases = mockCases.filter(c => c.status === "resolved").length;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "outline";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "resolved": return <CheckCircle className="h-4 w-4 text-primary" />;
      case "in-progress": return <Clock className="h-4 w-4 text-yellow-600" />;
      case "open": return <AlertCircle className="h-4 w-4 text-destructive" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-semibold" data-testid="text-page-title">Case Management</h1>
          <p className="text-muted-foreground mt-1">Track and resolve compliance issues</p>
        </div>
        <Button data-testid="button-create-case">
          <Plus className="h-4 w-4 mr-2" />
          Create Case
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Open Cases</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-destructive">{openCases}</div>
            <p className="text-xs text-muted-foreground mt-1">Require attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-yellow-600">{inProgressCases}</div>
            <p className="text-xs text-muted-foreground mt-1">Being addressed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Resolved</CardTitle>
            <CheckCircle className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-primary">{resolvedCases}</div>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search cases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
                data-testid="input-search-cases"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]" data-testid="select-status-filter">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredCases.map((caseItem) => (
              <div 
                key={caseItem.id}
                className="p-4 rounded-md border hover-elevate cursor-pointer"
                data-testid={`card-case-${caseItem.id}`}
              >
                <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {getStatusIcon(caseItem.status)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h4 className="font-medium">{caseItem.title}</h4>
                        <Badge variant={getPriorityColor(caseItem.priority)}>
                          {caseItem.priority}
                        </Badge>
                        <Badge variant="outline" className="capitalize">
                          {caseItem.status.replace("-", " ")}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {caseItem.description}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{caseItem.producer}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Created: {caseItem.createdDate}</span>
                        </div>
                        {caseItem.fieldId && (
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>Field: {caseItem.fieldId}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Assigned to: {caseItem.assignedTo}
                        {caseItem.resolvedDate && ` • Resolved: ${caseItem.resolvedDate}`}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" data-testid={`button-view-case-${caseItem.id}`}>
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No cases found matching your filters.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
