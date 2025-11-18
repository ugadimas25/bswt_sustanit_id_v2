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

const mockGroupBags = [
  { id: "GB-001", groupName: "North Region Coffee", bagCount: "45", totalWeight: "2,250 kg", date: "2024-03-15", status: "Ready for Processing" },
  { id: "GB-002", groupName: "South Valley Cocoa", bagCount: "38", totalWeight: "1,900 kg", date: "2024-03-14", status: "In Transit" },
  { id: "GB-003", groupName: "East Plains Coffee", bagCount: "52", totalWeight: "2,600 kg", date: "2024-03-13", status: "Ready for Processing" },
  { id: "GB-004", groupName: "West Hills Organic", bagCount: "31", totalWeight: "1,550 kg", date: "2024-03-12", status: "Processing" },
  { id: "GB-005", groupName: "Central Region Premium", bagCount: "47", totalWeight: "2,350 kg", date: "2024-03-11", status: "Ready for Processing" },
];

export default function HarvestGroupBags() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Group Bags</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-create-group">Create Group Bag</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-merge-bags">Merge Bags</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Group Bag ID</TableHead>
              <TableHead>Group Name</TableHead>
              <TableHead className="text-right">Bag Count</TableHead>
              <TableHead className="text-right">Total Weight</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockGroupBags.map((gb, index) => (
              <TableRow key={gb.id} className="hover:bg-muted/30" data-testid={`row-group-bag-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-group-bags/${gb.id}`} data-testid={`link-group-bag-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{gb.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-group-name-${index}`}>{gb.groupName}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-bag-count-${index}`}>{gb.bagCount}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-total-weight-${index}`}>{gb.totalWeight}</TableCell>
                <TableCell data-testid={`text-date-${index}`}>{gb.date}</TableCell>
                <TableCell>
                  <Badge variant={gb.status === "Ready for Processing" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {gb.status}
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
                      <DropdownMenuItem data-testid={`menu-split-group-${index}`}>Split Group</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-track-shipment-${index}`}>Track Shipment</DropdownMenuItem>
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
