import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

//todo: remove mock functionality
const mockSurveys = [
  {
    id: "S001",
    title: "Child Labor Monitoring Survey",
    category: "Compliance",
    responses: 156,
    target: 200,
    status: "active",
    deadline: "May 30, 2024",
    questions: 24,
  },
  {
    id: "S002",
    title: "Internal Inspection Checklist",
    category: "Quality Control",
    responses: 89,
    target: 100,
    status: "active",
    deadline: "May 25, 2024",
    questions: 18,
  },
  {
    id: "S003",
    title: "Farm Safety Assessment",
    category: "Health & Safety",
    responses: 203,
    target: 200,
    status: "completed",
    deadline: "Apr 15, 2024",
    questions: 15,
  },
  {
    id: "S004",
    title: "Organic Certification Pre-Assessment",
    category: "Certification",
    responses: 42,
    target: 150,
    status: "active",
    deadline: "Jun 10, 2024",
    questions: 32,
  },
];

export default function Surveys() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSurveys = mockSurveys.filter((survey) =>
    survey.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    survey.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeSurveys = filteredSurveys.filter(s => s.status === "active");
  const completedSurveys = filteredSurveys.filter(s => s.status === "completed");

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4 text-primary" />;
      case "active": return <Clock className="h-4 w-4 text-yellow-600" />;
      default: return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-semibold" data-testid="text-page-title">Surveys</h1>
          <p className="text-muted-foreground mt-1">Create and manage compliance surveys</p>
        </div>
        <Button data-testid="button-create-survey">
          <Plus className="h-4 w-4 mr-2" />
          Create Survey
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Surveys</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{activeSurveys.length}</div>
            <p className="text-xs text-muted-foreground mt-1">In progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Responses</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">
              {mockSurveys.reduce((acc, s) => acc + s.responses, 0)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">All surveys</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{completedSurveys.length}</div>
            <p className="text-xs text-muted-foreground mt-1">This quarter</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4 flex-wrap">
            <CardTitle>Survey List</CardTitle>
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search surveys..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
                data-testid="input-search-surveys"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {activeSurveys.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Active Surveys</h3>
                <div className="space-y-3">
                  {activeSurveys.map((survey) => (
                    <div 
                      key={survey.id}
                      className="p-4 rounded-md border hover-elevate cursor-pointer"
                      data-testid={`card-survey-${survey.id}`}
                    >
                      <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-medium">{survey.title}</h4>
                            <Badge variant="secondary">{survey.category}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {survey.questions} questions • Deadline: {survey.deadline}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" data-testid={`button-view-survey-${survey.id}`}>
                          View Responses
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Response Progress</span>
                          <span className="font-medium">
                            {survey.responses}/{survey.target} ({Math.round((survey.responses / survey.target) * 100)}%)
                          </span>
                        </div>
                        <Progress value={(survey.responses / survey.target) * 100} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {completedSurveys.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Completed Surveys</h3>
                <div className="space-y-3">
                  {completedSurveys.map((survey) => (
                    <div 
                      key={survey.id}
                      className="p-4 rounded-md border hover-elevate cursor-pointer opacity-75"
                      data-testid={`card-survey-${survey.id}`}
                    >
                      <div className="flex items-start justify-between flex-wrap gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            {getStatusIcon(survey.status)}
                            <h4 className="font-medium">{survey.title}</h4>
                            <Badge variant="outline">{survey.status}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {survey.responses} responses • {survey.questions} questions
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" data-testid={`button-view-survey-${survey.id}`}>
                          View Report
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredSurveys.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No surveys found matching your search.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
