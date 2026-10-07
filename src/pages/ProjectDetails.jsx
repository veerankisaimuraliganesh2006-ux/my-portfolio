import { Link, useParams } from "react-router-dom";

const projects = {
  "iot-water": {
    title: "IoT Smart Water Resource Management",
    intro:
      "An ESP32-based smart agriculture system designed to monitor and manage water resources efficiently.",
    abstract:
      "The system uses ESP32 and multiple sensors to monitor soil moisture, water pressure, water level, temperature and humidity. It helps farmers manage irrigation efficiently and reduce unnecessary water consumption.",
    problem:
      "Traditional irrigation methods can waste water because irrigation is often performed without knowing the actual soil and water conditions. This project provides a smart monitoring and irrigation solution.",
    technologies: [
      "ESP32",
      "Arduino",
      "IoT",
      "Soil Moisture Sensor",
      "Water Pressure Sensor",
      "Water Level Sensor",
      "Temperature Sensor",
      "Humidity Sensor",
    ],
    features: [
      "Real-time soil moisture monitoring",
      "Water pressure monitoring",
      "Water level monitoring",
      "Automatic irrigation control",
      "Temperature and humidity monitoring",
      "Alert system",
      "ESP32-based IoT architecture",
    ],
    outcome:
      "The system provides efficient agricultural water management and helps reduce unnecessary water usage.",
  },

  "few-shot": {
    title: "Few-Shot Learning for New Product Defect Classes",
    intro:
      "An AI/ML project designed to identify new product defect classes using few-shot learning techniques.",
    abstract:
      "This project explores few-shot learning for product defect detection. The system uses pretrained deep learning models to extract useful image features and classify new defect categories using a small number of training examples.",
    problem:
      "Traditional machine learning models often require large datasets for every defect category. In real-world manufacturing, collecting large datasets for new defects can be difficult and time-consuming.",
    technologies: [
      "Python",
      "PyTorch",
      "ResNet18",
      "Deep Learning",
      "Machine Learning",
      "Computer Vision",
    ],
    features: [
      "Few-shot defect classification",
      "Pretrained ResNet feature extraction",
      "Image-based defect detection",
      "Support for new defect classes",
      "Reduced training data requirement",
    ],
    outcome:
      "The project demonstrates how few-shot learning can help detect new product defect categories with limited training examples.",
  },

  "online-book-store": {
    title: "Online Book Store",
    intro:
      "A web application for browsing books and creating a simple online shopping experience.",
    abstract:
      "The Online Book Store provides users with an easy-to-use interface for viewing books, checking information and managing book selections.",
    problem:
      "Traditional book purchasing requires customers to visit physical stores. An online platform can make book browsing and purchasing more convenient.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "Spring Boot",
      "MySQL",
    ],
    features: [
      "Book browsing",
      "Book information display",
      "Search functionality",
      "User-friendly interface",
      "Online shopping experience",
      "Database integration",
    ],
    outcome:
      "The project provides a simple digital platform for browsing and managing books online.",
  },

  "weather-app": {
    title: "Weather App",
    intro:
      "A responsive web application that displays weather information using a weather API.",
    abstract:
      "The Weather App allows users to search for a location and view current weather information through a simple and responsive interface.",
    problem:
      "Users need quick and accessible weather information when planning their daily activities. This application provides weather information through a simple web interface.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Weather API",
      "REST API",
    ],
    features: [
      "Location-based weather search",
      "Temperature display",
      "Weather condition display",
      "Responsive design",
      "API integration",
      "Simple user interface",
    ],
    outcome:
      "The application provides users with quick access to weather information through a responsive web interface.",
  },
};

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="project-page">
        <h1>Project Not Found</h1>

        <Link to="/" className="back-btn">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="project-page">

      <div className="project-page-header">

        <Link to="/" className="back-btn">
          ← Back to Portfolio
        </Link>

        <p className="details-label">PROJECT DETAILS</p>

        <h1>{project.title}</h1>

        <p className="project-page-intro">
          {project.intro}
        </p>

      </div>

      <div className="project-page-content">

        <section>
          <h2>Abstract</h2>
          <p>{project.abstract}</p>
        </section>

        <section>
          <h2>Problem Statement</h2>
          <p>{project.problem}</p>
        </section>

        <section>
          <h2>Technologies Used</h2>

          <div className="details-tech">
            {project.technologies.map((technology, index) => (
              <span key={index}>{technology}</span>
            ))}
          </div>
        </section>

        <section>
          <h2>Key Features</h2>

          <ul className="feature-list">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Project Outcome</h2>
          <p>{project.outcome}</p>
        </section>

        <section className="project-links">
          <Link to="/" className="btn secondary">
            ← Back to Projects
          </Link>
        </section>

      </div>
    </div>
  );
}

export default ProjectDetails;