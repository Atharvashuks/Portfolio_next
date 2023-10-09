"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <div className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-primary-light mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-secondary-light">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Atharva",
                1100,
                "Web Developer",
                1000,
                "App Developer",
                1000,
                "Tech Whiz",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="text-primary-extralight text-base sm:text-lg mb-6 lg:text-xl">
            <p className="p-2 mb-1">
              I'm a web and app developer. I create user-friendly websites and
              mobile apps with a touch of design magic. Let's connect and bring
              your digital ideas to life. Explore my work and reach out to
              collaborate!
            </p>
          </div>
          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full 
              mr-4 bg-gradient-to-br from-primary-light to-secondary-light hover:bg-primary-light text-primary-dark"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-light to-primary-extralight hover:bg-primary-light hover:text-light-3 hover:border-opacity-0  text-primary-dark mt-3"
            >
              <span className="block bg-secondary-light hover:bg-primary-light rounded-full px-5 py-2">
                Download Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-primary-dark w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/headermain.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
