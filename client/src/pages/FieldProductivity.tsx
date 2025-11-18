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

const mockProductivity = [
  { fieldId: "F-001", farmer: "AGNES Adeleye", area: "3.5 ha", totalYield: "8,750 kg", yieldPerHectare: "2,500 kg/ha", productivity: "High", trend: "Increasing" },
  { fieldId: "F-002", farmer: "Bima Anwar", area: "5.2 ha", totalYield: "11,440 kg", yieldPerHectare: "2,200 kg/ha", productivity: "Medium", trend: "Stable" },
  { fieldId: "F-003", farmer: "Eri Baldo", area: "2.8 ha", totalYield: "4,760 kg", yieldPerHectare: "1,700 kg/ha", productivity: "Low", trend: "Decreasing" },
  { fieldId: "F-004", farmer: "AHMAD GUNAWAN", area: "4.1 ha", totalYield: "10,250 kg", yieldPerHectare: "2,500 kg/ha", productivity: "High", trend: "Stable" },
];

export default function FieldProductivity() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Field Productivity</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-export-report">Export Productivity Report</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-compare-fields">Compare Fields</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-view-analytics">View Analytics</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Field ID</TableHead>
                <TableHead className="font-medium">Farmer</TableHead>
                <TableHead className="font-medium">Area</TableHead>
                <TableHead className="font-medium">Total Yield</TableHead>
                <TableHead className="font-medium">Yield/Hectare</TableHead>
                <TableHead className="font-medium">Productivity</TableHead>
                <TableHead className="font-medium">Trend</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockProductivity.map((field, index) => (
                <TableRow key={field.fieldId} className="hover:bg-muted/30" data-testid={`row-productivity-${index}`}>
                  <TableCell className="font-medium">
                    <Link href={`/fields/${field.fieldId}`} data-testid={`link-field-${index}`}>
                      <span className="text-primary hover:underline cursor-pointer">{field.fieldId}</span>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`/producers/${field.farmer}`} data-testid={`link-farmer-${index}`}>
                      <span className="text-sm hover:underline cursor-pointer">{field.farmer}</span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">{field.area}</TableCell>
                  <TableCell className="text-right font-medium">{field.totalYield}</TableCell>
                  <TableCell className="text-right">{field.yieldPerHectare}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={field.productivity === "High" ? "secondary" : field.productivity === "Medium" ? "outline" : "destructive"} 
                      className="text-xs"
                    >
                      {field.productivity}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{field.trend}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" data-testid={`button-actions-${index}`}>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem data-testid={`menu-view-details-${index}`}>View Details</DropdownMenuItem>
                        <DropdownMenuItem data-testid={`menu-view-history-${index}`}>View History</DropdownMenuItem>
                        <DropdownMenuItem data-testid={`menu-compare-${index}`}>Compare with Others</DropdownMenuItem>
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
