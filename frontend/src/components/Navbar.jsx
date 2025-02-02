import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeBox = useRef(null);
  const lastActiveLink = useRef(null);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Work", id: "projects" },
    { label: "Blogs", id: "blogs" },
  ];

  const scrollToSection = (id, event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    updateActiveBox(event.target);
    setMenuOpen(false);
  };

  const updateActiveBox = (element) => {
    if (!activeBox.current || !element) return;
  
    lastActiveLink.current?.classList.remove("active");
  
    element.classList.add("active");
    lastActiveLink.current = element;
  
    const elementRect = element.getBoundingClientRect();
    const parentRect = element.offsetParent.getBoundingClientRect();
  
    activeBox.current.style.top = `${elementRect.top - parentRect.top + elementRect.height / 2}px`;
    activeBox.current.style.left = `${elementRect.left - parentRect.left + elementRect.width / 2.5}px`;
    activeBox.current.style.width = `${elementRect.width}px`;
    activeBox.current.style.height = `${elementRect.height}px`;
  };
  

  useEffect(() => {
    if (lastActiveLink.current) {
      updateActiveBox(lastActiveLink.current);
    }
    window.addEventListener("resize", () => {
      if (lastActiveLink.current) {
        updateActiveBox(lastActiveLink.current);
      }
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <button
                className="nav-button"
                onClick={(e) => scrollToSection(id, e)}
                ref={id === "home" ? lastActiveLink : null}
              >
                {label}
              </button>
            </li>
          ))}
          <div className="active-box" ref={activeBox}></div>
        </ul>

        <button className="contact-button" onClick={(e) => scrollToSection("contact", e)}>
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;