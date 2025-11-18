import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Smartphone } from "lucide-react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockDevices = [
  { deviceId: "DEV-TAB-001", deviceName: "Field Tablet A1", type: "Tablet", assignedTo: "Muhammad Fadly", lastSync: "18/11/2025 14:32", batteryLevel: "87%", appVersion: "v4.2.1", status: "Online" },
  { deviceId: "DEV-TAB-002", deviceName: "Field Tablet A2", type: "Tablet", assignedTo: "Spencer Morley", lastSync: "18/11/2025 11:15", batteryLevel: "62%", appVersion: "v4.2.1", status: "Online" },
  { deviceId: "DEV-PHN-012", deviceName: "Surveyor Phone 12", type: "Smartphone", assignedTo: "Nicole Thompson", lastSync: "17/11/2025 16:20", batteryLevel: "45%", appVersion: "v4.1.8", status: "Offline" },
];

export default function Devices() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/devices">Devices</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Field Devices</BreadcrumbPage>
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
            <DropdownMenuItem>Register Device</DropdownMenuItem>
            <DropdownMenuItem>Force Sync All</DropdownMenuItem>
            <DropdownMenuItem>Device Report</DropdownMenuItem>
            <DropdownMenuItem>Export to CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Devices</CardTitle>
              <Smartphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">3</div>
              <p className="text-xs text-muted-foreground mt-1">Registered</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Online</CardTitle>
              <Smartphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">2</div>
              <p className="text-xs text-muted-foreground mt-1">Connected</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Offline</CardTitle>
              <Smartphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">1</div>
              <p className="text-xs text-muted-foreground mt-1">Needs attention</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Device ID</TableHead>
                <TableHead className="font-medium">Device Name</TableHead>
                <TableHead className="font-medium">Type</TableHead>
                <TableHead className="font-medium">Assigned To</TableHead>
                <TableHead className="font-medium">Last Sync</TableHead>
                <TableHead className="font-medium">Battery</TableHead>
                <TableHead className="font-medium">App Version</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDevices.map((device, index) => (
                <TableRow key={device.deviceId} className="hover:bg-muted/30" data-testid={`row-device-${index}`}>
                  <TableCell className="font-medium">
                    <Link href={`/devices/${device.deviceId}`}>
                      <span className="text-primary hover:underline cursor-pointer">{device.deviceId}</span>
                    </Link>
                  </TableCell>
                  <TableCell>{device.deviceName}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{device.type}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{device.assignedTo}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{device.lastSync}</TableCell>
                  <TableCell className="text-sm">{device.batteryLevel}</TableCell>
                  <TableCell className="text-sm">{device.appVersion}</TableCell>
                  <TableCell>
                    <Badge variant={device.status === "Online" ? "secondary" : "outline"} className="text-xs">
                      {device.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7" data-testid={`button-actions-${index}`}>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Force Sync</DropdownMenuItem>
                        <DropdownMenuItem>View Activity Log</DropdownMenuItem>
                        <DropdownMenuItem>Deregister Device</DropdownMenuItem>
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
