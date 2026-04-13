

# BabyName AI -- Full App Build Plan

## Design System (from screenshots)
- Background: warm cream/beige (`#fcfbf8` / `#f7f5f0`)
- Accent: gold/amber (`#c8a45e`)
- Text: dark charcoal for headings, muted gray for body
- Headings: serif font (Playfair Display), italic for emphasis words
- Body: clean sans-serif (Inter or system)
- Dark section background for "Inclusive by Design" area
- Pill/tag buttons with thin borders, italic serif text

## What Gets Built

### 1. Curated Real Name Database (~300 names)
A hardcoded TypeScript data file with real, researched baby names spanning 25+ cultural origins. Each name includes: name, gender, origin, meaning, pronunciation, cultural context, themes/tags, syllable count, and starting letter. Sources: well-known naming traditions across African (Yoruba, Igbo, Zulu, Akan), South Asian (Hindi, Tamil, Sanskrit), East Asian (Japanese, Chinese, Korean), Middle Eastern (Arabic, Persian, Hebrew), European (Irish/Celtic, Italian, Greek, Norse, Slavic), Indigenous (Maori, Native American), and secular/literary/nature categories.

### 2. Onboarding Preference Flow (multi-step form)
A 4-step questionnaire matching the SRD preference inputs:
- **Step 1**: Gender preference (Boy / Girl / Neutral / Any) -- toggle buttons
- **Step 2**: Cultural/ethnic origin -- multi-select searchable list of 25+ origins
- **Step 3**: Themes & meaning -- tag selector (Nature, Strength, Light, Peace, Wisdom, Love, etc.)
- **Step 4**: Name style -- syllable slider (1-4), starting letter input, must-include letters

Preferences stored in React context + localStorage.

### 3. Name Discovery Page
- Filtered results from the name database based on preferences
- Card-based UI showing name, pronunciation, origin badge, short meaning
- Thumbs up / thumbs down buttons on each card (feedback stored in state/localStorage)
- "Generate More" button to shuffle/show next batch of 10
- Smooth animations for card transitions

### 4. Name Detail Page
- Full detail view: meaning, cultural/historical context, similar names from the database
- Share as card (copy to clipboard or download as image -- mock)
- Add to shortlist button

### 5. Shortlist / Favorites Page
- List of saved names with full metadata
- Add/edit personal notes on each name
- Remove from shortlist
- All persisted in localStorage

### 6. Partner Collaboration UI (mock/local)
- Invite partner flow (enters partner name, generates mock invite link)
- Shared shortlist view with both partners' reactions
- Match indicator for names both partners liked
- Emoji reactions on names

### 7. App Navigation
- Bottom tab bar (mobile-first): Discover, Shortlist, Partner, Profile
- Header with "BabyName AI" logo matching the waiting list style

## Pages & Routes
- `/` -- Landing/home redirects to onboarding or discover
- `/onboarding` -- Multi-step preference questionnaire
- `/discover` -- Name browsing with cards
- `/name/:id` -- Name detail view
- `/shortlist` -- Saved favorites
- `/partner` -- Partner collaboration
- `/profile` -- Settings, reset preferences/feedback

## Technical Details
- **Data**: `src/data/names.ts` -- ~300 real names as typed array
- **State**: React Context (`PreferencesContext`, `ShortlistContext`) + localStorage persistence
- **Filtering**: Client-side filter engine matching preferences to name attributes
- **Styling**: Tailwind CSS with custom CSS variables matching the cream/gold design system; Google Fonts for Playfair Display
- **Routing**: React Router (already set up)
- **No API calls**: Everything runs client-side with the built-in dataset

## File Structure (new files)
```text
src/
  data/names.ts              -- 300 real names with metadata
  contexts/PreferencesContext.tsx
  contexts/ShortlistContext.tsx
  pages/Onboarding.tsx
  pages/Discover.tsx
  pages/NameDetail.tsx
  pages/Shortlist.tsx
  pages/Partner.tsx
  pages/Profile.tsx
  components/NameCard.tsx
  components/BottomNav.tsx
  components/PreferenceStep.tsx
  components/ThemeTag.tsx
  components/OriginSelector.tsx
  lib/filterNames.ts         -- filtering logic
```

