import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Github,
  FileText,
} from "lucide-react";
import profilePic from "../assets/profile.jpg";
import { GITHUB_USERNAME, EMAIL, SKILLS, useGHProfile, Stat } from "../shared";

/**
 * Home Route configuration using TanStack Router.
 * Configured at path "/" (Home).
 */
export const Route = createFileRoute("/")({
  component: HomePage,
});

/**
 * HomePage Component.
 * Serves as the landing dashboard page. Renders:
 * - A premium personal introductory Hero section with profile image.
 * - Call-to-action buttons (GitHub, Email, CV Resume).
 * - Real-time statistics counters fetched from GitHub REST API via React Query.
 */
function HomePage() {
  // Resolved URL to the CV PDF stored inside public assets
  const cvUrl = `${import.meta.env.BASE_URL}documents/Ibrahim_Alyahya_FlowCV_Resume_2026-06-26.pdf`;
  
  // Custom query hook to retrieve GitHub follower and repo metrics
  const profile = useGHProfile();

  return (
    <main>
      {/* Hero Header Section */}
      <section id="top" className="relative grid-bg animate-fade-in">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            {/* Introductory Text and Brand details */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
                Ibrahim <br />
                <span className="text-gradient">Alyahya</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-xl">
                 A Software engineer with full stack development experience and a CS bachelor from IAU.
              </p>
              
              {/* Quick links & calls to action */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-muted transition"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-muted transition"
                >
                  <Mail className="h-4 w-4" /> {EMAIL}
                </a>
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-muted transition"
                >
                  <FileText className="h-4 w-4" /> CV / Resume
                </a>
              </div>
            </div>

            {/* Profile Avatar Column */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-primary rounded-full opacity-30 blur-2xl" />
                <img
                  src={profilePic}
                  alt="Ibrahim Alyahya"
                  className="relative h-56 w-56 rounded-full border-2 border-border object-cover glow"
                />
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Stat label="Public repos" value={profile.data?.public_repos ?? "—"} />
            <Stat label="Followers" value={profile.data?.followers ?? "—"} />
            <Stat label="Following" value={profile.data?.following ?? "—"} />
            <Stat label="Skills" value={SKILLS.length} />
          </div>
        </div>
      </section>
    </main>
  );
}
