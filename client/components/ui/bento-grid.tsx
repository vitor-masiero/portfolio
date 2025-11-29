import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

export const BentoGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4 md:gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  children,
  className,
  background,
  href,
  githubLink,
  cta,
}: {
  children?: React.ReactNode;
  className?: string;
  background?: React.ReactNode;
  href?: string;
  githubLink?: string;
  cta?: string;
}) => (
  <div
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-black",
      "transition-all duration-300 ease-out hover:border-white/20 hover:shadow-lg",
      className,
    )}
  >
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      <div className="absolute inset-0 z-0 transition-opacity duration-300">
        {background}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>
    </div>
    <div className="relative z-10 h-full transition-transform duration-300 group-hover:-translate-y-10">
      {children}
    </div>

    {href && (
      <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-all duration-300 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 z-20 pointer-events-none group-hover:pointer-events-auto flex items-center gap-3">
        <a
          href={href}
          className="text-sm font-semibold text-white hover:text-[#0066FF] flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
        >
          {cta || "Teste Online"}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#0066FF] flex items-center justify-center bg-black/50 w-10 h-10 rounded-full backdrop-blur-sm border border-white/10 transition-colors"
            aria-label="View Source on GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>

    )}
  </div >
);
