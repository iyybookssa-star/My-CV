import { createFileRoute } from "@tanstack/react-router";
import { Mail, Github } from "lucide-react";
import { Section, EMAIL, GITHUB_USERNAME } from "../shared";

/**
 * Contact Route configuration using TanStack Router.
 * Configured at path "/contact".
 */
export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

/**
 * ContactPage Component.
 * Displays a premium contact invitation card, encouraging potential opportunities,
 * roles, contract projects, and general collaborations with quick actions.
 */
function ContactPage() {
  return (
    <main className="animate-fade-in">
      <Section id="contact" eyebrow="Contact" title="Let's build something">
        <div className="card-elevated rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          {/* Subtle gradient background background-glow */}
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              Have a role or project in mind?
            </h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              I'm open to opportunities — full-time, contract, or collaborations.
            </p>
            
            {/* Quick Contact Actions buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition"
              >
                <Mail className="h-4 w-4" /> {EMAIL}
              </a>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 font-medium hover:bg-muted transition"
              >
                <Github className="h-4 w-4" /> @{GITHUB_USERNAME}
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
