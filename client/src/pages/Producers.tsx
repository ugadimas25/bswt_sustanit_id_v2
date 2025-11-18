import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ChevronDown, User } from "lucide-react";
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

//todo: remove mock functionality
const mockProducers = [
  {
    farmerId: "PN8049.64.2",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    certificationId: "",
    village: "",
    nationalIdType: "",
    groups: "",
    farmerTags: "Demo",
    hasLocation: false,
  },
  {
    farmerId: "INA-1860",
    firstName: "ADEDEJI",
    lastName: "ABU HALIFAH",
    mobileNumber: "",
    certificationId: "INA-1860",
    village: "",
    nationalIdType: "",
    groups: "",
    farmerTags: "Demo",
    hasLocation: false,
  },
  {
    farmerId: "INA-1915",
    firstName: "ADEDOKUN",
    lastName: "ADAM",
    mobileNumber: "",
    certificationId: "INA-1915",
    village: "",
    nationalIdType: "",
    groups: "",
    farmerTags: "Demo",
    hasLocation: false,
  },
  {
    farmerId: "INA-1968",
    firstName: "AINA",
    lastName: "ADDA",
    mobileNumber: "",
    certificationId: "INA-1968",
    village: "",
    nationalIdType: "",
    groups: "",
    farmerTags: "Demo",
    hasLocation: false,
  },
  {
    farmerId: "INA-1591",
    firstName: "AJIBOYE",
    lastName: "ADEL AWARIDZA",
    mobileNumber: "",
    certificationId: "INA-1591",
    village: "",
    nationalIdType: "",
    groups: "",
    farmerTags: "Demo",
    hasLocation: false,
  },
  {
    farmerId: "INA-1711",
    firstName: "AGNES",
    lastName: "Adeleye",
    mobileNumber: "+2347056404840",
    certificationId: "INA-1711",
    village: "AASA",
    nationalIdType: "",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
  },
  {
    farmerId: "INA-1588",
    firstName: "MARIAM",
    lastName: "Adeleye",
    mobileNumber: "+2347033298559",
    certificationId: "INA-1588",
    village: "AASA",
    nationalIdType: "",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
  },
  {
    farmerId: "INA-1589",
    firstName: "ORIOWO",
    lastName: "Adeleye",
    mobileNumber: "+2348066526522",
    certificationId: "INA-1589",
    village: "AASA",
    nationalIdType: "",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
  },
  {
    farmerId: "INA-1906",
    firstName: "RAJI",
    lastName: "ADELOGBA",
    mobileNumber: "+2348060242495",
    certificationId: "INA-1906",
    village: "AASA",
    nationalIdType: "",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
  },
  {
    farmerId: "INA-1729",
    firstName: "RASIDI",
    lastName: "Adelogoye",
    mobileNumber: "+2347056404848",
    certificationId: "INA-1729",
    village: "AASA",
    nationalIdType: "",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
  },
  {
    farmerId: "INA-1548",
    firstName: "Akanji",
    lastName: "ADELOKUN",
    mobileNumber: "+2347033298552",
    certificationId: "INA-1548",
    village: "AASA",
    nationalIdType: "",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
  },
  {
    farmerId: "INA-1415",
    firstName: "BEATRICE",
    lastName: "ADELOLA",
    mobileNumber: "+2348060242490",
    certificationId: "INA-1415",
    village: "AASA",
    nationalIdType: "",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
  },
];

export default function Producers() {
  return (
    <div className="space-y-4 -m-6">
      {/* Header */}
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/producers">Farmers</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Farmers</BreadcrumbPage>
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
            <DropdownMenuItem>Add New Farmer</DropdownMenuItem>
            <DropdownMenuItem>Import Farmers</DropdownMenuItem>
            <DropdownMenuItem>Export to CSV</DropdownMenuItem>
            <DropdownMenuItem>Bulk Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Farmer ID</TableHead>
                <TableHead className="font-medium">First Name</TableHead>
                <TableHead className="font-medium">Last Name</TableHead>
                <TableHead className="font-medium">Mobile Number</TableHead>
                <TableHead className="font-medium">Certification ID</TableHead>
                <TableHead className="font-medium">Village</TableHead>
                <TableHead className="font-medium">National ID Type</TableHead>
                <TableHead className="font-medium">Groups</TableHead>
                <TableHead className="font-medium">Farmer Tags</TableHead>
                <TableHead className="w-[100px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockProducers.map((producer, index) => (
                <TableRow 
                  key={producer.farmerId}
                  className="hover:bg-muted/30"
                  data-testid={`row-farmer-${index}`}
                >
                  <TableCell className="font-medium">
                    <Link href={`/producers/${producer.farmerId}`}>
                      <span className="text-primary hover:underline cursor-pointer">
                        {producer.farmerId}
                      </span>
                    </Link>
                  </TableCell>
                  <TableCell>{producer.firstName}</TableCell>
                  <TableCell>{producer.lastName}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {producer.mobileNumber}
                  </TableCell>
                  <TableCell>{producer.certificationId}</TableCell>
                  <TableCell>{producer.village}</TableCell>
                  <TableCell>{producer.nationalIdType}</TableCell>
                  <TableCell>
                    {producer.groups && (
                      <Link href={`/groups/${producer.groups}`}>
                        <span className="text-primary hover:underline cursor-pointer text-sm">
                          {producer.groups}
                        </span>
                      </Link>
                    )}
                  </TableCell>
                  <TableCell>
                    {producer.farmerTags && (
                      <Badge 
                        variant={producer.farmerTags === "Certified" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {producer.farmerTags}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 justify-end">
                      {producer.hasLocation && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          data-testid={`button-map-${index}`}
                        >
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        data-testid={`button-profile-${index}`}
                      >
                        <User className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            data-testid={`button-row-actions-${index}`}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Farmer</DropdownMenuItem>
                          <DropdownMenuItem>View Fields</DropdownMenuItem>
                          <DropdownMenuItem>View Training</DropdownMenuItem>
                          <DropdownMenuItem>View Surveys</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
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
