import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ShieldCheck, Wallet, Users } from "lucide-react";
import { DownloadButtons } from "@/components/DownloadButtons";
import getStartedImage from "@/assets/images/get-started.png";
import rideFeedAndroidImage from "@/assets/images/ride-feed-requested-android.png";

const highlights = [
  { icon: Wallet, title: "Affordable Rides", description: "Split the cost of every trip with fellow students" },
  { icon: ShieldCheck, title: "Verified Students", description: "Every rider and driver is a verified student" },
  { icon: Users, title: "Ride or Drive", description: "Switch between riding and driving anytime" },
];

const Download = () => {
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
                Get <span className="text-gradient-gold">Uni Go</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                Download the app to start riding or driving as a college student. Available now
                for iOS and Android.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <DownloadButtons />
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8">
                <div>
                  <div className="text-2xl font-bold text-primary">Upto $30/hr</div>
                  <div className="text-sm text-muted-foreground">As a Driver</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">iOS & Android</div>
                  <div className="text-sm text-muted-foreground">Available now</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative flex justify-end"
            >
              <div className="relative mr-4 md:mr-8">
                <img
                  src={getStartedImage}
                  alt="Get Started Screen"
                  className="w-56 md:w-64 -translate-y-5 rounded-3xl"
                />

                <div className="absolute -left-24 md:-left-44 top-16">
                  <img
                    src={rideFeedAndroidImage}
                    alt="Ride Feed Screen on Android"
                    className="w-48 md:w-56"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-8 md:py-10 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Students Choose Uni Go
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for affordable, safe rides with fellow students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch"
          >
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="bg-background rounded-2xl p-6 border border-border text-center hover:border-primary/30 transition-all flex flex-col items-center h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </div>
            ))}
          </motion.div>
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
              Ready to Get Going?
            </h2>
            <p className="text-lg text-background/70 mb-8">
              Download the app to get started!
            </p>
            <div className="flex justify-center">
              <DownloadButtons />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Download;
