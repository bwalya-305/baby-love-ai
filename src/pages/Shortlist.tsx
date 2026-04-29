import React, { useState } from "react";
import { useShortlist } from "@/contexts/ShortlistContext";
import { names } from "@/data/names";
import BottomNav from "@/components/BottomNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { Heart, Trash2, StickyNote, ChevronDown, ChevronUp, Users } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function Shortlist() {
  const { shortlist, removeFromShortlist, updateNote, getNote } = useShortlist();
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [pendingDelete, setPendingDelete] = useState<{ id: string; name: string } | null>(null);

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
          <>
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
                        aria-label={expanded ? "Collapse" : "Expand"}
                      >
                        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => setPendingDelete({ id: nameId, name: name.name })}
                        className="rounded-full p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                        aria-label={`Remove ${name.name}`}
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
                          <p className="mt-1 text-xs text-muted-foreground">Notes save automatically.</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <Button
              className="mt-6 w-full gap-2"
              onClick={() => navigate("/partner")}
            >
              <Users className="h-4 w-4" /> Compare with partner
            </Button>
          </>
        )}
      </div>

      <AlertDialog open={!!pendingDelete} onOpenChange={(o) => !o && setPendingDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove {pendingDelete?.name}?</AlertDialogTitle>
            <AlertDialogDescription>
              This will remove the name and any notes from your shortlist. You can always add it back.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (pendingDelete) removeFromShortlist(pendingDelete.id);
                setPendingDelete(null);
              }}
            >
              Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <BottomNav />
    </div>
  );
}
