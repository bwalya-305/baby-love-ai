import { BabyName, Gender, Origin, Theme } from "@/data/names";

export interface Preferences {
  gender: Gender | "any";
  origins: Origin[];
  themes: Theme[];
  syllableRange: [number, number];
  startingLetters: string[];
  mustIncludeLetters: string[];
}

export const DEFAULT_PREFERENCES: Preferences = {
  gender: "any",
  origins: [],
  themes: [],
  syllableRange: [1, 4],
  startingLetters: [],
  mustIncludeLetters: [],
};

export function filterNames(allNames: BabyName[], prefs: Preferences): BabyName[] {
  return allNames.filter((name) => {
    // Gender
    if (prefs.gender !== "any" && name.gender !== "neutral" && name.gender !== prefs.gender) {
      return false;
    }

    // Origins
    if (prefs.origins.length > 0 && !prefs.origins.includes(name.origin)) {
      return false;
    }

    // Themes
    if (prefs.themes.length > 0 && !prefs.themes.some((t) => name.themes.includes(t))) {
      return false;
    }

    // Syllables
    if (name.syllables < prefs.syllableRange[0] || name.syllables > prefs.syllableRange[1]) {
      return false;
    }

    // Starting letters
    if (prefs.startingLetters.length > 0) {
      const upper = prefs.startingLetters.map((l) => l.toUpperCase());
      if (!upper.includes(name.startingLetter.toUpperCase())) {
        return false;
      }
    }

    // Must include letters
    if (prefs.mustIncludeLetters.length > 0) {
      const lower = name.name.toLowerCase();
      if (!prefs.mustIncludeLetters.every((l) => lower.includes(l.toLowerCase()))) {
        return false;
      }
    }

    return true;
  });
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
