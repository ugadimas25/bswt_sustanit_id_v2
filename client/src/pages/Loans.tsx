import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link, useLocation } from "wouter";
import { 
  DollarSign, TrendingUp, TrendingDown, AlertTriangle, CheckCircle2,
  Clock, Percent, ChevronDown
} from "lucide-react";
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
import { EnhancedDataTable, Column, AIInsight } from "@/components/EnhancedDataTable";

const mockLoans = [
  { 
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
    paymentHistory: 3,
    lastPayment: "15/11/2024",
    risk: "Low"
  },
  {
    loanId: "LN-2024-042",
    farmerId: "INA-1588",
    farmer: "Bima Anwar",
    amount: 2000,
    disbursedDate: "01/09/2024",
    dueDate: "01/03/2025",
    interestRate: 5,
    amountPaid: 800,
    balance: 1200,
    repaymentProgress: 40,
    status: "Active",
    paymentHistory: 4,
    lastPayment: "01/11/2024",
    risk: "Low"
  },
  {
    loanId: "LN-2023-158",
    farmerId: "INA-1589",
    farmer: "Eri Baldo",
    amount: 1200,
    disbursedDate: "15/03/2024",
    dueDate: "15/09/2024",
    interestRate: 5,
    amountPaid: 1200,
    balance: 0,
    repaymentProgress: 100,
    status: "Paid",
    paymentHistory: 6,
    lastPayment: "15/09/2024",
    risk: "None"
  },
  {
    loanId: "LN-2024-038",
    farmerId: "INA-1906",
    farmer: "RAJI ADELOGBA",
    amount: 1800,
    disbursedDate: "20/08/2024",
    dueDate: "20/02/2025",
    interestRate: 5,
    amountPaid: 300,
    balance: 1500,
    repaymentProgress: 16.7,
    status: "Overdue",
    paymentHistory: 1,
    lastPayment: "20/09/2024",
    risk: "High"
  },
  {
    loanId: "LN-2024-050",
    farmerId: "INA-1729",
    farmer: "RASIDI Adelogoye",
    amount: 2500,
    disbursedDate: "10/11/2024",
    dueDate: "10/05/2025",
    interestRate: 5,
    amountPaid: 500,
    balance: 2000,
    repaymentProgress: 20,
    status: "Active",
    paymentHistory: 1,
    lastPayment: "10/11/2024",
    risk: "Medium"
  },
  {
    loanId: "LN-2024-033",
    farmerId: "INA-1548",
    farmer: "Akanji ADELOKUN",
    amount: 1600,
    disbursedDate: "05/07/2024",
    dueDate: "05/01/2025",
    interestRate: 5,
    amountPaid: 1200,
    balance: 400,
    repaymentProgress: 75,
    status: "Active",
    paymentHistory: 6,
    lastPayment: "05/11/2024",
    risk: "Low"
  },
  {
    loanId: "LN-2023-142",
    farmerId: "INA-1415",
    farmer: "BEATRICE ADELOLA",
    amount: 1100,
    disbursedDate: "15/12/2023",
    dueDate: "15/06/2024",
    interestRate: 5,
    amountPaid: 1100,
    balance: 0,
    repaymentProgress: 100,
    status: "Paid",
    paymentHistory: 6,
    lastPayment: "15/06/2024",
    risk: "None"
  },
  {
    loanId: "LN-2024-055",
    farmerId: "INA-2001",
    farmer: "OLUWASEUN OGUNLEYE",
    amount: 2200,
    disbursedDate: "01/12/2024",
    dueDate: "01/06/2025",
    interestRate: 5,
    amountPaid: 0,
    balance: 2200,
    repaymentProgress: 0,
    status: "Active",
    paymentHistory: 0,
    lastPayment: "-",
    risk: "Medium"
  },
  {
    loanId: "LN-2024-029",
    farmerId: "INA-2002",
    farmer: "BLESSING OKORO",
    amount: 1300,
    disbursedDate: "20/07/2024",
    dueDate: "20/01/2025",
    interestRate: 5,
    amountPaid: 200,
    balance: 1100,
    repaymentProgress: 15.4,
    status: "At Risk",
    paymentHistory: 1,
    lastPayment: "20/08/2024",
    risk: "High"
  },
  {
    loanId: "LN-2024-044",
    farmerId: "INA-2003",
    farmer: "CHIOMA NWANKWO",
    amount: 1900,
    disbursedDate: "15/10/2024",
    dueDate: "15/04/2025",
    interestRate: 5,
    amountPaid: 600,
    balance: 1300,
    repaymentProgress: 31.6,
    status: "Active",
    paymentHistory: 2,
    lastPayment: "15/11/2024",
    risk: "Low"
  },
];

const columns: Column[] = [
  {
    key: "loanId",
    label: "Loan ID",
    sortable: true,
    render: (value) => (
      <Link href={`/loans/${value}`} data-testid={`link-loan-${value}`}>
        <span className="text-primary hover:underline cursor-pointer font-medium">
          {value}
        </span>
      </Link>
    ),
  },
  {
    key: "farmer",
    label: "Farmer",
    sortable: true,
    render: (value, row) => (
      <Link href={`/producers/${row.farmerId}`} data-testid={`link-farmer-${row.farmerId}`}>
        <span className="hover:underline cursor-pointer">{value}</span>
      </Link>
    ),
  },
  {
    key: "amount",
    label: "Loan Amount",
    sortable: true,
    render: (value) => (
      <div className="flex items-center gap-2">
        <DollarSign className="h-3 w-3 text-muted-foreground" />
        <span className="font-medium">${value.toLocaleString()}</span>
      </div>
    ),
  },
  {
    key: "repaymentProgress",
    label: "Repayment Progress",
    sortable: true,
    width: "w-48",
    render: (value, row) => (
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">${row.amountPaid.toLocaleString()} / ${row.amount.toLocaleString()}</span>
          <span className="font-medium">{value.toFixed(1)}%</span>
        </div>
        <Progress value={value} className="h-2" />
      </div>
    ),
  },
  {
    key: "balance",
    label: "Balance",
    sortable: true,
    render: (value) => (
      <span className={`font-medium ${value === 0 ? 'text-green-600 dark:text-green-400' : 'text-foreground'}`}>
        ${value.toLocaleString()}
      </span>
    ),
  },
  {
    key: "dueDate",
    label: "Due Date",
    sortable: true,
    render: (value) => (
      <div className="flex items-center gap-2 text-sm">
        <Clock className="h-3 w-3 text-muted-foreground" />
        {value}
      </div>
    ),
  },
  {
    key: "interestRate",
    label: "Interest",
    sortable: true,
    render: (value) => (
      <div className="flex items-center gap-1">
        <Percent className="h-3 w-3 text-muted-foreground" />
        <span>{value}%</span>
      </div>
    ),
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
    render: (value, row) => (
      <Badge 
        variant={
          value === "Paid" ? "secondary" :
          value === "Active" ? "default" :
          value === "Overdue" ? "destructive" :
          "outline"
        }
      >
        {value === "Paid" && <CheckCircle2 className="h-3 w-3 mr-1" />}
        {value === "Overdue" && <AlertTriangle className="h-3 w-3 mr-1" />}
        {value === "At Risk" && <AlertTriangle className="h-3 w-3 mr-1" />}
        {value}
      </Badge>
    ),
  },
  {
    key: "risk",
    label: "Risk Level",
    sortable: true,
    render: (value) => {
      const colorMap = {
        None: "secondary",
        Low: "outline",
        Medium: "default",
        High: "destructive"
      };
      return (
        <Badge variant={colorMap[value as keyof typeof colorMap] as any}>
          {value}
        </Badge>
      );
    },
  },
];

const stats = [
  {
    label: "Total Disbursed",
    value: "$16,100",
    change: 12,
    trend: "up" as const,
    icon: DollarSign,
  },
  {
    label: "Outstanding Balance",
    value: "$10,650",
    change: -8,
    trend: "down" as const,
    icon: TrendingDown,
  },
  {
    label: "Repayment Rate",
    value: "78%",
    change: 15,
    trend: "up" as const,
    icon: CheckCircle2,
  },
  {
    label: "At Risk Loans",
    value: "2",
    change: -25,
    trend: "down" as const,
    icon: AlertTriangle,
  },
];

const aiInsights: AIInsight[] = [
  {
    type: "anomaly",
    message: "2 farmers showing irregular payment patterns. RAJI ADELOGBA and BLESSING OKORO have missed recent payments. Recommend immediate follow-up.",
    severity: "high",
  },
  {
    type: "recommendation",
    message: "Farmers with 75%+ repayment progress show 95% on-time completion rate. Consider offering loan top-ups to 6 qualifying farmers.",
    severity: "low",
  },
  {
    type: "prediction",
    message: "Based on harvest schedules and payment history, expect $3,200 in loan repayments over next 30 days with 92% confidence.",
    severity: "low",
  },
  {
    type: "trend",
    message: "Repayment rate improved by 18% since implementing SMS payment reminders. Current on-time payment rate: 85%.",
    severity: "low",
  },
];

export default function Loans() {
  const [, setLocation] = useLocation();

  const rowActions = (row: any) => [
    {
      label: "View Details",
      onClick: () => setLocation(`/loans/${row.loanId}`),
    },
    {
      label: "Record Payment",
      onClick: () => console.log("Record payment for", row.loanId),
    },
    {
      label: "View Payment History",
      onClick: () => console.log("View payment history for", row.loanId),
    },
    {
      label: "Generate Statement",
      onClick: () => console.log("Generate statement for", row.loanId),
    },
    {
      label: "Send Payment Reminder",
      onClick: () => console.log("Send reminder to", row.farmer),
    },
  ];

  return (
    <div className="space-y-6" data-testid="page-loans">
      {/* Breadcrumb and Actions Header */}
      <div className="flex items-center justify-between">
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
            <DropdownMenuItem 
              data-testid="action-issue-loan"
              onClick={() => console.log("Issue new loan")}
            >
              Issue Loan
            </DropdownMenuItem>
            <DropdownMenuItem 
              data-testid="action-record-payment"
              onClick={() => console.log("Record payment")}
            >
              Record Payment
            </DropdownMenuItem>
            <DropdownMenuItem 
              data-testid="action-generate-report"
              onClick={() => console.log("Generate report")}
            >
              Generate Report
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <EnhancedDataTable
        title="Loan Management"
        description="Track farmer loans, repayments, and credit risk with AI-powered insights"
        data={mockLoans}
        columns={columns}
        stats={stats}
        aiInsights={aiInsights}
        searchable
        filterable
        exportable
        bulkActions
        rowActions={rowActions}
        onRowClick={(row) => setLocation(`/loans/${row.loanId}`)}
      />
    </div>
  );
}
