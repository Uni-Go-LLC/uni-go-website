import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GetStartedButtonProps {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export const GetStartedButton = ({ size = "lg", className = "" }: GetStartedButtonProps) => {
  return (
    <Button asChild size={size} className={`shadow-gold group ${className}`}>
      <Link to="/beta">
        Get Started
      </Link>
    </Button>
  );
};
