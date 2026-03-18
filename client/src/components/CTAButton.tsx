import { Link } from "wouter";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CTAButton({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary";

  const variants = {
    primary:
      "bg-secondary text-secondary-foreground hover:opacity-90 focus:ring-secondary",
    secondary:
      "bg-primary text-primary-foreground hover:opacity-90 focus:ring-primary",
    outline:
      "border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground focus:ring-secondary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
