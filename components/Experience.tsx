"use client";

import { experiences } from "@/constants";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="lg:pt-10 md:pt-24">
      <h2 className="text-center text-4xl font-bold text-primary-light mt-12 mb-8 md:mb-12">
        Experience & Positions
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: { y: 0, opacity: 1 },
            }}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ExperienceCard
              key={exp.id}
              duration={exp.time}
              role={exp.role}
              title={exp.title}
              description={exp.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
