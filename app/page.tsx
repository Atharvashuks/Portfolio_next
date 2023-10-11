import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <div className="container mt-24  md:mt-36 mx-auto px-12 py-4">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
    </div>
  );
};

export default Home;
