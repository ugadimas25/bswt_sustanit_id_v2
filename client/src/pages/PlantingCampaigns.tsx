import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Calendar } from "lucide-react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockCampaigns = [
  {
    id: "PC-2024-001",
    name: "Palm Oil Production Campaign 2024-25",
    cropType: "Palm Oil",
    startDate: "01/09/2024",
    endDate: "31/08/2025",
    targetAcreage: "2,500 ha",
    registeredFields: 156,
    status: "Active",
  },
  {
    id: "PC-2024-002",
    name: "Coffee Harvest Season 2024",
    cropType: "Coffee",
    startDate: "15/10/2024",
    endDate: "30/04/2025",
    targetAcreage: "850 ha",
    registeredFields: 89,
    status: "Active",
  },
  {
    id: "PC-2023-005",
    name: "Palm Oil Production Campaign 2023-24",
    cropType: "Palm Oil",
    startDate: "01/09/2023",
    endDate: "31/08/2024",
    targetAcreage: "2,200 ha",
    registeredFields: 203,
    status: "Completed",
  },
];

export default function PlantingCampaigns() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/planting-campaigns">Planting Campaigns</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">All Campaigns</BreadcrumbPage>
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
            <DropdownMenuItem>Create Campaign</DropdownMenuItem>
            <DropdownMenuItem>Import Data</DropdownMenuItem>
            <DropdownMenuItem>Export to CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Campaigns</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">2</div>
              <p className="text-xs text-muted-foreground mt-1">Currently running</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Fields</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">245</div>
              <p className="text-xs text-muted-foreground mt-1">Registered fields</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Target Acreage</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">3,350</div>
              <p className="text-xs text-muted-foreground mt-1">Hectares</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Campaign ID</TableHead>
                <TableHead className="font-medium">Campaign Name</TableHead>
                <TableHead className="font-medium">Crop Type</TableHead>
                <TableHead className="font-medium">Start Date</TableHead>
                <TableHead className="font-medium">End Date</TableHead>
                <TableHead className="font-medium">Target Acreage</TableHead>
                <TableHead className="font-medium">Registered Fields</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCampaigns.map((campaign, index) => (
                <TableRow key={campaign.id} className="hover:bg-muted/30" data-testid={`row-campaign-${index}`}>
                  <TableCell className="font-medium">
                    <Link href={`/planting-campaigns/${campaign.id}`}>
                      <span className="text-primary hover:underline cursor-pointer">{campaign.id}</span>
                    </Link>
                  </TableCell>
                  <TableCell>{campaign.name}</TableCell>
                  <TableCell>{campaign.cropType}</TableCell>
                  <TableCell className="text-sm">{campaign.startDate}</TableCell>
                  <TableCell className="text-sm">{campaign.endDate}</TableCell>
                  <TableCell>{campaign.targetAcreage}</TableCell>
                  <TableCell className="text-right">{campaign.registeredFields}</TableCell>
                  <TableCell>
                    <Badge variant={campaign.status === "Active" ? "secondary" : "outline"} className="text-xs">
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7" data-testid={`button-actions-${index}`}>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Campaign</DropdownMenuItem>
                        <DropdownMenuItem>View Fields</DropdownMenuItem>
                        <DropdownMenuItem>Download Report</DropdownMenuItem>
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
