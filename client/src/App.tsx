import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { InstallPWA } from "@/components/InstallPWA";
import { useEffect } from "react";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Producers from "@/pages/Producers";
import ProducerDetail from "@/pages/ProducerDetail";
import Fields from "@/pages/Fields";
import Cases from "@/pages/Cases";
import Reports from "@/pages/Reports";
import Users from "@/pages/Users";
import PlantingCampaigns from "@/pages/PlantingCampaigns";
import CroppingCycleFinancials from "@/pages/CroppingCycleFinancials";
import FieldProductivity from "@/pages/FieldProductivity";
import PlantingCampaignGroups from "@/pages/PlantingCampaignGroups";
import PlantingCampaignTemplates from "@/pages/PlantingCampaignTemplates";
import WeeklyYieldForecasts from "@/pages/WeeklyYieldForecasts";

import FarmingInputs from "@/pages/FarmingInputs";
import InputCosts from "@/pages/InputCosts";
import InputDistribution from "@/pages/InputDistribution";
import InputPurchases from "@/pages/InputPurchases";
import Fertilizers from "@/pages/Fertilizers";
import FertilizerApplications from "@/pages/FertilizerApplications";
import ChemicalApplications from "@/pages/ChemicalApplications";
import ChemicalApplicationTargets from "@/pages/ChemicalApplicationTargets";
import ChemicalApplicationVarieties from "@/pages/ChemicalApplicationVarieties";
import OtherInputs from "@/pages/OtherInputs";
import OtherApplications from "@/pages/OtherApplications";
import PlantedArea from "@/pages/PlantedArea";

import Harvests from "@/pages/Harvests";
import HarvestGroupBags from "@/pages/HarvestGroupBags";
import HarvestActivities from "@/pages/HarvestActivities";
import HarvestAlerts from "@/pages/HarvestAlerts";
import HarvestCosts from "@/pages/HarvestCosts";
import HarvestPurchases from "@/pages/HarvestPurchases";
import HarvestWarehouse from "@/pages/HarvestWarehouse";
import HarvestForecasts from "@/pages/HarvestForecasts";
import HarvestBatches from "@/pages/HarvestBatches";
import HarvestCollections from "@/pages/HarvestCollections";
import HarvestQuality from "@/pages/HarvestQuality";
import HarvestScheduling from "@/pages/HarvestScheduling";
import HarvestTracking from "@/pages/HarvestTracking";
import HarvestDeliveries from "@/pages/HarvestDeliveries";
import HarvestReports from "@/pages/HarvestReports";
import HarvestInputStore from "@/pages/HarvestInputStore";
import HarvestInputUnit from "@/pages/HarvestInputUnit";

import Traceability from "@/pages/Traceability";
import TraceabilityFarmerHarvest from "@/pages/TraceabilityFarmerHarvest";
import TraceabilityContainers from "@/pages/TraceabilityContainers";
import TraceabilityLocations from "@/pages/TraceabilityLocations";
import TraceabilityPurchases from "@/pages/TraceabilityPurchases";
import TraceabilityInputUsage from "@/pages/TraceabilityInputUsage";
import TraceabilitySectionDeliveries from "@/pages/TraceabilitySectionDeliveries";
import TraceabilityCustomFields from "@/pages/TraceabilityCustomFields";
import TraceabilityProcessing from "@/pages/TraceabilityProcessing";
import TraceabilityShipment from "@/pages/TraceabilityShipment";
import TraceabilityQuotas from "@/pages/TraceabilityQuotas";
import TraceabilityDeductions from "@/pages/TraceabilityDeductions";

import Trainings from "@/pages/Trainings";
import TrainerGroups from "@/pages/TrainerGroups";
import Trainers from "@/pages/Trainers";
import TrainingEvents from "@/pages/TrainingEvents";
import TrainingTopics from "@/pages/TrainingTopics";

import Surveys from "@/pages/Surveys";
import CustomSurveys from "@/pages/CustomSurveys";
import SurveyComplianceCategories from "@/pages/SurveyComplianceCategories";
import SurveyQuestionsRanking from "@/pages/SurveyQuestionsRanking";
import SurveyFarmerCompliance from "@/pages/SurveyFarmerCompliance";
import SurveyProposedActions from "@/pages/SurveyProposedActions";
import SurveyResponsesByStaff from "@/pages/SurveyResponsesByStaff";
import SurveySurveysByStaff from "@/pages/SurveySurveysByStaff";
import Accounts from "@/pages/Accounts";
import Locations from "@/pages/Locations";
import Loans from "@/pages/Loans";
import LoanDetail from "@/pages/LoanDetail";
import Savings from "@/pages/Savings";
import CompanySales from "@/pages/CompanySales";
import Partners from "@/pages/Partners";
import Devices from "@/pages/Devices";
import AreaTypes from "@/pages/AreaTypes";
import Certifications from "@/pages/Certifications";
import FamilyMembers from "@/pages/FamilyMembers";
import Farms from "@/pages/Farms";
import CertificateStates from "@/pages/CertificateStates";
import FamilyMemberEducation from "@/pages/FamilyMemberEducation";
import FamilyMemberRelationships from "@/pages/FamilyMemberRelationships";
import FarmObjectImages from "@/pages/FarmObjectImages";
import FarmObjects from "@/pages/FarmObjects";
import FarmerCertifications from "@/pages/FarmerCertifications";
import FarmerLastActivity from "@/pages/FarmerLastActivity";
import FarmerPremiums from "@/pages/FarmerPremiums";
import FarmersAttributes from "@/pages/FarmersAttributes";
import FarmerLivelihood from "@/pages/FarmerLivelihood";
import FieldQuotas from "@/pages/FieldQuotas";
import FieldsDeforestation from "@/pages/FieldsDeforestation";
import WorkflowRainforestAlliance from "@/pages/WorkflowRainforestAlliance";
import WorkflowFairtrade from "@/pages/WorkflowFairtrade";
import WorkflowOrganic from "@/pages/WorkflowOrganic";
import WorkflowEUDR from "@/pages/WorkflowEUDR";
import FieldsDeforestationSummary from "@/pages/FieldsDeforestationSummary";
import GAOperatorCosts from "@/pages/GAOperatorCosts";
import PremiumRules from "@/pages/PremiumRules";
import PremiumVolumeTracking from "@/pages/PremiumVolumeTracking";
import LoanDeductions from "@/pages/LoanDeductions";
import ReportsDashboards from "@/pages/ReportsDashboards";
import ReportsBuilder from "@/pages/ReportsBuilder";
import AdminCountry from "@/pages/AdminCountry";
import AdminRegions from "@/pages/AdminRegions";
import AdminImport from "@/pages/AdminImport";
import AdminBuyers from "@/pages/AdminBuyers";
import AdminStaff from "@/pages/AdminStaff";
import AdminLoginLogs from "@/pages/AdminLoginLogs";
import AdminOffice from "@/pages/AdminOffice";
import Penilaian from "@/pages/Penilaian";
import RSPO from "@/pages/RSPO";
import ISPO from "@/pages/ISPO";
import Ketertelusuran from "@/pages/Ketertelusuran";
import Pengetahuan from "@/pages/Pengetahuan";
import HargaPasar from "@/pages/HargaPasar";
import Kalender from "@/pages/Kalender";
import Bantuan from "@/pages/Bantuan";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Dashboard} />
      <Route path="/penilaian" component={Penilaian} />
      <Route path="/penilaian/rspo" component={RSPO} />
      <Route path="/penilaian/ispo" component={ISPO} />
      <Route path="/ketertelusuran" component={Ketertelusuran} />
      <Route path="/pengetahuan" component={Pengetahuan} />
      <Route path="/harga-pasar" component={HargaPasar} />
      <Route path="/kalender" component={Kalender} />
      <Route path="/bantuan" component={Bantuan} />
      <Route path="/producers" component={Producers} />
      <Route path="/producers/:id" component={ProducerDetail} />
      <Route path="/planting-campaigns" component={PlantingCampaigns} />
      <Route path="/cropping-cycle-financials" component={CroppingCycleFinancials} />
      <Route path="/field-productivity" component={FieldProductivity} />
      <Route path="/planting-campaign-groups" component={PlantingCampaignGroups} />
      <Route path="/planting-campaign-templates" component={PlantingCampaignTemplates} />
      <Route path="/weekly-yield-forecasts" component={WeeklyYieldForecasts} />

      <Route path="/farming-inputs" component={FarmingInputs} />
      <Route path="/input-costs" component={InputCosts} />
      <Route path="/input-distribution" component={InputDistribution} />
      <Route path="/input-purchases" component={InputPurchases} />
      <Route path="/fertilizers" component={Fertilizers} />
      <Route path="/fertilizer-applications" component={FertilizerApplications} />
      <Route path="/chemical-applications" component={ChemicalApplications} />
      <Route path="/chemical-application-targets" component={ChemicalApplicationTargets} />
      <Route path="/chemical-application-varieties" component={ChemicalApplicationVarieties} />
      <Route path="/other-inputs" component={OtherInputs} />
      <Route path="/other-applications" component={OtherApplications} />
      <Route path="/planted-area" component={PlantedArea} />

      <Route path="/harvests" component={Harvests} />
      <Route path="/harvest-group-bags" component={HarvestGroupBags} />
      <Route path="/harvest-activities" component={HarvestActivities} />
      <Route path="/harvest-alerts" component={HarvestAlerts} />
      <Route path="/harvest-costs" component={HarvestCosts} />
      <Route path="/harvest-purchases" component={HarvestPurchases} />
      <Route path="/harvest-warehouse" component={HarvestWarehouse} />
      <Route path="/harvest-forecasts" component={HarvestForecasts} />
      <Route path="/harvest-batches" component={HarvestBatches} />
      <Route path="/harvest-collections" component={HarvestCollections} />
      <Route path="/harvest-quality" component={HarvestQuality} />
      <Route path="/harvest-scheduling" component={HarvestScheduling} />
      <Route path="/harvest-tracking" component={HarvestTracking} />
      <Route path="/harvest-deliveries" component={HarvestDeliveries} />
      <Route path="/harvest-reports" component={HarvestReports} />
      <Route path="/harvest-input-store" component={HarvestInputStore} />
      <Route path="/harvest-input-unit" component={HarvestInputUnit} />

      <Route path="/traceability" component={Traceability} />
      <Route path="/traceability-farmer-harvest" component={TraceabilityFarmerHarvest} />
      <Route path="/traceability/custom-fields" component={TraceabilityCustomFields} />
      <Route path="/traceability-processing" component={TraceabilityProcessing} />
      <Route path="/traceability-shipment" component={TraceabilityShipment} />
      <Route path="/traceability-quotas" component={TraceabilityQuotas} />
      <Route path="/traceability-deductions" component={TraceabilityDeductions} />
      <Route path="/traceability-containers" component={TraceabilityContainers} />
      <Route path="/traceability-locations" component={TraceabilityLocations} />
      <Route path="/traceability-purchases" component={TraceabilityPurchases} />
      <Route path="/traceability-input-usage" component={TraceabilityInputUsage} />
      <Route path="/traceability-section-deliveries" component={TraceabilitySectionDeliveries} />

      <Route path="/trainings" component={Trainings} />
      <Route path="/trainer-groups" component={TrainerGroups} />
      <Route path="/trainers" component={Trainers} />
      <Route path="/training-events" component={TrainingEvents} />
      <Route path="/training-topics" component={TrainingTopics} />

      <Route path="/surveys" component={Surveys} />
      <Route path="/surveys/custom" component={CustomSurveys} />
      <Route path="/survey-compliance-categories" component={SurveyComplianceCategories} />
      <Route path="/survey-questions-ranking" component={SurveyQuestionsRanking} />
      <Route path="/survey-farmer-compliance" component={SurveyFarmerCompliance} />
      <Route path="/survey-proposed-actions" component={SurveyProposedActions} />
      <Route path="/survey-responses-by-staff" component={SurveyResponsesByStaff} />
      <Route path="/survey-surveys-by-staff" component={SurveySurveysByStaff} />
      <Route path="/accounts" component={Accounts} />
      <Route path="/locations" component={Locations} />
      <Route path="/loans" component={Loans} />
      <Route path="/loans/:id" component={LoanDetail} />
      <Route path="/loan-deductions" component={LoanDeductions} />
      <Route path="/savings" component={Savings} />
      <Route path="/company-sales" component={CompanySales} />
      <Route path="/partners" component={Partners} />
      <Route path="/devices" component={Devices} />
      <Route path="/reports" component={Reports} />
      <Route path="/reports/dashboards" component={ReportsDashboards} />
      <Route path="/reports/builder" component={ReportsBuilder} />
      <Route path="/users" component={Users} />
      <Route path="/admin/country" component={AdminCountry} />
      <Route path="/admin/regions" component={AdminRegions} />
      <Route path="/admin/import" component={AdminImport} />
      <Route path="/admin/buyers" component={AdminBuyers} />
      <Route path="/admin/staff" component={AdminStaff} />
      <Route path="/admin/login-logs" component={AdminLoginLogs} />
      <Route path="/admin/office" component={AdminOffice} />
      <Route path="/cases" component={Cases} />
      <Route path="/fields" component={Fields} />
      <Route path="/area-types" component={AreaTypes} />
      <Route path="/certifications" component={Certifications} />
      <Route path="/family-members" component={FamilyMembers} />
      <Route path="/farms" component={Farms} />
      <Route path="/certificate-states" component={CertificateStates} />
      <Route path="/family-member-education" component={FamilyMemberEducation} />
      <Route path="/family-member-relationships" component={FamilyMemberRelationships} />
      <Route path="/farm-object-images" component={FarmObjectImages} />
      <Route path="/farm-objects" component={FarmObjects} />
      <Route path="/farmer-certifications" component={FarmerCertifications} />
      <Route path="/farmer-last-activity" component={FarmerLastActivity} />
      <Route path="/farmer-premiums" component={FarmerPremiums} />
      <Route path="/premium-rules" component={PremiumRules} />
      <Route path="/premium-volume-tracking" component={PremiumVolumeTracking} />
      <Route path="/farmers-attributes" component={FarmersAttributes} />
      <Route path="/farmer-livelihood" component={FarmerLivelihood} />
      <Route path="/field-quotas" component={FieldQuotas} />
      <Route path="/fields-deforestation" component={FieldsDeforestation} />
      <Route path="/workflow/rainforest-alliance" component={WorkflowRainforestAlliance} />
      <Route path="/workflow/fairtrade" component={WorkflowFairtrade} />
      <Route path="/workflow/organic" component={WorkflowOrganic} />
      <Route path="/workflow/eudr" component={WorkflowEUDR} />
      <Route path="/fields-deforestation-summary" component={FieldsDeforestationSummary} />
      <Route path="/ga-operator-costs" component={GAOperatorCosts} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location, setLocation] = useLocation();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    // Redirect to login if not authenticated and not already on login page
    if (!isAuthenticated && location !== "/login") {
      setLocation("/login");
    }
  }, [location, isAuthenticated, setLocation]);

  // If on login page, show only login
  if (location === "/login") {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Login />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  // If not authenticated, show nothing while redirecting
  if (!isAuthenticated) {
    return null;
  }

  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex flex-col flex-1">
              <header className="flex items-center justify-between p-4 border-b bg-card shadow-sm">
                <SidebarTrigger data-testid="button-sidebar-toggle" className="h-10 w-10" />
                <ThemeToggle />
              </header>
              <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-background">
                <div className="p-6 max-w-7xl mx-auto">
                  <Router />
                </div>
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
        <InstallPWA />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;