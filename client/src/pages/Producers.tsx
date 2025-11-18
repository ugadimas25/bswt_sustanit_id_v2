import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus, Filter, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import farmer1 from "@assets/generated_images/African_farmer_portrait_1_8df294e0.png";
import farmer2 from "@assets/generated_images/Asian_female_farmer_portrait_ba60ae0b.png";
import farmer3 from "@assets/generated_images/Latin_farmer_portrait_86471c75.png";

//todo: remove mock functionality
const mockProducers = [
  {
    id: "P001",
    name: "John Omondi",
    location: "Kisumu County, Kenya",
    phone: "+254 712 345 678",
    email: "j.omondi@email.com",
    fields: 3,
    status: "active",
    image: farmer1,
  },
  {
    id: "P002",
    name: "Maria Santos",
    location: "Benguet Province, Philippines",
    phone: "+63 917 234 5678",
    email: "m.santos@email.com",
    fields: 5,
    status: "active",
    image: farmer2,
  },
  {
    id: "P003",
    name: "Carlos Rodriguez",
    location: "Antioquia, Colombia",
    phone: "+57 310 234 5678",
    email: "c.rodriguez@email.com",
    fields: 2,
    status: "pending",
    image: farmer3,
  },
  {
    id: "P004",
    name: "Grace Mutua",
    location: "Nakuru County, Kenya",
    phone: "+254 723 456 789",
    email: "g.mutua@email.com",
    fields: 4,
    status: "active",
    image: null,
  },
  {
    id: "P005",
    name: "Ahmed Hassan",
    location: "Kilimanjaro, Tanzania",
    phone: "+255 754 123 456",
    email: "a.hassan@email.com",
    fields: 6,
    status: "active",
    image: null,
  },
];

export default function Producers() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducers = mockProducers.filter((producer) =>
    producer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    producer.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    producer.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-semibold" data-testid="text-page-title">Producers</h1>
          <p className="text-muted-foreground mt-1">Manage and monitor farmer registrations</p>
        </div>
        <Button data-testid="button-add-producer">
          <Plus className="h-4 w-4 mr-2" />
          Add Producer
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, ID, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
                data-testid="input-search-producers"
              />
            </div>
            <Button variant="outline" data-testid="button-filter">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredProducers.map((producer) => (
              <Link href={`/producers/${producer.id}`} key={producer.id}>
                <div 
                  className="flex items-center gap-4 p-4 rounded-md border hover-elevate cursor-pointer"
                  data-testid={`card-producer-${producer.id}`}
                >
                  <Avatar className="h-12 w-12">
                    {producer.image && <AvatarImage src={producer.image} alt={producer.name} />}
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {producer.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-medium">{producer.name}</h3>
                      <Badge 
                        variant={producer.status === "active" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {producer.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">ID: {producer.id}</p>
                  </div>

                  <div className="hidden md:flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground truncate">{producer.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground">{producer.phone}</span>
                    </div>
                  </div>

                  <div className="hidden lg:block text-right">
                    <p className="text-sm font-medium">{producer.fields}</p>
                    <p className="text-xs text-muted-foreground">Fields</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No producers found matching your search.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
