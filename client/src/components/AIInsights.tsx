
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, TrendingUp, AlertTriangle, Calendar, 
  DollarSign, Users, Target, Lightbulb 
} from "lucide-react";

interface AIInsight {
  id: string;
  type: 'prediction' | 'recommendation' | 'alert' | 'optimization';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: string;
  action?: string;
  icon: any;
}

const sampleInsights: AIInsight[] = [
  {
    id: '1',
    type: 'prediction',
    title: 'Harvest Volume Forecast',
    description: 'Predicted 15% increase in coffee harvest next month based on weather patterns and historical data.',
    impact: 'high',
    category: 'Forecasting',
    action: 'View Forecast Details',
    icon: TrendingUp
  },
  {
    id: '2',
    type: 'recommendation',
    title: 'Optimize Input Distribution',
    description: '23 farmers in Northern region need fertilizer restocking. AI suggests bulk order to save 12% on costs.',
    impact: 'medium',
    category: 'Input Management',
    action: 'Create Order',
    icon: Lightbulb
  },
  {
    id: '3',
    type: 'alert',
    title: 'Compliance Risk Detected',
    description: '45 farmers approaching certification expiry in 30 days. Schedule renewal assessments.',
    impact: 'high',
    category: 'Compliance',
    action: 'Schedule Assessments',
    icon: AlertTriangle
  },
  {
    id: '4',
    type: 'optimization',
    title: 'Training Program Optimization',
    description: 'AI identified optimal training schedule: Tuesdays & Thursdays show 35% better attendance.',
    impact: 'medium',
    category: 'Training',
    action: 'Update Schedule',
    icon: Calendar
  },
  {
    id: '5',
    type: 'prediction',
    title: 'Premium Payment Forecast',
    description: 'Estimated $42,500 in premiums payable this month based on quality scores and volume.',
    impact: 'high',
    category: 'Financial',
    action: 'Review Payments',
    icon: DollarSign
  },
  {
    id: '6',
    type: 'recommendation',
    title: 'Farmer Engagement Opportunity',
    description: '67 inactive farmers haven\'t submitted data in 30+ days. AI suggests personalized outreach.',
    impact: 'medium',
    category: 'Engagement',
    action: 'Send Reminders',
    icon: Users
  }
];

export function AIInsights() {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-amber-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'prediction': return 'bg-blue-500/10 text-blue-700 dark:text-blue-300';
      case 'recommendation': return 'bg-purple-500/10 text-purple-700 dark:text-purple-300';
      case 'alert': return 'bg-red-500/10 text-red-700 dark:text-red-300';
      case 'optimization': return 'bg-green-500/10 text-green-700 dark:text-green-300';
      default: return 'bg-gray-500/10 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">AI-Powered Insights & Automation</CardTitle>
          </div>
          <Button variant="outline" size="sm">
            <Target className="h-4 w-4 mr-2" />
            Configure AI
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Intelligent recommendations and predictive analytics for your farm operations
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sampleInsights.map((insight) => {
            const Icon = insight.icon;
            return (
              <Card key={insight.id} className="border-l-4" style={{ borderLeftColor: `var(--${insight.impact === 'high' ? 'destructive' : insight.impact === 'medium' ? 'warning' : 'success'})` }}>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2">
                        <Icon className="h-5 w-5 mt-0.5 text-muted-foreground" />
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">{insight.title}</h4>
                          <Badge className={getTypeColor(insight.type)} variant="secondary">
                            {insight.type}
                          </Badge>
                        </div>
                      </div>
                      <div className={`h-2 w-2 rounded-full ${getImpactColor(insight.impact)}`} title={`${insight.impact} impact`} />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {insight.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-muted-foreground">{insight.category}</span>
                      {insight.action && (
                        <Button variant="ghost" size="sm" className="h-8 text-xs">
                          {insight.action}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
