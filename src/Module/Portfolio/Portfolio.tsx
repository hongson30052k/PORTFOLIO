import "./Portfolio.css";
import img1 from "../../Img/portfolio1.jpg";
import img2 from "../../Img/portfolio2.jpg";
import img3 from "../../Img/portfolio3.jpg";
import img4 from "../../Img/portfolio4.jpg";
import img5 from "../../Img/portfolio5.jpg";
import img6 from "../../Img/portfolio6.jpg";
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
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              harum!
            </p>
            <a href="">
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
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              harum!
            </p>
            <a href="">
              <LinkIcon />
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={img3} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              harum!
            </p>
            <a href="">
              <LinkIcon />
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={img4} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              harum!
            </p>
            <a href="">
              <LinkIcon />
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={img5} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              harum!
            </p>
            <a href="">
              <LinkIcon />
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={img6} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              harum!
            </p>
            <a href="">
              <LinkIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
