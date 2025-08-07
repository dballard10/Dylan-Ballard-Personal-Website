import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Add smooth scrolling for navigation links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Dylan Ballard</span>
            </h1>
            <p className="tagline">Build.Deploy.Scale.</p>
            <p className="hero-description">
              Full-stack Software Engineer with a knack for building clean,
              responsive user interfaces and scalable backend systems.
              Experienced in developing modern web apps using React + TypeScript
              on the frontend and Python + FastAPI on the backend.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a
                href="/DylanBallardResume2025.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-logo">
              <img
                src="/assets/profile-pic.webp"
                alt="Dylan Ballard"
                className="hero-image-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
