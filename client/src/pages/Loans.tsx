import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, DollarSign } from "lucide-react";
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

const mockLoans = [
  { loanId: "LN-2024-045", farmer: "AGNES Adeleye", amount: "$1,500.00", disbursedDate: "15/10/2024", dueDate: "15/04/2025", interestRate: "5%", amountPaid: "$450.00", balance: "$1,050.00", status: "Active" },
  { loanId: "LN-2024-042", farmer: "Bima Anwar", amount: "$2,000.00", disbursedDate: "01/09/2024", dueDate: "01/03/2025", interestRate: "5%", amountPaid: "$800.00", balance: "$1,200.00", status: "Active" },
  { loanId: "LN-2023-158", farmer: "Eri Baldo", amount: "$1,200.00", disbursedDate: "15/03/2024", dueDate: "15/09/2024", interestRate: "5%", amountPaid: "$1,200.00", balance: "$0.00", status: "Paid" },
];

export default function Loans() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/loans">Loans</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Farmer Loans</BreadcrumbPage>
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
            <DropdownMenuItem>Issue Loan</DropdownMenuItem>
            <DropdownMenuItem>Record Payment</DropdownMenuItem>
            <DropdownMenuItem>Generate Report</DropdownMenuItem>
            <DropdownMenuItem>Export to CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Loans</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">2</div>
              <p className="text-xs text-muted-foreground mt-1">Outstanding</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Outstanding</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">$2,250</div>
              <p className="text-xs text-muted-foreground mt-1">To be collected</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Paid Loans</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">1</div>
              <p className="text-xs text-muted-foreground mt-1">Fully repaid</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Loan ID</TableHead>
                <TableHead className="font-medium">Farmer</TableHead>
                <TableHead className="font-medium">Amount</TableHead>
                <TableHead className="font-medium">Disbursed Date</TableHead>
                <TableHead className="font-medium">Due Date</TableHead>
                <TableHead className="font-medium">Interest Rate</TableHead>
                <TableHead className="font-medium">Amount Paid</TableHead>
                <TableHead className="font-medium">Balance</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLoans.map((loan, index) => (
                <TableRow key={loan.loanId} className="hover:bg-muted/30" data-testid={`row-loan-${index}`}>
                  <TableCell className="font-medium">
                    <Link href={`/loans/${loan.loanId}`}>
                      <span className="text-primary hover:underline cursor-pointer">{loan.loanId}</span>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`/producers/${loan.farmer}`}>
                      <span className="text-sm hover:underline cursor-pointer">{loan.farmer}</span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-right font-medium">{loan.amount}</TableCell>
                  <TableCell className="text-sm">{loan.disbursedDate}</TableCell>
                  <TableCell className="text-sm">{loan.dueDate}</TableCell>
                  <TableCell className="text-sm text-center">{loan.interestRate}</TableCell>
                  <TableCell className="text-right">{loan.amountPaid}</TableCell>
                  <TableCell className="text-right font-medium">{loan.balance}</TableCell>
                  <TableCell>
                    <Badge variant={loan.status === "Active" ? "secondary" : "outline"} className="text-xs">
                      {loan.status}
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
                        <DropdownMenuItem>Record Payment</DropdownMenuItem>
                        <DropdownMenuItem>View Payment History</DropdownMenuItem>
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
