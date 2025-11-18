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

const mockFamilyMembers = [
  { id: "FM-001", farmer: "AGNES Adeleye", name: "Emmanuel Adeleye", relationship: "Spouse", age: 42, education: "Secondary", workingOnFarm: true },
  { id: "FM-002", farmer: "AGNES Adeleye", name: "Grace Adeleye", relationship: "Child", age: 14, education: "Primary", workingOnFarm: false },
  { id: "FM-003", farmer: "Bima Anwar", name: "Siti Anwar", relationship: "Spouse", age: 38, education: "Secondary", workingOnFarm: true },
  { id: "FM-004", farmer: "Bima Anwar", name: "Ahmad Anwar", relationship: "Child", age: 16, education: "Secondary", workingOnFarm: false },
];

export default function FamilyMembers() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/producers">Farmers</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Family Members</BreadcrumbPage>
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
            <DropdownMenuItem>Add Family Member</DropdownMenuItem>
            <DropdownMenuItem>Import Data</DropdownMenuItem>
            <DropdownMenuItem>Export to CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Member ID</TableHead>
                <TableHead className="font-medium">Farmer</TableHead>
                <TableHead className="font-medium">Name</TableHead>
                <TableHead className="font-medium">Relationship</TableHead>
                <TableHead className="font-medium">Age</TableHead>
                <TableHead className="font-medium">Education</TableHead>
                <TableHead className="font-medium">Working on Farm</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockFamilyMembers.map((member) => (
                <TableRow key={member.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">
                    <Link href={`/family-members/${member.id}`}>
                      <span className="text-primary hover:underline cursor-pointer">{member.id}</span>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`/producers/${member.farmer}`}>
                      <span className="text-sm hover:underline cursor-pointer">{member.farmer}</span>
                    </Link>
                  </TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{member.relationship}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-center">{member.age}</TableCell>
                  <TableCell className="text-sm">{member.education}</TableCell>
                  <TableCell className="text-sm">{member.workingOnFarm ? "Yes" : "No"}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
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
