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

const mockQuality = [
  { id: "HQ-001", batch: "HB-001", crop: "Coffee", moistureContent: "12.5%", defectRate: "1.2%", grade: "Premium", inspector: "John Smith", date: "2024-03-15" },
  { id: "HQ-002", batch: "HB-002", crop: "Cocoa", moistureContent: "7.8%", defectRate: "2.5%", grade: "Standard", inspector: "Sarah Johnson", date: "2024-03-14" },
  { id: "HQ-003", batch: "HB-003", crop: "Coffee", moistureContent: "11.2%", defectRate: "0.8%", grade: "Premium", inspector: "John Smith", date: "2024-03-13" },
  { id: "HQ-004", batch: "HB-004", crop: "Coffee", moistureContent: "10.8%", defectRate: "0.5%", grade: "Organic Premium", inspector: "Mike Davis", date: "2024-03-12" },
  { id: "HQ-005", batch: "HB-005", crop: "Bananas", moistureContent: "85.2%", defectRate: "3.1%", grade: "Standard", inspector: "Tom Wilson", date: "2024-03-11" },
];

export default function HarvestQuality() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Quality</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-record-inspection">Record Inspection</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-view-standards">View Standards</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Quality ID</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead>Crop</TableHead>
              <TableHead className="text-right">Moisture %</TableHead>
              <TableHead className="text-right">Defect Rate</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Inspector</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockQuality.map((quality, index) => (
              <TableRow key={quality.id} className="hover:bg-muted/30" data-testid={`row-quality-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-quality/${quality.id}`} data-testid={`link-quality-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{quality.id}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/harvest-batches/${quality.batch}`} data-testid={`link-batch-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{quality.batch}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-crop-${index}`}>{quality.crop}</Badge>
                </TableCell>
                <TableCell className="text-right font-mono" data-testid={`text-moisture-${index}`}>{quality.moistureContent}</TableCell>
                <TableCell className="text-right font-mono" data-testid={`text-defect-rate-${index}`}>{quality.defectRate}</TableCell>
                <TableCell>
                  <Badge variant={quality.grade.includes("Premium") ? "secondary" : "outline"} className="text-xs" data-testid={`badge-grade-${index}`}>
                    {quality.grade}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Link href={`/users/${quality.inspector}`} data-testid={`link-inspector-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{quality.inspector}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-date-${index}`}>{quality.date}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" data-testid={`button-actions-${index}`}>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem data-testid={`menu-view-details-${index}`}>View Details</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-retest-${index}`}>Request Retest</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-certificate-${index}`}>View Certificate</DropdownMenuItem>
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
