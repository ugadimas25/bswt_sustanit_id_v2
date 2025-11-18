import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Download, Clock } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const farmerActivity = [
  { id: 1, farmer: "John Smith", lastActivity: "Harvest Submitted", date: "2024-11-18 14:30", daysAgo: 0 },
  { id: 2, farmer: "Mary Johnson", lastActivity: "Training Attended", date: "2024-11-17 09:15", daysAgo: 1 },
  { id: 3, farmer: "David Chen", lastActivity: "Survey Completed", date: "2024-11-16 16:45", daysAgo: 2 },
  { id: 4, farmer: "Sarah Williams", lastActivity: "Input Received", date: "2024-11-10 11:20", daysAgo: 8 },
  { id: 5, farmer: "Ahmed Hassan", lastActivity: "Field Updated", date: "2024-10-28 08:30", daysAgo: 21 },
];

export default function FarmerLastActivity() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Breadcrumb data-testid="breadcrumb-navigation">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/producers">Farmers</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Farmer Last Activity</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Farmer Last Activity</h1>
            <p className="text-muted-foreground mt-1" data-testid="text-page-description">
              Track farmer engagement and recent activities
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="default" data-testid="button-filter">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="default" data-testid="button-export">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card data-testid="card-stat-active-today">
            <CardHeader className="pb-2">
              <CardDescription>Active Today</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-active-today">234</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-week">
            <CardHeader className="pb-2">
              <CardDescription>Active This Week</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-week">892</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-month">
            <CardHeader className="pb-2">
              <CardDescription>Active This Month</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-month">1,456</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-inactive">
            <CardHeader className="pb-2">
              <CardDescription>Inactive &gt;30 Days</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-inactive">178</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card data-testid="card-table-container">
          <CardHeader>
            <CardTitle data-testid="text-table-title">Recent Farmer Activity</CardTitle>
            <CardDescription data-testid="text-table-description">
              Latest activities by farmers in the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead data-testid="header-farmer">Farmer</TableHead>
                  <TableHead data-testid="header-activity">Last Activity</TableHead>
                  <TableHead data-testid="header-date">Date & Time</TableHead>
                  <TableHead data-testid="header-days">Days Ago</TableHead>
                  <TableHead data-testid="header-actions">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {farmerActivity.map((activity, index) => (
                  <TableRow key={activity.id} data-testid={`row-activity-${index}`}>
                    <TableCell data-testid={`cell-farmer-${index}`}>{activity.farmer}</TableCell>
                    <TableCell data-testid={`cell-activity-${index}`}>
                      <Badge variant="outline" data-testid={`badge-activity-${index}`}>{activity.lastActivity}</Badge>
                    </TableCell>
                    <TableCell data-testid={`cell-date-${index}`}>{activity.date}</TableCell>
                    <TableCell data-testid={`cell-days-${index}`}>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {activity.daysAgo} {activity.daysAgo === 1 ? 'day' : 'days'}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" data-testid={`button-view-${index}`}>View History</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
