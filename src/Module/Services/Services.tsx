import "./Services.css";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import PaletteIcon from "@mui/icons-material/Palette";
import InsertChartIcon from "@mui/icons-material/InsertChart";
const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        My <span>Services</span>
      </h2>

      <div className="services-container">
        <div className="services-box">
          <i>
            <CodeOffIcon style={{ fontSize: "5rem" }} />
          </i>
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            animi quisquam id ipsum repellat blanditiis fuga voluptates
            similique at! Odio?
          </p>
          <a href="" className="btn">
            Read More
          </a>
        </div>

        <div className="services-box">
          <i>
            <PaletteIcon style={{ fontSize: "5rem" }} />
          </i>
          <h3>Graphic Design</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            unde animi esse ex quas excepturi odio pariatur facilis beatae
            libero.
          </p>
          <a href="" className="btn">
            Read More
          </a>
        </div>
        <div className="services-box">
          <i>
            <InsertChartIcon style={{ fontSize: "5rem" }} />
          </i>
          <h3>Digital Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ad doloribus id quos repellendus quas ipsam hic vitae sequi aperiam.
          </p>
          <a href="" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
