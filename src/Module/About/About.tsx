import "./About.css";
import AboutContext from "./AboutContext/AboutContext";
import AboutImg from "./AboutImg/AboutImg";

const About = () => {
  return (
    <section className="about" id="about">
      <AboutImg />
      <AboutContext />
    </section>
  );
};

export default About;
