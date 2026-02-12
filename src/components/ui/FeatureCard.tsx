import { ReactNode } from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function FeatureCard({ icon: Icon, title, description, className = "", titleClassName = "font-semibold text-background mb-2", descriptionClassName = "text-sm text-background/60" }: FeatureCardProps) {
  return (
    <div className={className}>
      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 mx-auto">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
}
