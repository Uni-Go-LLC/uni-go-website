import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BetaSignupButtonProps {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export const BetaSignupButton = ({ size = "lg", className = "" }: BetaSignupButtonProps) => {
  return (
    <Button asChild size={size} className={`shadow-gold group ${className}`}>
      <Link to="/beta">
        Sign Up for Beta
      </Link>
    </Button>
  );
};
