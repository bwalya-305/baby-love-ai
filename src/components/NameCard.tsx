import React from "react";
import { BabyName } from "@/data/names";
import { useShortlist } from "@/contexts/ShortlistContext";
import { Heart, ThumbsUp, ThumbsDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface NameCardProps {
  name: BabyName;
  index?: number;
}

export default function NameCard({ name, index = 0 }: NameCardProps) {
  const { isShortlisted, addToShortlist, removeFromShortlist, feedback, setFeedback, clearFeedback } = useShortlist();
  const navigate = useNavigate();
  const shortlisted = isShortlisted(name.id);
  const fb = feedback[name.id];

  return (
    <div
      className="animate-card-in rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: "backwards" }}
    >
      <div className="flex items-start justify-between">
        <div className="cursor-pointer flex-1" onClick={() => navigate(`/name/${name.id}`)}>
          <h3 className="font-serif text-2xl font-semibold text-foreground">{name.name}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{name.pronunciation}</p>
        </div>
        <button
          onClick={() => (shortlisted ? removeFromShortlist(name.id) : addToShortlist(name.id))}
          className="ml-2 rounded-full p-2 transition-colors hover:bg-secondary"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${shortlisted ? "fill-primary text-primary" : "text-muted-foreground"}`}
          />
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <Badge variant="outline" className="font-sans text-xs">
          {name.origin}
        </Badge>
        <Badge variant="outline" className="font-sans text-xs">
          {name.gender === "neutral" ? "Unisex" : name.gender === "boy" ? "Boy" : "Girl"}
        </Badge>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{name.meaning}</p>

      <div className="mt-4 flex items-center gap-2">
        <button
          onClick={() => (fb === "up" ? clearFeedback(name.id) : setFeedback(name.id, "up"))}
          className={`flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs transition-all ${
            fb === "up"
              ? "border-primary bg-primary/10 text-primary"
              : "border-border text-muted-foreground hover:border-primary/50"
          }`}
        >
          <ThumbsUp className="h-3.5 w-3.5" />
          Like
        </button>
        <button
          onClick={() => (fb === "down" ? clearFeedback(name.id) : setFeedback(name.id, "down"))}
          className={`flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs transition-all ${
            fb === "down"
              ? "border-destructive bg-destructive/10 text-destructive"
              : "border-border text-muted-foreground hover:border-destructive/50"
          }`}
        >
          <ThumbsDown className="h-3.5 w-3.5" />
          Pass
        </button>
      </div>
    </div>
  );
}
