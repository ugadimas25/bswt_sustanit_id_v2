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

const mockFarms = [
  { farmId: "FARM-001", farmName: "AGNES Farm Estate", farmer: "AGNES Adeleye", totalArea: "12.5 ha", fieldsCount: 3, location: "AASA Village", certifications: "RSPO", status: "Active" },
  { farmId: "FARM-002", farmName: "Anwar Palm Plantation", farmer: "Bima Anwar", totalArea: "18.3 ha", fieldsCount: 4, location: "Nugu", certifications: "RSPO, EUDR", status: "Active" },
  { farmId: "FARM-003", farmName: "Baldo Agricultural Holdings", farmer: "Eri Baldo", totalArea: "9.7 ha", fieldsCount: 2, location: "Nugu", certifications: "RSPO", status: "Active" },
];

export default function Farms() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/producers">Farmers</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Farms</BreadcrumbPage>
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
            <DropdownMenuItem>Add Farm</DropdownMenuItem>
            <DropdownMenuItem>Import Farms</DropdownMenuItem>
            <DropdownMenuItem>View Map</DropdownMenuItem>
            <DropdownMenuItem>Export to CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Farm ID</TableHead>
                <TableHead className="font-medium">Farm Name</TableHead>
                <TableHead className="font-medium">Farmer</TableHead>
                <TableHead className="font-medium">Total Area</TableHead>
                <TableHead className="font-medium">Fields</TableHead>
                <TableHead className="font-medium">Location</TableHead>
                <TableHead className="font-medium">Certifications</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockFarms.map((farm) => (
                <TableRow key={farm.farmId} className="hover:bg-muted/30">
                  <TableCell className="font-medium">
                    <Link href={`/farms/${farm.farmId}`}>
                      <span className="text-primary hover:underline cursor-pointer">{farm.farmId}</span>
                    </Link>
                  </TableCell>
                  <TableCell>{farm.farmName}</TableCell>
                  <TableCell>
                    <Link href={`/producers/${farm.farmer}`}>
                      <span className="text-sm hover:underline cursor-pointer">{farm.farmer}</span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">{farm.totalArea}</TableCell>
                  <TableCell className="text-right">{farm.fieldsCount}</TableCell>
                  <TableCell className="text-sm">{farm.location}</TableCell>
                  <TableCell>
                    {farm.certifications.split(", ").map((cert) => (
                      <Badge key={cert} variant="secondary" className="text-xs mr-1">{cert}</Badge>
                    ))}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">{farm.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>View Fields</DropdownMenuItem>
                        <DropdownMenuItem>View on Map</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
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
