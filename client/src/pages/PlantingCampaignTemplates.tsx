import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const mockTemplates = [
  { templateId: "TPL-001", name: "Standard Palm Oil Campaign", cropType: "Palm Oil", duration: "12 months", activities: 15, usageCount: 8, status: "Active" },
  { templateId: "TPL-002", name: "Coffee Growing Season", cropType: "Coffee", duration: "8 months", activities: 12, usageCount: 3, status: "Active" },
  { templateId: "TPL-003", name: "Organic Palm Oil Certification", cropType: "Palm Oil", duration: "12 months", activities: 22, usageCount: 2, status: "Active" },
];

export default function PlantingCampaignTemplates() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/planting-campaigns" data-testid="breadcrumb-planting-campaigns">Planting Campaigns</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Campaign Templates</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-create-template">Create Template</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-import-template">Import Template</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-csv">Export to CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Template ID</TableHead>
                <TableHead className="font-medium">Name</TableHead>
                <TableHead className="font-medium">Crop Type</TableHead>
                <TableHead className="font-medium">Duration</TableHead>
                <TableHead className="font-medium">Activities</TableHead>
                <TableHead className="font-medium">Usage Count</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTemplates.map((template, index) => (
                <TableRow key={template.templateId} className="hover:bg-muted/30" data-testid={`row-template-${index}`}>
                  <TableCell className="font-medium">
                    <Link href={`/planting-campaign-templates/${template.templateId}`} data-testid={`link-template-${index}`}>
                      <span className="text-primary hover:underline cursor-pointer">{template.templateId}</span>
                    </Link>
                  </TableCell>
                  <TableCell>{template.name}</TableCell>
                  <TableCell>{template.cropType}</TableCell>
                  <TableCell className="text-sm">{template.duration}</TableCell>
                  <TableCell className="text-right">{template.activities}</TableCell>
                  <TableCell className="text-right">{template.usageCount}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">{template.status}</Badge>
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
                        <DropdownMenuItem data-testid={`menu-edit-${index}`}>Edit Template</DropdownMenuItem>
                        <DropdownMenuItem data-testid={`menu-duplicate-${index}`}>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem data-testid={`menu-create-campaign-${index}`}>Create Campaign from Template</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
