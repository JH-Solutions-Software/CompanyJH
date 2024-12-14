import React, { useState, useEffect } from "react";
import "../assets/styles/Header.css"; // Import the CSS file

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Servicios", "Proceso", "Equipo", "Proyectos", "Contacto"];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        {/* Logo */}
        <div className="logo">JH Software Solutions</div>

        {/* Desktop Menu */}
        <div className="menu-desktop">
          {menuItems.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="menu-item"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}