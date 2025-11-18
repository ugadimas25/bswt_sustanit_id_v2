import { Link } from "wouter";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockAlerts = [
  { id: "ALT-001", type: "Quality Issue", farmer: "Carlos Mendez", field: "FLD-045", severity: "High", message: "Moisture content exceeds threshold", date: "2024-03-15", status: "Active" },
  { id: "ALT-002", type: "Delayed Harvest", farmer: "Maria Santos", field: "FLD-078", severity: "Medium", message: "Harvest overdue by 3 days", date: "2024-03-14", status: "Active" },
  { id: "ALT-003", type: "Storage Capacity", farmer: "Jose Garcia", field: "FLD-132", severity: "High", message: "Warehouse at 95% capacity", date: "2024-03-13", status: "Resolved" },
  { id: "ALT-004", type: "Weather Warning", farmer: "Ana Rodriguez", field: "FLD-201", severity: "Low", message: "Heavy rain forecast next 48 hours", date: "2024-03-12", status: "Active" },
  { id: "ALT-005", type: "Equipment Failure", farmer: "Pedro Silva", field: "FLD-267", severity: "Medium", message: "Drying machine malfunction", date: "2024-03-11", status: "In Progress" },
];

export default function HarvestAlerts() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/harvests" data-testid="breadcrumb-harvests">Harvests</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Alerts</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" data-testid="button-actions">
              Actions
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem data-testid="menu-create-alert">Create Alert</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-resolve-all">Resolve All Active</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-active-alerts">3</div>
              <p className="text-xs text-muted-foreground mt-1" data-testid="text-active-desc">Requires attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">High Severity</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-high-severity">2</div>
              <p className="text-xs text-muted-foreground mt-1" data-testid="text-high-desc">Critical issues</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Resolved Today</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-resolved-today">1</div>
              <p className="text-xs text-muted-foreground mt-1" data-testid="text-resolved-desc">This period</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Alert ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Farmer</TableHead>
              <TableHead>Field</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockAlerts.map((alert, index) => (
              <TableRow key={alert.id} className="hover:bg-muted/30" data-testid={`row-alert-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-alerts/${alert.id}`} data-testid={`link-alert-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{alert.id}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-type-${index}`}>{alert.type}</Badge>
                </TableCell>
                <TableCell>
                  <Link href={`/producers/${alert.farmer}`} data-testid={`link-farmer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{alert.farmer}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/fields/${alert.field}`} data-testid={`link-field-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{alert.field}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={alert.severity === "High" ? "destructive" : alert.severity === "Medium" ? "outline" : "secondary"} 
                    className="text-xs" 
                    data-testid={`badge-severity-${index}`}
                  >
                    {alert.severity}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm" data-testid={`text-message-${index}`}>{alert.message}</TableCell>
                <TableCell data-testid={`text-date-${index}`}>{alert.date}</TableCell>
                <TableCell>
                  <Badge variant={alert.status === "Active" ? "outline" : "secondary"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {alert.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" data-testid={`button-actions-${index}`}>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem data-testid={`menu-view-details-${index}`}>View Details</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-resolve-${index}`}>Resolve Alert</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-assign-${index}`}>Assign to Staff</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
