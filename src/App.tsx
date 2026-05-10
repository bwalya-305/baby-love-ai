import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PreferencesProvider } from "@/contexts/PreferencesContext";
import { ShortlistProvider } from "@/contexts/ShortlistContext";
import Index from "./pages/Index.tsx";
import Onboarding from "./pages/Onboarding.tsx";
import Discover from "./pages/Discover.tsx";
import NameDetail from "./pages/NameDetail.tsx";
import Shortlist from "./pages/Shortlist.tsx";
import Partner from "./pages/Partner.tsx";
import Profile from "./pages/Profile.tsx";
import PreDeployCheck from "./pages/PreDeployCheck.tsx";
import NotFound from "./pages/NotFound.tsx";
import ChatbotWidget from "./components/ChatbotWidget.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PreferencesProvider>
        <ShortlistProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/name/:id" element={<NameDetail />} />
              <Route path="/shortlist" element={<Shortlist />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/pre-deploy" element={<PreDeployCheck />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ShortlistProvider>
      </PreferencesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
