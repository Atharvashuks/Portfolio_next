"use client";

import { SkillsSet } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 lg:px-4 xl:gap-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold lg:mt-0 mt-4 text-primary-light">
            Skills
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <div
              className="grid gap-5 lg:gap-4 lg:grid-cols-4  md:grid-cols-3 sm:text-center 
                  pt-8 pb-16 grid-cols-2 items-center lg:py-16 py-12 w-full lg:divide-x divide-primary-light"
            >
              {SkillsSet.map((skill) => (
                <div className="w-full flex justify-center items-center lg:mt-3 mt-1.5">
                  <div
                    className="px-6 inline-block py-3 w-full lg:w-[160px] md:w-[120px] text-center sm:w-fit rounded-full ml-1
                      mr-4 bg-gradient-to-br from-primary-light to-secondary-light   text-white"
                  >
                    {skill.key}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/skills-removebg.png"
            alt="About Me"
            height={414}
            width={508}
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
