import { StatCard } from "../StatCard";
import { Users } from "lucide-react";

export default function StatCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <StatCard
        title="Total Farmers"
        value="1,247"
        icon={Users}
        trend={{ value: 12, label: "from last month" }}
      />
    </div>
  );
}
