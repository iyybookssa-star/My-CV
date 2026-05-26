import React, { useState } from "react";
import { Outlet, createRootRoute, HeadContent, Link } from "@tanstack/react-router";
import { Mail, Menu, X } from "lucide-react";
import { EMAIL } from "../shared";

/**
 * Root Route configuration using TanStack Router.
 * Renders the global layout including:
 * - HTML header metadata (HeadContent)
 * - Navigation header bar with links highlighting active page routes
 * - Outlet for matching nested route page contents
 * - Global footer section
 */
export const Route = createRootRoute({
  component: RootLayout,
});

/**
 * Global layout component wraps all page views.
 * It provides responsive design, glassmorphism headers, and sticky navigations.
 */
function RootLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeadContent />
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          {/* Nav Header Section */}
          <header className="sticky top-0 z-40 backdrop-blur-md bg-background/60 border-b border-border">
            <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
              {/* Brand Logo Link */}
              <Link to="/" className="font-display font-bold tracking-tight text-foreground" onClick={() => setIsOpen(false)}>
                IA<span className="text-gradient">.</span>
              </Link>
              
              {/* Desktop Navigation Links */}
              <nav className="hidden md:flex items-center gap-8 text-sm">
                <Link to="/" activeOptions={{ exact: true }} className="text-muted-foreground hover:text-foreground transition [&.active]:text-accent [&.active]:font-semibold">Home</Link>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition [&.active]:text-accent [&.active]:font-semibold">About</Link>
                <Link to="/skills" className="text-muted-foreground hover:text-foreground transition [&.active]:text-accent [&.active]:font-semibold">Skills</Link>
                <Link to="/experience" className="text-muted-foreground hover:text-foreground transition [&.active]:text-accent [&.active]:font-semibold">Experience</Link>
                <Link to="/documents" className="text-muted-foreground hover:text-foreground transition [&.active]:text-accent [&.active]:font-semibold">Documents</Link>
                <Link to="/github" className="text-muted-foreground hover:text-foreground transition [&.active]:text-accent [&.active]:font-semibold">GitHub</Link>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition [&.active]:text-accent [&.active]:font-semibold">Contact</Link>
              </nav>

              {/* Desktop Action Button: Email Contact */}
              <div className="hidden md:block">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
                >
                  <Mail className="h-4 w-4" /> Contact me
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-surface border border-transparent hover:border-border transition"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
              <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-md px-6 py-4 animate-fade-in">
                <nav className="flex flex-col gap-4 text-base font-medium">
                  <Link to="/" activeOptions={{ exact: true }} onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition [&.active]:text-accent [&.active]:font-semibold">Home</Link>
                  <Link to="/about" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition [&.active]:text-accent [&.active]:font-semibold">About</Link>
                  <Link to="/skills" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition [&.active]:text-accent [&.active]:font-semibold">Skills</Link>
                  <Link to="/experience" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition [&.active]:text-accent [&.active]:font-semibold">Experience</Link>
                  <Link to="/documents" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition [&.active]:text-accent [&.active]:font-semibold">Documents</Link>
                  <Link to="/github" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition [&.active]:text-accent [&.active]:font-semibold">GitHub</Link>
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition [&.active]:text-accent [&.active]:font-semibold">Contact</Link>
                  
                  <hr className="border-border my-2" />
                  
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition w-full"
                  >
                    <Mail className="h-4 w-4" /> Contact me
                  </a>
                </nav>
              </div>
            )}
          </header>

          {/* Render Active Page Content */}
          <Outlet />
        </div>

        {/* Global Footer Section */}
        <footer className="border-t border-border mt-20">
          <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Ibrahim Alyahya. All rights reserved.</p>
            <p className="font-mono text-xs">Consider me.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
