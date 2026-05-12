import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePreferences } from "@/contexts/PreferencesContext";
import { useShortlist } from "@/contexts/ShortlistContext";
import { Button } from "@/components/ui/button";
import { names } from "@/data/names";
import { Sparkles, Compass, Heart, Users, Settings } from "lucide-react";
import { AuthForm } from "@/components/AuthForm";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";

export default function Index() {
  const { hasCompletedOnboarding } = usePreferences();
  const { shortlist } = useShortlist();
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const totalNames = names.length;
  const totalOrigins = new Set(names.map((n) => n.origin)).size;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-md flex-col px-6 pb-10 pt-16">
        {/* Hero */}
        <header>
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground">
            Baby<span className="text-primary">Name</span>{" "}
            <span className="italic">AI</span>
          </h1>
          <p className="mt-4 font-serif text-xl leading-snug text-foreground/80">
            Discover <span className="italic text-primary">meaningful</span> baby
            names from cultures around the world.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A curated journey through {totalNames} researched names across{" "}
            {totalOrigins} cultural traditions — with real meanings,
            pronunciations, and stories. Share with your partner and build your perfect shortlist.
          </p>
        </header>

        {/* Auth or Stats/Actions */}
        <div className="mt-8 flex-1">
          {!session ? (
            <div className="flex flex-col items-center justify-center space-y-6 pt-4">
              <p className="text-center font-serif text-lg font-medium text-foreground">
                Sign in to build your shortlist and sync with your partner
              </p>
              <AuthForm />
            </div>
          ) : (
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="font-serif text-2xl font-bold text-primary">{totalNames}</p>
                  <p className="text-xs text-muted-foreground">Curated names</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="font-serif text-2xl font-bold text-primary">{totalOrigins}</p>
                  <p className="text-xs text-muted-foreground">Cultural origins</p>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="space-y-3">
                {hasCompletedOnboarding ? (
                  <>
                    <Button
                      size="lg"
                      className="w-full gap-2"
                      onClick={() => navigate("/discover")}
                    >
                      <Compass className="h-4 w-4" /> Continue Discovering
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        className="w-full gap-2"
                        onClick={() => navigate("/shortlist")}
                      >
                        <Heart className="h-4 w-4" />
                        Shortlist {shortlist.length > 0 && `(${shortlist.length})`}
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full gap-2"
                        onClick={() => navigate("/partner")}
                      >
                        <Users className="h-4 w-4" /> Partner
                      </Button>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <button
                        onClick={() => navigate("/onboarding")}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
                      >
                        <Settings className="h-3 w-3" /> Preferences
                      </button>
                      <button
                        onClick={handleSignOut}
                        className="text-xs text-muted-foreground hover:text-destructive"
                      >
                        Sign Out
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Button
                      size="lg"
                      className="w-full gap-2"
                      onClick={() => navigate("/onboarding")}
                    >
                      <Sparkles className="h-4 w-4" /> Get Started
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full"
                      onClick={() => navigate("/discover")}
                    >
                      Browse all names
                    </Button>
                    <div className="text-center mt-4">
                      <button
                        onClick={handleSignOut}
                        className="text-xs text-muted-foreground hover:text-destructive"
                      >
                        Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer hint */}
        <p className="mt-auto pt-10 text-center text-xs text-muted-foreground">
          {session ? "Your data is securely synced to the cloud." : "Your data stays on this device until you sign in."}
        </p>
      </div>
    </main>
  );
}
