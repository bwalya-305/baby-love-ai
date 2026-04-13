import React, { useState } from "react";
import { useShortlist } from "@/contexts/ShortlistContext";
import { names } from "@/data/names";
import BottomNav from "@/components/BottomNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Heart, Copy, Link2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const REACTIONS = [
  { value: "love" as const, emoji: "❤️", label: "Love" },
  { value: "like" as const, emoji: "👍", label: "Like" },
  { value: "maybe" as const, emoji: "🤔", label: "Maybe" },
  { value: "no" as const, emoji: "👎", label: "No" },
];

export default function Partner() {
  const { shortlist, partnerName, setPartnerName, partnerReactions, setPartnerReaction } = useShortlist();
  const { toast } = useToast();
  const [nameInput, setNameInput] = useState(partnerName);
  const [invited, setInvited] = useState(!!partnerName);

  const shortlistedNames = shortlist
    .map((s) => ({ ...s, nameData: names.find((n) => n.id === s.nameId) }))
    .filter((s) => s.nameData);

  const handleInvite = () => {
    if (!nameInput.trim()) return;
    setPartnerName(nameInput.trim());
    setInvited(true);
    toast({
      title: "Partner invited!",
      description: `${nameInput.trim()} can now react to your shortlist. (Demo mode — share your screen!)`,
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/partner`);
    toast({ title: "Link copied!", description: "Share this link with your partner." });
  };

  const getReaction = (nameId: string) => partnerReactions.find((r) => r.nameId === nameId)?.reaction;

  // Find matches — names where partner reacted with love or like
  const matches = shortlistedNames.filter((s) => {
    const reaction = getReaction(s.nameId);
    return reaction === "love" || reaction === "like";
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 z-40 border-b border-border bg-background/95 px-6 py-4 backdrop-blur">
        <div className="mx-auto max-w-md">
          <h1 className="font-serif text-xl font-bold text-foreground">
            Partner <span className="text-primary">Mode</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">Share & decide together</p>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 pt-6">
        {!invited ? (
          <div className="animate-fade-in text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mt-4 font-serif text-2xl font-semibold">Invite your partner</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Add your partner to react to your shortlisted names and find matches together.
            </p>
            <div className="mt-6">
              <Input
                placeholder="Partner's name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="text-center"
              />
              <Button onClick={handleInvite} className="mt-3 w-full gap-2">
                <Link2 className="h-4 w-4" /> Send Invite
              </Button>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-serif font-bold text-primary">
                  {partnerName[0]?.toUpperCase()}
                </div>
                <div>
                  <p className="font-medium text-foreground">{partnerName}</p>
                  <p className="text-xs text-muted-foreground">Partner</p>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleCopyLink} className="gap-1">
                <Copy className="h-3 w-3" /> Copy Link
              </Button>
            </div>

            {matches.length > 0 && (
              <div className="mt-6 rounded-xl border-2 border-primary/30 bg-primary/5 p-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="font-serif font-semibold text-foreground">
                    {matches.length} Match{matches.length > 1 ? "es" : ""}!
                  </h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {matches.map(({ nameId, nameData }) => (
                    <span key={nameId} className="rounded-full bg-primary px-3 py-1 font-serif text-sm text-primary-foreground">
                      {nameData!.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <h3 className="mt-6 font-serif text-lg font-semibold">Shortlisted Names</h3>
            {shortlistedNames.length === 0 ? (
              <p className="mt-3 text-sm text-muted-foreground">
                Add names to your shortlist first, then come back here to react together.
              </p>
            ) : (
              <div className="mt-3 space-y-3">
                {shortlistedNames.map(({ nameId, nameData }) => {
                  const name = nameData!;
                  const reaction = getReaction(nameId);

                  return (
                    <div key={nameId} className="rounded-xl border border-border bg-card p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-lg font-semibold text-foreground">{name.name}</p>
                          <p className="text-xs text-muted-foreground">{name.origin} · {name.meaning}</p>
                        </div>
                        <Heart className="h-4 w-4 fill-primary text-primary" />
                      </div>
                      <div className="mt-3 flex gap-2">
                        {REACTIONS.map((r) => (
                          <button
                            key={r.value}
                            onClick={() => setPartnerReaction(nameId, r.value)}
                            className={`flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs transition-all ${
                              reaction === r.value
                                ? "border-primary bg-primary/10 text-foreground shadow-sm"
                                : "border-border text-muted-foreground hover:border-primary/30"
                            }`}
                          >
                            <span>{r.emoji}</span>
                            <span className="hidden sm:inline">{r.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
