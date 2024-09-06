import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import About from "./components/AboutUs/About";
const App = () => {
  return (
    <div>
      <Cursor />
      <div className="avoid_height" id="Home">
        <Navbar />
        <Hero />
      </div>
      <section>
        <Parallax type="services" />
      </section>

      <div className="avoid_height" id="About">
        <About />
      </div>
      <div className="avoid_height" id="Services">
        <Services />
      </div>
      <section>
        <Parallax type="portfolio" />
      </section>
      {/* <section> */}
      <div id="Portfolio">
        <Portfolio />
      </div>
      {/* </section> */}
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
