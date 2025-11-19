import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { DollarSign, AlertCircle, CheckCircle } from "lucide-react";

const sampleData = [
  { id: "DED-001", farmer: "AGNES Adeleye", type: "Loan Repayment", amount: 250, date: "2024-11-15", status: "Processed" },
  { id: "DED-002", farmer: "Bima Anwar", type: "Input Advance", amount: 180, date: "2024-11-16", status: "Pending" },
  { id: "DED-003", farmer: "Eri Baldo", type: "Outstanding Balance", amount: 120, date: "2024-11-17", status: "Processed" },
];

export default function TraceabilityDeductions() {
  return (
    <PageTemplate
      title="Deductions Management"
      description="Track loan repayments and outstanding balance deductions"
      data={sampleData}
      columns={[
        { key: "id", label: "Deduction ID" },
        { key: "farmer", label: "Farmer Name" },
        { key: "type", label: "Deduction Type" },
        { key: "amount", label: "Amount ($)" },
        { key: "date", label: "Date" },
        { 
          key: "status", 
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Processed" ? "default" : "secondary"}>{value}</Badge>
          )
        },
      ]}
      stats={[
        { label: "Total Deductions", value: "$550", icon: DollarSign },
        { label: "Processed", value: "2", icon: CheckCircle },
        { label: "Pending", value: "1", icon: AlertCircle },
      ]}
      addButtonText="New Deduction"
      addButtonHref="/traceability-deductions/new"
    />
  );
}
