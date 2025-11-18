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

const mockTrainerGroups = [
  { id: "TG-001", groupName: "Coffee Specialists", region: "North Region", trainerCount: "12", activeSessions: "8", totalFarmers: "245", status: "Active" },
  { id: "TG-002", groupName: "Organic Farming Team", region: "South Valley", trainerCount: "8", activeSessions: "5", totalFarmers: "178", status: "Active" },
  { id: "TG-003", groupName: "Cocoa Experts", region: "East Plains", trainerCount: "10", activeSessions: "6", totalFarmers: "198", status: "Active" },
  { id: "TG-004", groupName: "Sustainability Trainers", region: "Central Region", trainerCount: "15", activeSessions: "12", totalFarmers: "312", status: "Active" },
  { id: "TG-005", groupName: "Banana Cultivation", region: "West Hills", trainerCount: "6", activeSessions: "3", totalFarmers: "89", status: "Inactive" },
];

export default function TrainerGroups() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Trainer Groups</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-create-group">Create Group</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-assign-trainers">Assign Trainers</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Group ID</TableHead>
              <TableHead>Group Name</TableHead>
              <TableHead>Region</TableHead>
              <TableHead className="text-right">Trainers</TableHead>
              <TableHead className="text-right">Active Sessions</TableHead>
              <TableHead className="text-right">Total Farmers</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTrainerGroups.map((group, index) => (
              <TableRow key={group.id} className="hover:bg-muted/30" data-testid={`row-trainer-group-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/trainer-groups/${group.id}`} data-testid={`link-group-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{group.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-group-name-${index}`}>{group.groupName}</TableCell>
                <TableCell data-testid={`text-region-${index}`}>{group.region}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-trainer-count-${index}`}>{group.trainerCount}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-active-sessions-${index}`}>{group.activeSessions}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-total-farmers-${index}`}>{group.totalFarmers}</TableCell>
                <TableCell>
                  <Badge variant={group.status === "Active" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {group.status}
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
                      <DropdownMenuItem data-testid={`menu-manage-trainers-${index}`}>Manage Trainers</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-sessions-${index}`}>View Sessions</DropdownMenuItem>
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
