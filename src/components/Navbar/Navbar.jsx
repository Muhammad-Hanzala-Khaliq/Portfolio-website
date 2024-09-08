import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = scrollTop / (docHeight - winHeight);

      setScrollProgress(totalScroll * 111);
    };

    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);
  return (
    <>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="navbar">
        <div className="container">
          <Sidebar />
          <div className="wrapper">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.span>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/muhammad-hanzala-khaliq-34159a269/"
                target="blank"
              >
                <FaLinkedin
                  style={{ color: "#0077B5", width: "25px", height: "25px" }}
                  className="icon"
                />
              </a>
              <a
                href="https://www.instagram.com/aint_hanzallah/"
                target="blank"
              >
                <BsInstagram
                  style={{ color: "#C13584", width: "25px", height: "25px" }}
                />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01164acd98cb58d10a"
                target="blank"
              >
                <FaSquareUpwork
                  style={{ color: "#6fda44", width: "25px", height: "25px" }}
                />
              </a>
              <a
                href="https://www.fiverr.com/hanzalawebworks/buying?source=avatar_menu_profile"
                target="blank"
              >
                <TbBrandFiverr
                  style={{ color: "#1DBF73", width: "25px", height: "25px" }}
                />
              </a>
              <a
                href="https://github.com/Muhammad-Hanzala-Khaliq"
                target="blank"
              >
                <FaGithubSquare
                  style={{ color: "#c6c6c6", width: "25px", height: "25px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
