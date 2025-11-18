import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

//todo: remove mock functionality
const mockReports = [
  {
    name: "Completed Surveys",
    description: "The report shows each survey and the list of farmers that have completed that survey.",
  },
  {
    name: "Crop Yield Forecast",
    description: "Crop Yield Forecast",
  },
  {
    name: "Inputs Used For Growing Activities",
    description: "Inputs Used For Growing Activities",
  },
  {
    name: "Loans Issued",
    description: "Loans Issued",
  },
  {
    name: "Training by Staff",
    description: "Training by Staff Report",
  },
  {
    name: "Trainings",
    description: "Number of farmers trained by period",
  },
  {
    name: "Warehouse Inventory",
    description: "Report showing the inputs available at each input warehouse, including their current quantity levels.",
  },
  {
    name: "Container ID Certification Data",
    description: "Container ID Certification Data",
  },
  {
    name: "Crop Yield Forecast Per Month",
    description: "Crop Yield Forecast Per Month",
  },
  {
    name: "Delivery Traceability and Diligence Report",
    description: "Delivery Traceability and Diligence Report",
  },
  {
    name: "Farmer Group Quotas",
    description: "Farmer Group Quotas",
  },
  {
    name: "Field Report KML",
    description: "Field Report KML",
  },
  {
    name: "Field Report KML With Filters",
    description: "Field Report KML With Filters",
  },
  {
    name: "IMS deforestation summary report",
    description: "IMS deforestation summary report",
  },
  {
    name: "Lot Traceability And Diligence Report v2",
    description: "Lot Traceability And Diligence Report v2",
  },
  {
    name: "Lot Traceability and Diligence Report v2",
    description: "Lot Traceability and Diligence Report v2",
  },
  {
    name: "Staff Tracking Map",
    description: "Staff Tracking Map",
  },
  {
    name: "Traceability by Farmer",
    description: "Traceability by Farmer",
  },
];

export default function Reports() {
  return (
    <div className="space-y-4 -m-6">
      {/* Header */}
      <div className="px-6 pt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/reports">Reports</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Reportserver Reports</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Table */}
      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Report Name</TableHead>
                <TableHead className="font-medium">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockReports.map((report, index) => (
                <TableRow 
                  key={index}
                  className="hover:bg-muted/30 cursor-pointer"
                  data-testid={`row-report-${index}`}
                >
                  <TableCell className="font-medium">
                    <Link href={`/reports/${report.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="flex items-center gap-2 hover:underline text-primary">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>{report.name}</span>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {report.description}
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
