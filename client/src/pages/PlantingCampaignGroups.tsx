import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const mockGroups = [
  { groupId: "PCG-001", name: "Palm Oil Smallholders Group A", region: "Oyo State", farmers: 45, campaigns: 2, status: "Active" },
  { groupId: "PCG-002", name: "Coffee Producers Cooperative", region: "West Java", farmers: 32, campaigns: 1, status: "Active" },
  { groupId: "PCG-003", name: "Palm Oil Smallholders Group B", region: "Oyo State", farmers: 38, campaigns: 2, status: "Active" },
];

export default function PlantingCampaignGroups() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/planting-campaigns" data-testid="breadcrumb-planting-campaigns">Planting Campaigns</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Planting Campaign Groups</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-import-groups">Import Groups</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-csv">Export to CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Group ID</TableHead>
                <TableHead className="font-medium">Name</TableHead>
                <TableHead className="font-medium">Region</TableHead>
                <TableHead className="font-medium">Farmers</TableHead>
                <TableHead className="font-medium">Campaigns</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockGroups.map((group, index) => (
                <TableRow key={group.groupId} className="hover:bg-muted/30" data-testid={`row-group-${index}`}>
                  <TableCell className="font-medium">
                    <Link href={`/planting-campaign-groups/${group.groupId}`} data-testid={`link-group-${index}`}>
                      <span className="text-primary hover:underline cursor-pointer">{group.groupId}</span>
                    </Link>
                  </TableCell>
                  <TableCell>{group.name}</TableCell>
                  <TableCell className="text-sm">{group.region}</TableCell>
                  <TableCell className="text-right">{group.farmers}</TableCell>
                  <TableCell className="text-right">{group.campaigns}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">{group.status}</Badge>
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
                        <DropdownMenuItem data-testid={`menu-view-farmers-${index}`}>View Farmers</DropdownMenuItem>
                        <DropdownMenuItem data-testid={`menu-view-campaigns-${index}`}>View Campaigns</DropdownMenuItem>
                        <DropdownMenuItem data-testid={`menu-edit-${index}`}>Edit Group</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
