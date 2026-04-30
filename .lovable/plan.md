# Three small fixes before deploy

## 1. Hide the Pre-Deploy Checklist from users

The checklist is an internal QA tool, not a user feature. Remove all user-facing entry points but keep the page available at `/pre-deploy` for your own use (typed directly into the URL bar).

- `src/pages/Profile.tsx` — remove the "Pre-Deploy Checklist" button and the unused `ShieldCheck` import.
- Leave the `/pre-deploy` route in `src/App.tsx` so you can still reach it manually. (If you'd prefer it removed entirely, say so and I'll delete the route + page file.)

## 2. Fix the partner invite link

Today the "Copy Link" button copies `${origin}/partner`, which just opens the inviter's own partner page on the recipient's device with no shared context. The shortlist lives in `localStorage`, so the partner has no data to react to.

Make the invite link self-contained by encoding the inviter's shortlist into the URL:

- In `src/pages/Partner.tsx`:
  - Build the invite URL as `${origin}/partner?from=<inviterName>&names=<base64(JSON of shortlist nameIds)>`.
  - On mount, read `?from` and `?names` from `useSearchParams`. If present and the local user has no shortlist of their own, hydrate a read-only "reacting to <inviter>'s list" view using the encoded ids resolved against `names` data.
  - Show the inviter's name in the header ("You're reacting to Sarah's shortlist") and let the recipient tap reactions, which save to `partnerReactions` keyed by the inviter's name.
  - "Send Invite" still records the partner locally; "Copy Link" now generates the shareable URL described above and toasts "Invite link copied".
  - If the shortlist is empty when copying, disable the button and show a hint to add names first.

Technical notes:
- Use `encodeURIComponent(btoa(JSON.stringify(ids)))` for compact, URL-safe payload; decode with the inverse. Cap to e.g. 100 ids to keep URLs short.
- No backend needed — this stays fully client-side per the project's localStorage-only constraint.

## 3. Remove all Lovable branding & favicon

- `index.html`:
  - Remove `<meta name="author" content="Lovable" />`.
  - Remove `<meta name="twitter:site" content="@Lovable" />`.
  - Remove the two `lovable.app` preview image meta tags (`og:image`, `twitter:image`) — leave them blank or drop the tags entirely.
  - Add a neutral favicon link. Since no custom favicon was provided, reference the existing `/placeholder.svg` as a temporary favicon: `<link rel="icon" type="image/svg+xml" href="/placeholder.svg" />`.
- `public/favicon.ico`: delete the Lovable-branded default favicon file so browsers fall back to the SVG above.

If you'd like a custom favicon instead of the placeholder, upload an image and I'll wire it in.

## Files touched
- `src/pages/Profile.tsx`
- `src/pages/Partner.tsx`
- `index.html`
- `public/favicon.ico` (deleted)

## Out of scope
- No backend / real-time partner sync (still demo/local).
- No design changes.
