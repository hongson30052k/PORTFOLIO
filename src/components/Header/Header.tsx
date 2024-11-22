import { useEffect } from "react";
import "./Header.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  let menuIcon: any = document.querySelector("#menu-icon");
  let closeIcon = document.querySelector("#close-icon");
  let navbar = document.querySelector(".navbar");
  menuIcon?.addEventListener("click", () => {
    navbar?.classList.add("active");
    menuIcon.style.display = "none";
    closeIcon?.classList.add("active");
  });

  closeIcon?.addEventListener("click", () => {
    navbar?.classList.remove("active");
    closeIcon?.classList.remove("active");
    menuIcon.style.display = "block";
  });

  navbar?.addEventListener("click", () => {
    navbar?.classList.remove("active");
    menuIcon.style.display = "block";
    closeIcon?.classList.remove("active");
  });
  useEffect(() => {
    const sections: NodeListOf<HTMLElement> =
      document.querySelectorAll("section");
    const navLinks: NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(".navbar a");
    const handleScroll = () => {
      const top = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (id) {
          if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href")?.includes(id)) {
                link.classList.add("active");
              }
            });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  let header = document.querySelector("header");
  header?.classList.toggle("sticky", window.scrollY > 0);
  return (
    <div className="header">
      <a className="logo">Portfolio</a>
      <MenuIcon id="menu-icon" />
      <CloseIcon id="close-icon" />
      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
