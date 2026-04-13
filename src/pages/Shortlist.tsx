import React, { useState } from "react";
import { useShortlist } from "@/contexts/ShortlistContext";
import { names } from "@/data/names";
import BottomNav from "@/components/BottomNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { Heart, Trash2, StickyNote, ChevronDown, ChevronUp } from "lucide-react";

export default function Shortlist() {
  const { shortlist, removeFromShortlist, updateNote, getNote } = useShortlist();
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const shortlistedNames = shortlist
    .map((s) => ({ ...s, nameData: names.find((n) => n.id === s.nameId) }))
    .filter((s) => s.nameData)
    .sort((a, b) => b.addedAt - a.addedAt);

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 z-40 border-b border-border bg-background/95 px-6 py-4 backdrop-blur">
        <div className="mx-auto max-w-md">
          <h1 className="font-serif text-xl font-bold text-foreground">
            My <span className="text-primary">Shortlist</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{shortlistedNames.length} names saved</p>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 pt-4">
        {shortlistedNames.length === 0 ? (
          <div className="mt-12 text-center">
            <Heart className="mx-auto h-12 w-12 text-muted-foreground/30" />
            <p className="mt-4 font-serif text-lg text-foreground">No names yet</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Discover names and tap the heart to save your favorites.
            </p>
            <Button className="mt-4" onClick={() => navigate("/discover")}>
              Start Discovering
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {shortlistedNames.map(({ nameId, nameData }) => {
              const name = nameData!;
              const expanded = expandedId === nameId;
              const note = getNote(nameId);

              return (
                <div key={nameId} className="animate-fade-in rounded-xl border border-border bg-card overflow-hidden">
                  <div className="flex items-center gap-3 p-4">
                    <div className="flex-1 cursor-pointer" onClick={() => navigate(`/name/${name.id}`)}>
                      <h3 className="font-serif text-lg font-semibold text-foreground">{name.name}</h3>
                      <div className="mt-1 flex gap-1.5">
                        <Badge variant="outline" className="text-xs">{name.origin}</Badge>
                        <Badge variant="outline" className="text-xs">{name.gender === "neutral" ? "Unisex" : name.gender === "boy" ? "Boy" : "Girl"}</Badge>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedId(expanded ? null : nameId)}
                      className="rounded-full p-2 hover:bg-secondary"
                    >
                      {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => removeFromShortlist(nameId)}
                      className="rounded-full p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {expanded && (
                    <div className="border-t border-border px-4 py-3">
                      <p className="text-sm text-foreground/80">{name.meaning}</p>
                      <div className="mt-3">
                        <label className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                          <StickyNote className="h-3 w-3" /> Personal note
                        </label>
                        <Textarea
                          value={note}
                          onChange={(e) => updateNote(nameId, e.target.value)}
                          placeholder="Add your thoughts about this name..."
                          className="mt-1.5 min-h-[60px] text-sm"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
