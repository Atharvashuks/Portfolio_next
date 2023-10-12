"use client";

import React, { useEffect, useRef, useState } from "react";
import Drawerform from "./Drawerform";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const drawerRef: any = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        open
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(!open)}>open</button>
      {open && (
        <div ref={drawerRef}>
          <Drawerform />
        </div>
      )}
    </>
  );
};

export default Contact;
