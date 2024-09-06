import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div className="course">
      <motion.div
        className="box"
        variants={variants}
        transition={{ duration: 2 }}
        animate={open ? "visible" : "hidden"}
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>Click</button>
    </div>
  );
};

export default Test;
