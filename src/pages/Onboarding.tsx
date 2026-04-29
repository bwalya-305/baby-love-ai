import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePreferences } from "@/contexts/PreferencesContext";
import { Gender, ORIGINS, THEMES, Origin, names } from "@/data/names";
import ThemeTag from "@/components/ThemeTag";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, ArrowRight, Sparkles, X, Check } from "lucide-react";
import { filterNames } from "@/lib/filterNames";

const STEPS = 4;

// Group origins by region for easier scanning
const ORIGIN_REGIONS: { region: string; origins: Origin[] }[] = [
  {
    region: "Africa",
    origins: [
      "Yoruba","Igbo","Zulu","Akan","Swahili","Amharic",
      "Bemba","Tonga","Nyanja","Lozi","Tumbuka","Lunda","Kaonde",
      "Shona","Xhosa","Hausa","Wolof","Kikuyu","Luganda",
    ],
  },
  {
    region: "Asia",
    origins: ["Hindi","Tamil","Sanskrit","Bengali","Urdu","Japanese","Chinese","Korean"],
  },
  {
    region: "Middle East",
    origins: ["Arabic","Persian","Hebrew","Turkish"],
  },
  {
    region: "Europe",
    origins: ["Irish","Italian","Greek","Norse","Slavic","French","Spanish","German","Welsh","Scottish","English","Latin"],
  },
  {
    region: "Pacific & Americas",
    origins: ["Maori","Hawaiian","Native American"],
  },
];

export default function Onboarding() {
  const { preferences, updatePreference, hasCompletedOnboarding, setHasCompletedOnboarding } = usePreferences();
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [originSearch, setOriginSearch] = useState("");

  const isEditMode = hasCompletedOnboarding;
  const matchCount = useMemo(() => filterNames(names, preferences).length, [preferences]);

  const finish = () => {
    setHasCompletedOnboarding(true);
    navigate("/discover");
  };

  const next = () => {
    if (step < STEPS - 1) setStep(step + 1);
    else finish();
  };
  const back = () => step > 0 && setStep(step - 1);

  const genderOptions: { value: Gender | "any"; label: string; emoji: string }[] = [
    { value: "boy", label: "Boy", emoji: "👦" },
    { value: "girl", label: "Girl", emoji: "👧" },
    { value: "neutral", label: "Gender Neutral", emoji: "✨" },
    { value: "any", label: "Show All", emoji: "🌈" },
  ];

  const allOrigins = ORIGINS;
  const allSelected = preferences.origins.length === allOrigins.length;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-start justify-between">
          <h1 className="font-serif text-3xl font-bold text-foreground">
            Baby<span className="text-primary">Name</span> <span className="italic">AI</span>
          </h1>
          {isEditMode && (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
              aria-label="Close edit"
            >
              <X className="h-3 w-3" /> Close
            </button>
          )}
        </div>
        <div className="mt-4 flex gap-1.5">
          {Array.from({ length: STEPS }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-muted hover:bg-muted-foreground/30"}`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Step {step + 1} of {STEPS}
          {isEditMode && <span className="ml-2 text-primary">· Editing preferences</span>}
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-40">
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
            <div className="mt-3 flex items-center gap-2">
              <Input
                placeholder="Search origins..."
                value={originSearch}
                onChange={(e) => setOriginSearch(e.target.value)}
                className="flex-1"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  updatePreference("origins", allSelected ? [] : [...allOrigins])
                }
              >
                {allSelected ? "Clear" : "All"}
              </Button>
            </div>

            <div className="mt-4 space-y-4">
              {ORIGIN_REGIONS.map(({ region, origins }) => {
                const visible = origins.filter((o) =>
                  o.toLowerCase().includes(originSearch.toLowerCase())
                );
                if (visible.length === 0) return null;
                return (
                  <div key={region}>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {region}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {visible.map((origin) => {
                        const selected = preferences.origins.includes(origin);
                        return (
                          <button
                            key={origin}
                            onClick={() => {
                              if (selected) {
                                updatePreference(
                                  "origins",
                                  preferences.origins.filter((o) => o !== origin)
                                );
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
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="font-serif text-2xl font-semibold">Themes & meaning</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              What themes resonate with you? Select as many as you'd like, or none for all.
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
            {preferences.themes.length > 0 && (
              <button
                onClick={() => updatePreference("themes", [])}
                className="mt-3 text-xs text-primary hover:underline"
              >
                Clear all themes
              </button>
            )}
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

            {matchCount === 0 && (
              <p className="mt-4 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-xs text-destructive">
                No names match these constraints. Try removing a starting or must-include letter.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/95 px-6 py-4 backdrop-blur">
        <div className="mx-auto max-w-md">
          <p className={`mb-2 text-center text-xs ${matchCount === 0 ? "text-destructive" : "text-muted-foreground"}`}>
            {matchCount} {matchCount === 1 ? "name" : "names"} match your preferences
          </p>
          <div className="flex gap-3">
            {step > 0 && (
              <Button variant="outline" onClick={back} className="gap-1">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            )}
            {isEditMode && (
              <Button variant="outline" onClick={finish} className="gap-1">
                <Check className="h-4 w-4" /> Save
              </Button>
            )}
            <Button onClick={next} className="flex-1 gap-1" disabled={matchCount === 0 && step === STEPS - 1}>
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
    </div>
  );
}
