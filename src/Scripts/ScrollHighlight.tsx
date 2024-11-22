import React, { useEffect } from "react";

const ScrollHighlight = () => {
  useEffect(() => {
    const sections: NodeListOf<HTMLElement> =
      document.querySelectorAll("section");
    const navLinks: NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll("header nav a");

    const handleScroll = () => {
      sections.forEach((sec) => {
        const top: number = window.scrollY;
        const offset: number = sec.offsetTop - 150;
        const height: number = sec.offsetHeight;
        const id: string | null = sec.getAttribute("id");

        if (id) {
          if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              const activeLink = document.querySelector(
                `header nav a[href*=${id}]`
              );
              activeLink?.classList.add("active");
            });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null; // This component does not render anything
};

export default ScrollHighlight;
