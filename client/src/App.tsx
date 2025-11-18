import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Producers from "@/pages/Producers";
import ProducerDetail from "@/pages/ProducerDetail";
import Fields from "@/pages/Fields";
import Trainings from "@/pages/Trainings";
import Surveys from "@/pages/Surveys";
import Cases from "@/pages/Cases";
import Harvests from "@/pages/Harvests";
import Reports from "@/pages/Reports";
import Users from "@/pages/Users";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Dashboard} />
      <Route path="/producers" component={Producers} />
      <Route path="/producers/:id" component={ProducerDetail} />
      <Route path="/fields" component={Fields} />
      <Route path="/trainings" component={Trainings} />
      <Route path="/surveys" component={Surveys} />
      <Route path="/cases" component={Cases} />
      <Route path="/harvests" component={Harvests} />
      <Route path="/reports" component={Reports} />
      <Route path="/users" component={Users} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const style = {
    "--sidebar-width": "38rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex flex-col flex-1">
              <header className="flex items-center justify-between p-4 border-b">
                <SidebarTrigger data-testid="button-sidebar-toggle" />
                <ThemeToggle />
              </header>
              <main className="flex-1 overflow-auto">
                <div className="p-6 max-w-7xl mx-auto">
                  <Router />
                </div>
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
