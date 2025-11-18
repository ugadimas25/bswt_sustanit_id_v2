import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Filter, Download, Image } from "lucide-react";
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

const farmImages = [
  { id: 1, objectName: "Field A - Section 1", imageType: "Boundary", count: 4, lastUpdated: "2024-11-15" },
  { id: 2, objectName: "Storage Building", imageType: "Infrastructure", count: 8, lastUpdated: "2024-11-14" },
  { id: 3, objectName: "Irrigation System", imageType: "Equipment", count: 12, lastUpdated: "2024-11-12" },
  { id: 4, objectName: "Field B - Section 2", imageType: "Crop", count: 6, lastUpdated: "2024-11-10" },
  { id: 5, objectName: "Processing Unit", imageType: "Infrastructure", count: 5, lastUpdated: "2024-11-08" },
];

export default function FarmObjectImages() {
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
              <BreadcrumbPage>Farm Object Images</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Farm Object Images</h1>
            <p className="text-muted-foreground mt-1" data-testid="text-page-description">
              Manage images for farm objects and infrastructure
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
            <Button size="default" data-testid="button-upload-image">
              <Plus className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card data-testid="card-stat-total">
            <CardHeader className="pb-2">
              <CardDescription>Total Images</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total">635</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-objects">
            <CardHeader className="pb-2">
              <CardDescription>Farm Objects</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-objects">156</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-recent">
            <CardHeader className="pb-2">
              <CardDescription>Added This Month</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-recent">87</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-size">
            <CardHeader className="pb-2">
              <CardDescription>Total Size</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-size">2.4 GB</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card data-testid="card-table-container">
          <CardHeader>
            <CardTitle data-testid="text-table-title">Farm Object Images</CardTitle>
            <CardDescription data-testid="text-table-description">
              All images associated with farm objects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead data-testid="header-object">Farm Object</TableHead>
                  <TableHead data-testid="header-type">Image Type</TableHead>
                  <TableHead data-testid="header-count">Image Count</TableHead>
                  <TableHead data-testid="header-updated">Last Updated</TableHead>
                  <TableHead data-testid="header-actions">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {farmImages.map((img, index) => (
                  <TableRow key={img.id} data-testid={`row-image-${index}`}>
                    <TableCell data-testid={`cell-object-${index}`}>{img.objectName}</TableCell>
                    <TableCell data-testid={`cell-type-${index}`}>
                      <Badge variant="outline" data-testid={`badge-type-${index}`}>{img.imageType}</Badge>
                    </TableCell>
                    <TableCell data-testid={`cell-count-${index}`}>
                      <div className="flex items-center gap-2">
                        <Image className="h-4 w-4" />
                        {img.count}
                      </div>
                    </TableCell>
                    <TableCell data-testid={`cell-updated-${index}`}>{img.lastUpdated}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" data-testid={`button-view-${index}`}>View Gallery</Button>
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
