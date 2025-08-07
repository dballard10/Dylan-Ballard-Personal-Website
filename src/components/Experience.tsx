const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="company-info">
                <div className="company-logo">
                  <img
                    src="/assets/logos/companies/eigennet-logo.webp"
                    alt="Eigennet Logo"
                    className="company-logo-img"
                  />
                </div>
                <div className="job-details-header">
                  <h3>Software Engineer</h3>
                  <span className="company">Eigennet</span>
                  <span className="period">2024 - Present</span>
                </div>
              </div>
              <ul className="job-details">
                <li>Developed secure AWS-based document transmission system</li>
                <li>
                  Built high-speed LLM extraction in SageMaker with 99% accuracy
                </li>
                <li>
                  Automated metadata packaging, zip creation, and SFTP delivery
                </li>
                <li>
                  Led end-to-end EC2/S3 workflows and maintained batch tracking
                  via internal APIs
                </li>
                <li>
                  Developed scalable Python/Django scripts for validation and
                  transmission pipelines
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="company-info">
                <div className="company-logo">
                  <img
                    src="/assets/logos/companies/freddie-mac-logo.webp"
                    alt="Freddie Mac Logo"
                    className="company-logo-img"
                  />
                </div>
                <div className="job-details-header">
                  <h3>Software Engineering Intern</h3>
                  <span className="company">Freddie Mac</span>
                  <span className="period">2023</span>
                </div>
              </div>
              <ul className="job-details">
                <li>
                  Designed & implemented a Java-based data-validation tool
                </li>
                <li>
                  Detect anomalies and schema drift across large financial CSV
                  datasets
                </li>
                <li>Integrated automated alerts for version mismatches</li>
                <li>
                  Boosting data-integrity checks and speeding up the Financial
                  Engineering team's reconciliation process
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
