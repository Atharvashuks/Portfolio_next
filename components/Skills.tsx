import { SkillsSet } from "@/constants";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="text-primary-light" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 lg:px-4 xl:gap-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-primary-light ">Skills</h2>
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
        </div>
        <Image
          src="/skills-removebg.png"
          alt="About Me"
          height={414}
          width={508}
          quality={100}
        />
      </div>
    </section>
  );
};

export default Skills;
