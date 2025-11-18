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

const certificateStates = [
  { id: 1, state: "Active", description: "Certificate is currently valid", count: 1245 },
  { id: 2, state: "Pending", description: "Awaiting approval", count: 83 },
  { id: 3, state: "Expired", description: "Certificate has expired", count: 234 },
  { id: 4, state: "Suspended", description: "Temporarily suspended", count: 12 },
  { id: 5, state: "Revoked", description: "Certificate revoked", count: 5 },
];

export default function CertificateStates() {
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
              <BreadcrumbPage>Certificate States</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Certificate States</h1>
            <p className="text-muted-foreground mt-1" data-testid="text-page-description">
              Manage certification status categories
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
            <Button size="default" data-testid="button-add-state">
              <Plus className="h-4 w-4 mr-2" />
              Add State
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card data-testid="card-stat-total">
            <CardHeader className="pb-2">
              <CardDescription>Total States</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total">{certificateStates.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-active">
            <CardHeader className="pb-2">
              <CardDescription>Active Certificates</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-active">1,245</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-pending">
            <CardHeader className="pb-2">
              <CardDescription>Pending</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-pending">83</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-expired">
            <CardHeader className="pb-2">
              <CardDescription>Expired</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-expired">234</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card data-testid="card-table-container">
          <CardHeader>
            <CardTitle data-testid="text-table-title">Certificate States</CardTitle>
            <CardDescription data-testid="text-table-description">
              All certification status categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead data-testid="header-state">State</TableHead>
                  <TableHead data-testid="header-description">Description</TableHead>
                  <TableHead data-testid="header-count">Certificate Count</TableHead>
                  <TableHead data-testid="header-actions">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certificateStates.map((state, index) => (
                  <TableRow key={state.id} data-testid={`row-state-${index}`}>
                    <TableCell data-testid={`cell-state-${index}`}>
                      <Badge variant="outline" data-testid={`badge-state-${index}`}>{state.state}</Badge>
                    </TableCell>
                    <TableCell data-testid={`cell-description-${index}`}>{state.description}</TableCell>
                    <TableCell data-testid={`cell-count-${index}`}>{state.count}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" data-testid={`button-edit-${index}`}>Edit</Button>
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
