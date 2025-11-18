import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, Edit, Calendar, Users, FileText } from "lucide-react";
import { useRoute } from "wouter";
import farmer1 from "@assets/generated_images/African_farmer_portrait_1_8df294e0.png";

//todo: remove mock functionality
const mockProducer = {
  id: "P001",
  name: "John Omondi",
  location: "Kisumu County, Kenya",
  phone: "+254 712 345 678",
  email: "j.omondi@email.com",
  registrationDate: "Jan 15, 2024",
  status: "active",
  image: farmer1,
  fields: [
    { id: "F001", name: "North Field", size: "2.5 ha", crop: "Coffee", status: "compliant" },
    { id: "F002", name: "South Field", size: "3.2 ha", crop: "Tea", status: "compliant" },
    { id: "F003", name: "East Field", size: "1.8 ha", crop: "Coffee", status: "pending" },
  ],
  trainings: [
    { id: "T001", name: "Organic Farming Practices", date: "Mar 10, 2024", status: "completed" },
    { id: "T002", name: "Sustainable Pest Management", date: "Feb 22, 2024", status: "completed" },
  ],
  surveys: [
    { id: "S001", name: "Child Labor Survey", date: "Apr 5, 2024", status: "completed" },
    { id: "S002", name: "Internal Inspection", date: "Mar 28, 2024", status: "completed" },
  ],
};

export default function ProducerDetail() {
  const [, params] = useRoute("/producers/:id");

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={mockProducer.image} alt={mockProducer.name} />
            <AvatarFallback className="bg-primary/10 text-primary text-2xl">
              {mockProducer.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-semibold" data-testid="text-producer-name">
                {mockProducer.name}
              </h1>
              <Badge variant={mockProducer.status === "active" ? "secondary" : "outline"}>
                {mockProducer.status}
              </Badge>
            </div>
            <p className="text-muted-foreground mt-1">ID: {mockProducer.id}</p>
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{mockProducer.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{mockProducer.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{mockProducer.email}</span>
              </div>
            </div>
          </div>
        </div>
        <Button data-testid="button-edit-producer">
          <Edit className="h-4 w-4 mr-2" />
          Edit Producer
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Fields</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{mockProducer.fields.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {mockProducer.fields.reduce((acc, f) => acc + parseFloat(f.size), 0).toFixed(1)} ha total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Trainings</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{mockProducer.trainings.length}</div>
            <p className="text-xs text-muted-foreground mt-1">All completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Surveys</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{mockProducer.surveys.length}</div>
            <p className="text-xs text-muted-foreground mt-1">This year</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="fields" className="w-full">
        <TabsList>
          <TabsTrigger value="fields" data-testid="tab-fields">Fields</TabsTrigger>
          <TabsTrigger value="trainings" data-testid="tab-trainings">Trainings</TabsTrigger>
          <TabsTrigger value="surveys" data-testid="tab-surveys">Surveys</TabsTrigger>
        </TabsList>

        <TabsContent value="fields" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Registered Fields</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockProducer.fields.map((field) => (
                  <div 
                    key={field.id}
                    className="flex items-center justify-between p-4 rounded-md border"
                    data-testid={`field-${field.id}`}
                  >
                    <div>
                      <h4 className="font-medium">{field.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {field.size} • {field.crop}
                      </p>
                    </div>
                    <Badge variant={field.status === "compliant" ? "secondary" : "outline"}>
                      {field.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trainings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Training History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockProducer.trainings.map((training) => (
                  <div 
                    key={training.id}
                    className="flex items-center justify-between p-4 rounded-md border"
                    data-testid={`training-${training.id}`}
                  >
                    <div>
                      <h4 className="font-medium">{training.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        <Calendar className="h-3 w-3 inline mr-1" />
                        {training.date}
                      </p>
                    </div>
                    <Badge variant="secondary">{training.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="surveys" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Survey Responses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockProducer.surveys.map((survey) => (
                  <div 
                    key={survey.id}
                    className="flex items-center justify-between p-4 rounded-md border"
                    data-testid={`survey-${survey.id}`}
                  >
                    <div>
                      <h4 className="font-medium">{survey.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        <Calendar className="h-3 w-3 inline mr-1" />
                        {survey.date}
                      </p>
                    </div>
                    <Badge variant="secondary">{survey.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
