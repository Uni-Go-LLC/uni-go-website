import { motion } from "framer-motion";

// Reusable grid wrapper for initial load animation (matches Beta page)
export function CardGridMotion({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
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
