import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface ShortlistedName {
  nameId: string;
  note: string;
  addedAt: number;
}

export interface PartnerReaction {
  nameId: string;
  reaction: "love" | "like" | "maybe" | "no";
}

interface ShortlistContextType {
  shortlist: ShortlistedName[];
  addToShortlist: (nameId: string) => void;
  removeFromShortlist: (nameId: string) => void;
  isShortlisted: (nameId: string) => boolean;
  updateNote: (nameId: string, note: string) => void;
  getNote: (nameId: string) => string;
  feedback: Record<string, "up" | "down">;
  setFeedback: (nameId: string, type: "up" | "down") => void;
  clearFeedback: (nameId: string) => void;
  partnerName: string;
  setPartnerName: (name: string) => void;
  partnerReactions: PartnerReaction[];
  setPartnerReaction: (nameId: string, reaction: PartnerReaction["reaction"]) => void;
  resetAll: () => void;
}

const ShortlistContext = createContext<ShortlistContextType | undefined>(undefined);

const SHORTLIST_KEY = "babynameai_shortlist";
const FEEDBACK_KEY = "babynameai_feedback";
const PARTNER_KEY = "babynameai_partner";
const PARTNER_REACTIONS_KEY = "babynameai_partner_reactions";

export function ShortlistProvider({ children }: { children: ReactNode }) {
  const [shortlist, setShortlist] = useState<ShortlistedName[]>(() => {
    const saved = localStorage.getItem(SHORTLIST_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [feedback, setFeedbackState] = useState<Record<string, "up" | "down">>(() => {
    const saved = localStorage.getItem(FEEDBACK_KEY);
    return saved ? JSON.parse(saved) : {};
  });

  const [partnerName, setPartnerNameState] = useState(() => {
    return localStorage.getItem(PARTNER_KEY) || "";
  });

  const [partnerReactions, setPartnerReactions] = useState<PartnerReaction[]>(() => {
    const saved = localStorage.getItem(PARTNER_REACTIONS_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => { localStorage.setItem(SHORTLIST_KEY, JSON.stringify(shortlist)); }, [shortlist]);
  useEffect(() => { localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedback)); }, [feedback]);
  useEffect(() => { localStorage.setItem(PARTNER_KEY, partnerName); }, [partnerName]);
  useEffect(() => { localStorage.setItem(PARTNER_REACTIONS_KEY, JSON.stringify(partnerReactions)); }, [partnerReactions]);

  const addToShortlist = (nameId: string) => {
    if (!shortlist.find((s) => s.nameId === nameId)) {
      setShortlist((prev) => [...prev, { nameId, note: "", addedAt: Date.now() }]);
    }
  };

  const removeFromShortlist = (nameId: string) => {
    setShortlist((prev) => prev.filter((s) => s.nameId !== nameId));
  };

  const isShortlisted = (nameId: string) => shortlist.some((s) => s.nameId === nameId);

  const updateNote = (nameId: string, note: string) => {
    setShortlist((prev) => prev.map((s) => (s.nameId === nameId ? { ...s, note } : s)));
  };

  const getNote = (nameId: string) => shortlist.find((s) => s.nameId === nameId)?.note || "";

  const setFeedback = (nameId: string, type: "up" | "down") => {
    setFeedbackState((prev) => ({ ...prev, [nameId]: type }));
  };

  const clearFeedback = (nameId: string) => {
    setFeedbackState((prev) => {
      const next = { ...prev };
      delete next[nameId];
      return next;
    });
  };

  const setPartnerName = (name: string) => setPartnerNameState(name);

  const setPartnerReaction = (nameId: string, reaction: PartnerReaction["reaction"]) => {
    setPartnerReactions((prev) => {
      const existing = prev.findIndex((r) => r.nameId === nameId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = { nameId, reaction };
        return updated;
      }
      return [...prev, { nameId, reaction }];
    });
  };

  const resetAll = () => {
    setShortlist([]);
    setFeedbackState({});
    setPartnerNameState("");
    setPartnerReactions([]);
  };

  return (
    <ShortlistContext.Provider
      value={{
        shortlist, addToShortlist, removeFromShortlist, isShortlisted, updateNote, getNote,
        feedback, setFeedback, clearFeedback,
        partnerName, setPartnerName, partnerReactions, setPartnerReaction,
        resetAll,
      }}
    >
      {children}
    </ShortlistContext.Provider>
  );
}

export function useShortlist() {
  const ctx = useContext(ShortlistContext);
  if (!ctx) throw new Error("useShortlist must be used within ShortlistProvider");
  return ctx;
}
