import React, { useState } from "react";
import "./Sidebar.scss";
import Links from "./links/Links";
import ToogleButton from "./tooglebutton/ToogleButton";
import { delay, motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "tween", // Use tween for smooth transitions
      duration: 1, // Adjust the duration for smoothness
      ease: "easeInOut", // You can also experiment with different easing functions
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "tween", // Use tween for smooth transitions
      duration: 0.5, // Adjust the duration for smoothness
      ease: "easeInOut", // Match the easing function
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>

      <motion.div>
        <ToogleButton setOpen={setOpen} />
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
