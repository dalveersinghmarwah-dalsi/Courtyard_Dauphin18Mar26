/**
 * Botanical Divider Component
 * Hand-drawn style plant/leaf decorative elements
 */

export function BotanicalLeaf() {
  return (
    <svg
      width="80"
      height="120"
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-40"
    >
      <path
        d="M40 10C40 10, 30 30, 25 50C20 70, 30 90, 40 110"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="35" cy="35" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="28" cy="60" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="35" cy="85" r="3" fill="currentColor" opacity="0.5" />
      <path
        d="M40 30L50 25M40 50L55 45M40 70L50 75"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function BotanicalBranch() {
  return (
    <svg
      width="120"
      height="60"
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-40"
    >
      <path
        d="M10 30C30 25, 50 20, 70 25C85 28, 100 32, 110 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M40 25L45 15M60 23L68 10M80 28L88 18"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="35" cy="28" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="65" cy="24" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="90" cy="32" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

interface BotanicalDividerProps {
  variant?: "leaf" | "branch" | "both";
  className?: string;
}

export default function BotanicalDivider({
  variant = "both",
  className = "",
}: BotanicalDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-8 my-12 ${className}`}>
      {(variant === "leaf" || variant === "both") && (
        <div className="text-primary">
          <BotanicalLeaf />
        </div>
      )}
      {(variant === "branch" || variant === "both") && (
        <div className="text-primary">
          <BotanicalBranch />
        </div>
      )}
      {(variant === "leaf" || variant === "both") && (
        <div className="text-primary">
          <BotanicalLeaf />
        </div>
      )}
    </div>
  );
}
