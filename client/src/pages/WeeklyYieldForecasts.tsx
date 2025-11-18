import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
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

const mockForecasts = [
  { week: "Week 47 (Nov 18-24)", campaign: "Palm Oil 2024-25", forecastYield: "18,500 kg", actualYield: "17,850 kg", variance: "-3.5%", accuracy: "96.5%" },
  { week: "Week 48 (Nov 25-Dec 1)", campaign: "Palm Oil 2024-25", forecastYield: "19,200 kg", actualYield: "-", variance: "-", accuracy: "-" },
  { week: "Week 49 (Dec 2-8)", campaign: "Palm Oil 2024-25", forecastYield: "20,100 kg", actualYield: "-", variance: "-", accuracy: "-" },
  { week: "Week 46 (Nov 11-17)", campaign: "Palm Oil 2024-25", forecastYield: "17,800 kg", actualYield: "18,200 kg", variance: "+2.2%", accuracy: "97.8%" },
];

export default function WeeklyYieldForecasts() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Weekly Yield Forecasts</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-update-actual">Update Actual Yield</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Week</TableHead>
                <TableHead className="font-medium">Campaign</TableHead>
                <TableHead className="font-medium">Forecast Yield</TableHead>
                <TableHead className="font-medium">Actual Yield</TableHead>
                <TableHead className="font-medium">Variance</TableHead>
                <TableHead className="font-medium">Accuracy</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockForecasts.map((forecast, index) => (
                <TableRow key={index} className="hover:bg-muted/30" data-testid={`row-forecast-${index}`}>
                  <TableCell className="font-medium">{forecast.week}</TableCell>
                  <TableCell className="text-sm">{forecast.campaign}</TableCell>
                  <TableCell className="text-right">{forecast.forecastYield}</TableCell>
                  <TableCell className="text-right">{forecast.actualYield}</TableCell>
                  <TableCell className="text-right">
                    {forecast.variance !== "-" ? (
                      <Badge 
                        variant={forecast.variance.startsWith("+") ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {forecast.variance}
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">{forecast.accuracy}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" data-testid={`button-actions-${index}`}>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem data-testid={`menu-view-details-${index}`}>View Details</DropdownMenuItem>
                        <DropdownMenuItem data-testid={`menu-update-actual-${index}`}>Update Actual</DropdownMenuItem>
                        <DropdownMenuItem data-testid={`menu-adjust-${index}`}>Adjust Forecast</DropdownMenuItem>
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
