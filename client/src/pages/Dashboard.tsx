import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, MapPin, TrendingUp, TrendingDown, DollarSign, Package, 
  Sprout, AlertTriangle, CheckCircle, Clock, Target, Award,
  BarChart3, PieChart, LineChart, Activity, Leaf, Boxes
} from "lucide-react";
import { 
  AreaChart, Area, BarChart, Bar, LineChart as RechartsLineChart, Line,
  PieChart as RechartsPieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const monthlyHarvestData = [
  { month: 'Jan', volume: 18500, target: 20000, quality: 92 },
  { month: 'Feb', volume: 22000, target: 20000, quality: 95 },
  { month: 'Mar', volume: 19800, target: 21000, quality: 90 },
  { month: 'Apr', volume: 24500, target: 22000, quality: 94 },
  { month: 'May', volume: 28000, target: 25000, quality: 96 },
  { month: 'Jun', volume: 26500, target: 26000, quality: 93 },
];

const cropDistributionData = [
  { name: 'Coffee', value: 45000, color: '#8B4513' },
  { name: 'Cocoa', value: 32000, color: '#D2691E' },
  { name: 'Tea', value: 18000, color: '#2F4F2F' },
  { name: 'Cotton', value: 15000, color: '#F5F5DC' },
];

const farmerComplianceData = [
  { category: 'Fully Compliant', count: 780, color: '#22c55e' },
  { category: 'Partial Compliance', count: 180, color: '#f59e0b' },
  { category: 'Non-Compliant', count: 52, color: '#ef4444' },
];

const weeklyActivityData = [
  { day: 'Mon', surveys: 45, harvests: 120, trainings: 12 },
  { day: 'Tue', surveys: 52, harvests: 135, trainings: 8 },
  { day: 'Wed', surveys: 48, harvests: 128, trainings: 15 },
  { day: 'Thu', surveys: 61, harvests: 145, trainings: 10 },
  { day: 'Fri', surveys: 55, harvests: 132, trainings: 18 },
  { day: 'Sat', surveys: 38, harvests: 98, trainings: 5 },
  { day: 'Sun', surveys: 25, harvests: 72, trainings: 3 },
];

const regionalPerformanceData = [
  { region: 'Northern', farmers: 320, hectares: 2400, yield: 2.8, compliance: 92 },
  { region: 'Central', farmers: 450, hectares: 3200, yield: 3.2, compliance: 88 },
  { region: 'Eastern', farmers: 180, hectares: 1350, yield: 2.5, compliance: 95 },
  { region: 'Western', farmers: 62, hectares: 480, yield: 2.1, compliance: 85 },
];

const farmLocations = [
  { id: 1, name: "Northern District A", x: 25, y: 20, farmers: 85, status: "high" },
  { id: 2, name: "Northern District B", x: 35, y: 25, farmers: 120, status: "high" },
  { id: 3, name: "Northern District C", x: 45, y: 18, farmers: 115, status: "medium" },
  { id: 4, name: "Central District A", x: 30, y: 45, farmers: 150, status: "high" },
  { id: 5, name: "Central District B", x: 50, y: 50, farmers: 180, status: "high" },
  { id: 6, name: "Central District C", x: 40, y: 55, farmers: 120, status: "medium" },
  { id: 7, name: "Eastern District A", x: 70, y: 35, farmers: 90, status: "medium" },
  { id: 8, name: "Eastern District B", x: 75, y: 45, farmers: 90, status: "low" },
  { id: 9, name: "Western District A", x: 15, y: 65, farmers: 35, status: "low" },
  { id: 10, name: "Western District B", x: 20, y: 75, farmers: 27, status: "low" },
];

export default function Dashboard() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="space-y-4 sm:space-y-6 -m-3 sm:-m-4 md:-m-6 p-3 sm:p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground" data-testid="text-dashboard-title">Dashboard</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">Comprehensive agricultural management overview</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" data-testid="button-refresh" className="flex-1 sm:flex-none">
            <Activity className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Refresh</span>
          </Button>
          <Button variant="outline" size="sm" data-testid="button-export" className="flex-1 sm:flex-none">
            <BarChart3 className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Export</span>
          </Button>
        </div>
      </div>

      {/* Key Metrics Row */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Farmers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground" data-testid="text-metric-farmers">1,012</div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="default" className="bg-green-500 text-white">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5%
              </Badge>
              <p className="text-xs text-muted-foreground">vs last month</p>
            </div>
            <Progress value={85} className="mt-3" />
            <p className="text-xs text-muted-foreground mt-2">85% active this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Harvest</CardTitle>
            <Boxes className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground" data-testid="text-metric-harvest">230,662 kg</div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="default" className="bg-green-500 text-white">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8.2%
              </Badge>
              <p className="text-xs text-muted-foreground">vs target</p>
            </div>
            <Progress value={100} className="mt-3" />
            <p className="text-xs text-muted-foreground mt-2">108% of monthly target (exceeded)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quality Score</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground" data-testid="text-metric-quality">94.2%</div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="default" className="bg-green-500 text-white">
                <TrendingUp className="h-3 w-3 mr-1" />
                +2.1%
              </Badge>
              <p className="text-xs text-muted-foreground">improved</p>
            </div>
            <Progress value={94} className="mt-3" />
            <p className="text-xs text-muted-foreground mt-2">Above industry standard</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground" data-testid="text-metric-compliance">77.0%</div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="default" className="bg-amber-500 text-white">
                <TrendingDown className="h-3 w-3 mr-1" />
                -3.5%
              </Badge>
              <p className="text-xs text-muted-foreground">needs attention</p>
            </div>
            <Progress value={77} className="mt-3" />
            <p className="text-xs text-muted-foreground mt-2">780 of 1,012 farmers</p>
          </CardContent>
        </Card>
      </div>

      {/* Farm Distribution Map */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Farm Distribution Map</CardTitle>
          <p className="text-xs sm:text-sm text-muted-foreground">Geographic distribution of registered farms across regions</p>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[300px] sm:h-[400px] bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:from-blue-950 rounded-lg overflow-hidden border">
            <svg viewBox="0 0 100 100" className="w-full h-full" data-testid="svg-farm-map">
              {/* Background regions with subtle colors */}
              <g opacity="0.3">
                <path d="M 10,10 L 50,10 L 50,35 L 10,35 Z" fill="#22c55e" className="hover:opacity-50 transition-opacity" />
                <path d="M 10,40 L 60,40 L 60,70 L 10,70 Z" fill="#3b82f6" className="hover:opacity-50 transition-opacity" />
                <path d="M 65,25 L 90,25 L 90,60 L 65,60 Z" fill="#f59e0b" className="hover:opacity-50 transition-opacity" />
                <path d="M 5,75 L 30,75 L 30,95 L 5,95 Z" fill="#ef4444" className="hover:opacity-50 transition-opacity" />
              </g>

              {/* Farm location markers */}
              {farmLocations.map((location) => {
                const colors: Record<string, string> = {
                  high: "#22c55e",
                  medium: "#f59e0b",
                  low: "#ef4444"
                };
                const radius = Math.min(8, 3 + location.farmers / 40);
                const color = colors[location.status] || "#6b7280";
                
                return (
                  <g key={location.id}>
                    <circle
                      cx={location.x}
                      cy={location.y}
                      r={radius}
                      fill={color}
                      opacity="0.6"
                      className="hover:opacity-100 transition-opacity cursor-pointer"
                      data-testid={`marker-${location.id}`}
                    >
                      <title>{`${location.name}\n${location.farmers} farmers`}</title>
                    </circle>
                    <circle
                      cx={location.x}
                      cy={location.y}
                      r={radius - 1}
                      fill={color}
                      opacity="0.9"
                      className="hover:opacity-100 transition-opacity cursor-pointer pointer-events-none"
                    />
                    <MapPin 
                      className="absolute"
                      style={{
                        left: `${location.x}%`,
                        top: `${location.y}%`,
                        transform: 'translate(-50%, -100%)',
                        width: '16px',
                        height: '16px',
                        color: color
                      }}
                    />
                  </g>
                );
              })}

              {/* Region labels */}
              <text x="30" y="22" fontSize="3" fill="currentColor" opacity="0.7" fontWeight="bold">Northern</text>
              <text x="30" y="55" fontSize="3" fill="currentColor" opacity="0.7" fontWeight="bold">Central</text>
              <text x="70" y="42" fontSize="3" fill="currentColor" opacity="0.7" fontWeight="bold">Eastern</text>
              <text x="12" y="85" fontSize="3" fill="currentColor" opacity="0.7" fontWeight="bold">Western</text>
            </svg>
          </div>

          {/* Legend */}
          <div className="mt-4 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground">High Density (100+ farmers)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-amber-500" />
              <span className="text-xs text-muted-foreground">Medium Density (50-100 farmers)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <span className="text-xs text-muted-foreground">Low Density (&lt;50 farmers)</span>
            </div>
          </div>

          {/* Quick stats for map */}
          <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{farmLocations.length}</p>
              <p className="text-xs text-muted-foreground">Districts</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{farmLocations.reduce((sum, loc) => sum + loc.farmers, 0)}</p>
              <p className="text-xs text-muted-foreground">Total Farmers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{farmLocations.filter(l => l.status === "high").length}</p>
              <p className="text-xs text-muted-foreground">High Density</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">92%</p>
              <p className="text-xs text-muted-foreground">GPS Coverage</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Monthly Harvest Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Monthly Harvest Performance</CardTitle>
            <p className="text-sm text-muted-foreground">Volume vs Target with Quality Scores</p>
          </CardHeader>
          <CardContent>
            {isClient ? (
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyHarvestData}>
                <defs>
                  <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f8bc28" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f8bc28" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="volume" 
                  stroke="#f8bc28" 
                  fillOpacity={1} 
                  fill="url(#volumeGradient)" 
                  name="Actual Volume (kg)"
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="#0b2534" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Target (kg)"
                />
              </AreaChart>
            </ResponsiveContainer>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Loading chart...
              </div>
            )}
          </CardContent>
        </Card>

        {/* Crop Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Crop Distribution</CardTitle>
            <p className="text-sm text-muted-foreground">Total volume by crop type</p>
          </CardHeader>
          <CardContent>
            {isClient ? (
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                <Pie
                  data={cropDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {cropDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Loading chart...
              </div>
            )}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {cropDistributionData.map((crop) => (
                <div key={crop.name} className="flex items-center gap-2">
                  <div 
                    className="h-3 w-3 rounded-sm" 
                    style={{ backgroundColor: crop.color }}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{crop.name}</p>
                    <p className="text-xs text-muted-foreground">{crop.value.toLocaleString()} kg</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Weekly Activity Trends</CardTitle>
            <p className="text-sm text-muted-foreground">Daily operations across all activities</p>
          </CardHeader>
          <CardContent>
            {isClient ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyActivityData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="day" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Legend />
                <Bar dataKey="harvests" fill="#f8bc28" name="Harvests" />
                <Bar dataKey="surveys" fill="#0b2534" name="Surveys" />
                <Bar dataKey="trainings" fill="#22c55e" name="Trainings" />
              </BarChart>
            </ResponsiveContainer>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Loading chart...
              </div>
            )}
          </CardContent>
        </Card>

        {/* Farmer Compliance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Farmer Compliance Status</CardTitle>
            <p className="text-sm text-muted-foreground">Certification and compliance breakdown</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {farmerComplianceData.map((item) => (
                <div key={item.category} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="h-3 w-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm font-medium">{item.category}</span>
                    </div>
                    <span className="text-sm font-semibold">{item.count}</span>
                  </div>
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div 
                      className="h-full transition-all" 
                      style={{ 
                        width: `${(item.count / 1012) * 100}%`,
                        backgroundColor: item.color
                      }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {((item.count / 1012) * 100).toFixed(1)}% of total farmers
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-md">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
                    Action Required
                  </p>
                  <p className="text-xs text-amber-800 dark:text-amber-200 mt-1">
                    232 farmers require compliance follow-up this week
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Regional Performance Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Regional Performance Overview</CardTitle>
          <p className="text-sm text-muted-foreground">Comparing metrics across all regions</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Region</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Farmers</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Hectares</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Avg Yield (t/ha)</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Compliance</th>
                </tr>
              </thead>
              <tbody>
                {regionalPerformanceData.map((region) => (
                  <tr key={region.region} className="border-b hover-elevate">
                    <td className="py-3 px-4 font-medium">{region.region}</td>
                    <td className="py-3 px-4 text-right">{region.farmers}</td>
                    <td className="py-3 px-4 text-right">{region.hectares.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right">{region.yield}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Progress value={region.compliance} className="w-20 h-2" />
                        <span className="text-sm font-medium">{region.compliance}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats Grid */}
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Active Campaigns</p>
                <p className="text-2xl font-bold mt-1" data-testid="text-stat-campaigns">3</p>
              </div>
              <Sprout className="h-8 w-8 text-primary opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Fields Mapped</p>
                <p className="text-2xl font-bold mt-1" data-testid="text-stat-fields">1,024</p>
              </div>
              <MapPin className="h-8 w-8 text-primary opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Pending Surveys</p>
                <p className="text-2xl font-bold mt-1" data-testid="text-stat-surveys">48</p>
              </div>
              <Clock className="h-8 w-8 text-amber-500 opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Total Premiums</p>
                <p className="text-2xl font-bold mt-1" data-testid="text-stat-premiums">$28.5k</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500 opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Training Events</p>
                <p className="text-2xl font-bold mt-1" data-testid="text-stat-trainings">24</p>
              </div>
              <Target className="h-8 w-8 text-blue-500 opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Active Loans</p>
                <p className="text-2xl font-bold mt-1" data-testid="text-stat-loans">156</p>
              </div>
              <Package className="h-8 w-8 text-purple-500 opacity-50" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
