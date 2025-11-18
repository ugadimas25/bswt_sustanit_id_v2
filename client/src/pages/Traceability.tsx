import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, MapPin } from "lucide-react";
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

const mockLots = [
  { lotNumber: "LOT-1291-240625", containerId: "AASA (Mill)", farmers: 12, totalWeight: "7,850 kg", harvestDate: "24/06/2025", processingDate: "25/06/2025", certifications: "RSPO, EUDR", status: "Processed" },
  { lotNumber: "LOT-1290-240624", containerId: "AASA (Mill)", farmers: 8, totalWeight: "5,920 kg", harvestDate: "23/06/2025", processingDate: "24/06/2025", certifications: "RSPO", status: "Processed" },
  { lotNumber: "LOT-1289-240623", containerId: "NUKU (Collection)", farmers: 15, totalWeight: "9,450 kg", harvestDate: "22/06/2025", processingDate: "23/06/2025", certifications: "RSPO, EUDR", status: "In Transit" },
];

export default function Traceability() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/traceability">Traceability</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Lot Tracking</BreadcrumbPage>
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
            <DropdownMenuItem>Create Lot</DropdownMenuItem>
            <DropdownMenuItem>Generate QR Codes</DropdownMenuItem>
            <DropdownMenuItem>Export Chain of Custody</DropdownMenuItem>
            <DropdownMenuItem>Compliance Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Lot Number</TableHead>
                <TableHead className="font-medium">Container ID</TableHead>
                <TableHead className="font-medium">Farmers</TableHead>
                <TableHead className="font-medium">Total Weight</TableHead>
                <TableHead className="font-medium">Harvest Date</TableHead>
                <TableHead className="font-medium">Processing Date</TableHead>
                <TableHead className="font-medium">Certifications</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLots.map((lot, index) => (
                <TableRow key={lot.lotNumber} className="hover:bg-muted/30" data-testid={`row-lot-${index}`}>
                  <TableCell className="font-medium">
                    <Link href={`/traceability/${lot.lotNumber}`}>
                      <span className="text-primary hover:underline cursor-pointer">{lot.lotNumber}</span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-sm">{lot.containerId}</TableCell>
                  <TableCell className="text-right">{lot.farmers}</TableCell>
                  <TableCell className="text-right font-medium">{lot.totalWeight}</TableCell>
                  <TableCell className="text-sm">{lot.harvestDate}</TableCell>
                  <TableCell className="text-sm">{lot.processingDate}</TableCell>
                  <TableCell>
                    {lot.certifications.split(", ").map((cert) => (
                      <Badge key={cert} variant="secondary" className="text-xs mr-1">{cert}</Badge>
                    ))}
                  </TableCell>
                  <TableCell>
                    <Badge variant={lot.status === "Processed" ? "secondary" : "outline"} className="text-xs">
                      {lot.status}
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
                        <DropdownMenuItem>View Chain of Custody</DropdownMenuItem>
                        <DropdownMenuItem>View Farmers</DropdownMenuItem>
                        <DropdownMenuItem>Download Certificate</DropdownMenuItem>
                        <DropdownMenuItem>Generate QR Code</DropdownMenuItem>
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
