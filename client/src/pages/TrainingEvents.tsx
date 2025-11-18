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

const mockEvents = [
  { id: "TE-001", eventName: "Coffee Quality Management", trainer: "John Smith", trainerId: "TR-001", date: "2024-03-18", location: "North Region Center", attendees: "32", topic: "Quality Control", status: "Scheduled" },
  { id: "TE-002", eventName: "Organic Certification Workshop", trainer: "Sarah Johnson", trainerId: "TR-002", date: "2024-03-17", location: "South Valley Hall", attendees: "28", topic: "Certification", status: "In Progress" },
  { id: "TE-003", eventName: "Cocoa Fermentation Techniques", trainer: "Mike Davis", trainerId: "TR-003", date: "2024-03-15", location: "East Plains Center", attendees: "35", topic: "Processing", status: "Completed" },
  { id: "TE-004", eventName: "Sustainable Farming Practices", trainer: "Lisa Brown", trainerId: "TR-004", date: "2024-03-20", location: "Central Region Hub", attendees: "40", topic: "Sustainability", status: "Scheduled" },
  { id: "TE-005", eventName: "Pest Control Methods", trainer: "Tom Wilson", trainerId: "TR-005", date: "2024-03-14", location: "West Hills Center", attendees: "22", topic: "Pest Management", status: "Completed" },
];

export default function TrainingEvents() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Training Events</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-create-event">Create Event</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-view-calendar">View Calendar</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event ID</TableHead>
              <TableHead>Event Name</TableHead>
              <TableHead>Trainer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Attendees</TableHead>
              <TableHead>Topic</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockEvents.map((event, index) => (
              <TableRow key={event.id} className="hover:bg-muted/30" data-testid={`row-event-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/training-events/${event.id}`} data-testid={`link-event-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{event.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-event-name-${index}`}>{event.eventName}</TableCell>
                <TableCell>
                  <Link href={`/trainers/${event.trainerId}`} data-testid={`link-trainer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{event.trainer}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-date-${index}`}>{event.date}</TableCell>
                <TableCell data-testid={`text-location-${index}`}>{event.location}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-attendees-${index}`}>{event.attendees}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-topic-${index}`}>{event.topic}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={event.status === "Completed" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {event.status}
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
                      <DropdownMenuItem data-testid={`menu-view-attendees-${index}`}>View Attendees</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-reschedule-${index}`}>Reschedule</DropdownMenuItem>
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
