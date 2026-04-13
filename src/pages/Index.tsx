import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePreferences } from "@/contexts/PreferencesContext";

export default function Index() {
  const { hasCompletedOnboarding } = usePreferences();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(hasCompletedOnboarding ? "/discover" : "/onboarding", { replace: true });
  }, [hasCompletedOnboarding, navigate]);

  return null;
}
