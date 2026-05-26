import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, MapPin, Mail, Github } from "lucide-react";
import { Section, Detail, GITHUB_USERNAME, EMAIL, useGHProfile } from "../shared";

/**
 * About Route configuration using TanStack Router.
 * Configured at path "/about".
 */
export const Route = createFileRoute("/about")({
  component: AboutPage,
});

/**
 * AboutPage Component.
 * Displays details about Ibrahim's education, background, interests, and profile facts.
 */
function AboutPage() {
  // Retrieve location information dynamically from GitHub profile query
  const profile = useGHProfile();

  return (
    <main className="animate-fade-in">
      <Section id="about" eyebrow="About" title="Engineer at heart">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Main Biography Column */}
          <div className="md:col-span-2 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a software engineer focused on writing clean, maintainable code and shipping
              products that solve real problems. I enjoy working across the stack — from designing
              database schemas to crafting polished user interfaces.
            </p>
            <p>
              Currently studying Computer Science at Imam Abdulrahman bin Faisal University (IAU.cs), I'm passionate about
              continuously learning new technologies and building things people actually use.
            </p>
          </div>

          {/* Quick Details List Card */}
          <div className="card-elevated rounded-2xl p-6 space-y-4">
            <Detail icon={<GraduationCap className="h-4 w-4" />} label="Education" value="IAU — Computer Science" />
            <Detail icon={<MapPin className="h-4 w-4" />} label="Location" value={profile.data?.location ?? "Saudi Arabia"} />
            <Detail icon={<Mail className="h-4 w-4" />} label="Email" value={EMAIL} />
            <Detail icon={<Github className="h-4 w-4" />} label="GitHub" value={`@${GITHUB_USERNAME}`} />
          </div>
        </div>
      </Section>
    </main>
  );
}
