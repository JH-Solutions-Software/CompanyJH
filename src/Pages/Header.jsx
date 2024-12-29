import React, { useState, useEffect } from "react";
import "../assets/styles/Header.css"; // Import the CSS file
import { translate } from "../utils/translations"; // Import the translation function
import mexicoFlag from "../assets/images/flags/Mexico-flag.png"; // Import Mexico flag image
import usaFlag from "../assets/images/flags/FlagUnited_States.svg.webp"; // Import USA flag image

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["header.services", "header.process", "header.team", "header.projects", "header.contact"];

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        {/* Logo */}
        <div className="logo">JH Software Solutions</div>

        {/* Desktop Menu */}
        <div className="menu-desktop">
          {menuItems.map((item) => (
            <a
              href={`#${item.split('.')[1]}`}
              key={item}
              className="menu-item"
            >
              {translate(language, item)}
            </a>
          ))}
        </div>

        {/* Language Toggle Button */}
        <button onClick={toggleLanguage} className="theme-button">
          <img
            src={language === "en" ? mexicoFlag : usaFlag}
            alt={language === "en" ? "Mexico Flag" : "USA Flag"}
            className="flag-icon"
          />
        </button>
      </nav>
    </header>
  );
}