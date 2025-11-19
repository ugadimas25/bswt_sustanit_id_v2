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

//todo: remove mock functionality
const mockUsers = [
  {
    email: "andrea.perez@bentangsawit.com",
    firstName: "Andrea",
    lastName: "Perez",
    lastLoggedIn: "",
    active: false,
    isNotBilled: false,
    tenantAdmin: false,
    apiAccessOnly: false,
  },
  {
    email: "aossama84@gmail.com",
    firstName: "Ahmed",
    lastName: "Ossama",
    lastLoggedIn: "25/09/2016 19:41",
    active: false,
    isNotBilled: false,
    tenantAdmin: false,
    apiAccessOnly: false,
  },
  {
    email: "eicsuret@gmail.com",
    firstName: "Eric",
    lastName: "Seuret",
    lastLoggedIn: "16/05/2015 00:00",
    active: false,
    isNotBilled: false,
    tenantAdmin: false,
    apiAccessOnly: false,
  },
  {
    email: "frode.torvund@bentangsawit.com",
    firstName: "Frode",
    lastName: "Torvund",
    lastLoggedIn: "25/02/2020 18:21",
    active: false,
    isNotBilled: false,
    tenantAdmin: false,
    apiAccessOnly: false,
  },
  {
    email: "laura.johnson.blair@gmail.com",
    firstName: "Laura Johnson",
    lastName: "Blair",
    lastLoggedIn: "15/04/2020 18:31",
    active: false,
    isNotBilled: false,
    tenantAdmin: false,
    apiAccessOnly: false,
  },
  {
    email: "marcos.diez@3smobile.com",
    firstName: "Marcos",
    lastName: "Smith",
    lastLoggedIn: "16/09/2015 00:45",
    active: false,
    isNotBilled: false,
    tenantAdmin: false,
    apiAccessOnly: false,
  },
  {
    email: "muhammad.fadly@bentangsawit.com",
    firstName: "Muhammad",
    lastName: "Fadly",
    lastLoggedIn: "19/11/2025 01:13",
    active: true,
    isNotBilled: false,
    tenantAdmin: true,
    apiAccessOnly: false,
  },
  {
    email: "nan.haru@bentangsawit.com",
    firstName: "Nan",
    lastName: "Haru",
    lastLoggedIn: "27/11/2017 14:25",
    active: false,
    isNotBilled: false,
    tenantAdmin: false,
    apiAccessOnly: false,
  },
  {
    email: "nathaphon.mitsattha@bentangsawit.com",
    firstName: "Nathaphon",
    lastName: "Mitsattha",
    lastLoggedIn: "26/01/2021 14:39",
    active: false,
    isNotBilled: false,
    tenantAdmin: false,
    apiAccessOnly: false,
  },
  {
    email: "nicole.thompson@bentangsawit.com",
    firstName: "Nicole",
    lastName: "Thompson",
    lastLoggedIn: "13/05/2016 11:53",
    active: false,
    isNotBilled: false,
    tenantAdmin: false,
    apiAccessOnly: false,
  },
  {
    email: "reu.nyandoro@bentangsawit.com",
    firstName: "Reu",
    lastName: "Nyandoro",
    lastLoggedIn: "11/03/2020 04:01",
    active: false,
    isNotBilled: false,
    tenantAdmin: false,
    apiAccessOnly: false,
  },
  {
    email: "senp@hotmail.com",
    firstName: "Spencer",
    lastName: "Morley",
    lastLoggedIn: "05/05/2020 11:31",
    active: false,
    isNotBilled: false,
    tenantAdmin: true,
    apiAccessOnly: true,
  },
  {
    email: "surajit.sinha@bentangsawit.com",
    firstName: "Surajit",
    lastName: "Sinha",
    lastLoggedIn: "26/08/2019 12:15",
    active: false,
    isNotBilled: false,
    tenantAdmin: false,
    apiAccessOnly: false,
  },
  {
    email: "thamrongsak.kittisak@bentangsawit.com",
    firstName: "Thamrongsak",
    lastName: "Kittisak",
    lastLoggedIn: "31/12/2019 10:55",
    active: false,
    isNotBilled: false,
    tenantAdmin: false,
    apiAccessOnly: false,
  },
  {
    email: "vilde.nakkim@bentangsawit.com",
    firstName: "Vilde",
    lastName: "Nakkim",
    lastLoggedIn: "24/08/2020 16:42",
    active: false,
    isNotBilled: false,
    tenantAdmin: false,
    apiAccessOnly: false,
  },
];

export default function Users() {
  return (
    <div className="space-y-4 -m-6">
      {/* Header */}
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/system">System</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Users</BreadcrumbPage>
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
            <DropdownMenuItem>Add User</DropdownMenuItem>
            <DropdownMenuItem>Import Users</DropdownMenuItem>
            <DropdownMenuItem>Export to CSV</DropdownMenuItem>
            <DropdownMenuItem>Manage Permissions</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Email</TableHead>
                <TableHead className="font-medium">First Name</TableHead>
                <TableHead className="font-medium">Last Name</TableHead>
                <TableHead className="font-medium">Last Logged In</TableHead>
                <TableHead className="font-medium">Active</TableHead>
                <TableHead className="font-medium">Is Not billed</TableHead>
                <TableHead className="font-medium">Tenant Admin</TableHead>
                <TableHead className="font-medium">API Access Only</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user, index) => (
                <TableRow 
                  key={user.email}
                  className="hover:bg-muted/30"
                  data-testid={`row-user-${index}`}
                >
                  <TableCell className="font-medium">
                    <Link href={`/users/${user.email}`}>
                      <span className="text-primary hover:underline cursor-pointer text-sm">
                        {user.email}
                      </span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-sm">{user.firstName}</TableCell>
                  <TableCell className="text-sm">{user.lastName}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {user.lastLoggedIn}
                  </TableCell>
                  <TableCell>
                    {user.active ? (
                      <Badge variant="secondary" className="text-xs">True</Badge>
                    ) : (
                      <span className="text-sm text-muted-foreground">False</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">
                      {user.isNotBilled ? "True" : "False"}
                    </span>
                  </TableCell>
                  <TableCell>
                    {user.tenantAdmin ? (
                      <Badge variant="secondary" className="text-xs">True</Badge>
                    ) : (
                      <span className="text-sm text-muted-foreground">False</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {user.apiAccessOnly ? (
                      <Badge variant="secondary" className="text-xs">True</Badge>
                    ) : (
                      <span className="text-sm text-muted-foreground">False</span>
                    )}
                  </TableCell>
                  <TableCell>
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
                        <DropdownMenuItem>Edit User</DropdownMenuItem>
                        <DropdownMenuItem>Change Password</DropdownMenuItem>
                        <DropdownMenuItem>Toggle Active Status</DropdownMenuItem>
                        <DropdownMenuItem>Manage Roles</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      
      {/* Pagination Footer */}
      <div className="px-6 pb-6 flex items-center justify-end text-sm text-muted-foreground">
        <span>View 1 - 15 of 15</span>
      </div>
    </div>
  );
}
