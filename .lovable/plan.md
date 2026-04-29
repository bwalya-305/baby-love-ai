# Fix the End-to-End User Flow

The app currently jumps users straight from `/` into Onboarding or Discover with no welcome moment, and there are several rough edges along the journey (no validation, broken back behavior on deep links, partner state desync, no confirmations, restrictive prefs producing dead-ends with no quick fix). This plan makes the entire flow coherent from homepage to deciding on a name with a partner.

## Goals

1. A real homepage with clear entry points for new and returning users.
2. Onboarding that's editable from anywhere without losing context, with a "Skip" affordance and a live match counter so users don't end up with zero results.
3. Discover/Detail/Shortlist/Partner/Profile flow with safe back navigation, confirmations, and resilient state.

## 1. New Homepage (`/`)

Replace the current redirect-only `Index.tsx` with a proper landing page:

- Hero: "BabyName AI" wordmark + tagline ("Discover meaningful names from cultures around the world").
- Primary CTA:
  - First-time visitor (`!hasCompletedOnboarding`): "Get Started" → `/onboarding`.
  - Returning visitor: "Continue Discovering" → `/discover`, plus secondary links to Shortlist (with count) and Partner.
- Quick stats strip: total names, total cultural origins (from `names.ts`).
- Small "Edit preferences" link for returning users.

Remove the auto-redirect; users land on `/` and choose. The bottom nav is hidden here (welcome screen).

## 2. Onboarding fixes (`/onboarding`)

- Detect "edit mode" when `hasCompletedOnboarding` is already true: show a "Done" button in the header that returns the user to wherever they came from (default `/discover`) without forcing them through all 4 steps again. Each step gets its own "Save & Close" shortcut.
- Add a live "X names match" counter at the bottom of steps 1–3 using `filterNames(names, preferences).length`, colored warning when 0.
- Step 1 (origins): add a "Select all" / "Clear" pair and group origins by region (Africa, Europe, Asia, Americas, Middle East) using simple section headers — keeps the long list scannable.
- Step 3 (style): if "Starting letters" or "Must include letters" produce 0 matches, show a small inline hint "No names match — try removing one constraint."
- Final CTA: if current filter yields 0, label changes to "Adjust preferences" and stays on the step instead of navigating to a dead Discover screen.

## 3. Discover (`/discover`)

- Header gear icon: instead of jumping to step 0 of onboarding, open onboarding in edit mode (see above).
- Empty state: in addition to "Edit Preferences", add a "Reset filters" button that calls `resetPreferences()` and reloads matches.
- Add a small "Back to home" link in the header for symmetry with the new landing page.

## 4. Name Detail (`/name/:id`)

- Replace `navigate(-1)` with smart back: if `window.history.length <= 1` (deep link), navigate to `/discover` instead.
- Add a "View in Shortlist" link when the name is shortlisted.
- "Add to Shortlist" button: after adding, show a toast with a "View shortlist" action.

## 5. Shortlist (`/shortlist`)

- Wrap the trash button in an `AlertDialog` confirmation ("Remove {name} from shortlist?").
- Auto-save the note (already happens via onChange) but add a small "Saved" indicator using a debounced flag so users get feedback.
- When the list is non-empty, add a footer CTA "Compare with partner →" linking to `/partner`.

## 6. Partner (`/partner`)

- Sync `invited` with `partnerName`: if `partnerName` is cleared (e.g. via Reset), the invite screen comes back. Use `useEffect` instead of initial state.
- Validate the invite input (trim, min length 1) and disable the button accordingly.
- Add a "Change partner" / "Remove partner" action in the partner card.
- When `shortlistedNames` is empty, the CTA should link to `/discover`.

## 7. Profile (`/profile`)

- "Reset Everything" wraps in a confirm dialog.
- Add a "Home" link/button at the top so users can get back to the welcome screen.
- Keep the Pre-Deploy Checklist link.

## 8. Bottom Nav

- Add a "Home" tab pointing to `/` so the welcome page is reachable from any tab. Becomes 5 tabs: Home, Discover, Shortlist, Partner, Profile.
- Hide the bottom nav on `/onboarding` and `/` (already hidden on those pages today; keep that behavior).

## Files Touched

```text
src/pages/Index.tsx          - rewrite as real landing page
src/pages/Onboarding.tsx     - edit mode, match counter, region grouping, validation
src/pages/Discover.tsx       - reset-filters in empty state, smarter gear icon
src/pages/NameDetail.tsx     - smart back, shortlist link, post-add toast action
src/pages/Shortlist.tsx      - delete confirmation, save indicator, partner CTA
src/pages/Partner.tsx        - sync invited↔partnerName, change/remove partner, validation
src/pages/Profile.tsx        - confirm reset, home link
src/components/BottomNav.tsx - add Home tab
```

No data model, routing, or design-system changes. All work stays client-side using existing contexts and `localStorage`.

## Out of Scope

- No new name data.
- No backend, accounts, or real partner sync (still mock/local).
- No visual redesign — reuse existing tokens (cream/beige + gold, Playfair + Inter).
