import "./Footer.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2024 by Codehal | All Rights Reserved</p>
      </div>
      <div className="footer-iconTop">
        <a href="#home">
          <ArrowUpwardIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
