import { useRoute, Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DollarSign,
  Calendar,
  Percent,
  User,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

// Mock data - in real app, this would come from API based on loanId
const mockLoanDetails: Record<string, any> = {
  "LN-2024-045": {
    loanId: "LN-2024-045",
    farmerId: "INA-1711",
    farmer: "AGNES Adeleye",
    amount: 1500,
    disbursedDate: "15/10/2024",
    dueDate: "15/04/2025",
    interestRate: 5,
    amountPaid: 450,
    balance: 1050,
    repaymentProgress: 30,
    status: "Active",
    paymentHistory: [
      { date: "15/11/2024", amount: 150, method: "Cash", reference: "PMT-001" },
      { date: "15/10/2024", amount: 150, method: "Mobile Money", reference: "PMT-002" },
      { date: "20/10/2024", amount: 150, method: "Cash", reference: "PMT-003" },
    ],
    risk: "Low",
    purpose: "Purchase of fertilizer and seeds",
    guarantor: "Village Savings Group",
    notes: "Regular payments, good credit history",
  },
};

export default function LoanDetail() {
  const [, params] = useRoute("/loans/:id");
  const loanId = params?.id || "";
  
  // In real app, fetch loan details from API
  const loan = mockLoanDetails[loanId] || {
    loanId,
    farmer: "Unknown",
    amount: 0,
    balance: 0,
    status: "Not Found",
  };

  return (
    <div className="p-6 space-y-6" data-testid="page-loan-detail">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/loans">Loans</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">{loanId}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <Link href="/loans">
          <Button variant="outline" data-testid="button-back">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Loans
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-loan-id">{loanId}</h1>
          <p className="text-muted-foreground mt-1">Loan Details and Payment History</p>
        </div>
        <Badge 
          variant={
            loan.status === "Active" ? "default" :
            loan.status === "Paid" ? "secondary" :
            loan.status === "Overdue" ? "destructive" :
            "outline"
          }
          data-testid="badge-status"
        >
          {loan.status}
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Loan Amount</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-amount">${loan.amount?.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Amount Paid</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400" data-testid="text-paid">
              ${loan.amountPaid?.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Balance</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-balance">${loan.balance?.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Interest Rate</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loan.interestRate}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Loan Information */}
        <Card>
          <CardHeader>
            <CardTitle>Loan Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Farmer</span>
              <Link href={`/producers/${loan.farmerId}`}>
                <span className="font-medium hover:underline cursor-pointer flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {loan.farmer}
                </span>
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Disbursed Date</span>
              <span className="font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {loan.disbursedDate}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Due Date</span>
              <span className="font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {loan.dueDate}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Purpose</span>
              <span className="font-medium">{loan.purpose || "N/A"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Guarantor</span>
              <span className="font-medium">{loan.guarantor || "N/A"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Risk Level</span>
              <Badge variant={
                loan.risk === "Low" ? "outline" :
                loan.risk === "Medium" ? "default" :
                loan.risk === "High" ? "destructive" :
                "secondary"
              }>
                {loan.risk || "N/A"}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Repayment Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Repayment Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{loan.repaymentProgress?.toFixed(1)}%</span>
              </div>
              <Progress value={loan.repaymentProgress || 0} className="h-3" />
            </div>
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-sm font-medium">Total Loan</span>
                <span className="font-semibold">${loan.amount?.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Paid</span>
                <span className="font-semibold text-green-600 dark:text-green-400">
                  ${loan.amountPaid?.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-sm font-medium">Remaining</span>
                <span className="font-semibold">${loan.balance?.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-medium">Payments Made</span>
                <span className="font-semibold">{loan.paymentHistory?.length || 0}</span>
              </div>
            </div>
            {loan.notes && (
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground italic">{loan.notes}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Payment History */}
      {loan.paymentHistory && loan.paymentHistory.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {loan.paymentHistory.map((payment: any, index: number) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 rounded-md border hover-elevate"
                  data-testid={`payment-${index}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">${payment.amount?.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{payment.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{payment.method}</div>
                    <div className="text-xs text-muted-foreground">{payment.reference}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
