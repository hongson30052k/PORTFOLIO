import "./Skills.css";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import PaletteIcon from "@mui/icons-material/Palette";
import InsertChartIcon from "@mui/icons-material/InsertChart";
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">
        <div className="skills-box">
          <i>
            <CodeOffIcon style={{ fontSize: "5rem" }} />
          </i>
          <h3>Programming Languages</h3>
          <p>HLML, CSS, JavaScript, React, Redux, Node.js, TypeScript</p>
          <a href="" className="btn">
            Read More
          </a>
        </div>

        <div className="skills-box">
          <i>
            <PaletteIcon style={{ fontSize: "5rem" }} />
          </i>
          <h3>Tools & Libraries</h3>
          <p>
            Git & GitHub, npm/yarn, Webpack/Babel, Tailwind CSS, Styled
            Components
          </p>
          <a href="" className="btn">
            Read More
          </a>
        </div>
        <div className="skills-box">
          <i>
            <InsertChartIcon style={{ fontSize: "5rem" }} />
          </i>
          <h3>Others</h3>
          <p>Responsive Web Design, RESTful API & AJAX</p>
          <a href="" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
