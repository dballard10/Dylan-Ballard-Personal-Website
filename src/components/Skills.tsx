const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <div className="skill-tags">
              <div className="skill-tag">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg"
                  alt="React"
                  className="tech-logo"
                />
                <span>React</span>
              </div>
              <div className="skill-tag">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg"
                  alt="TypeScript"
                  className="tech-logo"
                />
                <span>TypeScript</span>
              </div>
              <div className="skill-tag">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg"
                  alt="JavaScript"
                  className="tech-logo"
                />
                <span>JavaScript</span>
              </div>
              <div className="skill-tag">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg"
                  alt="HTML5"
                  className="tech-logo"
                />
                <span>HTML5</span>
              </div>
              <div className="skill-tag">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg"
                  alt="CSS3"
                  className="tech-logo"
                />
                <span>CSS3</span>
              </div>
              <div className="skill-tag">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg"
                  alt="Tailwind CSS"
                  className="tech-logo"
                />
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend Development</h3>
            <div className="skill-tags">
              <div className="skill-tag">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg"
                  alt="Python"
                  className="tech-logo"
                />
                <span>Python</span>
              </div>
              <div className="skill-tag">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg"
                  alt="FastAPI"
                  className="tech-logo"
                />
                <span>FastAPI</span>
              </div>
              <div className="skill-tag">
                <img
                  src="/assets/technologies/sql-database-generic-svgrepo-com.svg"
                  alt="PostgreSQL"
                  className="tech-logo"
                />
                <span>SQL</span>
              </div>
              <div className="skill-tag">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/supabase.svg"
                  alt="Supabase"
                  className="tech-logo"
                />
                <span>Supabase</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Cloud & DevOps</h3>
            <div className="skill-tags">
              <div className="skill-tag">
                <img
                  src="/assets/technologies/aws.svg"
                  alt="AWS"
                  className="tech-logo"
                />
                <span>AWS</span>
              </div>
              <div className="skill-tag">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg"
                  alt="Docker"
                  className="tech-logo"
                />
                <span>Docker</span>
              </div>
              <div className="skill-tag">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/git.svg"
                  alt="Git"
                  className="tech-logo"
                />
                <span>Git</span>
              </div>
              <div className="skill-tag">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
                  alt="GitHub"
                  className="tech-logo"
                />
                <span>GitHub</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools & Other</h3>
            <div className="skill-tags">
              <div className="skill-tag">
                <img
                  src="/assets/technologies/cursor.svg"
                  alt="Cursor"
                  className="tech-logo"
                />
                <span>Cursor</span>
              </div>
              <div className="skill-tag">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vite.svg"
                  alt="Vite"
                  className="tech-logo"
                />
                <span>Vite</span>
              </div>
              <div className="skill-tag">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg"
                  alt="Node.js"
                  className="tech-logo"
                />
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
