import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Award, TrendingUp, Users, UserCheck, AlertCircle } from "lucide-react";
import { Link, useLocation } from "wouter";
import { EnhancedDataTable, Column, AIInsight } from "@/components/EnhancedDataTable";

const mockProducers = [
  {
    farmerId: "INA-1711",
    firstName: "AGNES",
    lastName: "Adeleye",
    mobileNumber: "+2347056404840",
    certificationId: "INA-1711",
    village: "AASA",
    nationalIdType: "National ID",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
    lastActivity: "2 days ago",
    fieldsCount: 3,
    totalHectares: 4.5,
    certificationStatus: "Active",
  },
  {
    farmerId: "INA-1588",
    firstName: "MARIAM",
    lastName: "Adeleye",
    mobileNumber: "+2347033298559",
    certificationId: "INA-1588",
    village: "AASA",
    nationalIdType: "National ID",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
    lastActivity: "1 day ago",
    fieldsCount: 2,
    totalHectares: 3.2,
    certificationStatus: "Active",
  },
  {
    farmerId: "INA-1589",
    firstName: "ORIOWO",
    lastName: "Adeleye",
    mobileNumber: "+2348066526522",
    certificationId: "INA-1589",
    village: "AASA",
    nationalIdType: "National ID",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
    lastActivity: "5 hours ago",
    fieldsCount: 4,
    totalHectares: 6.1,
    certificationStatus: "Active",
  },
  {
    farmerId: "INA-1906",
    firstName: "RAJI",
    lastName: "ADELOGBA",
    mobileNumber: "+2348060242495",
    certificationId: "INA-1906",
    village: "AASA",
    nationalIdType: "National ID",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
    lastActivity: "3 days ago",
    fieldsCount: 2,
    totalHectares: 2.8,
    certificationStatus: "Expiring Soon",
  },
  {
    farmerId: "INA-1729",
    firstName: "RASIDI",
    lastName: "Adelogoye",
    mobileNumber: "+2347056404848",
    certificationId: "INA-1729",
    village: "AASA",
    nationalIdType: "National ID",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
    lastActivity: "1 week ago",
    fieldsCount: 3,
    totalHectares: 5.0,
    certificationStatus: "Active",
  },
  {
    farmerId: "INA-1548",
    firstName: "Akanji",
    lastName: "ADELOKUN",
    mobileNumber: "+2347033298552",
    certificationId: "INA-1548",
    village: "AASA",
    nationalIdType: "National ID",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
    lastActivity: "4 days ago",
    fieldsCount: 5,
    totalHectares: 7.3,
    certificationStatus: "Active",
  },
  {
    farmerId: "INA-1415",
    firstName: "BEATRICE",
    lastName: "ADELOLA",
    mobileNumber: "+2348060242490",
    certificationId: "INA-1415",
    village: "AASA",
    nationalIdType: "National ID",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
    lastActivity: "6 days ago",
    fieldsCount: 2,
    totalHectares: 3.5,
    certificationStatus: "Active",
  },
  {
    farmerId: "PN8049.64.2",
    firstName: "JOHN",
    lastName: "SMITH",
    mobileNumber: "+2347012345678",
    certificationId: "",
    village: "Demo Village",
    nationalIdType: "",
    groups: "",
    farmerTags: "Demo",
    hasLocation: false,
    lastActivity: "30 days ago",
    fieldsCount: 0,
    totalHectares: 0,
    certificationStatus: "Pending",
  },
  {
    farmerId: "INA-1860",
    firstName: "ADEDEJI",
    lastName: "ABU HALIFAH",
    mobileNumber: "+2347023456789",
    certificationId: "INA-1860",
    village: "Northern Region",
    nationalIdType: "National ID",
    groups: "Nigeria",
    farmerTags: "Demo",
    hasLocation: false,
    lastActivity: "15 days ago",
    fieldsCount: 1,
    totalHectares: 1.2,
    certificationStatus: "Active",
  },
  {
    farmerId: "INA-1915",
    firstName: "ADEDOKUN",
    lastName: "ADAM",
    mobileNumber: "+2347034567890",
    certificationId: "INA-1915",
    village: "Central Region",
    nationalIdType: "Voter ID",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
    lastActivity: "8 days ago",
    fieldsCount: 3,
    totalHectares: 4.0,
    certificationStatus: "Active",
  },
  {
    farmerId: "INA-2001",
    firstName: "OLUWASEUN",
    lastName: "OGUNLEYE",
    mobileNumber: "+2348045678901",
    certificationId: "INA-2001",
    village: "AASA",
    nationalIdType: "National ID",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
    lastActivity: "2 days ago",
    fieldsCount: 4,
    totalHectares: 5.5,
    certificationStatus: "Active",
  },
  {
    farmerId: "INA-2002",
    firstName: "BLESSING",
    lastName: "OKORO",
    mobileNumber: "+2348056789012",
    certificationId: "INA-2002",
    village: "Northern Region",
    nationalIdType: "National ID",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
    lastActivity: "5 days ago",
    fieldsCount: 2,
    totalHectares: 3.0,
    certificationStatus: "Active",
  },
  {
    farmerId: "INA-2003",
    firstName: "CHIOMA",
    lastName: "NWANKWO",
    mobileNumber: "+2348067890123",
    certificationId: "INA-2003",
    village: "Central Region",
    nationalIdType: "Voter ID",
    groups: "Nigeria",
    farmerTags: "Certified",
    hasLocation: true,
    lastActivity: "1 day ago",
    fieldsCount: 3,
    totalHectares: 4.2,
    certificationStatus: "Active",
  },
];

const columns: Column[] = [
  {
    key: "farmerId",
    label: "Farmer ID",
    sortable: true,
    render: (value, row) => (
      <Link href={`/producers/${value}`}>
        <span className="text-primary hover:underline cursor-pointer font-medium">
          {value}
        </span>
      </Link>
    ),
  },
  {
    key: "firstName",
    label: "First Name",
    sortable: true,
  },
  {
    key: "lastName",
    label: "Last Name",
    sortable: true,
  },
  {
    key: "mobileNumber",
    label: "Mobile",
    render: (value) => (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {value && <Phone className="h-3 w-3" />}
        {value}
      </div>
    ),
  },
  {
    key: "village",
    label: "Village",
    sortable: true,
  },
  {
    key: "fieldsCount",
    label: "Fields",
    sortable: true,
    render: (value, row) => (
      <div className="text-center">
        <span className="font-medium">{value}</span>
        <span className="text-xs text-muted-foreground ml-1">({row.totalHectares}ha)</span>
      </div>
    ),
  },
  {
    key: "certificationStatus",
    label: "Certification",
    sortable: true,
    render: (value) => (
      <Badge 
        variant={
          value === "Active" ? "secondary" : 
          value === "Expiring Soon" ? "destructive" : 
          "outline"
        }
      >
        {value === "Active" && <Award className="h-3 w-3 mr-1" />}
        {value === "Expiring Soon" && <AlertCircle className="h-3 w-3 mr-1" />}
        {value}
      </Badge>
    ),
  },
  {
    key: "lastActivity",
    label: "Last Activity",
    sortable: true,
    render: (value) => (
      <span className="text-sm text-muted-foreground">{value}</span>
    ),
  },
  {
    key: "hasLocation",
    label: "GPS",
    render: (value) => (
      <div className="flex justify-center">
        {value ? (
          <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
        ) : (
          <MapPin className="h-4 w-4 text-muted-foreground opacity-30" />
        )}
      </div>
    ),
  },
];

const stats = [
  {
    label: "Total Farmers",
    value: "10,234",
    change: 12,
    trend: "up" as const,
    icon: Users,
  },
  {
    label: "Certified Farmers",
    value: "8,547",
    change: 8,
    trend: "up" as const,
    icon: UserCheck,
  },
  {
    label: "GPS Mapped",
    value: "78%",
    change: 15,
    trend: "up" as const,
    icon: MapPin,
  },
  {
    label: "Active (30 days)",
    value: "7,892",
    change: 5,
    trend: "up" as const,
    icon: TrendingUp,
  },
];

const aiInsights: AIInsight[] = [
  {
    type: "recommendation",
    message: "67 farmers haven't submitted data in 30+ days. AI suggests personalized outreach to re-engage inactive farmers.",
    severity: "medium",
  },
  {
    type: "trend",
    message: "Certification renewal rate increased by 23% this month. Training program showing positive impact.",
    severity: "low",
  },
  {
    type: "anomaly",
    message: "45 farmers approaching certification expiry in next 30 days. Schedule renewal assessments to maintain compliance.",
    severity: "high",
  },
];

export default function Producers() {
  const [, setLocation] = useLocation();

  const rowActions = (row: any) => [
    {
      label: "View Profile",
      onClick: () => setLocation(`/producers/${row.farmerId}`),
    },
    {
      label: "View Fields",
      onClick: () => console.log("View fields for", row.farmerId),
    },
    {
      label: "View Training Records",
      onClick: () => console.log("View training for", row.farmerId),
    },
    {
      label: "View Surveys",
      onClick: () => console.log("View surveys for", row.farmerId),
    },
    {
      label: "Edit Farmer",
      onClick: () => console.log("Edit farmer", row.farmerId),
    },
  ];

  return (
    <div className="p-6" data-testid="page-farmers">
      <EnhancedDataTable
        title="Farmer Management"
        description="Comprehensive farmer database with GPS mapping, certification tracking, and engagement analytics"
        data={mockProducers}
        columns={columns}
        stats={stats}
        aiInsights={aiInsights}
        searchable
        filterable
        exportable
        bulkActions
        rowActions={rowActions}
        onRowClick={(row) => setLocation(`/producers/${row.farmerId}`)}
      />
    </div>
  );
}
