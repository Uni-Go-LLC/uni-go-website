import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Calendar, Gift, Users, CheckCircle, Clock } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { DownloadAppButton } from "@/components/DownloadAppButton";
import getStartedImage from "@/assets/images/get-started.png";

const timeline = [
  { phase: "Phase 1", title: "Sign Up", description: "Register your interest and join our beta tester community"},
  { phase: "Phase 2", title: "Launch Beta Test", date: "Now", description: "Download the app to test core features as a rider or driver", active: true  },
  { phase: "Phase 3", title: "Feedback & Iteration", date: "Spring 2026", description: "Share feedback and help us refine the experience" },
  { phase: "Phase 4", title: "Launch", date: "Fall 2026", description: "Official launch at Augustana University" },
];

const rewards = [
  {
    icon: Gift, title: "Gift Cards", description: "Gift cards & prizes for participating"
  },
  { icon: Users, title: "Early Access", description: "Be first to try new features" },
  { icon: CheckCircle, title: "Shape the App", description: "Your feedback directly impacts development" },
];

const Beta = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-8 md:py-10 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Help Us Launch Uni <span className="text-gradient-gold">Go</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                Be part of the team that brings Uni Go to Augustana University! Download the app to test
                the app as a rider, driver, or both. Earn rewards while helping us build the
                perfect ridesharing experience for students.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <DownloadAppButton />
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8">
                <div>
                  <div className="text-2xl font-bold text-primary">Upto $30/hr</div>
                  <div className="text-sm text-muted-foreground">As a Driver</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">2026</div>
                  <div className="text-sm text-muted-foreground">Launch year</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src={getStartedImage}
                alt="Get Started Screen"
                className="w-56 md:w-64 -translate-y-5 rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-8 md:py-10 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beta Tester Rewards
            </h2>
            <p className="text-lg text-muted-foreground">
              Get rewarded for helping us build a better app.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
            {rewards.map((reward, i) => (
              <motion.div
                key={reward.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-border text-center hover:border-primary/30 transition-all flex flex-col items-center h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <reward.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{reward.title}</h3>
                <p className="text-muted-foreground text-sm">{reward.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beta Timeline
            </h2>
            <p className="text-lg text-muted-foreground">
              Here's what to expect on our journey to launch.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.active ? 'bg-primary shadow-gold' : 'bg-secondary'
                    }`}>
                    {item.active ? (
                      <Clock className={`w-6 h-6 ${item.active ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    ) : (
                      <Calendar className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className={`flex-1 pb-8 ${item.active ? '' : ''}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-black bg-primary/10 px-2 py-0.5 rounded">
                      {item.phase}
                    </span>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-10 bg-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
              Ready to Join?
            </h2>
            <p className="text-lg text-background/70 mb-8">
              Download the app from the App Store to get started!
            </p>
            <DownloadAppButton />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Beta;
