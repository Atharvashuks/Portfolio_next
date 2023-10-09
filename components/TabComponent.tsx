import React from "react";
import { motion } from "framer-motion";

type Props = {
  active: any;
  selectTab: any;
  children: any;
};

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }: Props) => {
  const buttonClasses = active ? "text-primary-dark" : "text-secondary-dark";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-primary-light ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-0.5 bg-primary-light mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
