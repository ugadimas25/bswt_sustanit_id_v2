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

const mockTrainers = [
  { id: "TRN-001", name: "John Smith", trainerId: "TR-001", specialization: "Coffee Production", group: "Coffee Specialists", groupId: "TG-001", sessionsCompleted: "45", farmersReached: "312", status: "Active" },
  { id: "TRN-002", name: "Sarah Johnson", trainerId: "TR-002", specialization: "Organic Farming", group: "Organic Farming Team", groupId: "TG-002", sessionsCompleted: "38", farmersReached: "268", status: "Active" },
  { id: "TRN-003", name: "Mike Davis", trainerId: "TR-003", specialization: "Cocoa Processing", group: "Cocoa Experts", groupId: "TG-003", sessionsCompleted: "52", farmersReached: "389", status: "Active" },
  { id: "TRN-004", name: "Lisa Brown", trainerId: "TR-004", specialization: "Sustainability", group: "Sustainability Trainers", groupId: "TG-004", sessionsCompleted: "41", farmersReached: "295", status: "Active" },
  { id: "TRN-005", name: "Tom Wilson", trainerId: "TR-005", specialization: "Pest Management", group: "Coffee Specialists", groupId: "TG-001", sessionsCompleted: "29", farmersReached: "187", status: "On Leave" },
];

export default function Trainers() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/training" data-testid="breadcrumb-training">Training</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Trainers</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-add-trainer">Add Trainer</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-assign-group">Assign to Group</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Record ID</TableHead>
              <TableHead>Trainer Name</TableHead>
              <TableHead>Trainer ID</TableHead>
              <TableHead>Specialization</TableHead>
              <TableHead>Group</TableHead>
              <TableHead className="text-right">Sessions</TableHead>
              <TableHead className="text-right">Farmers Reached</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTrainers.map((trainer, index) => (
              <TableRow key={trainer.id} className="hover:bg-muted/30" data-testid={`row-trainer-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/trainers/${trainer.id}`} data-testid={`link-trainer-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{trainer.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-trainer-name-${index}`}>{trainer.name}</TableCell>
                <TableCell className="font-mono text-sm" data-testid={`text-trainer-id-${index}`}>{trainer.trainerId}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-specialization-${index}`}>{trainer.specialization}</Badge>
                </TableCell>
                <TableCell>
                  <Link href={`/trainer-groups/${trainer.groupId}`} data-testid={`link-group-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{trainer.group}</span>
                  </Link>
                </TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-sessions-completed-${index}`}>{trainer.sessionsCompleted}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-farmers-reached-${index}`}>{trainer.farmersReached}</TableCell>
                <TableCell>
                  <Badge variant={trainer.status === "Active" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {trainer.status}
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
                      <DropdownMenuItem data-testid={`menu-view-sessions-${index}`}>View Sessions</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-change-group-${index}`}>Change Group</DropdownMenuItem>
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
