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

const mockProposedActions = [
  { id: "PA-001", action: "Construct locked pesticide storage", farmer: "Maria Santos", farmerId: "FMR-078", category: "Food Safety", priority: "Critical", dueDate: "2024-04-15", status: "Pending" },
  { id: "PA-002", action: "Install water treatment system", farmer: "Ana Rodriguez", farmerId: "FMR-201", category: "Environmental Protection", priority: "High", dueDate: "2024-04-20", status: "In Progress" },
  { id: "PA-003", action: "Update child labor policy documentation", farmer: "Jose Garcia", farmerId: "FMR-132", category: "Labor Standards", priority: "Critical", dueDate: "2024-04-10", status: "Completed" },
  { id: "PA-004", action: "Implement water source protection", farmer: "Pedro Silva", farmerId: "FMR-267", category: "Water Management", priority: "High", dueDate: "2024-04-25", status: "Pending" },
  { id: "PA-005", action: "Create chemical application log system", farmer: "Carlos Mendez", farmerId: "FMR-045", category: "Chemical Usage", priority: "Medium", dueDate: "2024-04-30", status: "In Progress" },
];

export default function SurveyProposedActions() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Proposed Actions</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-create-action">Create Action</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-assign-actions">Assign Actions</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Action ID</TableHead>
              <TableHead>Proposed Action</TableHead>
              <TableHead>Farmer</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockProposedActions.map((action, index) => (
              <TableRow key={action.id} className="hover:bg-muted/30" data-testid={`row-proposed-action-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/survey-proposed-actions/${action.id}`} data-testid={`link-action-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{action.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-action-description-${index}`}>{action.action}</TableCell>
                <TableCell>
                  <Link href={`/producers/${action.farmerId}`} data-testid={`link-farmer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{action.farmer}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${index}`}>{action.category}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={action.priority === "Critical" ? "destructive" : action.priority === "High" ? "outline" : "secondary"} className="text-xs" data-testid={`badge-priority-${index}`}>
                    {action.priority}
                  </Badge>
                </TableCell>
                <TableCell data-testid={`text-due-date-${index}`}>{action.dueDate}</TableCell>
                <TableCell>
                  <Badge variant={action.status === "Completed" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {action.status}
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
                      <DropdownMenuItem data-testid={`menu-update-status-${index}`}>Update Status</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-reassign-${index}`}>Reassign</DropdownMenuItem>
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
