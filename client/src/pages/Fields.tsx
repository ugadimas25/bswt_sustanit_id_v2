import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ChevronDown } from "lucide-react";
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
const mockFields = [
  {
    fieldId: "FN8049.62.4",
    fieldName: "f3",
    size: "4.67",
    gpsInaccuracy: "",
    farmer: "Imam Effendi",
    groups: "Nuku",
    farmerTags: "",
    plantingCampaign: "Palm Oil Production Campaign 2024-25",
    cropVariety: "Palm Fruits (Dura and Tenera)",
    plantingDate: "12/11/2024",
    dataQuality: "Not reviewed",
    compliance: "Not reviewed",
    status: "Active",
    deforestationStatus: "Unavailable",
    inUse: "Yes",
  },
  {
    fieldId: "FN8049.62.1",
    fieldName: "f1",
    size: "7.76",
    gpsInaccuracy: "",
    farmer: "Bima Anwar",
    groups: "2",
    farmerTags: "",
    plantingCampaign: "Palm Oil Production Campaign 2024-25",
    cropVariety: "Palm Fruits (Dura and Tenera)",
    plantingDate: "11/11/2024",
    dataQuality: "Not reviewed",
    compliance: "Not reviewed",
    status: "Active",
    deforestationStatus: "Unavailable",
    inUse: "Yes",
  },
  {
    fieldId: "INA-2011-F1",
    fieldName: "AHMAD GUNAWAN's Field-1",
    size: "5.0",
    gpsInaccuracy: "",
    farmer: "AHMAD GUNAWAN",
    groups: "",
    farmerTags: "Demo",
    plantingCampaign: "",
    cropVariety: "",
    plantingDate: "",
    dataQuality: "",
    compliance: "",
    status: "Non-active",
    deforestationStatus: "",
    inUse: "Yes",
  },
  {
    fieldId: "INA-2010-F1",
    fieldName: "MAT SABURI's Field-1",
    size: "13.0",
    gpsInaccuracy: "",
    farmer: "MAT SABURI",
    groups: "",
    farmerTags: "Demo",
    plantingCampaign: "",
    cropVariety: "",
    plantingDate: "",
    dataQuality: "",
    compliance: "",
    status: "Non-active",
    deforestationStatus: "",
    inUse: "Yes",
  },
  {
    fieldId: "INA-2009-F1",
    fieldName: "ARI SAMSIR's Field-1",
    size: "10.0",
    gpsInaccuracy: "",
    farmer: "ARI SAMSIR",
    groups: "",
    farmerTags: "Demo",
    plantingCampaign: "",
    cropVariety: "",
    plantingDate: "",
    dataQuality: "",
    compliance: "",
    status: "Non-active",
    deforestationStatus: "",
    inUse: "Yes",
  },
  {
    fieldId: "INA-2008-F1",
    fieldName: "NURU ARIF's Field-1",
    size: "15.0",
    gpsInaccuracy: "",
    farmer: "NURU ARIF",
    groups: "",
    farmerTags: "Demo",
    plantingCampaign: "",
    cropVariety: "",
    plantingDate: "",
    dataQuality: "",
    compliance: "",
    status: "Non-active",
    deforestationStatus: "",
    inUse: "Yes",
  },
];

export default function Fields() {
  return (
    <div className="space-y-4 -m-6">
      {/* Header */}
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/producers">Farmers</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Fields</BreadcrumbPage>
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
            <DropdownMenuItem>Add New Field</DropdownMenuItem>
            <DropdownMenuItem>Import Fields</DropdownMenuItem>
            <DropdownMenuItem>Export to CSV</DropdownMenuItem>
            <DropdownMenuItem>View Map</DropdownMenuItem>
            <DropdownMenuItem>Check Deforestation</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Field Id</TableHead>
                <TableHead className="font-medium">Field Name</TableHead>
                <TableHead className="font-medium">Size</TableHead>
                <TableHead className="font-medium">GPS Inaccuracy (meters)</TableHead>
                <TableHead className="font-medium">Farmer</TableHead>
                <TableHead className="font-medium">Groups</TableHead>
                <TableHead className="font-medium">Farmer Tags</TableHead>
                <TableHead className="font-medium">Planting Campaign</TableHead>
                <TableHead className="font-medium">Crop Variety</TableHead>
                <TableHead className="font-medium">Planting Date</TableHead>
                <TableHead className="font-medium">Data Quality</TableHead>
                <TableHead className="font-medium">Compliance</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="font-medium">Deforestation Status</TableHead>
                <TableHead className="font-medium">In Use</TableHead>
                <TableHead className="w-[100px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockFields.map((field, index) => (
                <TableRow 
                  key={field.fieldId}
                  className="hover:bg-muted/30"
                  data-testid={`row-field-${index}`}
                >
                  <TableCell className="font-medium">
                    <Link href={`/fields/${field.fieldId}`}>
                      <span className="text-primary hover:underline cursor-pointer">
                        {field.fieldId}
                      </span>
                    </Link>
                  </TableCell>
                  <TableCell>{field.fieldName}</TableCell>
                  <TableCell className="text-right">{field.size}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {field.gpsInaccuracy}
                  </TableCell>
                  <TableCell>
                    {field.farmer && (
                      <Link href={`/producers/${field.farmer}`}>
                        <span className="text-primary hover:underline cursor-pointer text-sm">
                          {field.farmer}
                        </span>
                      </Link>
                    )}
                  </TableCell>
                  <TableCell>
                    {field.groups && (
                      <Link href={`/groups/${field.groups}`}>
                        <span className="text-primary hover:underline cursor-pointer text-sm">
                          {field.groups}
                        </span>
                      </Link>
                    )}
                  </TableCell>
                  <TableCell>
                    {field.farmerTags && (
                      <Badge variant="outline" className="text-xs">
                        {field.farmerTags}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="max-w-[200px]">
                    <span className="text-sm truncate block">{field.plantingCampaign}</span>
                  </TableCell>
                  <TableCell className="max-w-[150px]">
                    <span className="text-sm truncate block">{field.cropVariety}</span>
                  </TableCell>
                  <TableCell className="text-sm">{field.plantingDate}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {field.dataQuality}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {field.compliance}
                  </TableCell>
                  <TableCell>
                    {field.status && (
                      <Badge 
                        variant={field.status === "Active" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {field.status}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {field.deforestationStatus && (
                      <Badge 
                        variant={field.deforestationStatus === "Unavailable" ? "outline" : "secondary"}
                        className="text-xs"
                      >
                        {field.deforestationStatus}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-sm">{field.inUse}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 justify-end">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        data-testid={`button-map-${index}`}
                      >
                        <MapPin className="h-4 w-4 text-muted-foreground" />
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
                          <DropdownMenuItem>Edit Field</DropdownMenuItem>
                          <DropdownMenuItem>View on Map</DropdownMenuItem>
                          <DropdownMenuItem>Check Boundaries</DropdownMenuItem>
                          <DropdownMenuItem>Deforestation Check</DropdownMenuItem>
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
