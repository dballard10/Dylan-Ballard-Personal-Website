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
                Built a full-stack movie recommendation platform with React +
                TypeScript frontend and FastAPI backend. Integrated TMDB data
                via TanStack Query + Zustand state management, deployed with
                scalable PostgreSQL database layer and responsive UI using
                Tailwind CSS.
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
                Developed an interactive chess learning platform with React &
                TypeScript, integrating Chess.js and react-chessboard for
                interactive play. Managed global state via Zustand and added
                searchable openings, variations, sandbox board, and themed
                boards.
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
