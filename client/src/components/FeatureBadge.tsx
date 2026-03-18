/**
 * Feature Badge Component
 * Numbered badge with bright lime green accent
 */

interface FeatureBadgeProps {
  number: number;
  children: React.ReactNode;
  className?: string;
}

export default function FeatureBadge({
  number,
  children,
  className = "",
}: FeatureBadgeProps) {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      {/* Badge */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      {/* Content */}
      <div>{children}</div>
    </div>
  );
}
