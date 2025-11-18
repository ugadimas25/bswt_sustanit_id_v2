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

const mockResponsesByStaff = [
  { id: "RS-001", staff: "John Smith", staffId: "STF-101", surveysCompleted: "145", avgCompletionTime: "28 min", lastSurvey: "2024-03-15", region: "North Region", status: "Active" },
  { id: "RS-002", staff: "Sarah Johnson", staffId: "STF-102", surveysCompleted: "132", avgCompletionTime: "32 min", lastSurvey: "2024-03-14", region: "South Valley", status: "Active" },
  { id: "RS-003", staff: "Mike Davis", staffId: "STF-103", surveysCompleted: "156", avgCompletionTime: "25 min", lastSurvey: "2024-03-16", region: "East Plains", status: "Active" },
  { id: "RS-004", staff: "Lisa Brown", staffId: "STF-104", surveysCompleted: "128", avgCompletionTime: "30 min", lastSurvey: "2024-03-13", region: "Central Region", status: "Active" },
  { id: "RS-005", staff: "Tom Wilson", staffId: "STF-105", surveysCompleted: "98", avgCompletionTime: "35 min", lastSurvey: "2024-03-10", region: "West Hills", status: "On Leave" },
];

export default function SurveyResponsesByStaff() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/survey" data-testid="breadcrumb-survey">Survey</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Responses by Staff</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-assign-surveys">Assign Surveys</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-view-analytics">View Analytics</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Record ID</TableHead>
              <TableHead>Staff Name</TableHead>
              <TableHead>Staff ID</TableHead>
              <TableHead className="text-right">Surveys</TableHead>
              <TableHead className="text-right">Avg Time</TableHead>
              <TableHead>Last Survey</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockResponsesByStaff.map((record, index) => (
              <TableRow key={record.id} className="hover:bg-muted/30" data-testid={`row-staff-response-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/survey-responses-by-staff/${record.id}`} data-testid={`link-record-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{record.id}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/users/${record.staffId}`} data-testid={`link-staff-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{record.staff}</span>
                  </Link>
                </TableCell>
                <TableCell className="font-mono text-sm" data-testid={`text-staff-id-${index}`}>{record.staffId}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-surveys-completed-${index}`}>{record.surveysCompleted}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-avg-completion-time-${index}`}>{record.avgCompletionTime}</TableCell>
                <TableCell data-testid={`text-last-survey-${index}`}>{record.lastSurvey}</TableCell>
                <TableCell data-testid={`text-region-${index}`}>{record.region}</TableCell>
                <TableCell>
                  <Badge variant={record.status === "Active" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {record.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" data-testid={`button-actions-${index}`}>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem data-testid={`menu-view-details-${index}`}>View Details</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-surveys-${index}`}>View Surveys</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-assign-new-${index}`}>Assign New</DropdownMenuItem>
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
