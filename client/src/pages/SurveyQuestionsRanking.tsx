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

const mockQuestions = [
  { id: "QR-001", rank: "1", question: "Are all pesticides stored in locked facilities?", category: "Food Safety", responses: "1,234", nonCompliance: "74", severity: "Critical" },
  { id: "QR-002", rank: "2", question: "Is waste water properly treated before discharge?", category: "Environmental Protection", responses: "1,198", nonCompliance: "132", severity: "High" },
  { id: "QR-003", rank: "3", question: "Are child labor policies documented and enforced?", category: "Labor Standards", responses: "1,156", nonCompliance: "104", severity: "Critical" },
  { id: "QR-004", rank: "4", question: "Are water sources protected from contamination?", category: "Water Management", responses: "987", nonCompliance: "128", severity: "High" },
  { id: "QR-005", rank: "5", question: "Are chemical application records maintained?", category: "Chemical Usage", responses: "1,089", nonCompliance: "87", severity: "Medium" },
];

export default function SurveyQuestionsRanking() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Questions Ranking</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-update-ranking">Update Ranking</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-view-analytics">View Analytics</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">Rank</TableHead>
              <TableHead>Question ID</TableHead>
              <TableHead>Question</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Responses</TableHead>
              <TableHead className="text-right">Non-Compliance</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockQuestions.map((question, index) => (
              <TableRow key={question.id} className="hover:bg-muted/30" data-testid={`row-question-${index}`}>
                <TableCell className="text-center font-medium" data-testid={`text-rank-${index}`}>{question.rank}</TableCell>
                <TableCell className="font-medium">
                  <Link href={`/survey-questions-ranking/${question.id}`} data-testid={`link-question-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{question.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-question-text-${index}`}>{question.question}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${index}`}>{question.category}</Badge>
                </TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-responses-${index}`}>{question.responses}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-non-compliance-${index}`}>{question.nonCompliance}</TableCell>
                <TableCell>
                  <Badge variant={question.severity === "Critical" ? "destructive" : question.severity === "High" ? "outline" : "secondary"} className="text-xs" data-testid={`badge-severity-${index}`}>
                    {question.severity}
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
                      <DropdownMenuItem data-testid={`menu-adjust-rank-${index}`}>Adjust Rank</DropdownMenuItem>
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
