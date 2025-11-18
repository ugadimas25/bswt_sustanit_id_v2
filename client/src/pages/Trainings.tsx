import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ChevronDown, FileText } from "lucide-react";
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
const mockTrainings = [
  {
    eventDate: "06/05/2020 00:51",
    trainingId: "9",
    topic: "Irrigation Best Practices",
    trainers: "Spencer Morley",
    farmer: "Eri Baldo",
    mobile: "+62869821002",
    groups: "Nugu",
    attendDate: "05/05/2020 17:52",
    hasLocation: false,
  },
  {
    eventDate: "06/05/2020 00:51",
    trainingId: "9",
    topic: "Irrigation Best Practices",
    trainers: "Spencer Morley",
    farmer: "Bima Anwar",
    mobile: "+62869821001",
    groups: "EUDR_APPROVED Nugu",
    attendDate: "05/05/2020 17:52",
    hasLocation: true,
  },
  {
    eventDate: "06/05/2020 00:51",
    trainingId: "9",
    topic: "Irrigation Best Practices",
    trainers: "Spencer Morley",
    farmer: "Imam Effendi",
    mobile: "+62869821004",
    groups: "Nugu",
    attendDate: "05/05/2020 17:52",
    hasLocation: false,
  },
  {
    eventDate: "06/05/2020 00:51",
    trainingId: "9",
    topic: "Irrigation Best Practices",
    trainers: "Spencer Morley",
    farmer: "Hartono Dwi",
    mobile: "+62869821003",
    groups: "Nugu",
    attendDate: "05/05/2020 17:52",
    hasLocation: false,
  },
  {
    eventDate: "04/05/2020 21:17",
    trainingId: "8",
    topic: "Irrigation Best Practices",
    trainers: "Spencer Morley",
    farmer: "Eri Baldo",
    mobile: "+62869821002",
    groups: "Nugu",
    attendDate: "05/05/2020 14:17",
    hasLocation: true,
  },
  {
    eventDate: "04/05/2020 21:17",
    trainingId: "8",
    topic: "Irrigation Best Practices",
    trainers: "Spencer Morley",
    farmer: "Hartono Dwi",
    mobile: "+62869821003",
    groups: "Nugu",
    attendDate: "05/05/2020 14:17",
    hasLocation: false,
  },
  {
    eventDate: "04/05/2020 21:17",
    trainingId: "8",
    topic: "Irrigation Best Practices",
    trainers: "Spencer Morley",
    farmer: "Imam Effendi",
    mobile: "+62869821004",
    groups: "Nugu",
    attendDate: "05/05/2020 14:17",
    hasLocation: false,
  },
  {
    eventDate: "04/05/2020 21:17",
    trainingId: "8",
    topic: "Irrigation Best Practices",
    trainers: "Spencer Morley",
    farmer: "Kuncoro Kartiko",
    mobile: "+62869822001",
    groups: "Nugu",
    attendDate: "05/05/2020 14:17",
    hasLocation: false,
  },
  {
    eventDate: "04/05/2020 21:17",
    trainingId: "8",
    topic: "Irrigation Best Practices",
    trainers: "Spencer Morley",
    farmer: "Jainako Iranko",
    mobile: "+62869821005",
    groups: "Nugu",
    attendDate: "05/05/2020 14:17",
    hasLocation: false,
  },
  {
    eventDate: "04/05/2020 21:17",
    trainingId: "8",
    topic: "Irrigation Best Practices",
    trainers: "Spencer Morley",
    farmer: "Bima Anwar",
    mobile: "+62869821001",
    groups: "EUDR_APPROVED Nugu",
    attendDate: "05/05/2020 14:17",
    hasLocation: false,
  },
  {
    eventDate: "01/04/2019 21:38",
    trainingId: "3",
    topic: "Irrigation Best Practices",
    trainers: "Spencer Morley",
    farmer: "Spencer Morley",
    mobile: "+14245550102",
    groups: "",
    attendDate: "12/07/2019 17:02",
    hasLocation: false,
  },
  {
    eventDate: "01/04/2019 21:38",
    trainingId: "3",
    topic: "Irrigation Best Practices",
    trainers: "Spencer Morley",
    farmer: "Widodo Santoso",
    mobile: "+62896523561",
    groups: "Nugu",
    attendDate: "12/07/2019 10:05",
    hasLocation: false,
  },
  {
    eventDate: "16/05/2019 18:46",
    trainingId: "6",
    topic: "Ground Cover for Oil Palm",
    trainers: "Bill Smith",
    farmer: "Eri Baldo",
    mobile: "+62869821002",
    groups: "Nugu",
    attendDate: "16/05/2019 11:47",
    hasLocation: false,
  },
  {
    eventDate: "16/05/2019 18:46",
    trainingId: "6",
    topic: "Ground Cover for Oil Palm",
    trainers: "Bill Smith",
    farmer: "Hartono Dwi",
    mobile: "+62869821003",
    groups: "Nugu",
    attendDate: "16/05/2019 11:47",
    hasLocation: false,
  },
];

export default function Trainings() {
  return (
    <div className="space-y-4 -m-6">
      {/* Header */}
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/trainings">Training</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Farmer Trainings</BreadcrumbPage>
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
            <DropdownMenuItem>Add Training Event</DropdownMenuItem>
            <DropdownMenuItem>Import Attendance</DropdownMenuItem>
            <DropdownMenuItem>Export to CSV</DropdownMenuItem>
            <DropdownMenuItem>View Analytics</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Training Event Date</TableHead>
                <TableHead className="font-medium">Training ID</TableHead>
                <TableHead className="font-medium">Topic</TableHead>
                <TableHead className="font-medium">Trainers</TableHead>
                <TableHead className="font-medium">Farmer</TableHead>
                <TableHead className="font-medium">Mobile</TableHead>
                <TableHead className="font-medium">Groups</TableHead>
                <TableHead className="font-medium">Attend Date</TableHead>
                <TableHead className="w-[100px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTrainings.map((training, index) => (
                <TableRow 
                  key={`${training.trainingId}-${index}`}
                  className="hover:bg-muted/30"
                  data-testid={`row-training-${index}`}
                >
                  <TableCell className="text-sm">{training.eventDate}</TableCell>
                  <TableCell className="font-medium">{training.trainingId}</TableCell>
                  <TableCell>{training.topic}</TableCell>
                  <TableCell className="text-sm">{training.trainers}</TableCell>
                  <TableCell>
                    {training.farmer && (
                      <Link href={`/producers/${training.farmer}`}>
                        <span className="text-primary hover:underline cursor-pointer text-sm">
                          {training.farmer}
                        </span>
                      </Link>
                    )}
                  </TableCell>
                  <TableCell className="text-sm">{training.mobile}</TableCell>
                  <TableCell>
                    {training.groups && (
                      <span className="text-sm">
                        {training.groups.includes("EUDR_APPROVED") ? (
                          <>
                            <Badge variant="secondary" className="text-xs mr-1">EUDR_APPROVED</Badge>
                            <span className="text-sm">Nugu</span>
                          </>
                        ) : (
                          training.groups
                        )}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-sm">{training.attendDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 justify-end">
                      {training.hasLocation && (
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
                        data-testid={`button-document-${index}`}
                      >
                        <FileText className="h-4 w-4 text-muted-foreground" />
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
                          <DropdownMenuItem>Edit Attendance</DropdownMenuItem>
                          <DropdownMenuItem>View Certificate</DropdownMenuItem>
                          <DropdownMenuItem>View on Map</DropdownMenuItem>
                          <DropdownMenuItem>Export Record</DropdownMenuItem>
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
