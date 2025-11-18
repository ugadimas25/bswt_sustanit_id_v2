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

const mockForecasts = [
  { id: "HF-001", week: "Week 13 2024", crop: "Coffee", region: "North", forecastedQuantity: "2,850 kg", confidence: "High", basedOn: "Historical + Weather" },
  { id: "HF-002", week: "Week 13 2024", crop: "Cocoa", region: "South", forecastedQuantity: "1,920 kg", confidence: "Medium", basedOn: "Historical Data" },
  { id: "HF-003", week: "Week 14 2024", crop: "Coffee", region: "East", forecastedQuantity: "3,240 kg", confidence: "High", basedOn: "Historical + Weather" },
  { id: "HF-004", week: "Week 14 2024", crop: "Bananas", region: "West", forecastedQuantity: "1,560 kg", confidence: "Medium", basedOn: "Field Surveys" },
  { id: "HF-005", week: "Week 15 2024", crop: "Coffee", region: "Central", forecastedQuantity: "2,670 kg", confidence: "High", basedOn: "Historical + Weather" },
];

export default function HarvestForecasts() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Forecasts</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-generate-forecast">Generate Forecast</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-adjust-parameters">Adjust Parameters</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Forecast ID</TableHead>
              <TableHead>Week</TableHead>
              <TableHead>Crop</TableHead>
              <TableHead>Region</TableHead>
              <TableHead className="text-right">Forecasted Quantity</TableHead>
              <TableHead>Confidence</TableHead>
              <TableHead>Based On</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockForecasts.map((forecast, index) => (
              <TableRow key={forecast.id} className="hover:bg-muted/30" data-testid={`row-forecast-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-forecasts/${forecast.id}`} data-testid={`link-forecast-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{forecast.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-week-${index}`}>{forecast.week}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-crop-${index}`}>{forecast.crop}</Badge>
                </TableCell>
                <TableCell data-testid={`text-region-${index}`}>{forecast.region}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-quantity-${index}`}>{forecast.forecastedQuantity}</TableCell>
                <TableCell>
                  <Badge variant={forecast.confidence === "High" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-confidence-${index}`}>
                    {forecast.confidence}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm" data-testid={`text-based-on-${index}`}>{forecast.basedOn}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" data-testid={`button-actions-${index}`}>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem data-testid={`menu-view-details-${index}`}>View Details</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-adjust-${index}`}>Adjust Forecast</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-accuracy-${index}`}>View Accuracy</DropdownMenuItem>
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
