import "./Portfolio.css";
import img1 from "../../Img/portfolio1.jpg";
import img2 from "../../Img/portfolio2.jpg";
import LinkIcon from "@mui/icons-material/Link";
const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>
      <div className="portfolio-containers">
        <div className="portfolio-box">
          <img src={img1} alt="" />
          <div className="portfolio-layer">
            <h4>FURNITURE ECOMMERCE</h4>
            <p>
              <p>
                Build react source code base with typescript, axios, redux and
                redux toolkit.
              </p>
              <p>
                Build features like product display, add to cart, cart
                management, and checkout. Build login and registration features,
                and implement admin and user role-based access control.
              </p>
              <p>
                Design and implement APIs to interact with the database and
                provide data to the front-end.
              </p>
              <p>
                Complete the website, and test the stability and functionality
                of the website on different browsers and devices
              </p>
            </p>
            <a href="https://duannoithat.vercel.app/">
              <LinkIcon
                style={{
                  fontSize: "3rem",
                  color: "var(--second-bg-color)",
                }}
              />
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={img2} alt="" />
          <div className="portfolio-layer">
            <h4>PORPOLIO</h4>
            <p>
              <p>
                Building the core React codebase: Developed the frontend
                architecture using React, ensuring it was clean, maintainable,
                and efficient with TypeScript.
              </p>
              <p>
                Cross-browser and cross-device testing: Ensured the website
                functioned correctly and responsively across different browsers
                and devices, providing a consistent and high-quality user
                experience for all users.
              </p>
            </p>
            <a href="/">
              <LinkIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
