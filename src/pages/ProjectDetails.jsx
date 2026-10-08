import { useParams, Link } from "react-router-dom";

const projects = {
  "iot-water": {
    title: "IoT-Based Smart Water Resource Management Using ESP32",

    problem:
      "Traditional agricultural irrigation often depends on manual monitoring, which can lead to water wastage, over-irrigation, under-irrigation, and unnecessary motor operation. A smart system is needed to monitor water and soil conditions and manage irrigation automatically.",

    abstract:
      "This project presents an IoT-based smart water management system designed for agriculture. The system uses ESP32 along with sensors to monitor soil moisture, water pressure, water level, temperature, and humidity. Based on the collected data, the irrigation motor can be controlled according to predefined conditions. The system helps reduce water wastage, minimize manual monitoring, and improve irrigation efficiency.",

    technologies:
      "ESP32, IoT, Sensors, Embedded C/C++, Arduino IDE, Relay",

    features: [
      "Soil moisture monitoring",
      "Water level monitoring",
      "Water pressure monitoring",
      "Automatic irrigation control",
      "Temperature and humidity monitoring",
      "Abnormal condition alerts",
      "IoT-based monitoring"
    ],

    result:
  "The system demonstrates real-time monitoring and automated irrigation control using ESP32 and connected sensors. It helps reduce manual monitoring and supports efficient water management.",

futureScope:
  "The system can be extended with cloud dashboards, mobile notifications, weather-based irrigation, data analytics, and AI-based water usage prediction."
    },

  "few-shot": {
    title: "Few-Shot Learning for New Product Defect Classes",

    problem:
      "Manufacturing industries generally require large amounts of labeled images to train AI models for product defect detection. However, new defect types may have only a few available examples. A system is needed to identify new defect categories using limited training data.",

    abstract:
      "This project focuses on using Few-Shot Learning to identify new product defect categories when only a small number of training images are available. A deep learning model is used as a feature extractor to learn useful visual representations from product images. The extracted features are then used to compare and classify new defect classes.",

    technologies:
      "Python, PyTorch, ResNet18, Deep Learning, Few-Shot Learning, Computer Vision",

    features: [
      "Image-based defect detection",
      "Few-shot classification",
      "Deep learning feature extraction",
      "Limited-data learning",
      "Computer vision processing"
    ],

    result:
  "The project demonstrates how deep learning feature extraction and Few-Shot Learning can be used to classify new product defect categories with limited training examples.",

futureScope:
  "The system can be extended with larger industrial datasets, advanced few-shot learning algorithms, real-time defect detection, and automated quality inspection."},

  "online-book-store": {
    title: "Online Book Store",

    problem:
      "Traditional book purchasing requires users to physically visit stores and manually search for available books. A web-based platform is needed to provide users with an easy and organized way to browse and manage books online.",

    abstract:
      "The Online Book Store is a full-stack web application developed to provide users with a simple platform for browsing and managing books online. The application demonstrates the integration of frontend and backend technologies along with REST APIs and database management.",

    technologies:
      "HTML, CSS, JavaScript, React, Java, Spring Boot, REST API, MySQL",

    features: [
      "Book browsing",
      "Book information display",
      "Responsive user interface",
      "Backend REST APIs",
      "Database integration",
      "Full-stack architecture"
    ],

    result:
  "The project demonstrates a complete full-stack application with frontend, backend, REST API, and database integration for managing book-related information.",

futureScope:
  "The application can be extended with user authentication, online payments, shopping cart functionality, order tracking, reviews, recommendations, and an admin dashboard."},


  "weather-app": {
    title: "Weather Application",

    problem:
      "Users need a simple and convenient way to access current weather information for different locations. A responsive application is needed to retrieve weather data and present it clearly to users.",

    abstract:
      "The Weather Application is a web-based application that provides weather information for a selected location. The application retrieves weather data through an API and displays important information such as temperature and weather conditions through an easy-to-use interface.",

    technologies:
      "HTML, CSS, JavaScript, React, Weather API, REST API",

    features: [
      "Location-based weather search",
      "Weather API integration",
      "Temperature display",
      "Weather condition display",
      "Responsive user interface"
    ],

    result:
  "The application successfully demonstrates API integration and dynamic display of weather information through a responsive React interface.",

futureScope:
  "The application can be extended with weather forecasts, interactive maps, location detection, weather alerts, historical weather data, and multiple location tracking." }
};

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="project-details">
        <h2>Project Not Found</h2>

        <Link to="/" className="project-btn">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="project-details">

      <Link to="/#projects" className="back-btn">
        ← Back to Projects
      </Link>

      <h1>{project.title}</h1>

      <div className="detail-box">
        <h2>Problem Statement</h2>
        <p>{project.problem}</p>
      </div>

      <div className="detail-box">
        <h2>Abstract</h2>
        <p>{project.abstract}</p>
      </div>

      <div className="detail-box">
        <h2>Technologies Used</h2>
        <p>{project.technologies}</p>
      </div>

      <div className="detail-box">
        <h2>Key Features</h2>

        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="detail-box">
        <h2>How It Works</h2>
        <p>{project.working}</p>
      </div>
      
      <div className="detail-box">
  <h2>Results / Outcome</h2>
  <p>{project.result}</p>
</div>

<div className="detail-box">
  <h2>Future Scope</h2>
  <p>{project.futureScope}</p>
</div>

    </div>
  );
}

export default ProjectDetails;