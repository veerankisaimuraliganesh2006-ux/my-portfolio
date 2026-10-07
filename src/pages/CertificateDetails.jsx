import { Link, useParams } from "react-router-dom";

const certificates = {
  "course-completion": {
    title: "Course Completion Certificate",
    organization: "Course / Training Program",
    date: "Completed",
    description:
      "Successfully completed the course and fulfilled the required learning activities.",
    technologies: [
      "Course Completion",
      "Learning",
      "Technical Skills",
    ],
    pdf: "/certificates/course-completion.pdf",
  },

  "java-internship": {
    title: "Full Stack Java Internship",
    organization: "KL University / Industry Internship",
    date: "May 18, 2026 – July 31, 2026",
    description:
      "Successfully completed a Full Stack Java Internship focused on Java, Spring Boot and web development.",
    technologies: [
      "Java",
      "Spring Boot",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
    ],
    pdf: "/certificates/java-internship.pdf",
  },
};

function CertificateDetails() {
  const { certificateId } = useParams();

  const certificate = certificates[certificateId];

  if (!certificate) {
    return (
      <div className="project-page">
        <div className="project-page-header">
          <h1>Certificate Not Found</h1>

          <Link to="/" className="back-btn">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-page">
      <div className="project-page-header">

        <Link to="/" className="back-btn">
          ← Back to Portfolio
        </Link>

        <p className="details-label">CERTIFICATE DETAILS</p>

        <h1>{certificate.title}</h1>

        <p className="project-page-intro">
          {certificate.description}
        </p>

      </div>

      <div className="project-page-content">

        <section>
          <h2>Certificate Information</h2>

          <p>
            <strong>Organization:</strong>{" "}
            {certificate.organization}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {certificate.date}
          </p>
        </section>

        <section>
          <h2>Skills & Technologies</h2>

          <div className="details-tech">
            {certificate.technologies.map((technology, index) => (
              <span key={index}>{technology}</span>
            ))}
          </div>
        </section>

        <section>
          <h2>Certificate</h2>

          <a
            href={certificate.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View Certificate PDF →
          </a>
        </section>

        <section className="project-links">
          <Link to="/" className="btn secondary">
            ← Back to Portfolio
          </Link>
        </section>

      </div>
    </div>
  );
}

export default CertificateDetails;