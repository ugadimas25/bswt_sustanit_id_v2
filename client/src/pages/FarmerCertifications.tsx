import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Filter, Download } from "lucide-react";
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

const farmerCerts = [
  { id: 1, farmer: "John Smith", certification: "Organic", issueDate: "2024-01-15", expiryDate: "2025-01-15", status: "Active" },
  { id: 2, farmer: "Mary Johnson", certification: "Fair Trade", issueDate: "2023-11-20", expiryDate: "2024-11-20", status: "Expiring Soon" },
  { id: 3, farmer: "David Chen", certification: "Rainforest Alliance", issueDate: "2024-03-10", expiryDate: "2026-03-10", status: "Active" },
  { id: 4, farmer: "Sarah Williams", certification: "UTZ", issueDate: "2023-08-05", expiryDate: "2024-08-05", status: "Expired" },
  { id: 5, farmer: "Ahmed Hassan", certification: "Organic", issueDate: "2024-06-12", expiryDate: "2025-06-12", status: "Active" },
];

export default function FarmerCertifications() {
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
              <BreadcrumbPage>Farmer Certifications</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Farmer Certifications</h1>
            <p className="text-muted-foreground mt-1" data-testid="text-page-description">
              Track individual farmer certification status
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
            <Button size="default" data-testid="button-add-certification">
              <Plus className="h-4 w-4 mr-2" />
              Add Certification
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card data-testid="card-stat-total">
            <CardHeader className="pb-2">
              <CardDescription>Total Certifications</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total">1,847</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-active">
            <CardHeader className="pb-2">
              <CardDescription>Active</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-active">1,523</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-expiring">
            <CardHeader className="pb-2">
              <CardDescription>Expiring Soon</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-expiring">198</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-expired">
            <CardHeader className="pb-2">
              <CardDescription>Expired</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-expired">126</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card data-testid="card-table-container">
          <CardHeader>
            <CardTitle data-testid="text-table-title">Farmer Certifications</CardTitle>
            <CardDescription data-testid="text-table-description">
              All farmer certification records
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead data-testid="header-farmer">Farmer</TableHead>
                  <TableHead data-testid="header-certification">Certification</TableHead>
                  <TableHead data-testid="header-issue">Issue Date</TableHead>
                  <TableHead data-testid="header-expiry">Expiry Date</TableHead>
                  <TableHead data-testid="header-status">Status</TableHead>
                  <TableHead data-testid="header-actions">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {farmerCerts.map((cert, index) => (
                  <TableRow key={cert.id} data-testid={`row-certification-${index}`}>
                    <TableCell data-testid={`cell-farmer-${index}`}>{cert.farmer}</TableCell>
                    <TableCell data-testid={`cell-certification-${index}`}>
                      <Badge variant="outline" data-testid={`badge-certification-${index}`}>{cert.certification}</Badge>
                    </TableCell>
                    <TableCell data-testid={`cell-issue-${index}`}>{cert.issueDate}</TableCell>
                    <TableCell data-testid={`cell-expiry-${index}`}>{cert.expiryDate}</TableCell>
                    <TableCell data-testid={`cell-status-${index}`}>
                      <Badge 
                        variant={cert.status === "Active" ? "default" : cert.status === "Expiring Soon" ? "secondary" : "destructive"} 
                        data-testid={`badge-status-${index}`}
                      >
                        {cert.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" data-testid={`button-view-${index}`}>View Details</Button>
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
