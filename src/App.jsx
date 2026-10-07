import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import CertificateDetails from "./pages/CertificateDetails";

function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      {/* NAVBAR */}
<nav className="navbar">

  <h2 className="logo">VSMG</h2>

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

      {/* HOME */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hello">HELLO, I'M</p>

          <h1>
            Sai Murali <span>Ganesh</span>
          </h1>

          <h2>Full Stack Developer | IoT Enthusiast | AI/ML</h2>

          <p className="description">
            B.Tech 3rd Year IoT-IRD student at KL University,
            passionate about Full Stack Development, IoT and Artificial
            Intelligence.
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

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="section-container">
          <p className="section-label">GET TO KNOW ME</p>
          <h2 className="section-title">About Me</h2>

          <div className="about-content">
            <div>
              <h3>I'm Sai Murali Ganesh</h3>

              <p>
                a B.Tech 3rd-year student specializing in IoT-IRD at KL University. I’m passionate about Full Stack Development, IoT, Artificial Intelligence, and emerging technologies.

I have hands-on experience with HTML, CSS, JavaScript, Java, and Spring Boot, and I enjoy building practical and user-friendly applications. I have also completed a Full Stack Java Internship, where I gained experience in developing web applications and understanding real-world software development practices.

I have worked on projects such as Portfolio Website, Online Book Store, Weather App, and IoT-based smart agriculture solutions. I’m continuously improving my programming, problem-solving, and development skills while exploring new technologies.

My goal is to become a skilled Full Stack Developer and IoT professional and build innovative solutions that solve real-world problems.
              </p>

              <p>
                I enjoy building practical applications and innovative
                IoT solutions that solve real-world problems.
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
                <span>Full Stack(FRENTEND & BACKEND) & IoT(SENORS & MICROCONTROLLERS)</span>
              </div>

              <div>
                <strong>Goal</strong>
                <span>Software Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <p className="section-label">MY EXPERTISE</p>
          <h2 className="section-title">Skills</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <p>HTML • CSS • JavaScript • React</p>
            </div>

            <div className="skill-card">
              <h3>Backend</h3>
              <p>Java • Spring Boot • REST API</p>
            </div>

            <div className="skill-card">
              <h3>Programming</h3>
              <p>Java • Python • C</p>
            </div>

            <div className="skill-card">
              <h3>Database</h3>
              <p>MySQL • SQL</p>
            </div>

            <div className="skill-card">
              <h3>IoT</h3>
              <p>ESP32 • Arduino • Sensors</p>
            </div>

            <div className="skill-card">
              <h3>AI / ML</h3>
              <p>Python • PyTorch • Machine Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
<section id="education" className="skills-section">
  <div className="section-container">
    <p className="section-label">MY ACADEMIC JOURNEY</p>
    <h2 className="section-title">Education</h2>

    <div className="skills-grid">

      {/* B.Tech */}
      <div className="skill-card">
        <h3>B.Tech – IoT-IRD</h3>

        <h4>KL University</h4>

        <p>
          <strong>2024 – Present</strong>
        </p>

        <p>
          Currently pursuing B.Tech with a focus on Internet of
          Things, software development and emerging technologies.
        </p>

        <div className="project-tech">
          <span>IoT</span>
          <span>Software Development</span>
          <span>AI/ML</span>
        </div>
      </div>

      {/* Intermediate */}
      <div className="skill-card">
        <h3>Intermediate</h3>

        <h4>Higher Secondary Education</h4>

        <p>
          <strong>Percentage: 80.1%</strong>
        </p>

        <div className="project-tech">
          <span>12th</span>
          <span>80.1%</span>
        </div>
      </div>

      {/* 10th */}
      <div className="skill-card">
        <h3>10th Class</h3>

        <p>
          <strong>Percentage: 85%</strong>
        </p>

        <div className="project-tech">
          <span>SSC</span>
          <span>85%</span>
        </div>
      </div>

    </div>
  </div>
</section>
     {/* ================= EXPERIENCE ================= */}
<section id="experience" className="skills-section">
  <div className="section-container">
    <p className="section-label">MY EXPERIENCE</p>
    <h2 className="section-title">Internship</h2>

    <div className="skills-grid">

      {/* Internship 1 */}
      <div className="skill-card">
        <h3>Full Stack Java Internship</h3>

        <h4>Glow Logics / Industry Internship</h4>

        <p>
          <strong>May 18, 2026 – July 31, 2026</strong>
        </p>

        <p>
          Completed a Full Stack Java internship focused on developing
          web applications using Java, Spring Boot, HTML, CSS,
          JavaScript and database technologies.
        </p>

        <div className="project-tech">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>SQL</span>
        </div>
      </div>

      {/* Internship 2 - Add later */}
      <div className="skill-card">
        <h3>NA</h3>

        <p>
          Future internships, certifications and professional
          experience can be added here.
        </p>

        <div className="project-tech">
          <span>Development</span>
          <span>IoT</span>
          <span>AI/ML</span>
        </div>
      </div>

    </div>
  </div>
</section>1

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <p className="section-label">MY WORK</p>
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">

            <div className="project-card">
              <div className="project-number">01</div>

              <h3>IoT Smart Water Resource Management</h3>

              <p>
                ESP32-based smart agriculture system for monitoring
                water resources and automatically managing irrigation.
              </p>

              <div className="project-tech">
                <span>ESP32</span>
                <span>IoT</span>
                <span>Arduino</span>
                <span>Sensors</span>
              </div>

              <Link to="/project/iot-water" className="project-btn">
                View Details →
              </Link>
            </div>

            <div className="project-card">
              <div className="project-number">02</div>

              <h3>Few-Shot Learning for Product Defect Detection</h3>

              <p>
                AI/ML project designed to identify new product defect
                classes using few-shot learning techniques.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>PyTorch</span>
                <span>ResNet</span>
                <span>AI/ML</span>
              </div>

              <Link to="/project/few-shot" className="project-btn">
                View Details →
              </Link>
            </div>

            <div className="project-card">
              <div className="project-number">03</div>

              <h3>Online Book Store</h3>

              <p>
                A web application for browsing books and creating an
                online shopping experience.
              </p>

              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Java</span>
              </div>

              <Link
                to="/project/online-book-store"
                className="project-btn"
              >
                View Details →
              </Link>
            </div>

            <div className="project-card">
              <div className="project-number">04</div>

              <h3>Weather App</h3>

              <p>
                Responsive weather application displaying weather
                information using an API.
              </p>

              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>API</span>
              </div>

              <Link to="/project/weather-app" className="project-btn">
                View Details →
              </Link>
            </div>

          </div>
        </div>
      </section>
      {/* ================= CERTIFICATES ================= */}
<section id="certificates" className="skills-section">
  <div className="section-container">

    <p className="section-label">MY ACHIEVEMENTS</p>
    <h2 className="section-title">Certificates</h2>

    <div className="skills-grid">

      {/* Certificate 1 */}
      <div className="skill-card">

        <div className="project-number">01</div>

        <h3>Course Completion Certificate</h3>

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

        <div className="project-number">02</div>

        <h3>Full Stack Java Internship</h3>

        <p>
          Successfully completed a Full Stack Java Internship
          focused on Java, Spring Boot and web development.
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
    <p className="section-label">LEADERSHIP</p>
    <h2 className="section-title">innoIOT CLUB & CONNECT-(STUDENT BODDY)</h2>

    <div className="skills-grid">

      <div className="skill-card">
        <h3>IoT Club Leadership</h3>

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
        <h3>Technical Events</h3>

        <p>
          Organized and participated in technical workshops,
          seminars, quizzes, hackathons and project-based events.
        </p>

        <div className="project-tech">
          <span>Workshops</span>
          <span>Seminars</span>
          <span>Hackathons</span>
        </div>
      </div>

      <div className="skill-card">
        <h3>IoT Community</h3>

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

     

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <p className="section-label">GET IN TOUCH</p>
          <h2 className="section-title">Contact Me</h2>

          <p className="contact-description">
            I'm open to internships, projects and software development
            opportunities. Feel free to contact me.
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

      {/* FOOTER */}
      <footer>
        <p>© 2026 Sai Murali Ganesh. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

/* ROUTES */
function App() {
  return (
    <BrowserRouter>
     <Routes>

  <Route path="/" element={<Home />} />

  <Route
    path="/project/:projectId"
    element={<ProjectDetails />}
  />

  <Route
    path="/certificate/:certificateId"
    element={<CertificateDetails />}
  />

</Routes>
    </BrowserRouter>
  );
}

export default App;