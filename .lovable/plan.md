

# Add More African Tribal Names (Zambia & Beyond)

## What I'll Add

Expand `src/data/names.ts` with names from underrepresented African tribes, prioritizing **Zambia** and adding broader Sub-Saharan African coverage.

### Zambian Tribes (~30 names)
- **Bemba** (largest ethnic group, Northern/Copperbelt Zambia): e.g. Chanda, Mwansa, Bupe, Chisanga, Mutale, Kunda, Chola, Chileshe
- **Tonga** (Southern Zambia): e.g. Choolwe, Mainza, Mutinta, Buumba, Munsaka
- **Nyanja/Chewa** (Eastern Zambia, also Malawi): e.g. Thandiwe, Chimwemwe, Mphatso, Tamanda, Yamikani
- **Lozi** (Western Zambia, Barotseland): e.g. Inonge, Mwangala, Lubinda, Mubita, Namakau
- **Tumbuka, Lunda, Kaonde** (smaller groups): e.g. Mwape, Kabwe, Lwendo

Each name will include real meaning, pronunciation, gender, themes, and cultural context.

### Additional African Tribes (~25 names)
To round out the continent beyond what's already there (Yoruba, Igbo, Zulu, Akan):
- **Swahili** (East Africa -- Kenya, Tanzania): Zuri, Imani, Jelani, Subira
- **Amharic** (Ethiopia): Selam, Bekele, Hiwot, Dawit
- **Shona** (Zimbabwe): Tendai, Rufaro, Tatenda, Farai
- **Xhosa** (South Africa): Lwazi, Nomvula, Sipho, Thembeka
- **Hausa** (Nigeria/Niger): Amina, Sani, Hadiza, Kabir
- **Wolof** (Senegal): Aminata, Modou, Fatou, Awa
- **Kikuyu** (Kenya): Wanjiru, Kamau, Njeri, Mwangi
- **Luganda** (Uganda): Nakato, Wasswa, Babirye, Kato

### Onboarding Origin List Update
Add the new origin labels (Bemba, Tonga, Nyanja, Lozi, Swahili, Amharic, Shona, Xhosa, Hausa, Wolof, Kikuyu, Luganda) to the multi-select in `src/pages/Onboarding.tsx` so users can filter by them.

### Filter Compatibility
The existing `src/lib/filterNames.ts` already filters by `origin` string, so new entries plug in automatically. No engine changes needed.

## Files Touched
- `src/data/names.ts` -- append ~55 new name entries
- `src/pages/Onboarding.tsx` -- extend the origins list

## Out of Scope
- No API/backend changes (still fully client-side)
- No design or routing changes

