import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadAppButtonProps {
  href?: string;
  className?: string;
}

export const DownloadAppButton = ({
  href = "https://apps.apple.com/us/app/uni-go/id6758922674",
  className = "",
}: DownloadAppButtonProps) => {
  return (
    <Button asChild size="lg" className={`shadow-gold ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download the App
        <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </Button>
  );
};
