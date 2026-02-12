import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Briefcase, Users, Lightbulb, TrendingUp, Heart, Target, Award, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Target,
    title: "Student-Centered Innovation",
    description: "Everything we build is designed around real student needs—easy rides, flexible pricing, and community-driven travel.",
  },
  {
    icon: Rocket,
    title: "Innovative Environment",
    description: "Build features used by students daily and shape the future of campus ridesharing.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work alongside a dynamic team that values creativity, diversity, and teamwork.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Learn, experiment, and advance your career in a startup setting.",
  },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do, from code to customer service.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with honesty, transparency, and ethical practices in all our interactions.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "We foster a supportive environment where diverse perspectives are valued and celebrated.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We encourage creative thinking and empower our team to challenge the status quo.",
  },
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-8 md:py-10 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Join Our <span className="text-gradient-gold">Team</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              We&apos;re building something extraordinary, and we&apos;re looking for talented individuals to help us
              shape the future. Our ridesharing platform is built exclusively for college students, making
              commuting more affordable, safer, easier, and more social.
              <br />
              <br />
              As a fast-growing startup, we&apos;re looking for passionate individuals to help us build the
              next generation of campus mobility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-10 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work <span className="text-gradient-gold">Here?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a team that&apos;s revolutionizing campus transportation and making a real impact
              on student life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <Card className="p-6 h-full transition-shadow border-border bg-card">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We&apos;re driven by a commitment to excellence, integrity, and making a positive difference.
              We believe in empowering our team members to do their best work while fostering an
              inclusive and supportive environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <Card className="p-6 h-full text-center transition-shadow border-border bg-card">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions CTA Section */}
      <section className="py-8 md:py-10 bg-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
              Open <span className="text-gradient-gold">Positions</span>
            </h2>
            <p className="text-lg text-background/70 mb-8">
              Explore our open roles and submit your application. We&apos;re always looking for talented
              individuals who share our passion for innovation and student success.
            </p>
            <Button
              size="lg"
              className="shadow-gold"
              asChild
            >
              <Link to="/jobs">
                View Open Positions
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
