const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <div className="education-header">
              <div className="university-logo">
                <img
                  src="/assets/logos/universities/gmu-logo.webp"
                  alt="George Mason University Logo"
                  className="university-logo-img"
                />
              </div>
              <div className="education-info">
                <h3>Master of Computer Science</h3>
                <p className="school">George Mason University</p>
                <p className="period">2024 - Present</p>
              </div>
            </div>
          </div>

          <div className="education-card">
            <div className="education-header">
              <div className="university-logo">
                <img
                  src="/assets/logos/universities/jmu-logo.webp"
                  alt="James Madison University Logo"
                  className="university-logo-img"
                />
              </div>
              <div className="education-info">
                <h3>Bachelor of Computer Science</h3>
                <p className="school">James Madison University</p>
                <p className="period">2020 - 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
