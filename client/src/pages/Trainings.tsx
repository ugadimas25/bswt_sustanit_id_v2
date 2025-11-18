import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Calendar, Users, Clock } from "lucide-react";

//todo: remove mock functionality
const mockTrainings = [
  {
    id: "T001",
    title: "Organic Farming Practices",
    date: "May 15, 2024",
    time: "09:00 AM",
    location: "Kisumu Training Center",
    trainer: "Dr. Sarah Johnson",
    attendees: 45,
    capacity: 50,
    status: "upcoming",
    topics: ["Soil Management", "Composting", "Pest Control"],
  },
  {
    id: "T002",
    title: "Sustainable Pest Management",
    date: "Apr 22, 2024",
    time: "02:00 PM",
    location: "Nakuru Hub",
    trainer: "James Kipchoge",
    attendees: 38,
    capacity: 40,
    status: "completed",
    topics: ["Integrated Pest Management", "Organic Pesticides"],
  },
  {
    id: "T003",
    title: "Climate-Smart Agriculture",
    date: "May 20, 2024",
    time: "10:00 AM",
    location: "Online Webinar",
    trainer: "Dr. Maria Santos",
    attendees: 12,
    capacity: 100,
    status: "upcoming",
    topics: ["Weather Adaptation", "Water Management"],
  },
  {
    id: "T004",
    title: "Post-Harvest Management",
    date: "Mar 10, 2024",
    time: "08:30 AM",
    location: "Benguet Cooperative",
    trainer: "Carlos Rodriguez",
    attendees: 52,
    capacity: 50,
    status: "completed",
    topics: ["Storage Techniques", "Quality Control"],
  },
];

export default function Trainings() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTrainings = mockTrainings.filter((training) =>
    training.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    training.trainer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    training.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const upcomingTrainings = filteredTrainings.filter(t => t.status === "upcoming");
  const completedTrainings = filteredTrainings.filter(t => t.status === "completed");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-semibold" data-testid="text-page-title">Trainings</h1>
          <p className="text-muted-foreground mt-1">Schedule and track farmer training sessions</p>
        </div>
        <Button data-testid="button-add-training">
          <Plus className="h-4 w-4 mr-2" />
          Schedule Training
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{upcomingTrainings.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Sessions scheduled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Participants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">
              {mockTrainings.reduce((acc, t) => acc + t.attendees, 0)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{completedTrainings.length}</div>
            <p className="text-xs text-muted-foreground mt-1">This year</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4 flex-wrap">
            <CardTitle>Training Sessions</CardTitle>
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search trainings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
                data-testid="input-search-trainings"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {upcomingTrainings.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Upcoming Sessions</h3>
                <div className="space-y-3">
                  {upcomingTrainings.map((training) => (
                    <div 
                      key={training.id}
                      className="p-4 rounded-md border hover-elevate cursor-pointer"
                      data-testid={`card-training-${training.id}`}
                    >
                      <div className="flex items-start justify-between flex-wrap gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-medium">{training.title}</h4>
                            <Badge variant="secondary">{training.status}</Badge>
                          </div>
                          <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{training.date} at {training.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{training.attendees}/{training.capacity} registered</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            Trainer: {training.trainer} • {training.location}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {training.topics.map((topic) => (
                              <Badge key={topic} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button variant="outline" size="sm" data-testid={`button-view-training-${training.id}`}>
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {completedTrainings.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Completed Sessions</h3>
                <div className="space-y-3">
                  {completedTrainings.map((training) => (
                    <div 
                      key={training.id}
                      className="p-4 rounded-md border hover-elevate cursor-pointer opacity-75"
                      data-testid={`card-training-${training.id}`}
                    >
                      <div className="flex items-start justify-between flex-wrap gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-medium">{training.title}</h4>
                            <Badge variant="outline">{training.status}</Badge>
                          </div>
                          <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{training.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{training.attendees} attended</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" data-testid={`button-view-training-${training.id}`}>
                          View Report
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredTrainings.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No trainings found matching your search.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
