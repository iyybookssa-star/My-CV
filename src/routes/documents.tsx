import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FileText, Eye, Download, GraduationCap, X } from "lucide-react";
import { Section } from "../shared";

/**
 * Documents Route configuration using TanStack Router.
 * Configured at path "/documents".
 */
export const Route = createFileRoute("/documents")({
  component: DocumentsPage,
});

/**
 * DocumentsPage Component.
 * Displays downloadable/viewable credentials, containing:
 * - Resume/CV PDF Card.
 * - B.Sc. Graduation Degree Certificate Card (with degree status popup modal).
 */
function DocumentsPage() {
  // URL pointing to the CV PDF file
  const cvUrl = `${import.meta.env.BASE_URL}documents/Ibrahim_Alyahya_FlowCV_Resume_2026-06-26.pdf`;

  // State controls for displaying the degree notice modal
  const [showDegreeNotice, setShowDegreeNotice] = useState(false);

  return (
    <main className="animate-fade-in">
      <Section id="documents" eyebrow="Documents" title="Credentials & Certificates">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Resume Card */}
          <div className="group card-elevated rounded-2xl p-6 hover:border-primary transition flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-lg">My Resume</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                My professional resume detailing my technical skills, experience, project portfolio, and education.
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-muted transition"
              >
                <Eye className="h-4 w-4" /> View PDF
              </a>
              <a
                href={cvUrl}
                download="Ibrahim_Alyahya_FlowCV_Resume_2026-06-26.pdf"
                className="inline-flex items-center justify-center rounded-full bg-gradient-primary p-2.5 text-primary-foreground hover:opacity-90 transition"
                title="Download CV"
              >
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Degree Card */}
          <div className="group card-elevated rounded-2xl p-6 hover:border-primary transition flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-lg">B.Sc. Degree Certificate</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                My Bachelor of Science degree in Computer Science from Imam Abdulrahman bin Faisal University (IAU).
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowDegreeNotice(true)}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-muted transition cursor-pointer"
              >
                <Eye className="h-4 w-4" /> View PDF
              </button>
              <button
                onClick={() => setShowDegreeNotice(true)}
                className="inline-flex items-center justify-center rounded-full bg-gradient-primary p-2.5 text-primary-foreground hover:opacity-90 transition cursor-pointer"
                title="Download Degree"
              >
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Degree notice modal */}
      {showDegreeNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-sm animate-fade-in">
          <div className="card-elevated rounded-3xl p-8 max-w-md w-full text-center relative overflow-hidden animate-zoom-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <button
              onClick={() => setShowDegreeNotice(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative space-y-4">
              <div className="mx-auto h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-display font-bold">Not Graduated Yet</h3>
              <p className="text-muted-foreground">
                Because I haven't graduated yet, there is no degree certificate available here.
              </p>
              <button
                onClick={() => setShowDegreeNotice(false)}
                className="mt-4 w-full inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
