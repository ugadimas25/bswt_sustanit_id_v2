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

const mockTopics = [
  { id: "TT-001", topicName: "Coffee Quality Control", category: "Quality Management", sessionsHeld: "45", averageAttendance: "32", lastDelivered: "2024-03-15", status: "Active" },
  { id: "TT-002", topicName: "Organic Certification Process", category: "Certification", sessionsHeld: "38", averageAttendance: "28", lastDelivered: "2024-03-14", status: "Active" },
  { id: "TT-003", topicName: "Cocoa Fermentation", category: "Processing", sessionsHeld: "52", averageAttendance: "35", lastDelivered: "2024-03-13", status: "Active" },
  { id: "TT-004", topicName: "Sustainable Practices", category: "Sustainability", sessionsHeld: "61", averageAttendance: "40", lastDelivered: "2024-03-12", status: "Active" },
  { id: "TT-005", topicName: "Integrated Pest Management", category: "Pest Control", sessionsHeld: "29", averageAttendance: "22", lastDelivered: "2024-02-28", status: "Inactive" },
];

export default function TrainingTopics() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/training" data-testid="breadcrumb-training">Training</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Training Topics</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-create-topic">Create Topic</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-manage-categories">Manage Categories</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Topic ID</TableHead>
              <TableHead>Topic Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Sessions Held</TableHead>
              <TableHead className="text-right">Avg Attendance</TableHead>
              <TableHead>Last Delivered</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTopics.map((topic, index) => (
              <TableRow key={topic.id} className="hover:bg-muted/30" data-testid={`row-topic-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/training-topics/${topic.id}`} data-testid={`link-topic-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{topic.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-topic-name-${index}`}>{topic.topicName}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${index}`}>{topic.category}</Badge>
                </TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-sessions-held-${index}`}>{topic.sessionsHeld}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-avg-attendance-${index}`}>{topic.averageAttendance}</TableCell>
                <TableCell data-testid={`text-last-delivered-${index}`}>{topic.lastDelivered}</TableCell>
                <TableCell>
                  <Badge variant={topic.status === "Active" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {topic.status}
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
                      <DropdownMenuItem data-testid={`menu-view-sessions-${index}`}>View Sessions</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-update-materials-${index}`}>Update Materials</DropdownMenuItem>
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
