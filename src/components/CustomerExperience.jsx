import React, { useState, useEffect } from "react";

// Import example images
import cust1 from "../assets/cust1.jpg";
import cust2 from "../assets/cust2.jpg";
import cust3 from "../assets/cust3.jpg";

function CustomerExperience() {
  const experiences = [
    {
      id: 1,
      image: cust1,
      title: "Transforming Industrial Efficiency",
      text: "Our clients have seen remarkable improvements in production efficiency thanks to our automated solutions. From assembly to logistics, every process is optimized to perfection. Through careful planning and innovative technology, we help businesses minimize downtime, reduce errors, and maximize output. The feedback from our partners shows a clear boost in overall operational performance and employee satisfaction.",
      quote: "Their automated solutions revolutionized our production line!",
      client: "Michael Johnson",
      organization: "TechCorp Industries",
      rating: 5
    },
    {
      id: 2,
      image: cust2,
      title: "Reliable Robotics Integration",
      text: "Businesses have benefited from our robotics integration, reducing human error and increasing productivity. Each implementation is tailored to specific client needs. By leveraging intelligent robotics, we enable faster production cycles while maintaining stringent quality standards. Our team works closely with clients to ensure seamless adoption and staff training, resulting in sustainable, long-term improvements.",
      quote: "The robotics integration completely transformed our workflow.",
      client: "Sarah Williams",
      organization: "AutoFab Ltd.",
      rating: 4
    },
    {
      id: 3,
      image: cust3,
      title: "Sustainable Manufacturing Solutions",
      text: "Our focus on sustainable practices helps clients reduce environmental impact while maintaining high-quality production standards. We provide solutions that minimize energy consumption, reduce waste, and incorporate eco-friendly materials without compromising efficiency. Clients appreciate how our approach balances profitability with responsibility, helping them achieve both business goals and environmental commitments.",
      quote: "Sustainability without compromising efficiency—truly impressive.",
      client: "David Lee",
      organization: "GreenWorks",
      rating: 5
    },
  ];

  const [current, setCurrent] = useState(0);

  // Cycle through experiences every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % experiences.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [experiences.length]);

  const experience = experiences[current];

  return (
    <section style={{ background: "#020617", color: "white", height: "100vh", display: "flex", alignItems: "center" }}>
      <div className="experience-container fade">
        <div className="experience-image">
          <img src={experience.image} alt={experience.title} />
        </div>
        <div className="experience-content">
          <h2>{experience.title}</h2>
          <p>{experience.text}</p>
          <p className="quote">"{experience.quote}"</p>
          <p className="client"><strong>{experience.client}</strong>, {experience.organization} <span className="rating">{"★".repeat(experience.rating)}</span></p>
        </div>
      </div>

      <style>{`
        .experience-container {
          display: flex;
          align-items: center;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          transition: opacity 1s ease-in-out;
        }

        .experience-image {
          flex: 1;
          min-width: 300px;
        }

        .experience-image img {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 12px;
        }

        .experience-content {
          flex: 1.5;
        }

        .experience-content h2 {
          font-size: 2.5rem;
          color: #facc15;
          margin-bottom: 20px;
        }

        .experience-content p {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #e5e7eb;
        }

        .quote {
          font-style: italic;
          margin-top: 12px;
          color: #cbd5f5;
        }

        .client {
          margin-top: 8px;
          font-size: 1rem;
          color: #facc15;
        }

        .rating {
          color: #facc15;
          margin-left: 6px;
        }

        @media (max-width: 900px) {
          .experience-container {
            flex-direction: column;
            text-align: center;
          }

          .experience-content h2 {
            font-size: 2rem;
          }

          .experience-content p {
            font-size: 1rem;
          }
        }

        .fade {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}

export default CustomerExperience;
