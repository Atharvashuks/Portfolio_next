import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

const Home = () => {
  return (
    <div className="container mt-24  md:mt-36 mx-auto px-12 py-4">
      <Header />
      <About />
      <Skills />
      <Projects />
      Experience and Education Skills Projects Contact
    </div>
  );
};

export default Home;
