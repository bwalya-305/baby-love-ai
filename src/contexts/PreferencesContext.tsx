import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Preferences, DEFAULT_PREFERENCES } from "@/lib/filterNames";

interface PreferencesContextType {
  preferences: Preferences;
  setPreferences: (prefs: Preferences) => void;
  updatePreference: <K extends keyof Preferences>(key: K, value: Preferences[K]) => void;
  hasCompletedOnboarding: boolean;
  setHasCompletedOnboarding: (v: boolean) => void;
  resetPreferences: () => void;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

const PREFS_KEY = "babynameai_preferences";
const ONBOARDING_KEY = "babynameai_onboarding_complete";

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferencesState] = useState<Preferences>(() => {
    const saved = localStorage.getItem(PREFS_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_PREFERENCES;
  });

  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(() => {
    return localStorage.getItem(ONBOARDING_KEY) === "true";
  });

  useEffect(() => {
    localStorage.setItem(PREFS_KEY, JSON.stringify(preferences));
  }, [preferences]);

  useEffect(() => {
    localStorage.setItem(ONBOARDING_KEY, String(hasCompletedOnboarding));
  }, [hasCompletedOnboarding]);

  const setPreferences = (prefs: Preferences) => setPreferencesState(prefs);

  const updatePreference = <K extends keyof Preferences>(key: K, value: Preferences[K]) => {
    setPreferencesState((prev) => ({ ...prev, [key]: value }));
  };

  const resetPreferences = () => {
    setPreferencesState(DEFAULT_PREFERENCES);
    setHasCompletedOnboarding(false);
  };

  return (
    <PreferencesContext.Provider
      value={{ preferences, setPreferences, updatePreference, hasCompletedOnboarding, setHasCompletedOnboarding, resetPreferences }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error("usePreferences must be used within PreferencesProvider");
  return ctx;
}
