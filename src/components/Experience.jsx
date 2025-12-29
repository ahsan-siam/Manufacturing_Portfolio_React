import React, { useState } from "react";

// Import images
import exp1 from "../assets/exp1.JPG";
import exp2 from "../assets/exp2.jpg";
import exp3 from "../assets/exp3.jpg";
import exp4 from "../assets/exp4.jpg";
import exp5 from "../assets/exp5.jpg";
import exp6 from "../assets/exp6.jpg";

function Experience() {
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);

  const experiences = [
    { id: 1, image: exp1, title: "Automated Assembly", short: "State-of-the-art assembly lines.", full: "Our automated assembly lines deliver precision and speed for all industrial manufacturing needs." },
    { id: 2, image: exp2, title: "Robotics Integration", short: "Advanced robotics systems.", full: "We integrate robotics to optimize production efficiency and reduce human error." },
    { id: 3, image: exp3, title: "Quality Control", short: "Strict QC processes.", full: "Every product undergoes rigorous quality control to ensure reliability and safety." },
    { id: 4, image: exp4, title: "Custom Fabrication", short: "Tailored solutions for clients.", full: "We offer custom fabrication services to meet unique industrial requirements." },
    { id: 5, image: exp5, title: "Maintenance & Support", short: "Reliable after-sales service.", full: "Our maintenance team ensures all equipment runs smoothly and efficiently." },
    { id: 6, image: exp6, title: "Industrial Design", short: "Efficient product designs.", full: "We design industrial products with efficiency, safety, and precision in mind." }
  ];

  const visibleCount = 3; // show 3 cards fully + partial
  const cardWidth = 300; // px width of each card
  const gap = 24; // gap between cards in px
  const totalWidth = experiences.length * (cardWidth + gap); // total track width

  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + 1, experiences.length - visibleCount));
  };

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section style={{ padding: "60px 20px", background: "#020617", position: "relative", overflow: "hidden" }}>
      <h2 style={{ color: "#facc15", textAlign: "center", marginBottom: "40px" }}>
        Our Experiences
      </h2>

      <div className="carousel-container">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${index * (cardWidth + gap)}px)`, width: `${totalWidth}px` }}
        >
          {experiences.map(exp => (
            <div key={exp.id} className="experience-card" onClick={() => setSelected(exp)}>
              <img src={exp.image} alt={exp.title} />
              <h3>{exp.title}</h3>
              <p>{exp.short}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow Buttons */}
      <button className="arrow left" onClick={prevSlide}>❮</button>
      <button className="arrow right" onClick={nextSlide}>❯</button>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selected.image} alt={selected.title} />
            <h2>{selected.title}</h2>
            <p>{selected.full}</p>
            <button className="close-btn" onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}

      <style>{`
        .carousel-container {
          overflow: hidden;
          max-width: calc(${cardWidth * visibleCount + gap * (visibleCount - 1)}px);
          margin: 0 auto;
        }

        .carousel-track {
          display: flex;
          gap: ${gap}px;
          transition: transform 0.5s ease-in-out;
        }

        .experience-card {
          min-width: ${cardWidth}px;
          background: #1e293b;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .experience-card:hover {
          transform: translateY(-5px);
        }

        .experience-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .experience-card h3 {
          color: #facc15;
          margin: 12px 16px 4px;
        }

        .experience-card p {
          color: #cbd5f5;
          margin: 0 16px 12px;
          font-size: 0.9rem;
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: #facc15;
          color: #020617;
          border: none;
          padding: 12px 16px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10;
        }

        .arrow:hover {
          background-color: #eab308;
        }

        .arrow.left {
          left: 10px;
        }

        .arrow.right {
          right: 10px;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: #0f172a;
          padding: 24px;
          border-radius: 12px;
          max-width: 600px;
          width: 90%;
          text-align: center;
          color: white;
          position: relative;
        }

        .modal-content img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .modal-content h2 {
          color: #facc15;
          margin-bottom: 12px;
        }

        .modal-content p {
          color: #cbd5f5;
          font-size: 1rem;
        }

        .close-btn {
          margin-top: 16px;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          background-color: #facc15;
          color: #020617;
          cursor: pointer;
          font-weight: 700;
        }

        .close-btn:hover {
          background-color: #eab308;
        }

        @media(max-width: 900px){
          .carousel-container {
            max-width: 90%;
          }
          .experience-card {
            min-width: 80%;
          }
        }
      `}</style>
    </section>
  );
}

export default Experience;
