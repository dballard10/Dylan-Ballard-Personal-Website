import { useState, useEffect } from "react";

const Projects = () => {
  const [cinetikImageError, setCinetikImageError] = useState(false);
  const [chessImageError, setChessImageError] = useState(false);

  // Re-initialize Lucide icons when fallback icons are shown
  useEffect(() => {
    if (cinetikImageError || chessImageError) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        if (typeof lucide !== "undefined") {
          lucide.createIcons();
        }
      }, 100);
    }
  }, [cinetikImageError, chessImageError]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              {!cinetikImageError ? (
                <img
                  src="/assets/projects/cinetik.webp"
                  alt="Cinetik Movie Platform Preview"
                  className="project-preview"
                  onError={() => setCinetikImageError(true)}
                />
              ) : (
                <i data-lucide="film" className="project-icon"></i>
              )}
            </div>
            <div className="project-content">
              <h3>Cinetik</h3>
              <div className="project-tech-stack">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg"
                  alt="React"
                  className="project-tech-logo"
                />
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg"
                  alt="TypeScript"
                  className="project-tech-logo"
                />
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg"
                  alt="FastAPI"
                  className="project-tech-logo"
                />
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg"
                  alt="Python"
                  className="project-tech-logo"
                />
              </div>
              <p className="project-description">
                Web app (www.cinetik.app) for discovering movies and TV shows
                where users can add favorites and watches. Built with React +
                TypeScript on the frontend and FastAPI on the backend, hosted on
                Vercel. Integrated TMDB for movie and TV show data, retrieved
                via TanStack Query with Zustand for state management. Deployed a
                scalable PostgreSQL database layer and created a backend API to
                manage favorites and watched movies. Designed a responsive UI
                using Tailwind CSS.
              </p>
              <div className="project-links">
                <a
                  href="https://cinetik.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i data-lucide="external-link"></i>
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              {!chessImageError ? (
                <img
                  src="/assets/projects/chess-guide.webp"
                  alt="Chess Opening Guide Platform Preview"
                  className="project-preview"
                  onError={() => setChessImageError(true)}
                />
              ) : (
                <i data-lucide="crown" className="project-icon"></i>
              )}
            </div>
            <div className="project-content">
              <h3>Chess Opening Guide</h3>
              <div className="project-tech-stack">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg"
                  alt="React"
                  className="project-tech-logo"
                />
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg"
                  alt="TypeScript"
                  className="project-tech-logo"
                />
              </div>
              <p className="project-description">
                Developed (chess-opening-guide.vercel.app) with React &
                TypeScript. Managed global state with Zustand and implemented
                searchable openings, opening variations, free play board, and
                themed boards. Deployed the mobile-first build to Vercel using
                modern tooling for fast, production-grade performance.
              </p>
              <div className="project-links">
                <a
                  href="https://chess-opening-guide.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i data-lucide="external-link"></i>
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
