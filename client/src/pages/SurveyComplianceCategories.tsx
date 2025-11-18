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

const mockCategories = [
  { id: "CC-001", categoryName: "Food Safety", questionCount: "45", totalResponses: "1,234", complianceRate: "94%", lastUpdated: "2024-03-10", status: "Active" },
  { id: "CC-002", categoryName: "Environmental Protection", questionCount: "38", totalResponses: "1,198", complianceRate: "89%", lastUpdated: "2024-03-08", status: "Active" },
  { id: "CC-003", categoryName: "Labor Standards", questionCount: "52", totalResponses: "1,156", complianceRate: "91%", lastUpdated: "2024-03-05", status: "Active" },
  { id: "CC-004", categoryName: "Water Management", questionCount: "29", totalResponses: "987", complianceRate: "87%", lastUpdated: "2024-03-02", status: "Active" },
  { id: "CC-005", categoryName: "Chemical Usage", questionCount: "41", totalResponses: "1,089", complianceRate: "92%", lastUpdated: "2024-02-28", status: "Inactive" },
];

export default function SurveyComplianceCategories() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Compliance Categories</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-create-category">Create Category</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-view-analytics">View Analytics</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category ID</TableHead>
              <TableHead>Category Name</TableHead>
              <TableHead className="text-right">Questions</TableHead>
              <TableHead className="text-right">Total Responses</TableHead>
              <TableHead className="text-right">Compliance Rate</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCategories.map((category, index) => (
              <TableRow key={category.id} className="hover:bg-muted/30" data-testid={`row-category-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/survey-compliance-categories/${category.id}`} data-testid={`link-category-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{category.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-category-name-${index}`}>{category.categoryName}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-question-count-${index}`}>{category.questionCount}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-total-responses-${index}`}>{category.totalResponses}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-compliance-rate-${index}`}>{category.complianceRate}</TableCell>
                <TableCell data-testid={`text-last-updated-${index}`}>{category.lastUpdated}</TableCell>
                <TableCell>
                  <Badge variant={category.status === "Active" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {category.status}
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
                      <DropdownMenuItem data-testid={`menu-manage-questions-${index}`}>Manage Questions</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-compliance-${index}`}>View Compliance</DropdownMenuItem>
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
