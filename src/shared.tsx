import React from "react";
import { useQuery } from "@tanstack/react-query";

/**
 * The GitHub username used to fetch profile information and repositories.
 */
export const GITHUB_USERNAME = "iyybookssa-star";

/**
 * The primary contact email address.
 */
export const EMAIL = "alyahyaibrahim335@gmail.com";

/**
 * Represents a GitHub repository returned by the GitHub API.
 */
export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

/**
 * Represents a GitHub user profile returned by the GitHub API.
 */
export type GHUser = {
  avatar_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  location: string | null;
};

/**
 * List of languages known and used.
 */
export const LANGUAGES = [
  "JavaScript", "Typescript", "Python", "Java", "C++"
];

/**
 * List of tools, technologies, and methodologies used in development.
 */
export const TOOLS = [
  "React", "Node.js", "Tailwind CSS", "SQL", "MongoDB",
  "Git", "Docker", "Linux", "Problem Solving", "Software Architecture", "UI designer"
];

/**
 * Combined list of all skills (languages + tools) for statistical counters and compatibility.
 */
export const SKILLS = [...LANGUAGES, ...TOOLS];

/**
 * React Query hook to fetch the GitHub user profile for the configured username.
 * Utilizes caching to avoid redundant API hits (10-minute stale time).
 * 
 * @returns React Query result containing GHUser details.
 */
export function useGHProfile() {
  return useQuery({
    queryKey: ["gh-user", GITHUB_USERNAME],
    queryFn: async (): Promise<GHUser> => {
      const r = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
      if (!r.ok) throw new Error("profile");
      return r.json();
    },
    staleTime: 1000 * 60 * 10,
  });
}

/**
 * React Query hook to fetch the public GitHub repositories for the configured username.
 * Utilizes caching (10-minute stale time).
 * 
 * @returns React Query result containing an array of Repo details.
 */
export function useGHRepos() {
  return useQuery({
    queryKey: ["gh-repos", GITHUB_USERNAME],
    queryFn: async (): Promise<Repo[]> => {
      const r = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      );
      if (!r.ok) throw new Error("repos");
      return r.json();
    },
    staleTime: 1000 * 60 * 10,
  });
}

/**
 * Props structure for the Section layout component.
 */
type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
};

/**
 * Standard layout section component with a standardized eyebrow title, heading, and spacing.
 * Includes a fade-in animation by default.
 */
export function Section({
  id, eyebrow, title, action, children,
}: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-12 md:py-16 animate-fade-in">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-mono mb-3">{eyebrow}</p>
          <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

/**
 * Props structure for the Stat component.
 */
type StatProps = {
  label: string;
  value: number | string;
};

/**
 * Renders a metric card showing a key stat value (with primary gradient styling) and a descriptor label.
 */
export function Stat({ label, value }: StatProps) {
  return (
    <div className="card-elevated rounded-2xl p-5">
      <div className="text-3xl font-display font-bold text-gradient">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

/**
 * Props structure for the Detail component.
 */
type DetailProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

/**
 * Renders an inline list item containing an icon, label, and detail value.
 * Used for tabular key-value attributes (e.g. email, location, education).
 */
export function Detail({ icon, label, value }: DetailProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-accent">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm truncate">{value}</div>
      </div>
    </div>
  );
}

/**
 * Props structure for the TimelineItem component.
 */
type TimelineItemProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  description: string;
};

/**
 * Renders a single experience card inside a vertical or list layout timeline.
 * Highlights the activity using a custom primary gradient icon badge.
 */
export function TimelineItem({
  icon, title, subtitle, period, description,
}: TimelineItemProps) {
  return (
    <div className="card-elevated rounded-2xl p-6 flex gap-5">
      <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display font-semibold text-lg">{title}</h3>
          <span className="text-xs font-mono text-muted-foreground">{period}</span>
        </div>
        <p className="text-sm text-accent">{subtitle}</p>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
