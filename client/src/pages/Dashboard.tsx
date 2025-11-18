import { StatCard } from "@/components/StatCard";
import { Users, MapPin, GraduationCap, AlertCircle, TrendingUp, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

//todo: remove mock functionality
const monthlyData = [
  { month: "Jan", farmers: 850, trainings: 12 },
  { month: "Feb", farmers: 920, trainings: 15 },
  { month: "Mar", farmers: 1050, trainings: 18 },
  { month: "Apr", farmers: 1150, trainings: 14 },
  { month: "May", farmers: 1247, trainings: 20 },
];

//todo: remove mock functionality
const recentActivities = [
  { id: 1, type: "farmer", name: "John Omondi", action: "registered", time: "2 hours ago" },
  { id: 2, type: "training", name: "Organic Farming Workshop", action: "completed", time: "4 hours ago" },
  { id: 3, type: "field", name: "Field #234", action: "mapped", time: "5 hours ago" },
  { id: 4, type: "survey", name: "Child Labor Survey", action: "submitted", time: "1 day ago" },
];

//todo: remove mock functionality
const pendingTasks = [
  { id: 1, title: "Review 5 pending farmer registrations", priority: "high" },
  { id: 2, title: "Verify field boundaries for compliance", priority: "medium" },
  { id: 3, title: "Schedule training for next week", priority: "low" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold" data-testid="text-page-title">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Farmers"
          value="1,247"
          icon={Users}
          trend={{ value: 12, label: "from last month" }}
        />
        <StatCard
          title="Mapped Fields"
          value="3,842"
          icon={MapPin}
          trend={{ value: 8, label: "from last month" }}
        />
        <StatCard
          title="Trainings Completed"
          value="156"
          icon={GraduationCap}
          subtitle="This year"
        />
        <StatCard
          title="Active Cases"
          value="23"
          icon={AlertCircle}
          trend={{ value: -15, label: "from last month" }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Farmer Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="farmers" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Training Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px'
                  }}
                />
                <Bar dataKey="trainings" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0">
            <CardTitle>Recent Activity</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3" data-testid={`activity-${activity.id}`}>
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{activity.name}</span>{" "}
                      <span className="text-muted-foreground">was {activity.action}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0">
            <CardTitle>Pending Tasks</CardTitle>
            <Badge variant="secondary">{pendingTasks.length}</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingTasks.map((task) => (
                <div 
                  key={task.id} 
                  className="flex items-center gap-3 p-3 rounded-md border hover-elevate"
                  data-testid={`task-${task.id}`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">{task.title}</p>
                  </div>
                  <Badge 
                    variant={task.priority === "high" ? "destructive" : task.priority === "medium" ? "secondary" : "outline"}
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full" data-testid="button-view-all-tasks">
                View All Tasks
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
