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
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Timeline Item: Car Parts E-Commerce */}
          <TimelineItem
            icon={<Briefcase className="h-5 w-5" />}
            title="Car Parts E-Commerce Platform"
            subtitle="Personal Project  ·  MERN Stack"
            period="2026 – Present"
            description={
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Designed and built a full-stack e-commerce web application for browsing and purchasing automotive parts, featuring a dynamic product catalog, user authentication, cart management, and a secure checkout flow.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">Key Contributions</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-muted-foreground pl-1">
                    <li>Built a RESTful API with Node.js and Express to handle product listings, orders, and user management with JWT-based authentication.</li>
                    <li>Developed a responsive React frontend with dynamic product filtering by category, brand, and compatibility, enabling efficient part discovery.</li>
                    <li>Modeled and managed data using MongoDB, designing schemas for products, users, orders, and inventory with Mongoose ODM.</li>
                    <li>Implemented a shopping cart and order management system with real-time stock validation and order status tracking.</li>
                    <li>Integrated role-based access control differentiating customer and admin dashboards for inventory and order management.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">Languages</h4>
                  <div className="space-y-2 max-w-sm mt-1">
                    <div className="h-2 w-full bg-secondary/80 rounded-full overflow-hidden flex">
                      <div className="bg-[#f1e05a]" style={{ width: "98.9%" }} title="JavaScript 98.9%" />
                      <div className="bg-[#888888]" style={{ width: "1.1%" }} title="Other 1.1%" />
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground font-mono">
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#f1e05a]" /> JavaScript (98.9%)</span>
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#888888]" /> Other (1.1%)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {["MongoDB", "Express.js", "React", "Node.js", "JWT Auth", "REST API", "Mongoose", "JavaScript"].map((tech) => (
                      <span key={tech} className="rounded-md bg-secondary/80 border border-border px-2 py-0.5 text-xs font-mono text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            }
          />
          
          {/* Timeline Item: Personal CV Website */}
          <TimelineItem
            icon={<Briefcase className="h-5 w-5" />}
            title="Personal CV Website"
            subtitle="Personal Project  ·  TypeScript · React"
            period="2026"
            description={
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Designed and developed a personal portfolio website to showcase projects, skills, and professional experience — built with TypeScript and React for type-safe, maintainable code.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">Key Contributions</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-muted-foreground pl-1">
                    <li>Built a fully responsive layout using React components and CSS, optimized for desktop and mobile viewing.</li>
                    <li>Used TypeScript throughout to enforce type safety and improve code maintainability across components.</li>
                    <li>Structured the site with reusable UI components for the projects section, skills grid, and experience timeline.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">Languages</h4>
                  <div className="space-y-2 max-w-sm mt-1">
                    <div className="h-2 w-full bg-secondary/80 rounded-full overflow-hidden flex">
                      <div className="bg-[#3178c6]" style={{ width: "59.7%" }} title="TypeScript 59.7%" />
                      <div className="bg-[#f1e05a]" style={{ width: "34.4%" }} title="JavaScript 34.4%" />
                      <div className="bg-[#563d7c]" style={{ width: "5.4%" }} title="CSS 5.4%" />
                      <div className="bg-[#e34c26]" style={{ width: "0.5%" }} title="HTML 0.5%" />
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground font-mono">
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#3178c6]" /> TypeScript (59.7%)</span>
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#f1e05a]" /> JavaScript (34.4%)</span>
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#563d7c]" /> CSS (5.4%)</span>
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#e34c26]" /> HTML (0.5%)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {["TypeScript", "React", "JavaScript", "CSS", "HTML"].map((tech) => (
                      <span key={tech} className="rounded-md bg-secondary/80 border border-border px-2 py-0.5 text-xs font-mono text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            }
          />

          {/* Timeline Item: Local Services Mobile App */}
          <TimelineItem
            icon={<Briefcase className="h-5 w-5" />}
            title="Local Services Mobile App"
            subtitle="Personal Project  ·  Flutter · Dart"
            period="2024"
            description={
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Designed and developed a cross-platform mobile application that connects users with trusted local service providers, featuring provider discovery, booking management, and user reviews.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">Key Contributions</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-muted-foreground pl-1">
                    <li>Built a cross-platform mobile app with Flutter and Dart, targeting both Android and iOS from a single codebase.</li>
                    <li>Implemented a provider discovery flow with location-based filtering, category browsing, and profile pages with ratings.</li>
                    <li>Developed a booking and appointment management system allowing users to schedule, track, and manage service requests.</li>
                    <li>Integrated a review and rating system to help users evaluate and choose trusted service providers.</li>
                    <li>Structured the app using clean architecture patterns, separating UI, business logic, and data layers for maintainability.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">Languages</h4>
                  <div className="space-y-2 max-w-sm mt-1">
                    <div className="h-2 w-full bg-secondary/80 rounded-full overflow-hidden flex">
                      <div className="bg-[#00b4ab]" style={{ width: "78.7%" }} title="Dart 78.7%" />
                      <div className="bg-[#f34b7d]" style={{ width: "10.2%" }} title="C++ 10.2%" />
                      <div className="bg-[#da3434]" style={{ width: "8.0%" }} title="CMake 8.0%" />
                      <div className="bg-[#701516]" style={{ width: "1.1%" }} title="Ruby 1.1%" />
                      <div className="bg-[#f05138]" style={{ width: "0.9%" }} title="Swift 0.9%" />
                      <div className="bg-[#555555]" style={{ width: "0.6%" }} title="C 0.6%" />
                      <div className="bg-[#888888]" style={{ width: "0.5%" }} title="Other 0.5%" />
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground font-mono">
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#00b4ab]" /> Dart (78.7%)</span>
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#f34b7d]" /> C++ (10.2%)</span>
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#da3434]" /> CMake (8.0%)</span>
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#701516]" /> Ruby (1.1%)</span>
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#f05138]" /> Swift (0.9%)</span>
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#555555]" /> C (0.6%)</span>
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#888888]" /> Other (0.5%)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {["Flutter", "Dart", "Cross-platform", "Android", "iOS"].map((tech) => (
                      <span key={tech} className="rounded-md bg-secondary/80 border border-border px-2 py-0.5 text-xs font-mono text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            }
          />

          {/* Timeline Item: Date Fruit Classification Model */}
          <TimelineItem
            icon={<Briefcase className="h-5 w-5" />}
            title="Date Fruit Classification Model"
            subtitle="Academic Project  ·  Machine Learning · Python"
            period="2026"
            description={
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Built and compared machine learning models to classify date fruit varieties based on physical parameters such as size and shape, evaluating the performance of Logistic Regression against Artificial Neural Networks.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">Key Contributions</h4>
                  <ul className="list-disc list-inside space-y-1.5 text-muted-foreground pl-1">
                    <li>Preprocessed and analyzed a date fruit dataset, handling feature normalization and class distribution for model training.</li>
                    <li>Trained and evaluated a Logistic Regression model as a baseline classifier for multi-class date fruit classification.</li>
                    <li>Implemented an Artificial Neural Network (ANN) and compared its accuracy and performance metrics against the baseline.</li>
                    <li>Assessed models using accuracy, precision, recall, and F1-score to determine the most effective classification approach.</li>
                    <li>Documented findings and visualized results including confusion matrices and performance comparison charts.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">Languages</h4>
                  <div className="space-y-2 max-w-sm mt-1">
                    <div className="h-2 w-full bg-[#3572A5] rounded-full overflow-hidden" title="Python 100.0%" />
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground font-mono">
                      <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#3572A5]" /> Python (100.0%)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {["Python", "scikit-learn", "TensorFlow / Keras", "Pandas", "NumPy", "Matplotlib"].map((tech) => (
                      <span key={tech} className="rounded-md bg-secondary/80 border border-border px-2 py-0.5 text-xs font-mono text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </Section>
    </main>
  );
}
