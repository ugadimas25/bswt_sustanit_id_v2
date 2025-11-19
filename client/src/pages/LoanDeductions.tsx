import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { DollarSign, CheckCircle, AlertCircle } from "lucide-react";

const sampleData = [
  { id: "LD-001", farmer: "AGNES Adeleye", loanAmount: 1000, repaid: 750, remaining: 250, nextPayment: "2024-12-01", status: "Active" },
  { id: "LD-002", farmer: "Bima Anwar", loanAmount: 800, repaid: 800, remaining: 0, nextPayment: "-", status: "Completed" },
  { id: "LD-003", farmer: "Eri Baldo", loanAmount: 600, repaid: 400, remaining: 200, nextPayment: "2024-11-25", status: "Active" },
];

export default function LoanDeductions() {
  return (
    <PageTemplate
      title="Loan Deductions"
      description="Manage loan repayment schedules and automatic deductions"
      data={sampleData}
      columns={[
        { key: "id", label: "Loan ID" },
        { key: "farmer", label: "Farmer Name" },
        { key: "loanAmount", label: "Loan Amount ($)" },
        { key: "repaid", label: "Repaid ($)" },
        { key: "remaining", label: "Remaining ($)" },
        { key: "nextPayment", label: "Next Payment" },
        { 
          key: "status", 
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Active" ? "default" : "secondary"}>{value}</Badge>
          )
        },
      ]}
      stats={[
        { label: "Active Loans", value: "2", icon: DollarSign },
        { label: "Total Outstanding", value: "$450", icon: AlertCircle },
        { label: "Completed", value: "1", icon: CheckCircle },
      ]}
      addButtonText="New Loan"
      addButtonHref="/loan-deductions/new"
    />
  );
}
