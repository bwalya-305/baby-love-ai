import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { names } from "@/data/names";
import { useShortlist } from "@/contexts/ShortlistContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import BottomNav from "@/components/BottomNav";

export default function NameDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isShortlisted, addToShortlist, removeFromShortlist } = useShortlist();
  const { toast } = useToast();
  const name = names.find((n) => n.id === id);

  if (!name) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Name not found.</p>
      </div>
    );
  }

  const shortlisted = isShortlisted(name.id);
  const similar = names
    .filter((n) => n.id !== name.id && (n.origin === name.origin || n.themes.some((t) => name.themes.includes(t))))
    .slice(0, 6);

  const handleShare = () => {
    const text = `${name.name} — "${name.meaning}" (${name.origin})\nPronunciation: ${name.pronunciation}\n\nFound on BabyName AI`;
    navigator.clipboard.writeText(text);
    toast({ title: "Copied to clipboard!", description: "Share this name with your partner." });
  };

  const handleAdd = () => {
    addToShortlist(name.id);
    toast({
      title: `${name.name} added to shortlist`,
      description: "View it any time from your shortlist.",
      action: (
        <ToastAction altText="View shortlist" onClick={() => navigate("/shortlist")}>
          View
        </ToastAction>
      ),
    });
  };

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/discover");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-6">
        <button onClick={handleBack} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
      </div>

      <div className="mx-auto max-w-md px-6 pt-6">
        <div className="animate-fade-in">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-serif text-4xl font-bold text-foreground">{name.name}</h1>
              <p className="mt-1 text-lg text-muted-foreground">{name.pronunciation}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={handleShare} className="rounded-full border border-border p-2.5 hover:bg-secondary">
                <Share2 className="h-5 w-5 text-muted-foreground" />
              </button>
              <button
                onClick={() => (shortlisted ? removeFromShortlist(name.id) : handleAdd())}
                className="rounded-full border border-border p-2.5 hover:bg-secondary"
                aria-label={shortlisted ? "Remove from shortlist" : "Add to shortlist"}
              >
                <Heart className={`h-5 w-5 ${shortlisted ? "fill-primary text-primary" : "text-muted-foreground"}`} />
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline">{name.origin}</Badge>
            <Badge variant="outline">{name.gender === "neutral" ? "Unisex" : name.gender === "boy" ? "Boy" : "Girl"}</Badge>
            <Badge variant="outline">{name.syllables} syllable{name.syllables > 1 ? "s" : ""}</Badge>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-card p-5">
            <h2 className="font-serif text-lg font-semibold">Meaning</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{name.meaning}</p>
          </div>

          <div className="mt-4 rounded-xl border border-border bg-card p-5">
            <h2 className="font-serif text-lg font-semibold">Cultural Context</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{name.culturalContext}</p>
          </div>

          <div className="mt-4 rounded-xl border border-border bg-card p-5">
            <h2 className="font-serif text-lg font-semibold">Themes</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {name.themes.map((t) => (
                <span key={t} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-serif text-xs italic text-primary">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {!shortlisted ? (
            <Button onClick={handleAdd} className="mt-6 w-full gap-2">
              <Heart className="h-4 w-4" /> Add to Shortlist
            </Button>
          ) : (
            <Button variant="outline" onClick={() => navigate("/shortlist")} className="mt-6 w-full gap-2">
              <Heart className="h-4 w-4 fill-primary text-primary" /> View in Shortlist
            </Button>
          )}

          {similar.length > 0 && (
            <div className="mt-8">
              <h2 className="font-serif text-lg font-semibold">Similar Names</h2>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {similar.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => navigate(`/name/${s.id}`)}
                    className="rounded-lg border border-border p-3 text-left transition-colors hover:bg-secondary"
                  >
                    <p className="font-serif font-semibold text-foreground">{s.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{s.origin}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
