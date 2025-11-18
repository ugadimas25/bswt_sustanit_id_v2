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

const mockSchedules = [
  { id: "HS-001", farmer: "Carlos Mendez", field: "FLD-045", crop: "Coffee", scheduledDate: "2024-03-18", estimatedQuantity: "400 kg", crew: "Team A", status: "Scheduled" },
  { id: "HS-002", farmer: "Maria Santos", field: "FLD-078", crop: "Cocoa", scheduledDate: "2024-03-19", estimatedQuantity: "320 kg", crew: "Team B", status: "Scheduled" },
  { id: "HS-003", farmer: "Jose Garcia", field: "FLD-132", crop: "Coffee", scheduledDate: "2024-03-17", estimatedQuantity: "450 kg", crew: "Team A", status: "In Progress" },
  { id: "HS-004", farmer: "Ana Rodriguez", field: "FLD-201", crop: "Bananas", scheduledDate: "2024-03-20", estimatedQuantity: "220 kg", crew: "Team C", status: "Scheduled" },
  { id: "HS-005", farmer: "Pedro Silva", field: "FLD-267", crop: "Coffee", scheduledDate: "2024-03-16", estimatedQuantity: "380 kg", crew: "Team A", status: "Completed" },
];

export default function HarvestScheduling() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Scheduling</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-create-schedule">Create Schedule</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-view-calendar">View Calendar</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Schedule ID</TableHead>
              <TableHead>Farmer</TableHead>
              <TableHead>Field</TableHead>
              <TableHead>Crop</TableHead>
              <TableHead>Scheduled Date</TableHead>
              <TableHead className="text-right">Est. Quantity</TableHead>
              <TableHead>Crew</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockSchedules.map((schedule, index) => (
              <TableRow key={schedule.id} className="hover:bg-muted/30" data-testid={`row-schedule-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-scheduling/${schedule.id}`} data-testid={`link-schedule-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{schedule.id}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/producers/${schedule.farmer}`} data-testid={`link-farmer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{schedule.farmer}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/fields/${schedule.field}`} data-testid={`link-field-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{schedule.field}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-crop-${index}`}>{schedule.crop}</Badge>
                </TableCell>
                <TableCell data-testid={`text-scheduled-date-${index}`}>{schedule.scheduledDate}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-quantity-${index}`}>{schedule.estimatedQuantity}</TableCell>
                <TableCell>
                  <Link href={`/crews/${schedule.crew}`} data-testid={`link-crew-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{schedule.crew}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant={schedule.status === "Completed" ? "secondary" : schedule.status === "In Progress" ? "outline" : "secondary"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {schedule.status}
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
                      <DropdownMenuItem data-testid={`menu-reschedule-${index}`}>Reschedule</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-assign-crew-${index}`}>Assign Crew</DropdownMenuItem>
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
