import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Intern</h4>
                <h5>Soften Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Supported backend development using Java and Spring Boot, contributing to REST API implementation and database integration. Assisted in debugging, testing, and optimizing application performance while gaining practical experience in Agile workflows and collaborative development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Engineer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered scalable backend solutions using Java and Spring Boot, developing RESTful APIs and managing database interactions with JDBC. Ensured code quality, performance, and reliability while collaborating in Agile teams to deliver robust enterprise applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student</h4>
                <h5>Griffith University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Specializing in modern software engineering practices including data structures, algorithms, full-stack web development, and scalable application architecture. Actively developing projects using Java, Python, ReactJS, and PostgreSQL while applying industry tools, version control, and agile methodologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
