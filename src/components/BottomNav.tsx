import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Compass, Heart, Users, User } from "lucide-react";

const tabs = [
  { path: "/", label: "Home", icon: Home, match: (p: string) => p === "/" },
  {
    path: "/discover",
    label: "Discover",
    icon: Compass,
    // Name detail pages belong to the discovery flow
    match: (p: string) => p === "/discover" || p.startsWith("/name/"),
  },
  {
    path: "/shortlist",
    label: "Shortlist",
    icon: Heart,
    match: (p: string) => p === "/shortlist",
  },
  {
    path: "/partner",
    label: "Partner",
    icon: Users,
    match: (p: string) => p.startsWith("/partner"),
  },
  {
    path: "/profile",
    label: "Profile",
    icon: User,
    match: (p: string) => p === "/profile" || p === "/onboarding",
  },
];

export default function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-md items-center justify-around py-2">
        {tabs.map(({ path, label, icon: Icon, match }) => {
          const active = match(pathname);
          return (
            <Link
              key={path}
              to={path}
              aria-current={active ? "page" : undefined}
              className={`relative flex flex-col items-center gap-0.5 px-3 py-1 text-xs transition-colors ${
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active && (
                <span
                  aria-hidden="true"
                  className="absolute -top-2 h-1 w-8 rounded-full bg-primary"
                />
              )}
              <Icon
                className={`h-5 w-5 transition-transform ${
                  active ? "scale-110 stroke-[2.5]" : ""
                }`}
              />
              <span className={active ? "font-semibold" : ""}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
