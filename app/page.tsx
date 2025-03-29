"use client";
import { motion } from "framer-motion";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import FAQSection from "@/components/shared/Sections/FAQSection";
import HeroSection from "@/components/shared/Sections/HeroSection";
import HowItWork from "@/components/shared/Sections/HowItWork";
import KeyFeatures from "@/components/shared/Sections/KeyFeatures";
import Testimonials from "@/components/shared/Sections/Testimonials";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <div>
      <motion.div
        className="sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}>
        <NavBar />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <HeroSection />
        </motion.div>

        <motion.div variants={itemVariants}>
          <KeyFeatures />
        </motion.div>

        <motion.div variants={itemVariants}>
          <HowItWork />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Testimonials />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FAQSection />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </div>
  );
}
