import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import CustomerExperience from "./components/CustomerExperience";

function App() {
  // Create refs for each component
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const insightsRef = useRef(null);
  const customerExpRef = useRef(null);
  const contactRef = useRef(null);

  // Map sections to refs for Navbar
  const refs = {
    home: heroRef,
    experience: experienceRef,
    insights: insightsRef,
    customerExperience: customerExpRef,
    contact: contactRef,
  };

  return (
    <>
      <Navbar refs={refs} />

      <div ref={heroRef}>
        <Hero />
      </div>

      <div ref={experienceRef}>
        <Experience />
      </div>

      <div ref={insightsRef}>
        <Insights />
      </div>

      <div ref={customerExpRef}>
        <CustomerExperience />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default App;
