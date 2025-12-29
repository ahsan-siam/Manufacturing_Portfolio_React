import { FaIndustry, FaUsers, FaClock, FaCertificate } from "react-icons/fa";
import bgImage from "../assets/bg.jpg";

function Hero() {
  return (
    <>
      <style>
        {`
          .hero {
            min-height: 90vh;
            position: relative;
            background-image: url(${bgImage});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            padding: 0 20px;
          }

          .hero::before {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(2, 6, 23, 0.75);
            z-index: 1;
          }

          .hero-wrapper {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            width: 100%;
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 60px;
            align-items: center;
          }

          .hero-content h1 {
            font-size: 3.4rem;
            font-weight: 800;
            line-height: 1.15;
            margin-bottom: 24px;
          }

          .hero-content h1 span {
            color: #facc15;
          }

          .hero-content p {
            font-size: 1.1rem;
            color: #e5e7eb;
            max-width: 520px;
            margin-bottom: 36px;
          }

          .hero-buttons {
            display: flex;
            gap: 20px;
          }

          .btn-primary {
            background-color: #facc15;
            color: #020617;
            padding: 14px 30px;
            border-radius: 8px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .btn-primary:hover {
            background-color: #eab308;
            transform: translateY(-2px);
          }

          .btn-secondary {
            background-color: transparent;
            color: white;
            padding: 14px 30px;
            border-radius: 8px;
            border: 2px solid #475569;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .btn-secondary:hover {
            border-color: #facc15;
            color: #facc15;
          }

          .hero-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            background: rgba(2, 6, 23, 0.85);
            padding: 32px;
            border-radius: 12px;
            border: 1px solid #1e293b;
          }

          .stat {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .stat-icon {
            color: #facc15;
            font-size: 2.5rem;
            flex-shrink: 0;
          }

          .stat-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            line-height: 1;
          }

          .stat-text h2 {
            font-size: 2.2rem;
            color: #facc15;
            margin: 0;
          }

          .stat-text p {
            color: #cbd5f5;
            font-size: 0.95rem;
            margin: 0;
          }

          @media (max-width: 900px) {
            .hero-wrapper {
              grid-template-columns: 1fr;
              text-align: center;
            }

            .hero-content p {
              margin: 0 auto 36px;
            }

            .hero-buttons {
              justify-content: center;
            }

            .stat {
              justify-content: center;
            }
          }
        `}
      </style>

      <section className="hero">
        <div className="hero-wrapper">
          {/* LEFT CONTENT */}
          <div className="hero-content">
            <h1>
              Precision Manufacturing <br />
              <span>Built for Industry</span>
            </h1>

            <p>
              We deliver high-quality industrial manufacturing solutions with
              precision engineering, advanced machinery, and trusted expertise.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Find Us.</button>
              <button className="btn-secondary">Our Capabilities</button>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="hero-stats">
            <div className="stat">
              <FaIndustry className="stat-icon" />
              <div className="stat-text">
                <h2>25+</h2>
                <p>Years of Experience</p>
              </div>
            </div>

            <div className="stat">
              <FaUsers className="stat-icon" />
              <div className="stat-text">
                <h2>500+</h2>
                <p>Industrial Clients</p>
              </div>
            </div>

            <div className="stat">
              <FaClock className="stat-icon" />
              <div className="stat-text">
                <h2>99%</h2>
                <p>On-Time Delivery</p>
              </div>
            </div>

            <div className="stat">
              <FaCertificate className="stat-icon" />
              <div className="stat-text">
                <h2>ISO</h2>
                <p>Certified Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
