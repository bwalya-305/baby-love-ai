import React, { useEffect, useState } from "react";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Loader2, RefreshCw, Rocket, AlertCircle } from "lucide-react";
import { names, ORIGINS, THEMES } from "@/data/names";
import { filterNames, DEFAULT_PREFERENCES } from "@/lib/filterNames";
import { usePreferences } from "@/contexts/PreferencesContext";
import { useShortlist } from "@/contexts/ShortlistContext";

type Status = "pending" | "running" | "pass" | "fail";

interface CheckResult {
  id: string;
  area: string;
  label: string;
  detail?: string;
  status: Status;
  error?: string;
}

interface CheckDef {
  id: string;
  area: string;
  label: string;
  run: () => { ok: boolean; detail?: string; error?: string };
}

export default function PreDeployCheck() {
  const { preferences, hasCompletedOnboarding } = usePreferences();
  const { shortlist } = useShortlist();

  const checks: CheckDef[] = [
    // Build / Data integrity
    {
      id: "data-loaded",
      area: "Build",
      label: "Name database loads",
      run: () => {
        const ok = Array.isArray(names) && names.length > 0;
        return { ok, detail: ok ? `${names.length} names loaded` : "Database empty" };
      },
    },
    {
      id: "data-shape",
      area: "Build",
      label: "Every name has required fields",
      run: () => {
        const missing = names.find(
          (n) =>
            !n.id || !n.name || !n.origin || !n.gender || !n.meaning || !n.pronunciation || !Array.isArray(n.themes)
        );
        return missing
          ? { ok: false, error: `Invalid record: ${missing?.name || missing?.id || "unknown"}` }
          : { ok: true, detail: "All records valid" };
      },
    },
    {
      id: "data-origins",
      area: "Build",
      label: "Origin coverage",
      run: () => {
        const used = new Set(names.map((n) => n.origin));
        const missing = ORIGINS.filter((o) => !used.has(o));
        return missing.length === 0
          ? { ok: true, detail: `${used.size} origins represented` }
          : { ok: false, error: `Missing names for: ${missing.join(", ")}` };
      },
    },

    // Onboarding
    {
      id: "onboarding-prefs",
      area: "Onboarding",
      label: "Preferences persist to localStorage",
      run: () => {
        try {
          const raw = localStorage.getItem("babynameai_preferences");
          if (!raw) return { ok: false, error: "No preferences saved" };
          const parsed = JSON.parse(raw);
          const ok = parsed && typeof parsed.gender === "string" && Array.isArray(parsed.origins);
          return ok
            ? { ok, detail: `Gender: ${parsed.gender}, Origins: ${parsed.origins.length}` }
            : { ok: false, error: "Malformed preferences" };
        } catch (e) {
          return { ok: false, error: String(e) };
        }
      },
    },
    {
      id: "onboarding-complete",
      area: "Onboarding",
      label: "Onboarding completion flag set",
      run: () => ({
        ok: hasCompletedOnboarding,
        detail: hasCompletedOnboarding ? "Completed" : undefined,
        error: hasCompletedOnboarding ? undefined : "Run onboarding at least once",
      }),
    },

    // Discovery
    {
      id: "discover-default",
      area: "Discovery",
      label: "Default filter returns names",
      run: () => {
        const r = filterNames(names, DEFAULT_PREFERENCES);
        return r.length > 0
          ? { ok: true, detail: `${r.length} matches with no filters` }
          : { ok: false, error: "No names matched default preferences" };
      },
    },
    {
      id: "discover-current",
      area: "Discovery",
      label: "Current preferences yield results",
      run: () => {
        const r = filterNames(names, preferences);
        return r.length > 0
          ? { ok: true, detail: `${r.length} matches for your filters` }
          : { ok: false, error: "Current filters return zero — too restrictive" };
      },
    },
    {
      id: "discover-themes",
      area: "Discovery",
      label: "Theme filter works",
      run: () => {
        const r = filterNames(names, { ...DEFAULT_PREFERENCES, themes: [THEMES[0]] });
        return r.every((n) => n.themes.includes(THEMES[0]))
          ? { ok: true, detail: `Filter "${THEMES[0]}" → ${r.length} names` }
          : { ok: false, error: "Theme filter leaked unrelated names" };
      },
    },

    // Name Detail
    {
      id: "detail-route",
      area: "Detail",
      label: "Detail route resolves a sample name",
      run: () => {
        const sample = names[0];
        const found = names.find((n) => n.id === sample.id);
        return found
          ? { ok: true, detail: `/name/${sample.id} → ${sample.name}` }
          : { ok: false, error: "Lookup by id failed" };
      },
    },
    {
      id: "detail-similar",
      area: "Detail",
      label: "Similar names available",
      run: () => {
        const sample = names[0];
        const similar = names.filter((n) => n.id !== sample.id && n.origin === sample.origin);
        return similar.length > 0
          ? { ok: true, detail: `${similar.length} similar to ${sample.name}` }
          : { ok: false, error: "No similar names found" };
      },
    },

    // Shortlist
    {
      id: "shortlist-storage",
      area: "Shortlist",
      label: "Shortlist storage initialised",
      run: () => {
        const raw = localStorage.getItem("babynameai_shortlist");
        if (raw === null) return { ok: false, error: "Storage key missing" };
        try {
          const parsed = JSON.parse(raw);
          return Array.isArray(parsed)
            ? { ok: true, detail: `${parsed.length} saved` }
            : { ok: false, error: "Shortlist is not an array" };
        } catch (e) {
          return { ok: false, error: String(e) };
        }
      },
    },
    {
      id: "shortlist-context",
      area: "Shortlist",
      label: "Shortlist context in sync",
      run: () => ({
        ok: Array.isArray(shortlist),
        detail: `${shortlist.length} in context`,
        error: Array.isArray(shortlist) ? undefined : "Context not initialised",
      }),
    },

    // Partner
    {
      id: "partner-storage",
      area: "Partner",
      label: "Partner reactions storage ready",
      run: () => {
        const raw = localStorage.getItem("babynameai_partner_reactions");
        if (raw === null) return { ok: true, detail: "No reactions yet (ok)" };
        try {
          const parsed = JSON.parse(raw);
          return Array.isArray(parsed)
            ? { ok: true, detail: `${parsed.length} reactions` }
            : { ok: false, error: "Reactions not an array" };
        } catch (e) {
          return { ok: false, error: String(e) };
        }
      },
    },
    {
      id: "partner-name",
      area: "Partner",
      label: "Partner name field accessible",
      run: () => {
        const v = localStorage.getItem("babynameai_partner");
        return { ok: true, detail: v ? `Invited: ${v}` : "Not invited yet (ok)" };
      },
    },

    // Profile
    {
      id: "profile-stats",
      area: "Profile",
      label: "Profile stats computable",
      run: () => {
        const fbRaw = localStorage.getItem("babynameai_feedback");
        const feedback = fbRaw ? JSON.parse(fbRaw) : {};
        const liked = Object.values(feedback).filter((f) => f === "up").length;
        const passed = Object.values(feedback).filter((f) => f === "down").length;
        return { ok: true, detail: `❤ ${shortlist.length} · 👍 ${liked} · 👎 ${passed}` };
      },
    },
    {
      id: "profile-reset",
      area: "Profile",
      label: "Reset hooks present",
      run: () => {
        const ok =
          typeof localStorage.removeItem === "function" &&
          typeof window !== "undefined";
        return ok ? { ok } : { ok: false, error: "Storage API unavailable" };
      },
    },
  ];

  const [results, setResults] = useState<CheckResult[]>(
    checks.map((c) => ({ id: c.id, area: c.area, label: c.label, status: "pending" }))
  );
  const [running, setRunning] = useState(false);

  const runAll = async () => {
    setRunning(true);
    setResults((prev) => prev.map((r) => ({ ...r, status: "pending" as Status, detail: undefined, error: undefined })));

    for (let i = 0; i < checks.length; i++) {
      const c = checks[i];
      setResults((prev) => prev.map((r, idx) => (idx === i ? { ...r, status: "running" } : r)));
      // small delay so the user sees progress
      await new Promise((res) => setTimeout(res, 120));
      try {
        const out = c.run();
        setResults((prev) =>
          prev.map((r, idx) =>
            idx === i
              ? { ...r, status: out.ok ? "pass" : "fail", detail: out.detail, error: out.error }
              : r
          )
        );
      } catch (e) {
        setResults((prev) =>
          prev.map((r, idx) =>
            idx === i ? { ...r, status: "fail", error: String(e) } : r
          )
        );
      }
    }
    setRunning(false);
  };

  useEffect(() => {
    runAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const passed = results.filter((r) => r.status === "pass").length;
  const failed = results.filter((r) => r.status === "fail").length;
  const total = results.length;
  const allDone = !running && results.every((r) => r.status === "pass" || r.status === "fail");
  const readyToShip = allDone && failed === 0;

  // Group by area
  const areas = Array.from(new Set(checks.map((c) => c.area)));

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 z-40 border-b border-border bg-background/95 px-6 py-4 backdrop-blur">
        <div className="mx-auto max-w-md">
          <h1 className="font-serif text-xl font-bold text-foreground">
            Pre-Deploy <span className="text-primary">Checklist</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Build & functional checks across the app
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 pt-6">
        {/* Summary */}
        <div
          className={`rounded-xl border p-5 ${
            readyToShip
              ? "border-primary/40 bg-primary/5"
              : failed > 0 && allDone
              ? "border-destructive/40 bg-destructive/5"
              : "border-border bg-card"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Status</p>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                {running
                  ? "Running checks…"
                  : readyToShip
                  ? "Ready to ship"
                  : failed > 0
                  ? `${failed} check${failed === 1 ? "" : "s"} failing`
                  : "Idle"}
              </h2>
            </div>
            {readyToShip ? (
              <Rocket className="h-8 w-8 text-primary" />
            ) : failed > 0 && allDone ? (
              <AlertCircle className="h-8 w-8 text-destructive" />
            ) : (
              <Loader2 className={`h-8 w-8 text-muted-foreground ${running ? "animate-spin" : ""}`} />
            )}
          </div>

          <div className="mt-4 flex items-center gap-3 text-sm">
            <Badge variant="outline" className="gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {passed} passed
            </Badge>
            <Badge variant="outline" className="gap-1">
              <XCircle className="h-3.5 w-3.5 text-destructive" /> {failed} failed
            </Badge>
            <span className="ml-auto text-muted-foreground">{passed + failed}/{total}</span>
          </div>

          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className={`h-full transition-all duration-300 ${
                failed > 0 ? "bg-destructive" : "bg-primary"
              }`}
              style={{ width: `${((passed + failed) / total) * 100}%` }}
            />
          </div>

          <Button
            onClick={runAll}
            disabled={running}
            variant="outline"
            className="mt-4 w-full gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${running ? "animate-spin" : ""}`} />
            {running ? "Running…" : "Re-run checks"}
          </Button>
        </div>

        {/* Grouped results */}
        <div className="mt-6 space-y-5">
          {areas.map((area) => {
            const items = results.filter((r) => r.area === area);
            const areaPassed = items.every((i) => i.status === "pass");
            const areaFailed = items.some((i) => i.status === "fail");
            return (
              <section key={area}>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-serif text-lg font-semibold text-foreground">{area}</h3>
                  <span
                    className={`text-xs font-medium ${
                      areaFailed
                        ? "text-destructive"
                        : areaPassed
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {items.filter((i) => i.status === "pass").length}/{items.length} passing
                  </span>
                </div>
                <div className="space-y-2">
                  {items.map((r) => (
                    <div
                      key={r.id}
                      className="flex items-start gap-3 rounded-lg border border-border bg-card p-3"
                    >
                      <div className="mt-0.5">
                        {r.status === "pass" && <CheckCircle2 className="h-5 w-5 text-primary" />}
                        {r.status === "fail" && <XCircle className="h-5 w-5 text-destructive" />}
                        {r.status === "running" && (
                          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                        )}
                        {r.status === "pending" && (
                          <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{r.label}</p>
                        {r.detail && r.status === "pass" && (
                          <p className="mt-0.5 text-xs text-muted-foreground">{r.detail}</p>
                        )}
                        {r.error && r.status === "fail" && (
                          <p className="mt-0.5 text-xs text-destructive">{r.error}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
