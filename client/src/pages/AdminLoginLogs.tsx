import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { LogIn, Clock, Monitor } from "lucide-react";

const sampleData = [
  { id: "LOG-001", user: "john@farmforce.com", timestamp: "2024-11-19 08:30:15", ipAddress: "192.168.1.100", device: "Desktop", status: "Success" },
  { id: "LOG-002", user: "maria@farmforce.com", timestamp: "2024-11-19 09:15:42", ipAddress: "192.168.1.105", device: "Mobile", status: "Success" },
  { id: "LOG-003", user: "david@farmforce.com", timestamp: "2024-11-19 10:22:33", ipAddress: "192.168.1.110", device: "Tablet", status: "Failed" },
];

export default function AdminLoginLogs() {
  return (
    <PageTemplate
      title="User Login Logs"
      description="Monitor user login activity for payroll and security purposes"
      data={sampleData}
      columns={[
        { key: "id", label: "Log ID" },
        { key: "user", label: "User Email" },
        { key: "timestamp", label: "Timestamp" },
        { key: "ipAddress", label: "IP Address" },
        { key: "device", label: "Device" },
        { 
          key: "status", 
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Success" ? "default" : "destructive"}>{value}</Badge>
          )
        },
      ]}
      stats={[
        { label: "Total Logins", value: "3", icon: LogIn },
        { label: "Successful", value: "2", icon: Clock },
        { label: "Failed", value: "1", icon: Monitor },
      ]}
      showActions={true}
    />
  );
}
