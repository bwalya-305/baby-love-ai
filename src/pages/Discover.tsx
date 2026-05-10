import React, { useMemo, useState } from "react";
import { names } from "@/data/names";
import { usePreferences } from "@/contexts/PreferencesContext";
import { filterNames, shuffleArray } from "@/lib/filterNames";
import NameCard from "@/components/NameCard";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, RefreshCw, RotateCcw, Search, SlidersHorizontal, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BATCH = 10;

export default function Discover() {
  const { preferences, resetPreferences } = usePreferences();
  const navigate = useNavigate();
  const [seed, setSeed] = useState(0);

  const filtered = useMemo(() => {
    return shuffleArray(filterNames(names, preferences));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preferences, seed]);

  const [visible, setVisible] = useState(BATCH);
  const shown = filtered.slice(0, visible);

  const handleMore = () => {
    if (visible >= filtered.length) {
      setSeed((s) => s + 1);
      setVisible(BATCH);
    } else {
      setVisible((v) => v + BATCH);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-background/95 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
            aria-label="Back to home"
          >
            <Home className="h-4 w-4 text-muted-foreground" />
            <h1 className="font-serif text-xl font-bold text-foreground">
              Baby<span className="text-primary">Name</span> <span className="italic">AI</span>
            </h1>
          </button>
          <Button variant="ghost" size="icon" onClick={() => navigate("/onboarding")} aria-label="Edit preferences">
            <SlidersHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 pt-4">
        <p className="text-sm text-muted-foreground">
          {filtered.length} names match your preferences
        </p>

        <div className="mt-4 space-y-3">
          {shown.map((name, i) => (
            <NameCard key={`${name.id}-${seed}`} name={name} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center">
            <p className="font-serif text-lg text-foreground">No names found</p>
            <p className="mt-2 text-sm text-muted-foreground">Try adjusting or resetting your preferences.</p>
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="outline" onClick={() => navigate("/onboarding")}>
                Edit Preferences
              </Button>
              <Button
                variant="ghost"
                className="gap-2"
                onClick={() => resetPreferences()}
              >
                <RotateCcw className="h-4 w-4" /> Reset filters
              </Button>
            </div>
          </div>
        )}

        {filtered.length > 0 && (
          <Button
            onClick={handleMore}
            variant="outline"
            className="mt-6 w-full gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            {visible >= filtered.length ? "Shuffle & Start Over" : "Show More Names"}
          </Button>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
