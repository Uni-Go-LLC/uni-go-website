import { motion } from "framer-motion";
import { Gift, Users, CheckCircle } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { GetStartedButton } from "../GetStartedButton";

export const BetaCTASection = () => {
  return (
    <section className="py-8 md:py-10 bg-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--primary))_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_hsl(var(--primary))_0%,_transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6"
          >
            Help Us Launch Uni Go at{" "}
            <span className="text-primary">Augustana University</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-background/70 mb-8 max-w-2xl mx-auto"
          >
            Download the app as a rider, driver, or both. Share feedback to help us build features that work for you.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-10"
          >
            {[
              { icon: Gift, title: "Gift Cards", description: "Gift cards & prizes for participating" },
              { icon: Users, title: "Early Access", description: "Be first to try new features" },
              { icon: CheckCircle, title: "Shape the App", description: "Your feedback directly impacts development" },
            ].map((benefit) => (
              <FeatureCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-12"
            >
              <GetStartedButton />
            </motion.div>
        </div>
      </div>
    </section>
  );
};
