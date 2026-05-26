import { createFileRoute } from "@tanstack/react-router";
import { Section, LANGUAGES, TOOLS, TECHNICAL_SKILLS } from "../shared";

/**
 * Skills Route configuration using TanStack Router.
 * Configured at path "/skills".
 */
export const Route = createFileRoute("/skills")({
  component: SkillsPage,
});

/**
 * SkillsPage Component.
 * Displays categorised skill clouds containing programming languages, developer tooling, and technical skills.
 */
function SkillsPage() {
  return (
    <main className="animate-fade-in">
      <Section id="skills" eyebrow="Skills & Technologies" title="My Technical Stack">
        <div className="space-y-10">
          
          {/* Programming Languages Subsection */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Languages I know</h3>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-surface/80 px-4 py-2 text-sm font-mono text-foreground/90 hover:border-primary hover:text-accent transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & FrameWorks Subsection */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Tools I work with</h3>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-surface/80 px-4 py-2 text-sm font-mono text-foreground/90 hover:border-primary hover:text-accent transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Skills Subsection */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {TECHNICAL_SKILLS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-surface/80 px-4 py-2 text-sm font-mono text-foreground/90 hover:border-primary hover:text-accent transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
