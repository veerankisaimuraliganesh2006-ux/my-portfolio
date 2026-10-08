import { Link } from "react-router-dom";

function InternshipDetails() {
  return (
    <div className="project-details">

      <Link to="/#experience" className="back-btn">
        ← Back to Internship
      </Link>

      <h1>Full Stack Java Internship</h1>

      <div className="detail-box">
        <h2>Organization</h2>
        <p>
          Glow Logics / Industry Internship
        </p>
      </div>

      <div className="detail-box">
        <h2>Duration</h2>
        <p>
          18 May 2026 – 31 July 2026
        </p>
      </div>

      <div className="detail-box">
        <h2>Internship Overview</h2>
        <p>
          Completed a Full Stack Java internship focused on
          developing web applications and understanding both
          frontend and backend development.
        </p>
      </div>

      <div className="detail-box">
        <h2>Technologies Used</h2>
        <p>
          Java, Spring Boot, REST API, HTML, CSS,
          JavaScript and SQL.
        </p>
      </div>

      <div className="detail-box">
        <h2>Key Learning</h2>

        <ul>
          <li>
            Java programming and object-oriented concepts
          </li>

          <li>
            Frontend web development
          </li>

          <li>
            Backend development using Spring Boot
          </li>

          <li>
            REST API development and integration
          </li>

          <li>
            Database integration using SQL
          </li>

          <li>
            Understanding full-stack application development
          </li>
        </ul>
      </div>

      <div className="detail-box">
        <h2>Skills Gained</h2>

        <p>
          Full Stack Development, Java, Spring Boot,
          REST APIs, Database Management, Web Development
          and Problem Solving.
        </p>
      </div>

      <div className="detail-box">
        <h2>Status</h2>

        <p>
          Internship Completed
        </p>
      </div>

    </div>
  );
}

export default InternshipDetails;