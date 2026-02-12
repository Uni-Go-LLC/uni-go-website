import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BetaFormButtonProps {
  href?: string;
  className?: string;
}

export const BetaFormButton = ({
  href = "https://forms.gle/uLgw6DH4pcYdvszg7",
  className = "",
}: BetaFormButtonProps) => {
  return (
    <Button asChild size="lg" className={`shadow-gold ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Fill out the Beta Form
        <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </Button>
  );
};
