import "./HomeContext.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const HomeContext = () => {
  return (
    <div className="home-content">
      <h3>Hello, It's Me</h3>
      <h1>Son Nguyen</h1>
      <h3>
        And I'm a <span>Frontend Developer</span>
      </h3>
      <p>
        <span style={{ fontWeight: "bold" }}>Short-term goal</span>: Focus on
        improving skills with Frontend technologies such as HTML, CSS,
        JavaScript, and React. My goal is to become familiar with the software
        development process in a real-world environment, learn from experienced
        colleagues, and deliver high-quality projects.
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Long-term goal</span>: Develop into
        a Frontend Developer capable of building optimized, user-friendly web
        applications that meet users' needs. I also aim to have opportunities to
        learn new technologies, contribute to innovative products, and work
        towards becoming an expert in this field.
      </p>
      <div className="social-media">
        <a href="https://www.facebook.com/nhs2k">
          <FacebookIcon className="facebook-icon" />
        </a>
        <a>
          <TwitterIcon className="twitter-icon" />
        </a>
        <a href="https://www.instagram.com/hongson2kk/">
          <InstagramIcon className="instagram-icon" />
        </a>
        <a href="https://www.linkedin.com/in/hong-son-nguyen-981a44339/">
          <LinkedInIcon className="linkedin-icon" />
        </a>
      </div>
      <a href="#" className="btn">
        Download CV
      </a>
    </div>
  );
};

export default HomeContext;
