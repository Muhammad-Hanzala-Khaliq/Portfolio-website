import React, { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const item = [
  {
    id: 1,
    title: "React Js Website",
    img: "./Project 3.png",
    desc: "I have created this beautiful, responsive website using React.js. Please check out the website by clicking the button below.",
    link: "https://webflow-website.netlify.app/",
  },
  {
    id: 2,
    title: "Movieo Website",
    img: "./Project 2.png",
    desc: " I crafted a visually, responsive movie website using React and Redux to showcase for better user experience.",
    link: "https://movio-app.vercel.app/",
  },
  {
    id: 3,
    title: "Shoes Website ",
    img: "./Project 1.png",
    desc: "I have created this beautiful shoes, responsive website using React.js. Please check out by clicking the button below.",
    link: "https://hanzala-nike-website.netlify.app/",
  },
  {
    id: 4,
    title: "Car Rental Website",
    img: "Project 4.png",
    desc: "I have created this beautiful shoes, responsive website using React.js. Please check out by clicking the button below.",
    link: "https://hanzala-car-website.netlify.app/",
  },
  {
    id: 5,
    title: "Matrimonial Site",
    img: "Project 5.png",
    desc: "I have created this beautiful , responsive website using React.js and firebase.",
    link: "https://hanzala-matrimonials.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="blank">
              Check Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {item.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
