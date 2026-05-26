import { createFileRoute } from "@tanstack/react-router";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { Section, GITHUB_USERNAME, useGHRepos } from "../shared";

/**
 * GitHub Route configuration using TanStack Router.
 * Configured at path "/github".
 */
export const Route = createFileRoute("/github")({
  component: GitHubPage,
});

/**
 * GitHubPage Component.
 * Fetches public GitHub repositories via React Query, sorts them based on stargazer count,
 * filters out forks/archived projects, and showcases up to 9 cards with links to live code.
 */
function GitHubPage() {
  // Query hook to fetch public repositories
  const repos = useGHRepos();

  // Process the repositories: filter out forks/archived, sort by stars, and slice to top 9
  const visibleRepos = (repos.data ?? [])
    .filter((r) => !r.fork && !r.archived)
    .sort((a, b) => b.stargazers_count - a.stargazers_count || +new Date(b.updated_at) - +new Date(a.updated_at))
    .slice(0, 9);

  return (
    <main className="animate-fade-in">
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
        {/* Loading state placeholders (Skeleton cards) */}
        {repos.isLoading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card-elevated rounded-2xl p-6 h-44 animate-pulse" />
            ))}
          </div>
        )}

        {/* Error State */}
        {repos.isError && (
          <p className="text-muted-foreground">
            Couldn't load repositories right now. Visit{" "}
            <a className="text-accent underline" href={`https://github.com/${GITHUB_USERNAME}`}>
              github.com/{GITHUB_USERNAME}
            </a>
            .
          </p>
        )}

        {/* Empty State */}
        {repos.data && visibleRepos.length === 0 && (
          <p className="text-muted-foreground">No public repositories yet — check back soon.</p>
        )}

        {/* Render Repository Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleRepos.map((r) => (
            <a
              key={r.id}
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              className="group card-elevated rounded-2xl p-6 hover:border-primary transition flex flex-col"
            >
              {/* Repo Name */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display font-semibold text-lg group-hover:text-accent transition">
                  {r.name}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition" />
              </div>
              
              {/* Description */}
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">
                {r.description || "No description provided."}
              </p>
              
              {/* Language and Star/Fork stats */}
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
    </main>
  );
}
