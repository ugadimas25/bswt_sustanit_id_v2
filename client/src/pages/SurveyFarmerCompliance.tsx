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

const mockFarmerCompliance = [
  { id: "FC-001", farmer: "Carlos Mendez", farmerId: "FMR-045", surveysCompleted: "12", complianceScore: "94%", criticalIssues: "0", lastSurvey: "2024-03-10", status: "Compliant" },
  { id: "FC-002", farmer: "Maria Santos", farmerId: "FMR-078", surveysCompleted: "10", complianceScore: "87%", criticalIssues: "2", lastSurvey: "2024-03-08", status: "Action Required" },
  { id: "FC-003", farmer: "Jose Garcia", farmerId: "FMR-132", surveysCompleted: "15", complianceScore: "96%", criticalIssues: "0", lastSurvey: "2024-03-12", status: "Compliant" },
  { id: "FC-004", farmer: "Ana Rodriguez", farmerId: "FMR-201", surveysCompleted: "8", complianceScore: "82%", criticalIssues: "3", lastSurvey: "2024-03-05", status: "Action Required" },
  { id: "FC-005", farmer: "Pedro Silva", farmerId: "FMR-267", surveysCompleted: "11", complianceScore: "91%", criticalIssues: "1", lastSurvey: "2024-03-09", status: "Compliant" },
];

export default function SurveyFarmerCompliance() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Farmer Compliance</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-new-survey">New Survey</DropdownMenuItem>
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
              <TableHead>Farmer Name</TableHead>
              <TableHead>Farmer ID</TableHead>
              <TableHead className="text-right">Surveys</TableHead>
              <TableHead className="text-right">Compliance</TableHead>
              <TableHead className="text-right">Critical Issues</TableHead>
              <TableHead>Last Survey</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockFarmerCompliance.map((record, index) => (
              <TableRow key={record.id} className="hover:bg-muted/30" data-testid={`row-farmer-compliance-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/survey-farmer-compliance/${record.id}`} data-testid={`link-record-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{record.id}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/producers/${record.farmerId}`} data-testid={`link-farmer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{record.farmer}</span>
                  </Link>
                </TableCell>
                <TableCell className="font-mono text-sm" data-testid={`text-farmer-id-${index}`}>{record.farmerId}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-surveys-completed-${index}`}>{record.surveysCompleted}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-compliance-score-${index}`}>{record.complianceScore}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-critical-issues-${index}`}>{record.criticalIssues}</TableCell>
                <TableCell data-testid={`text-last-survey-${index}`}>{record.lastSurvey}</TableCell>
                <TableCell>
                  <Badge variant={record.status === "Compliant" ? "secondary" : "destructive"} className="text-xs" data-testid={`badge-status-${index}`}>
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
                      <DropdownMenuItem data-testid={`menu-schedule-followup-${index}`}>Schedule Follow-up</DropdownMenuItem>
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
