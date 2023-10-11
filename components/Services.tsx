"use client";

import { experiences } from "@/constants";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const Services = () => {
  return (
    <section id="services" className="lg:pt-10 md:pt-24">
      <h2 className="text-center text-4xl font-bold text-primary-light mt-12 mb-8 md:mb-12">
        My Services
      </h2>
      <div className="max-w-sm overflow-hidden bg-primary-light rounded-lg">
        <div className="px-6 pt-4">
          <span className=" bg-light-2 rounded-lg px-3 py-1 text-sm font-semibold flex text-center text-primary-dark mr-2 mb-2 justify-items-center">
            test
          </span>
        </div>
        <div className="px-6 pt-1 pb-4">
          <div className="border-y border-dotted my-2 text-light-3" />
          <p className="text-base text-light-1 text-justify">test</p>
        </div>
      </div>
      {/* {experiences.map((exp, index) => (
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
        ))} */}
      {/* </div> */}
    </section>
  );
};

export default Services;
