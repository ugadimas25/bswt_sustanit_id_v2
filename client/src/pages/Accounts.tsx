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

const mockAccounts = [
  { accountNumber: "ACC-001-2024", farmer: "AGNES Adeleye", accountType: "Farmer Account", balance: "$2,450.00", lastTransaction: "18/11/2025", status: "Active" },
  { accountNumber: "ACC-002-2024", farmer: "Bima Anwar", accountType: "Farmer Account", balance: "$1,875.50", lastTransaction: "17/11/2025", status: "Active" },
  { accountNumber: "ACC-003-2024", farmer: "Eri Baldo", accountType: "Farmer Account", balance: "$3,120.00", lastTransaction: "15/11/2025", status: "Active" },
  { accountNumber: "ACC-004-2023", farmer: "AHMAD GUNAWAN", accountType: "Farmer Account", balance: "$0.00", lastTransaction: "25/08/2024", status: "Inactive" },
];

export default function Accounts() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/accounts">Accounts</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Farmer Accounts</BreadcrumbPage>
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
            <DropdownMenuItem>Create Account</DropdownMenuItem>
            <DropdownMenuItem>Record Payment</DropdownMenuItem>
            <DropdownMenuItem>Generate Statement</DropdownMenuItem>
            <DropdownMenuItem>Export to CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Account Number</TableHead>
                <TableHead className="font-medium">Farmer</TableHead>
                <TableHead className="font-medium">Account Type</TableHead>
                <TableHead className="font-medium">Balance</TableHead>
                <TableHead className="font-medium">Last Transaction</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAccounts.map((account, index) => (
                <TableRow key={account.accountNumber} className="hover:bg-muted/30" data-testid={`row-account-${index}`}>
                  <TableCell className="font-medium">
                    <Link href={`/accounts/${account.accountNumber}`}>
                      <span className="text-primary hover:underline cursor-pointer">{account.accountNumber}</span>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`/producers/${account.farmer}`}>
                      <span className="text-sm hover:underline cursor-pointer">{account.farmer}</span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-sm">{account.accountType}</TableCell>
                  <TableCell className="text-right font-medium">{account.balance}</TableCell>
                  <TableCell className="text-sm">{account.lastTransaction}</TableCell>
                  <TableCell>
                    <Badge variant={account.status === "Active" ? "secondary" : "outline"} className="text-xs">
                      {account.status}
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
                        <DropdownMenuItem>View Transactions</DropdownMenuItem>
                        <DropdownMenuItem>Record Payment</DropdownMenuItem>
                        <DropdownMenuItem>Generate Statement</DropdownMenuItem>
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
