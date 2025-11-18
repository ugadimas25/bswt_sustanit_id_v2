import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, PiggyBank } from "lucide-react";
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

const mockSavings = [
  { accountId: "SAV-2024-012", farmer: "AGNES Adeleye", accountType: "Regular Savings", balance: "$850.00", lastDeposit: "15/11/2025", depositAmount: "$100.00", interestRate: "3%", status: "Active" },
  { accountId: "SAV-2024-008", farmer: "Bima Anwar", accountType: "Fixed Deposit", balance: "$2,500.00", lastDeposit: "01/10/2024", depositAmount: "$2,500.00", interestRate: "6%", status: "Active" },
  { accountId: "SAV-2023-045", farmer: "Eri Baldo", accountType: "Regular Savings", balance: "$1,240.00", lastDeposit: "10/11/2025", depositAmount: "$150.00", interestRate: "3%", status: "Active" },
];

export default function Savings() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/savings">Savings</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Savings Accounts</BreadcrumbPage>
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
            <DropdownMenuItem>Open Account</DropdownMenuItem>
            <DropdownMenuItem>Record Deposit</DropdownMenuItem>
            <DropdownMenuItem>Record Withdrawal</DropdownMenuItem>
            <DropdownMenuItem>Export to CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Accounts</CardTitle>
              <PiggyBank className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">3</div>
              <p className="text-xs text-muted-foreground mt-1">Savings accounts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Deposits</CardTitle>
              <PiggyBank className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">$4,590</div>
              <p className="text-xs text-muted-foreground mt-1">All accounts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
              <PiggyBank className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">$250</div>
              <p className="text-xs text-muted-foreground mt-1">New deposits</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Account ID</TableHead>
                <TableHead className="font-medium">Farmer</TableHead>
                <TableHead className="font-medium">Account Type</TableHead>
                <TableHead className="font-medium">Balance</TableHead>
                <TableHead className="font-medium">Last Deposit</TableHead>
                <TableHead className="font-medium">Deposit Amount</TableHead>
                <TableHead className="font-medium">Interest Rate</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSavings.map((account, index) => (
                <TableRow key={account.accountId} className="hover:bg-muted/30" data-testid={`row-savings-${index}`}>
                  <TableCell className="font-medium">
                    <Link href={`/savings/${account.accountId}`}>
                      <span className="text-primary hover:underline cursor-pointer">{account.accountId}</span>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`/producers/${account.farmer}`}>
                      <span className="text-sm hover:underline cursor-pointer">{account.farmer}</span>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{account.accountType}</Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">{account.balance}</TableCell>
                  <TableCell className="text-sm">{account.lastDeposit}</TableCell>
                  <TableCell className="text-right">{account.depositAmount}</TableCell>
                  <TableCell className="text-sm text-center">{account.interestRate}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">{account.status}</Badge>
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
                        <DropdownMenuItem>Record Deposit</DropdownMenuItem>
                        <DropdownMenuItem>Record Withdrawal</DropdownMenuItem>
                        <DropdownMenuItem>View Transactions</DropdownMenuItem>
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
