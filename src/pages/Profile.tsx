import React, { useState } from "react";
import { usePreferences } from "@/contexts/PreferencesContext";
import { useShortlist } from "@/contexts/ShortlistContext";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { RotateCcw, Settings, Heart, ThumbsUp, ThumbsDown, ShieldCheck, Home } from "lucide-react";
import { names } from "@/data/names";
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

export default function Profile() {
  const { preferences, resetPreferences } = usePreferences();
  const { shortlist, feedback, resetAll } = useShortlist();
  const navigate = useNavigate();
  const [confirmReset, setConfirmReset] = useState(false);

  const likedCount = Object.values(feedback).filter((f) => f === "up").length;
  const passedCount = Object.values(feedback).filter((f) => f === "down").length;

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 z-40 border-b border-border bg-background/95 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <h1 className="font-serif text-xl font-bold text-foreground">
            <span className="text-primary">Profile</span> & Settings
          </h1>
          <Button variant="ghost" size="icon" onClick={() => navigate("/")} aria-label="Home">
            <Home className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 pt-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <Heart className="mx-auto h-5 w-5 text-primary" />
            <p className="mt-2 font-serif text-2xl font-bold text-foreground">{shortlist.length}</p>
            <p className="text-xs text-muted-foreground">Shortlisted</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <ThumbsUp className="mx-auto h-5 w-5 text-primary" />
            <p className="mt-2 font-serif text-2xl font-bold text-foreground">{likedCount}</p>
            <p className="text-xs text-muted-foreground">Liked</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <ThumbsDown className="mx-auto h-5 w-5 text-muted-foreground" />
            <p className="mt-2 font-serif text-2xl font-bold text-foreground">{passedCount}</p>
            <p className="text-xs text-muted-foreground">Passed</p>
          </div>
        </div>

        {/* Current Preferences */}
        <div className="mt-6 rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg font-semibold">Current Preferences</h2>
            <Button variant="ghost" size="sm" onClick={() => navigate("/onboarding")} className="gap-1">
              <Settings className="h-3.5 w-3.5" /> Edit
            </Button>
          </div>
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Gender</span>
              <span className="font-medium text-foreground capitalize">{preferences.gender}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Origins</span>
              <span className="font-medium text-foreground text-right max-w-[200px] truncate">
                {preferences.origins.length ? preferences.origins.join(", ") : "All"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Themes</span>
              <span className="font-medium text-foreground text-right max-w-[200px] truncate">
                {preferences.themes.length ? preferences.themes.join(", ") : "All"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Syllables</span>
              <span className="font-medium text-foreground">{preferences.syllableRange[0]}–{preferences.syllableRange[1]}</span>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mt-6 rounded-xl border border-border bg-card p-5">
          <h2 className="font-serif text-lg font-semibold">About BabyName AI</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            BabyName AI helps you discover meaningful baby names from cultures around the world.
            Our curated database of {names.length} names spans {new Set(names.map(n => n.origin)).size} cultural
            origins with real meanings, pronunciations, and cultural context.
          </p>
        </div>

        {/* Reset */}
        <div className="mt-6 space-y-3">
          <Button
            variant="outline"
            className="w-full gap-2"
            onClick={() => navigate("/pre-deploy")}
          >
            <ShieldCheck className="h-4 w-4" /> Pre-Deploy Checklist
          </Button>
          <Button
            variant="outline"
            className="w-full gap-2 text-destructive hover:bg-destructive/10"
            onClick={() => {
              resetPreferences();
              resetAll();
              navigate("/onboarding");
            }}
          >
            <RotateCcw className="h-4 w-4" /> Reset Everything
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
