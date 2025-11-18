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

const mockLocations = [
  { id: "LOC-001", name: "AASA Village", type: "Village", region: "Oyo State", country: "Nigeria", farmers: 45, fields: 78, coordinates: "7.8500° N, 3.9000° E" },
  { id: "LOC-002", name: "Nugu Cooperative", type: "Collection Point", region: "West Java", country: "Indonesia", farmers: 62, fields: 104, coordinates: "6.9175° S, 107.6191° E" },
  { id: "LOC-003", name: "AASA Mill", type: "Processing Facility", region: "Oyo State", country: "Nigeria", farmers: 0, fields: 0, coordinates: "7.8550° N, 3.9050° E" },
];

export default function Locations() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/locations">Locations</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">All Locations</BreadcrumbPage>
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
            <DropdownMenuItem>Add Location</DropdownMenuItem>
            <DropdownMenuItem>Import Locations</DropdownMenuItem>
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
                <TableHead className="font-medium">Location ID</TableHead>
                <TableHead className="font-medium">Name</TableHead>
                <TableHead className="font-medium">Type</TableHead>
                <TableHead className="font-medium">Region</TableHead>
                <TableHead className="font-medium">Country</TableHead>
                <TableHead className="font-medium">Farmers</TableHead>
                <TableHead className="font-medium">Fields</TableHead>
                <TableHead className="font-medium">Coordinates</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLocations.map((location, index) => (
                <TableRow key={location.id} className="hover:bg-muted/30" data-testid={`row-location-${index}`}>
                  <TableCell className="font-medium">
                    <Link href={`/locations/${location.id}`}>
                      <span className="text-primary hover:underline cursor-pointer">{location.id}</span>
                    </Link>
                  </TableCell>
                  <TableCell>{location.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{location.type}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{location.region}</TableCell>
                  <TableCell className="text-sm">{location.country}</TableCell>
                  <TableCell className="text-right">{location.farmers}</TableCell>
                  <TableCell className="text-right">{location.fields}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{location.coordinates}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7" data-testid={`button-actions-${index}`}>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>View on Map</DropdownMenuItem>
                        <DropdownMenuItem>View Farmers</DropdownMenuItem>
                        <DropdownMenuItem>View Fields</DropdownMenuItem>
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
