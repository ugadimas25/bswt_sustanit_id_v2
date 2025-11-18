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
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const mockActivities = [
  { id: "HA-001", farmer: "Carlos Mendez", field: "FLD-045", activity: "Harvesting", crop: "Coffee", quantity: "350 kg", date: "2024-03-15", status: "Completed" },
  { id: "HA-002", farmer: "Maria Santos", field: "FLD-078", activity: "Sorting", crop: "Cocoa", quantity: "280 kg", date: "2024-03-15", status: "In Progress" },
  { id: "HA-003", farmer: "Jose Garcia", field: "FLD-132", activity: "Harvesting", crop: "Coffee", quantity: "420 kg", date: "2024-03-14", status: "Completed" },
  { id: "HA-004", farmer: "Ana Rodriguez", field: "FLD-201", activity: "Drying", crop: "Coffee", quantity: "190 kg", date: "2024-03-14", status: "In Progress" },
  { id: "HA-005", farmer: "Pedro Silva", field: "FLD-267", activity: "Bagging", crop: "Coffee", quantity: "310 kg", date: "2024-03-13", status: "Completed" },
];

export default function HarvestActivities() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Activities</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-record-activity">Record Activity</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-view-schedule">View Schedule</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Activity ID</TableHead>
              <TableHead>Farmer</TableHead>
              <TableHead>Field</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead>Crop</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockActivities.map((activity, index) => (
              <TableRow key={activity.id} className="hover:bg-muted/30" data-testid={`row-activity-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-activities/${activity.id}`} data-testid={`link-activity-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{activity.id}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/producers/${activity.farmer}`} data-testid={`link-farmer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{activity.farmer}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/fields/${activity.field}`} data-testid={`link-field-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{activity.field}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-activity-${index}`}>{activity.activity}</Badge>
                </TableCell>
                <TableCell data-testid={`text-crop-${index}`}>{activity.crop}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-quantity-${index}`}>{activity.quantity}</TableCell>
                <TableCell data-testid={`text-date-${index}`}>{activity.date}</TableCell>
                <TableCell>
                  <Badge variant={activity.status === "Completed" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {activity.status}
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
                      <DropdownMenuItem data-testid={`menu-edit-${index}`}>Edit Activity</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-history-${index}`}>View History</DropdownMenuItem>
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
