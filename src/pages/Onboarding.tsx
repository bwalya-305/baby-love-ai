import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePreferences } from "@/contexts/PreferencesContext";
import { Gender, ORIGINS, THEMES, Origin, Theme } from "@/data/names";
import ThemeTag from "@/components/ThemeTag";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const STEPS = 4;

export default function Onboarding() {
  const { preferences, updatePreference, setHasCompletedOnboarding } = usePreferences();
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [originSearch, setOriginSearch] = useState("");

  const next = () => {
    if (step < STEPS - 1) setStep(step + 1);
    else {
      setHasCompletedOnboarding(true);
      navigate("/discover");
    }
  };
  const back = () => step > 0 && setStep(step - 1);

  const genderOptions: { value: Gender | "any"; label: string; emoji: string }[] = [
    { value: "boy", label: "Boy", emoji: "👦" },
    { value: "girl", label: "Girl", emoji: "👧" },
    { value: "neutral", label: "Gender Neutral", emoji: "✨" },
    { value: "any", label: "Show All", emoji: "🌈" },
  ];

  const filteredOrigins = ORIGINS.filter((o) => o.toLowerCase().includes(originSearch.toLowerCase()));

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <div className="px-6 pt-12 pb-4">
        <h1 className="font-serif text-3xl font-bold text-foreground">
          Baby<span className="text-primary">Name</span> <span className="italic">AI</span>
        </h1>
        <div className="mt-4 flex gap-1.5">
          {Array.from({ length: STEPS }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-muted"}`}
            />
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Step {step + 1} of {STEPS}</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-32">
        {step === 0 && (
          <div className="animate-fade-in">
            <h2 className="font-serif text-2xl font-semibold">What are you looking for?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Choose a gender preference for name suggestions.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {genderOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => updatePreference("gender", opt.value)}
                  className={`rounded-xl border-2 p-4 text-center transition-all ${
                    preferences.gender === opt.value
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <span className="text-2xl">{opt.emoji}</span>
                  <p className="mt-2 font-medium text-foreground">{opt.label}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="font-serif text-2xl font-semibold">Cultural origins</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Select one or more cultural traditions. Leave empty to see all.
            </p>
            <Input
              placeholder="Search origins..."
              value={originSearch}
              onChange={(e) => setOriginSearch(e.target.value)}
              className="mt-4"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {filteredOrigins.map((origin) => {
                const selected = preferences.origins.includes(origin);
                return (
                  <button
                    key={origin}
                    onClick={() => {
                      if (selected) {
                        updatePreference("origins", preferences.origins.filter((o) => o !== origin));
                      } else {
                        updatePreference("origins", [...preferences.origins, origin]);
                      }
                    }}
                    className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                      selected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-foreground hover:border-primary/50"
                    }`}
                  >
                    {origin}
                  </button>
                );
              })}
            </div>
            {preferences.origins.length > 0 && (
              <button
                onClick={() => updatePreference("origins", [])}
                className="mt-3 text-xs text-primary hover:underline"
              >
                Clear all
              </button>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="font-serif text-2xl font-semibold">Themes & meaning</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              What themes resonate with you? Select as many as you'd like.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {THEMES.map((theme) => (
                <ThemeTag
                  key={theme}
                  theme={theme}
                  selected={preferences.themes.includes(theme)}
                  onToggle={(t) => {
                    if (preferences.themes.includes(t)) {
                      updatePreference("themes", preferences.themes.filter((x) => x !== t));
                    } else {
                      updatePreference("themes", [...preferences.themes, t]);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="font-serif text-2xl font-semibold">Name style</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fine-tune your preferences.</p>

            <div className="mt-6">
              <label className="text-sm font-medium text-foreground">
                Syllables: {preferences.syllableRange[0]} – {preferences.syllableRange[1]}
              </label>
              <div className="mt-3 px-1">
                <Slider
                  min={1}
                  max={5}
                  step={1}
                  value={preferences.syllableRange}
                  onValueChange={(v) => updatePreference("syllableRange", v as [number, number])}
                />
              </div>
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>Short</span>
                <span>Long</span>
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium text-foreground">Starting letters</label>
              <Input
                placeholder="e.g. A, M, S"
                value={preferences.startingLetters.join(", ")}
                onChange={(e) => {
                  const letters = e.target.value
                    .split(",")
                    .map((l) => l.trim())
                    .filter((l) => l.length === 1);
                  updatePreference("startingLetters", letters);
                }}
                className="mt-2"
              />
              <p className="mt-1 text-xs text-muted-foreground">Comma-separated letters, or leave empty for any.</p>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium text-foreground">Must include letters</label>
              <Input
                placeholder="e.g. a, e"
                value={preferences.mustIncludeLetters.join(", ")}
                onChange={(e) => {
                  const letters = e.target.value
                    .split(",")
                    .map((l) => l.trim())
                    .filter((l) => l.length === 1);
                  updatePreference("mustIncludeLetters", letters);
                }}
                className="mt-2"
              />
              <p className="mt-1 text-xs text-muted-foreground">Names must contain all these letters.</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/95 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-md gap-3">
          {step > 0 && (
            <Button variant="outline" onClick={back} className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          )}
          <Button onClick={next} className="flex-1 gap-1">
            {step === STEPS - 1 ? (
              <>
                <Sparkles className="h-4 w-4" /> Discover Names
              </>
            ) : (
              <>
                Continue <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
