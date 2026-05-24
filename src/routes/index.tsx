import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Mail,
  Github,
  Star,
  GitFork,
  ExternalLink,
  Code2,
  GraduationCap,
  Briefcase,
  Sparkles,
  MapPin,
} from "lucide-react";
import profilePic from "../assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ibrahim Alyahya — Software Engineer" },
      {
        name: "description",
        content:
          "CV and portfolio of Ibrahim Alyahya, software engineer. Projects, experience, skills, and live GitHub repositories.",
      },
      { property: "og:title", content: "Ibrahim Alyahya — Software Engineer" },
      {
        property: "og:description",
        content: "Software engineer. View projects, experience, and live GitHub activity.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: CVPage,
});

const GITHUB_USERNAME = "iyybookssa-star";
const EMAIL = "alyahyaibrahim335@gmail.com";

type Repo = {
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

type GHUser = {
  avatar_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  location: string | null;
};

const SKILLS = [
  "JavaScript","Typescript","Python", "Java", "C++",
  "React", "Node.js", "Tailwind CSS",
  "SQL",  "MongoDB",
  "Git", "Docker", "Linux",
  "Problem Solving", "Software Architecture","UI disigner"
];

function CVPage() {
  const profile = useQuery({
    queryKey: ["gh-user", GITHUB_USERNAME],
    queryFn: async (): Promise<GHUser> => {
      const r = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
      if (!r.ok) throw new Error("profile");
      return r.json();
    },
    staleTime: 1000 * 60 * 10,
  });

  const repos = useQuery({
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

  const visibleRepos = (repos.data ?? [])
    .filter((r) => !r.fork && !r.archived)
    .sort((a, b) => b.stargazers_count - a.stargazers_count || +new Date(b.updated_at) - +new Date(a.updated_at))
    .slice(0, 9);

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/60 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-bold tracking-tight">
            IA<span className="text-gradient">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#experience" className="hover:text-foreground transition">Experience</a>
            <a href="#github" className="hover:text-foreground transition">GitHub</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            <Mail className="h-4 w-4" /> Contact me
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative grid-bg">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
                Ibrahim <br />
                <span className="text-gradient">Alyahya</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-xl">
                 A Software engineer with full stack development experience and a CS bachelor from IAU .
              </p>
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
              </div>
            </div>

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

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Stat label="Public repos" value={profile.data?.public_repos ?? "—"} />
            <Stat label="Followers" value={profile.data?.followers ?? "—"} />
            <Stat label="Following" value={profile.data?.following ?? "—"} />
            <Stat label="Skills" value={SKILLS.length} />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="Engineer at heart">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a software engineer focused on writing clean, maintainable code and shipping
              products that solve real problems. I enjoy working across the stack — from designing
              database schemas to crafting polished user interfaces.
            </p>
            <p>
              Currently studying Computer Science at Imam Abdulrahman bin Faisal Univercity  (IAU.cs), I'm passionate about
              continuously learning new technologies and building things people actually use.
            </p>
          </div>
          <div className="card-elevated rounded-2xl p-6 space-y-4">
            <Detail icon={<GraduationCap className="h-4 w-4" />} label="Education" value="IAU — Computer Science" />
            <Detail icon={<MapPin className="h-4 w-4" />} label="Location" value={profile.data?.location ?? "Saudi Arabia"} />
            <Detail icon={<Mail className="h-4 w-4" />} label="Email" value={EMAIL} />
            <Detail icon={<Github className="h-4 w-4" />} label="GitHub" value={`@${GITHUB_USERNAME}`} />
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills" title="Tools I work with">
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-surface/80 px-4 py-2 text-sm font-mono text-foreground/90 hover:border-primary hover:text-accent transition"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="Experience" title="Journey so far">
        <div className="space-y-4">
          <TimelineItem
            icon={<Briefcase className="h-5 w-5" />}
            title="Software Engineer"
            subtitle="Independent / Open Source"
            period="Present"
            description="Building full-stack applications, contributing to open source, and shipping personal projects published on GitHub."
          />
          <TimelineItem
            icon={<GraduationCap className="h-5 w-5" />}
            title="B.Sc. Computer Science"
            subtitle="FUU — Faculty of Computer Science"
            period="In progress"
            description="Coursework in algorithms, data structures, software engineering, databases, and systems."
          />
          <TimelineItem
            icon={<Code2 className="h-5 w-5" />}
            title="Personal Projects"
            subtitle="Continuous"
            period="Ongoing"
            description="A growing collection of side projects spanning web apps, tools, and experiments — explore them in the GitHub section below."
          />
        </div>
      </Section>

      {/* GITHUB */}
      <Section
        id="github"
        eyebrow="GitHub"
        title="Live from my repositories"
        action={
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
          >
            View all <ExternalLink className="h-3 w-3" />
          </a>
        }
      >
        {repos.isLoading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card-elevated rounded-2xl p-6 h-44 animate-pulse" />
            ))}
          </div>
        )}
        {repos.isError && (
          <p className="text-muted-foreground">
            Couldn't load repositories right now. Visit{" "}
            <a className="text-accent underline" href={`https://github.com/${GITHUB_USERNAME}`}>
              github.com/{GITHUB_USERNAME}
            </a>
            .
          </p>
        )}
        {repos.data && visibleRepos.length === 0 && (
          <p className="text-muted-foreground">No public repositories yet — check back soon.</p>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleRepos.map((r) => (
            <a
              key={r.id}
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              className="group card-elevated rounded-2xl p-6 hover:border-primary transition flex flex-col"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display font-semibold text-lg group-hover:text-accent transition">
                  {r.name}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">
                {r.description || "No description provided."}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground font-mono">
                {r.language && (
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-gradient-primary" />
                    {r.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3" /> {r.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" /> {r.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's build something">
        <div className="card-elevated rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              Have a role or project in mind?
            </h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              I'm open to opportunities — full-time, contract, or collaborations.
            </p>
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

      <footer className="border-t border-border mt-20">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ibrahim Alyahya. All rights reserved.</p>
          <p className="font-mono text-xs">Built with care.</p>
        </div>
      </footer>
    </main>
  );
}

function Section({
  id, eyebrow, title, action, children,
}: {
  id: string; eyebrow: string; title: string; action?: React.ReactNode; children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 md:py-28">
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

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="card-elevated rounded-2xl p-5">
      <div className="text-3xl font-display font-bold text-gradient">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function Detail({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
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

function TimelineItem({
  icon, title, subtitle, period, description,
}: {
  icon: React.ReactNode; title: string; subtitle: string; period: string; description: string;
}) {
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
