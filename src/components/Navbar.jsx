import React, { useState, useEffect } from "react";

function Navbar({ refs }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detect scroll and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      for (const key in refs) {
        if (refs[key].current) {
          const top = refs[key].current.offsetTop - 100; // offset for navbar
          const bottom = top + refs[key].current.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(key);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);

  // Scroll to component
  const scrollToSection = (key) => {
    if (refs[key].current) {
      window.scrollTo({
        top: refs[key].current.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 40px;
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: all 0.4s ease;
          background-color: ${scrolled ? "rgba(15, 23, 42, 0.95)" : "#0f172a"};
          box-shadow: ${scrolled ? "0 4px 15px rgba(0,0,0,0.3)" : "none"};
        }

        .logo {
          font-size: 1.7rem;
          font-weight: bold;
          color: #facc15;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
          color: #38bdf8;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 32px;
        }

        .nav-links li {
          cursor: pointer;
          font-size: 1rem;
          position: relative;
          transition: color 0.3s ease;
          color: #facc15;
        }

        .nav-links li::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          background: linear-gradient(to right, #facc15, #38bdf8);
          left: 0;
          bottom: -4px;
          transition: 0.3s ease;
        }

        .nav-links li:hover::after,
        .nav-links li.active::after {
          width: 100%;
        }

        .nav-links li:hover,
        .nav-links li.active {
          color: #38bdf8;
        }

        @media (max-width: 768px) {
          .nav-links {
            gap: 20px;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="logo" onClick={() => scrollToSection("home")}>
          <span className="trademark">©</span> Manufacturing Portfolio  </div>
        <ul className="nav-links">
          {Object.keys(refs).map((key) => (
            <li
              key={key}
              className={activeSection === key ? "active" : ""}
              onClick={() => scrollToSection(key)}
            >
              {key
                .replace(/([A-Z])/g, " $1") // add space for camelCase
                .replace(/^./, (str) => str.toUpperCase())} {/* capitalize */}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
