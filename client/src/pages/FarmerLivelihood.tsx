import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, TrendingDown, Users, Home, Percent } from "lucide-react";
import { Link } from "wouter";
import { EnhancedDataTable, Column, AIInsight } from "@/components/EnhancedDataTable";

const mockLivelihoodData = [
  {
    farmerId: "INA-1711",
    farmerName: "AGNES Adeleye",
    village: "AASA",
    totalIncome: 12500,
    farmIncome: 8500,
    nonFarmIncome: 4000,
    householdSize: 6,
    incomePerCapita: 2083,
    povertyStatus: "Above poverty line",
    lastUpdated: "15/11/2024",
  },
  {
    farmerId: "INA-1588",
    farmerName: "MARIAM Adeleye",
    village: "AASA",
    totalIncome: 9200,
    farmIncome: 7200,
    nonFarmIncome: 2000,
    householdSize: 4,
    incomePerCapita: 2300,
    povertyStatus: "Above poverty line",
    lastUpdated: "14/11/2024",
  },
  {
    farmerId: "INA-1589",
    farmerName: "ORIOWO Adeleye",
    village: "AASA",
    totalIncome: 15800,
    farmIncome: 12000,
    nonFarmIncome: 3800,
    householdSize: 5,
    incomePerCapita: 3160,
    povertyStatus: "Above poverty line",
    lastUpdated: "18/11/2024",
  },
  {
    farmerId: "INA-1906",
    farmerName: "RAJI ADELOGBA",
    village: "AASA",
    totalIncome: 6200,
    farmIncome: 4500,
    nonFarmIncome: 1700,
    householdSize: 7,
    incomePerCapita: 886,
    povertyStatus: "Below poverty line",
    lastUpdated: "12/11/2024",
  },
  {
    farmerId: "INA-1729",
    farmerName: "RASIDI Adelogoye",
    village: "AASA",
    totalIncome: 11300,
    farmIncome: 9100,
    nonFarmIncome: 2200,
    householdSize: 5,
    incomePerCapita: 2260,
    povertyStatus: "Above poverty line",
    lastUpdated: "16/11/2024",
  },
  {
    farmerId: "INA-1548",
    farmerName: "Akanji ADELOKUN",
    village: "AASA",
    totalIncome: 18200,
    farmIncome: 14500,
    nonFarmIncome: 3700,
    householdSize: 4,
    incomePerCapita: 4550,
    povertyStatus: "Above poverty line",
    lastUpdated: "17/11/2024",
  },
  {
    farmerId: "INA-1415",
    farmerName: "BEATRICE ADELOLA",
    village: "AASA",
    totalIncome: 5800,
    farmIncome: 4200,
    nonFarmIncome: 1600,
    householdSize: 8,
    incomePerCapita: 725,
    povertyStatus: "Below poverty line",
    lastUpdated: "10/11/2024",
  },
  {
    farmerId: "INA-2108",
    farmerName: "MICHAEL JOHNSON",
    village: "Demo Village",
    totalIncome: 22000,
    farmIncome: 18000,
    nonFarmIncome: 4000,
    householdSize: 3,
    incomePerCapita: 7333,
    povertyStatus: "Well above poverty line",
    lastUpdated: "19/11/2024",
  },
  {
    farmerId: "INA-1893",
    farmerName: "SARAH WILLIAMS",
    village: "AASA",
    totalIncome: 7500,
    farmIncome: 5500,
    nonFarmIncome: 2000,
    householdSize: 6,
    incomePerCapita: 1250,
    povertyStatus: "Near poverty line",
    lastUpdated: "13/11/2024",
  },
  {
    farmerId: "INA-1654",
    farmerName: "DAVID BROWN",
    village: "Demo Village",
    totalIncome: 13400,
    farmIncome: 10200,
    nonFarmIncome: 3200,
    householdSize: 4,
    incomePerCapita: 3350,
    povertyStatus: "Above poverty line",
    lastUpdated: "18/11/2024",
  },
];

export default function FarmerLivelihood() {
  const columns: Column[] = [
    { 
      key: "farmerId", 
      label: "Farmer ID", 
      sortable: true,
      render: (value: any) => (
        <Link href={`/producers/${value}`}>
          <span className="font-mono text-sm hover:text-primary cursor-pointer" data-testid={`link-farmer-${value}`}>
            {value}
          </span>
        </Link>
      )
    },
    { key: "farmerName", label: "Farmer Name", sortable: true },
    { key: "village", label: "Village", sortable: true },
    { 
      key: "totalIncome", 
      label: "Total Income", 
      sortable: true,
      render: (value: any) => (
        <span className="font-semibold text-foreground" data-testid={`text-income-${value}`}>
          ${value.toLocaleString()}
        </span>
      )
    },
    { 
      key: "farmIncome", 
      label: "Farm Income", 
      sortable: true,
      render: (value: any) => (
        <span className="text-muted-foreground">${value.toLocaleString()}</span>
      )
    },
    { 
      key: "nonFarmIncome", 
      label: "Non-Farm Income", 
      sortable: true,
      render: (value: any) => (
        <span className="text-muted-foreground">${value.toLocaleString()}</span>
      )
    },
    { 
      key: "householdSize", 
      label: "Household", 
      sortable: true,
      render: (value: any) => (
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span>{value}</span>
        </div>
      )
    },
    { 
      key: "incomePerCapita", 
      label: "Per Capita", 
      sortable: true,
      render: (value: any) => (
        <span className="font-medium">${value.toLocaleString()}</span>
      )
    },
    { 
      key: "povertyStatus", 
      label: "Poverty Status", 
      sortable: true,
      render: (value: any) => {
        const statusConfig: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", icon: any }> = {
          "Well above poverty line": { variant: "default", icon: TrendingUp },
          "Above poverty line": { variant: "secondary", icon: TrendingUp },
          "Near poverty line": { variant: "outline", icon: TrendingDown },
          "Below poverty line": { variant: "destructive", icon: TrendingDown },
        };
        const config = statusConfig[value] || statusConfig["Above poverty line"];
        const Icon = config.icon;
        return (
          <Badge variant={config.variant} className="gap-1" data-testid={`badge-status-${value}`}>
            <Icon className="h-3 w-3" />
            {value}
          </Badge>
        );
      }
    },
    { key: "lastUpdated", label: "Last Updated", sortable: true },
  ];

  const insights: AIInsight[] = [
    {
      type: "anomaly",
      severity: "high",
      message: "2 farmers below poverty line require immediate livelihood support intervention. Prioritize RAJI ADELOGBA (INA-1906) and BEATRICE ADELOLA (INA-1415) for income diversification programs.",
    },
    {
      type: "recommendation",
      severity: "medium",
      message: "85% of farmer income is from farm activities - high dependency risk. Introduce non-farm income training programs (small business, livestock, processing) to reduce vulnerability.",
    },
    {
      type: "trend",
      severity: "low",
      message: "Larger households (6+ members) show 45% lower per capita income. Target larger households for family planning education and child nutrition programs.",
    },
    {
      type: "prediction",
      severity: "medium",
      message: "Based on current harvest trends, average farmer income projected to increase 12% next season. Encourage savings programs to help farmers capitalize on anticipated income growth.",
    },
  ];

  const rowActions = (row: any) => [
    { 
      label: "View Income History", 
      onClick: () => console.log("View history:", row.farmerId),
    },
    { 
      label: "Update Household Data", 
      onClick: () => console.log("Update data:", row.farmerId),
    },
  ];

  const handleRowClick = (row: any) => {
    window.location.href = `/producers/${row.farmerId}`;
  };

  return (
    <div className="space-y-6 -m-6 p-6">
      <EnhancedDataTable
        title="Farmer Livelihood & Income"
        description="Track household income, poverty status, and livelihood diversification"
        data={mockLivelihoodData}
        columns={columns}
        searchable={true}
        rowActions={rowActions}
        aiInsights={insights}
        stats={[
          {
            label: "Avg Income",
            value: `$${Math.round(mockLivelihoodData.reduce((sum, f) => sum + f.totalIncome, 0) / mockLivelihoodData.length).toLocaleString()}`,
            change: 8.5,
            trend: "up",
            icon: DollarSign,
          },
          {
            label: "Avg Per Capita",
            value: `$${Math.round(mockLivelihoodData.reduce((sum, f) => sum + f.incomePerCapita, 0) / mockLivelihoodData.length).toLocaleString()}`,
            change: 5.2,
            trend: "up",
            icon: Percent,
          },
          {
            label: "Below Poverty Line",
            value: mockLivelihoodData.filter(f => f.povertyStatus === "Below poverty line").length.toString(),
            change: 2.1,
            trend: "down",
            icon: TrendingDown,
          },
          {
            label: "Farm Income %",
            value: "75%",
            change: 3.0,
            trend: "down",
            icon: TrendingUp,
          },
        ]}
        onRowClick={handleRowClick}
      />
    </div>
  );
}
