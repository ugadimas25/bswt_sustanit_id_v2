import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ChevronDown, Filter } from "lucide-react";
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

//todo: remove mock functionality
const mockHarvests = [
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.8",
    type: "1",
    certifications: "",
    comment: "",
    farmers: "ADEYEMO ADELOWO",
    farmerIds: "INA-1111",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    latestFacility: "",
    harvestingActivities: "1",
    balanceKg: "36.0",
    positions: "1 (map)",
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.33",
    type: "1",
    certifications: "",
    comment: "",
    farmers: "ADEYEMO ADELOWO",
    farmerIds: "INA-1111",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    latestFacility: "",
    harvestingActivities: "1",
    balanceKg: "90.0",
    positions: "1 (map)",
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.31",
    type: "1",
    certifications: "",
    comment: "",
    farmers: "ADEYEMO ADELOWO",
    farmerIds: "INA-1111",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    latestFacility: "",
    harvestingActivities: "1",
    balanceKg: "65.0",
    positions: "1 (map)",
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.20",
    type: "1",
    certifications: "",
    comment: "",
    farmers: "A. ADELUGBA",
    farmerIds: "INA-1983",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    latestFacility: "",
    harvestingActivities: "1",
    balanceKg: "590.0",
    positions: "1 (map)",
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.19",
    type: "1",
    certifications: "",
    comment: "",
    farmers: "A. ADELUGBA",
    farmerIds: "INA-1983",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    latestFacility: "",
    harvestingActivities: "1",
    balanceKg: "590.0",
    positions: "1 (map)",
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.18",
    type: "1",
    certifications: "",
    comment: "",
    farmers: "A. ADELUGBA",
    farmerIds: "INA-1983",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    latestFacility: "",
    harvestingActivities: "1",
    balanceKg: "590.0",
    positions: "1 (map)",
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.17",
    type: "1",
    certifications: "",
    comment: "",
    farmers: "A. ADELUGBA",
    farmerIds: "INA-1983",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    latestFacility: "",
    harvestingActivities: "1",
    balanceKg: "590.0",
    positions: "1 (map)",
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.16",
    type: "1",
    certifications: "",
    comment: "",
    farmers: "A. ADELUGBA",
    farmerIds: "INA-1983",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    latestFacility: "",
    harvestingActivities: "1",
    balanceKg: "590.0",
    positions: "1 (map)",
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.15",
    type: "1",
    certifications: "",
    comment: "",
    farmers: "A. ADELUGBA",
    farmerIds: "INA-1983",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    latestFacility: "",
    harvestingActivities: "1",
    balanceKg: "590.0",
    positions: "1 (map)",
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.14",
    type: "1",
    certifications: "",
    comment: "",
    farmers: "A. ADELUGBA",
    farmerIds: "INA-1983",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    latestFacility: "",
    harvestingActivities: "1",
    balanceKg: "590.0",
    positions: "1 (map)",
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.13",
    type: "1",
    certifications: "",
    comment: "",
    farmers: "A. ADELUGBA",
    farmerIds: "INA-1983",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    latestFacility: "",
    harvestingActivities: "1",
    balanceKg: "590.0",
    positions: "1 (map)",
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.12",
    type: "1",
    certifications: "",
    comment: "",
    farmers: "A. ADELUGBA",
    farmerIds: "INA-1983",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    latestFacility: "",
    harvestingActivities: "1",
    balanceKg: "590.0",
    positions: "1 (map)",
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.11",
    type: "1",
    certifications: "",
    comment: "",
    farmers: "A. ADELUGBA",
    farmerIds: "INA-1983",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    latestFacility: "",
    harvestingActivities: "1",
    balanceKg: "590.0",
    positions: "1 (map)",
  },
];

export default function Harvests() {
  return (
    <div className="space-y-4 -m-6">
      {/* Header */}
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/harvests">Harvests</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Harvest Collections</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" data-testid="button-filter">
            <Filter className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" data-testid="button-actions">
                Actions
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Add Collection</DropdownMenuItem>
              <DropdownMenuItem>Import Collections</DropdownMenuItem>
              <DropdownMenuItem>Export to CSV</DropdownMenuItem>
              <DropdownMenuItem>View Analytics</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Table */}
      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Collected At</TableHead>
                <TableHead className="font-medium">Harvest Collection Number</TableHead>
                <TableHead className="font-medium">Type</TableHead>
                <TableHead className="font-medium">Certifications</TableHead>
                <TableHead className="font-medium">Comment</TableHead>
                <TableHead className="font-medium">Farmers</TableHead>
                <TableHead className="font-medium">Farmer IDs</TableHead>
                <TableHead className="font-medium">Lot Number</TableHead>
                <TableHead className="font-medium">Container Id</TableHead>
                <TableHead className="font-medium">Latest Facility</TableHead>
                <TableHead className="font-medium">Harvesting Activities</TableHead>
                <TableHead className="font-medium">Balance (Kg)</TableHead>
                <TableHead className="font-medium">Positions</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockHarvests.map((harvest, index) => (
                <TableRow 
                  key={harvest.harvestCollectionNumber}
                  className="hover:bg-muted/30"
                  data-testid={`row-harvest-${index}`}
                >
                  <TableCell className="text-sm">{harvest.collectedAt}</TableCell>
                  <TableCell className="font-medium">
                    <Link href={`/harvests/${harvest.harvestCollectionNumber}`}>
                      <span className="text-primary hover:underline cursor-pointer">
                        {harvest.harvestCollectionNumber}
                      </span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-sm">{harvest.type}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {harvest.certifications}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {harvest.comment}
                  </TableCell>
                  <TableCell>
                    {harvest.farmers && (
                      <Link href={`/producers/${harvest.farmerIds}`}>
                        <span className="text-sm cursor-pointer hover:underline">
                          {harvest.farmers}
                        </span>
                      </Link>
                    )}
                  </TableCell>
                  <TableCell>
                    {harvest.farmerIds && (
                      <Link href={`/producers/${harvest.farmerIds}`}>
                        <span className="text-primary hover:underline cursor-pointer text-sm">
                          {harvest.farmerIds}
                        </span>
                      </Link>
                    )}
                  </TableCell>
                  <TableCell className="text-sm">{harvest.lotNumber}</TableCell>
                  <TableCell className="text-sm">{harvest.containerId}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {harvest.latestFacility}
                  </TableCell>
                  <TableCell className="text-sm">{harvest.harvestingActivities}</TableCell>
                  <TableCell className="text-right font-medium">{harvest.balanceKg}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {harvest.positions}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 justify-end">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        data-testid={`button-details-${index}`}
                      >
                        <span className="text-muted-foreground text-xs">📋</span>
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            data-testid={`button-row-actions-${index}`}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Collection</DropdownMenuItem>
                          <DropdownMenuItem>View on Map</DropdownMenuItem>
                          <DropdownMenuItem>View Activities</DropdownMenuItem>
                          <DropdownMenuItem>Print Receipt</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
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
