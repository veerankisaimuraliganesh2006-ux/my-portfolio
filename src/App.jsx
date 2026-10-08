import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import CertificateDetails from "./pages/CertificateDetails";
import InternshipDetails from "./pages/InternshipDetails";


function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <h2 className="logo">VEERANKI</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

      </nav>


      {/* ================= HOME ================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hello">HELLO, I'M</p>

          <h1>
            Sai Murali <span>Ganesh</span>
          </h1>

          <h2>
            Full Stack Developer | IoT Enthusiast | AI/ML
          </h2>

          <p className="description">
            B.Tech 3rd Year IoT-IRD student at KL University,
            passionate about Full Stack Development, IoT and
            Artificial Intelligence.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="/resume.pdf" className="btn secondary">
              Download Resume
            </a>

          </div>

        </div>


        {/* PROFILE IMAGE */}
        <div className="hero-image">
          <img
            src="/profile.jpg"
            alt="Sai Murali Ganesh"
            className="profile-photo"
          />
        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="about-section">

        <div className="section-container">

          <p className="section-label">GET TO KNOW ME</p>

          <h2 className="section-title">
            About Me
          </h2>

          <div className="about-content">

            <div>

              <h3>
                I'm Sai Murali Ganesh
              </h3>

              <p>
                a B.Tech 3rd-year student specializing in IoT-IRD
                at KL University. I’m passionate about Full Stack
                Development, IoT, Artificial Intelligence, and
                emerging technologies.

                I have hands-on experience with HTML, CSS,
                JavaScript, Java, and Spring Boot, and I enjoy
                building practical and user-friendly applications.
                I have also completed a Full Stack Java Internship,
                where I gained experience in developing web
                applications and understanding real-world software
                development practices.

                I have worked on projects such as Portfolio Website,
                Online Book Store, Weather App, and IoT-based smart
                agriculture solutions. I’m continuously improving
                my programming, problem-solving, and development
                skills while exploring new technologies.

                My goal is to become a skilled Full Stack Developer
                and IoT professional and build innovative solutions
                that solve real-world problems.
              </p>

              <p>
                I enjoy building practical applications and
                innovative IoT solutions that solve real-world
                problems.
              </p>

            </div>


            <div className="about-details">

              <div>
                <strong>Education</strong>
                <span>B.Tech IoT-IRD</span>
              </div>

              <div>
                <strong>University</strong>
                <span>KL University</span>
              </div>

              <div>
                <strong>Focus</strong>
                <span>
                  Full Stack (FRONTEND & BACKEND) & IoT
                  (SENSORS & MICROCONTROLLERS)
                </span>
              </div>

              <div>
                <strong>Goal</strong>
                <span>Software Developer</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills" className="skills-section">

        <div className="section-container">

          <p className="section-label">
            MY EXPERTISE
          </p>

          <h2 className="section-title">
            Skills
          </h2>

          <div className="skills-grid">

            <div className="skill-card">
              <h3>Frontend</h3>
              <p>
                HTML • CSS • JavaScript • React
              </p>
            </div>

            <div className="skill-card">
              <h3>Backend</h3>
              <p>
                Java • Spring Boot • REST API
              </p>
            </div>

            <div className="skill-card">
              <h3>Programming</h3>
              <p>
                Java • Python • C
              </p>
            </div>

            <div className="skill-card">
              <h3>Database</h3>
              <p>
                MySQL • SQL
              </p>
            </div>

            <div className="skill-card">
              <h3>IoT</h3>
              <p>
                ESP32 • Arduino • Sensors
              </p>
            </div>

            <div className="skill-card">
              <h3>AI / ML</h3>
              <p>
                Python • PyTorch • Machine Learning
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}
      <section id="education" className="skills-section">

        <div className="section-container">

          <p className="section-label">
            MY ACADEMIC JOURNEY
          </p>

          <h2 className="section-title">
            Education
          </h2>

          <div className="skills-grid">

            {/* B.Tech */}
            <div className="skill-card">

              <h3>
                B.Tech – IoT-IRD
              </h3>

              <h4>
                K L University
              </h4>

              <p>
                <strong>
                  2024 – Present
                </strong>
              </p>

              <p>
                Currently pursuing B.Tech in Internet of Things
                with a strong interest in software development,
                IoT, Artificial Intelligence and emerging
                technologies.
              </p>

              <div className="project-tech">
                <span>IoT</span>
                <span>CGPA: 8.15</span>
                <span>AI/ML</span>
                <span>Software Development</span>
              </div>

            </div>


            {/* Intermediate */}
            <div className="skill-card">

              <h3>
                Intermediate
              </h3>

              <h4>
                Higher Secondary Education
              </h4>

              <p>
                <strong>
                  Percentage: 84.67%
                </strong>
              </p>

              <p>
                Completed higher secondary education with a
                strong academic foundation and interest in
                technology and computer science.
              </p>

              <div className="project-tech">
                <span>12th</span>
                <span>84.67%</span>
              </div>

            </div>


            {/* 10th */}
            <div className="skill-card">

              <h3>
                10th Class
              </h3>

              <h4>
                Secondary School Education
              </h4>

              <p>
                <strong>
                  Percentage: 80.1%
                </strong>
              </p>

              <p>
                Completed secondary education with a strong
                foundation in mathematics, science and general
                academics.
              </p>

              <div className="project-tech">
                <span>SSC</span>
                <span>80.1%</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="skills-section">

        <div className="section-container">

          <p className="section-label">
            MY EXPERIENCE
          </p>

          <h2 className="section-title">
            Internship
          </h2>

          <div className="skills-grid">

            <div className="skill-card">

              <h3>
                Full Stack Java Internship
              </h3>

              <h4>
                Glow Logics / Industry Internship
              </h4>

              <p>
                <strong>
                  18 May 2026 – 31 July 2026
                </strong>
              </p>

              <p>
                Completed a Full Stack Java internship with
                practical experience in frontend and backend
                web development.
              </p>

              <Link
                to="/internship/full-stack-java"
                className="project-btn"
              >
                View Internship Details →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="projects-section">

        <h2>
          Projects
        </h2>

        <p className="section-subtitle">
          Some of the projects I have developed using IoT,
          AI/ML, and Full Stack technologies.
        </p>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">

            <h3>
              IoT-Based Smart Water Resource Management Using ESP32
            </h3>

            <p>
              An IoT-based smart agriculture system that monitors
              soil moisture, water resources, and environmental
              conditions while supporting automated irrigation.
            </p>

            <p className="project-tech">
              <strong>
                Technologies:
              </strong>{" "}
              ESP32, IoT, Sensors, Embedded C/C++
            </p>

            <Link
              to="/project/iot-water"
              className="project-btn"
            >
              View Details
            </Link>

          </div>


          {/* Project 2 */}
          <div className="project-card">

            <h3>
              Few-Shot Learning for New Product Defect Classes
            </h3>

            <p>
              An AI-based computer vision project that uses
              Few-Shot Learning to classify new product defect
              categories using limited training data.
            </p>

            <p className="project-tech">
              <strong>
                Technologies:
              </strong>{" "}
              Python, PyTorch, ResNet18, Deep Learning
            </p>

            <Link
              to="/project/few-shot"
              className="project-btn"
            >
              View Details
            </Link>

          </div>


          {/* Project 3 */}
          <div className="project-card">

            <h3>
              Online Book Store
            </h3>

            <p>
              A full-stack web application that provides users
              with an interactive platform to browse and manage
              books online.
            </p>

            <p className="project-tech">
              <strong>
                Technologies:
              </strong>{" "}
              React, Java, Spring Boot, REST API, MySQL
            </p>

            <Link
              to="/project/online-book-store"
              className="project-btn"
            >
              View Details
            </Link>

          </div>


          {/* Project 4 */}
          <div className="project-card">

            <h3>
              Weather Application
            </h3>

            <p>
              A responsive web application that retrieves
              weather information using an API and displays
              it through a simple user-friendly interface.
            </p>

            <p className="project-tech">
              <strong>
                Technologies:
              </strong>{" "}
              React, JavaScript, Weather API
            </p>

            <Link
              to="/project/weather-app"
              className="project-btn"
            >
              View Details
            </Link>

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATES ================= */}
      <section id="certificates" className="skills-section">

        <div className="section-container">

          <p className="section-label">
            MY ACHIEVEMENTS
          </p>

          <h2 className="section-title">
            Certificates
          </h2>

          <div className="skills-grid">

            {/* Certificate 1 */}
            <div className="skill-card">

              <div className="project-number">
                01
              </div>

              <h3>
                Course Completion Certificate
              </h3>

              <p>
                Certificate awarded for successfully completing
                the course and fulfilling the required learning
                activities.
              </p>

              <div className="project-tech">
                <span>Course Completion</span>
                <span>Learning</span>
              </div>

              <Link
                to="/certificate/course-completion"
                className="project-btn"
              >
                View Details →
              </Link>

            </div>


            {/* Certificate 2 */}
            <div className="skill-card">

              <div className="project-number">
                02
              </div>

              <h3>
                Full Stack Java Internship
              </h3>

              <p>
                Successfully completed a Full Stack Java
                Internship focused on Java, Spring Boot
                and web development.
              </p>

              <div className="project-tech">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <Link
                to="/certificate/java-internship"
                className="project-btn"
              >
                View Details →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= LEADERSHIP ================= */}
      <section id="leadership" className="skills-section">

        <div className="section-container">

          <p className="section-label">
            LEADERSHIP
          </p>

          <h2 className="section-title">
            innoIOT CLUB & CONNECT-(STUDENT BODDY)
          </h2>

          <div className="skills-grid">

            <div className="skill-card">

              <h3>
                IoT Club Leadership
              </h3>

              <p>
                Actively involved in organizing technical events,
                workshops, hackathons and IoT-focused activities
                under the innoIOT club at KL University.
              </p>

              <div className="project-tech">
                <span>IoT</span>
                <span>Events</span>
                <span>Leadership</span>
                <span>Hackathons</span>
              </div>

            </div>


            <div className="skill-card">

              <h3>
                Technical Events
              </h3>

              <p>
                Organized and participated in technical workshops,
                seminars, quizzes, hackathons and project-based
                events.
              </p>

              <div className="project-tech">
                <span>Workshops</span>
                <span>Seminars</span>
                <span>Hackathons</span>
              </div>

            </div>


            <div className="skill-card">

              <h3>
                IoT Community
              </h3>

              <p>
                Contributed to building an active student community
                focused on IoT, AI and emerging technologies.
              </p>

              <div className="project-tech">
                <span>IoT</span>
                <span>AI</span>
                <span>Community</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact-section">

        <div className="section-container">

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h2 className="section-title">
            Contact Me
          </h2>

          <p className="contact-description">
            I'm open to internships, projects and software
            development opportunities. Feel free to contact me.
          </p>

          <div className="contact-details">

            <a href="mailto:veerankisaimuraliganesh2006@gmail.com">
              📧

              <span>
                <strong>Email</strong>
                veerankisaimuraliganesh2006@gmail.com
              </span>

            </a>


            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              💼

              <span>
                <strong>LinkedIn</strong>
                Connect with me
              </span>

            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer>

        <p>
          © 2026 Sai Murali Ganesh. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}


/* ================= ROUTES ================= */

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/project/:projectId"
          element={<ProjectDetails />}
        />

        <Route
          path="/certificate/:certificateId"
          element={<CertificateDetails />}
        />

        <Route
          path="/internship/full-stack-java"
          element={<InternshipDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;