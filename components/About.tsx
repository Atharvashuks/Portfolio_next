"use client";

import Image from "next/image";
import { useTransition, useState } from "react";
import TabComponent from "./TabComponent";

const TAB_DATA: any = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML, CSS, JavaScript</li>
        <li>React JS, NEXT JS, React Native</li>
        <li>Node.js, Express, Java</li>
        <li>GraphQL ,REST Api</li>
        <li>MongoDB</li>
        <li>GCP, Firebase</li>
        <li>Git, Github</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Tech CSE, Manav Rachna University</li>
        <li>12th, AFGJI</li>
      </ul>
    ),
  },
  {
    title: "Soft_Skills",
    id: "Soft_Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Good Communication skills</li>
        <li>Team Player</li>
        <li>Sense of Humour</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-primary-light" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/headerImage.png"
          width={500}
          height={500}
          alt="abt section image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-primary-light mb-4">
            About Me
          </h2>
          <p className="text-primary-extralight lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, graphQL,
            mongoDB, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabComponent
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabComponent>
            <TabComponent
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabComponent>
            <TabComponent
              selectTab={() => handleTabChange("Soft_Skills")}
              active={tab === "Soft_Skills"}
            >
              {" "}
              Soft Skills{" "}
            </TabComponent>
          </div>
          <div className="mt-8 font-semibold">
            {TAB_DATA.find((t: any) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
