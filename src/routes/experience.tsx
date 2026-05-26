import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";
import { Section, TimelineItem } from "../shared";

/**
 * Experience Route configuration using TanStack Router.
 * Configured at path "/experience".
 */
export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
});

/**
 * ExperiencePage Component.
 * Displays a vertical timeline of career milestones, educational history, and open source work.
 */
function ExperiencePage() {
  return (
    <main className="animate-fade-in">
      <Section id="experience" eyebrow="Experience" title="Journey so far">
        <div className="space-y-4">
          {/* Timeline Item: Software Engineering */}
          <TimelineItem
            icon={<Briefcase className="h-5 w-5" />}
            title="Software Engineer"
            subtitle="Independent / Open Source"
            period="Present"
            description="Building full-stack applications, contributing to open source, and shipping personal projects published on GitHub."
          />
          
          {/* Timeline Item: Undergraduate Studies */}
          <TimelineItem
            icon={<GraduationCap className="h-5 w-5" />}
            title="B.Sc. Computer Science"
            subtitle="IAU — Faculty of Computer Science"
            period="In progress"
            description="Coursework in algorithms, data structures, software engineering, databases, and systems."
          />
          
          {/* Timeline Item: Side Projects */}
          <TimelineItem
            icon={<Code2 className="h-5 w-5" />}
            title="Personal Projects"
            subtitle="Continuous"
            period="Ongoing"
            description="A growing collection of side projects spanning web apps, tools, and experiments — explore them in the GitHub section."
          />
        </div>
      </Section>
    </main>
  );
}
