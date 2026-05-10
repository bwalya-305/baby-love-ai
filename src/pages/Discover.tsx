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
  const [query, setQuery] = useState("");

  const trimmedQuery = query.trim().toLowerCase();
  const isSearching = trimmedQuery.length > 0;

  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    return names
      .filter((n) => {
        return (
          n.name.toLowerCase().includes(trimmedQuery) ||
          n.meaning.toLowerCase().includes(trimmedQuery) ||
          n.origin.toLowerCase().includes(trimmedQuery) ||
          n.culturalContext.toLowerCase().includes(trimmedQuery) ||
          n.themes.some((t) => t.toLowerCase().includes(trimmedQuery))
        );
      })
      .sort((a, b) => {
        // Prioritize exact name matches, then name-starts-with
        const an = a.name.toLowerCase();
        const bn = b.name.toLowerCase();
        const aExact = an === trimmedQuery ? 0 : an.startsWith(trimmedQuery) ? 1 : 2;
        const bExact = bn === trimmedQuery ? 0 : bn.startsWith(trimmedQuery) ? 1 : 2;
        return aExact - bExact;
      });
  }, [trimmedQuery, isSearching]);

  const filtered = useMemo(() => {
    return shuffleArray(filterNames(names, preferences));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preferences, seed]);

  const [visible, setVisible] = useState(BATCH);
  const shown = isSearching ? searchResults : filtered.slice(0, visible);

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
        {/* Search */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, meaning, origin…"
            className="pl-9 pr-9"
            aria-label="Search names and meanings"
          />
          {isSearching && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-secondary"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          {isSearching
            ? `${searchResults.length} result${searchResults.length === 1 ? "" : "s"} for "${query.trim()}"`
            : `${filtered.length} names match your preferences`}
        </p>

        <div className="mt-4 space-y-3">
          {shown.map((name, i) => (
            <NameCard key={`${name.id}-${seed}`} name={name} index={i} />
          ))}
        </div>

        {isSearching && searchResults.length === 0 && (
          <div className="mt-12 text-center">
            <p className="font-serif text-lg text-foreground">No matches found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              We couldn't find a name matching "{query.trim()}". Try a different spelling, meaning, or origin.
            </p>
            <Button variant="ghost" className="mt-4 gap-2" onClick={() => setQuery("")}>
              <X className="h-4 w-4" /> Clear search
            </Button>
          </div>
        )}

        {!isSearching && filtered.length === 0 && (
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

        {!isSearching && filtered.length > 0 && (
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
