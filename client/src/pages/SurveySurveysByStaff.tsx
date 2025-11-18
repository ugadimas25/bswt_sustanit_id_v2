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

const mockSurveysByStaff = [
  { id: "SS-001", surveyId: "SRV-501", staff: "John Smith", staffId: "STF-101", farmer: "Carlos Mendez", farmerId: "FMR-045", date: "2024-03-15", completionTime: "28 min", status: "Completed" },
  { id: "SS-002", surveyId: "SRV-502", staff: "Sarah Johnson", staffId: "STF-102", farmer: "Maria Santos", farmerId: "FMR-078", date: "2024-03-14", completionTime: "32 min", status: "Completed" },
  { id: "SS-003", surveyId: "SRV-503", staff: "Mike Davis", staffId: "STF-103", farmer: "Jose Garcia", farmerId: "FMR-132", date: "2024-03-16", completionTime: "25 min", status: "Completed" },
  { id: "SS-004", surveyId: "SRV-504", staff: "Lisa Brown", staffId: "STF-104", farmer: "Ana Rodriguez", farmerId: "FMR-201", date: "2024-03-13", completionTime: "30 min", status: "In Progress" },
  { id: "SS-005", surveyId: "SRV-505", staff: "Tom Wilson", staffId: "STF-105", farmer: "Pedro Silva", farmerId: "FMR-267", date: "2024-03-10", completionTime: "35 min", status: "Completed" },
];

export default function SurveySurveysByStaff() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Surveys by Staff</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-assign-survey">Assign Survey</DropdownMenuItem>
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
              <TableHead>Survey ID</TableHead>
              <TableHead>Staff Name</TableHead>
              <TableHead>Farmer Name</TableHead>
              <TableHead>Survey Date</TableHead>
              <TableHead className="text-right">Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockSurveysByStaff.map((survey, index) => (
              <TableRow key={survey.id} className="hover:bg-muted/30" data-testid={`row-survey-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/survey-surveys-by-staff/${survey.id}`} data-testid={`link-survey-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{survey.id}</span>
                  </Link>
                </TableCell>
                <TableCell className="font-mono text-sm" data-testid={`text-survey-id-${index}`}>{survey.surveyId}</TableCell>
                <TableCell>
                  <Link href={`/users/${survey.staffId}`} data-testid={`link-staff-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{survey.staff}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/producers/${survey.farmerId}`} data-testid={`link-farmer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{survey.farmer}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-survey-date-${index}`}>{survey.date}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-completion-time-${index}`}>{survey.completionTime}</TableCell>
                <TableCell>
                  <Badge variant={survey.status === "Completed" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {survey.status}
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
                      <DropdownMenuItem data-testid={`menu-view-responses-${index}`}>View Responses</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-download-report-${index}`}>Download Report</DropdownMenuItem>
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
