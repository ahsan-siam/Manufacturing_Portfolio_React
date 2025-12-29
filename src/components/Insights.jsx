import React, { useState, useEffect } from "react";
import insight1 from "../assets/insight1.jpg";
import insight2 from "../assets/insight2.jpg";
import insight3 from "../assets/insight3.jpg";

function Insights() {
  const insights = [
    {
      id: 1,
      image: insight1,
      title: "Celebrating 25 Years of Excellence",
      text: `For the past 25 years, we have dedicated ourselves to precision, innovation, and reliability in industrial manufacturing. Each milestone represents a commitment to our clients and partners worldwide. From humble beginnings to becoming an industry leader, our journey has been shaped by dedication, teamwork, and a passion for excellence. Our factory has evolved with technology, integrating state-of-the-art machinery and processes to deliver unmatched quality in every product. We continue to set benchmarks in efficiency, safety, and innovation, ensuring our clients always receive the best.`
    },
    {
      id: 2,
      image: insight2,
      title: "Innovation in Action",
      text: `Innovation is at the heart of everything we do. Our factory continuously integrates cutting-edge technology to optimize production and improve quality. From robotics and automated systems to precision engineering, every innovation is designed to increase efficiency and reduce human error. Our teams collaborate to explore new solutions, test ideas, and implement practices that redefine industrial manufacturing standards. By embracing innovation, we ensure sustainable growth and deliver exceptional value to our clients.`
    },
    {
      id: 3,
      image: insight3,
      title: "Sustainable Manufacturing",
      text: `Sustainability is a key part of our manufacturing philosophy. We strive to minimize environmental impact while maximizing production efficiency. Our sustainable practices include energy-efficient machinery, waste reduction programs, and eco-friendly materials. By focusing on responsible production methods, we not only protect the planet but also create long-term value for our clients and stakeholders. Our commitment to sustainability ensures a better future for the next generation of industrial manufacturing.`
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % insights.length);
    }, 8000); // rotate every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const insight = insights[current];

  return (
    <section style={{ background: "#020617", color: "white", padding: "60px 20px" }}>
      <div className="insights-container">
        <div className="insights-image">
          <img src={insight.image} alt={insight.title} />
        </div>
        <div className="insights-content">
          <h2>{insight.title}</h2>
          <p>{insight.text}</p>
          <button className="read-more">Read More</button>
        </div>
      </div>

      <style>{`
        .insights-container {
          display: flex;
          align-items: flex-start;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
          transition: all 0.8s ease-in-out;
        }

        .insights-image {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
        }

        .insights-image img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 12px;
        }

        .insights-content {
          flex: 1.2;
          min-width: 300px;
          display: flex;
          flex-direction: column;
        }

        .insights-content h2 {
          font-size: 2.8rem;
          color: #facc15;
          margin-bottom: 20px;
        }

        .insights-content p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #e5e7eb;
          margin-bottom: 20px;
          text-align: justify;
        }

        .read-more {
          align-self: start;
          padding: 10px 20px;
          background-color: #facc15;
          color: #020617;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .read-more:hover {
          background-color: #eab308;
        }

        @media (max-width: 900px) {
          .insights-container {
            flex-direction: column;
            align-items: center;
          }

          .insights-content h2 {
            font-size: 2rem;
            text-align: center;
          }

          .insights-content p {
            font-size: 1rem;
          }

          .read-more {
            align-self: center;
          }
        }
      `}</style>
    </section>
  );
}

export default Insights;
