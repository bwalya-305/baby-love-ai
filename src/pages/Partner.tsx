import React, { useEffect, useMemo, useState } from "react";
import { useShortlist } from "@/contexts/ShortlistContext";
import { names } from "@/data/names";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Heart, Copy, Link2, Sparkles, X, Mail } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const REACTIONS = [
  { value: "love" as const, emoji: "❤️", label: "Love" },
  { value: "like" as const, emoji: "👍", label: "Like" },
  { value: "maybe" as const, emoji: "🤔", label: "Maybe" },
  { value: "no" as const, emoji: "👎", label: "No" },
];

// URL-safe base64 encode/decode for the invite payload
const encodeIds = (ids: string[]) => {
  try {
    return encodeURIComponent(btoa(JSON.stringify(ids.slice(0, 100))));
  } catch {
    return "";
  }
};
const decodeIds = (raw: string | null): string[] => {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(atob(decodeURIComponent(raw)));
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
};

export default function Partner() {
  const { shortlist, partnerName, setPartnerName, partnerReactions, setPartnerReaction } = useShortlist();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [nameInput, setNameInput] = useState(partnerName);

  // Invite payload from URL (recipient view)
  const fromName = searchParams.get("from")?.trim() || "";
  const invitedIds = useMemo(() => decodeIds(searchParams.get("names")), [searchParams]);
  const isRecipient = !!fromName && invitedIds.length > 0;

  useEffect(() => {
    setNameInput(partnerName);
  }, [partnerName]);

  const invited = !!partnerName;

  // Names to show: either the inviter's encoded list (recipient mode) or the user's own shortlist
  const displayedNames = useMemo(() => {
    if (isRecipient) {
      return invitedIds
        .map((id) => ({ nameId: id, nameData: names.find((n) => n.id === id) }))
        .filter((s) => s.nameData);
    }
    return shortlist
      .map((s) => ({ nameId: s.nameId, nameData: names.find((n) => n.id === s.nameId) }))
      .filter((s) => s.nameData);
  }, [isRecipient, invitedIds, shortlist]);

  const handleInvite = () => {
    const trimmed = nameInput.trim();
    if (!trimmed) return;
    setPartnerName(trimmed);
    toast({
      title: "Partner added!",
      description: `Now copy the invite link below and share it with ${trimmed}.`,
    });
  };

  const handleRemovePartner = () => {
    setPartnerName("");
    setNameInput("");
    toast({ title: "Partner removed" });
  };

  const inviteUrl = useMemo(() => {
    const ids = shortlist.map((s) => s.nameId);
    if (!ids.length || !partnerName) return "";
    const params = new URLSearchParams({
      from: partnerName ? "You" : "",
      names: encodeIds(ids),
    });
    // Use inviter's own name if they've set one in localStorage, else generic
    params.set("from", partnerName ? `${partnerName}'s partner` : "Your partner");
    return `${window.location.origin}/partner?${params.toString()}`;
  }, [shortlist, partnerName]);

  const handleCopyLink = async () => {
    if (!inviteUrl) {
      toast({
        title: "Add names first",
        description: "Shortlist some names before sharing an invite link.",
        variant: "destructive",
      });
      return;
    }
    try {
      await navigator.clipboard.writeText(inviteUrl);
      toast({ title: "Invite link copied!", description: "Share it with your partner so they can react." });
    } catch {
      toast({
        title: "Couldn't copy",
        description: "Long-press the link to copy it manually.",
        variant: "destructive",
      });
    }
  };

  const getReaction = (nameId: string) => partnerReactions.find((r) => r.nameId === nameId)?.reaction;

  const matches = displayedNames.filter((s) => {
    const reaction = getReaction(s.nameId);
    return reaction === "love" || reaction === "like";
  });

  // === Recipient view: someone opened a shared invite link ===
  if (isRecipient) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="sticky top-0 z-40 border-b border-border bg-background/95 px-6 py-4 backdrop-blur">
          <div className="mx-auto max-w-md">
            <h1 className="font-serif text-xl font-bold text-foreground">
              Reacting to <span className="text-primary">{fromName}</span>
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Tap a reaction next to each name — they'll see what you love.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-md px-4 pt-6">
          {matches.length > 0 && (
            <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-serif font-semibold text-foreground">
                  You like {matches.length} name{matches.length > 1 ? "s" : ""}
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

          <div className="mt-6 space-y-3">
            {displayedNames.map(({ nameId, nameData }) => {
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

          <Button variant="outline" className="mt-6 w-full" onClick={() => navigate("/")}>
            Explore BabyName AI
          </Button>
        </div>

        <BottomNav />
      </div>
    );
  }

  // === Inviter view ===
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
              Add your partner's name, then share a link so they can react to your shortlist.
            </p>
            <div className="mt-6">
              <Input
                placeholder="Partner's name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleInvite()}
                className="text-center"
              />
              <Button
                onClick={handleInvite}
                className="mt-3 w-full gap-2"
                disabled={!nameInput.trim()}
              >
                <Link2 className="h-4 w-4" /> Add Partner
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
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRemovePartner}
                className="gap-1 text-muted-foreground hover:text-destructive"
                aria-label="Remove partner"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>

            {/* Invite link card */}
            <div className="mt-4 rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <h3 className="font-serif text-sm font-semibold text-foreground">Share your shortlist</h3>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {shortlist.length === 0
                  ? "Add names to your shortlist first to generate an invite link."
                  : `Send this link to ${partnerName} so they can react to your ${shortlist.length} shortlisted name${shortlist.length === 1 ? "" : "s"}.`}
              </p>
              {inviteUrl && (
                <div className="mt-3 break-all rounded-md border border-dashed border-border bg-muted/30 p-2 text-[11px] text-muted-foreground">
                  {inviteUrl}
                </div>
              )}
              <div className="mt-3 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyLink}
                  disabled={!inviteUrl}
                  className="flex-1 gap-1"
                >
                  <Copy className="h-3 w-3" /> Copy invite link
                </Button>
                {shortlist.length === 0 && (
                  <Button size="sm" onClick={() => navigate("/discover")}>
                    Add names
                  </Button>
                )}
              </div>
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
            {displayedNames.length === 0 ? (
              <div className="mt-3 rounded-xl border border-dashed border-border p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Add names to your shortlist first, then come back here to react together.
                </p>
                <Button variant="outline" size="sm" className="mt-3" onClick={() => navigate("/discover")}>
                  Go to Discover
                </Button>
              </div>
            ) : (
              <div className="mt-3 space-y-3">
                {displayedNames.map(({ nameId, nameData }) => {
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
