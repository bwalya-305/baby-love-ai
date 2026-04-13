import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Compass, Heart, Users, User } from "lucide-react";

const tabs = [
  { path: "/discover", label: "Discover", icon: Compass },
  { path: "/shortlist", label: "Shortlist", icon: Heart },
  { path: "/partner", label: "Partner", icon: Users },
  { path: "/profile", label: "Profile", icon: User },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-md items-center justify-around py-2">
        {tabs.map(({ path, label, icon: Icon }) => {
          const active = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 text-xs transition-colors ${
                active ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? "stroke-[2.5]" : ""}`} />
              <span className={active ? "font-semibold" : ""}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
