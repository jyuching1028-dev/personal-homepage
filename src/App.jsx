import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'research', 'projects', 'experience', 'education', 'scholarships', 'publications', 'awards', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Jyuching</div>
          <ul className="nav-links">
            <li><button className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>About</button></li>
            <li><button className={`nav-btn ${activeSection === 'research' ? 'active' : ''}`} onClick={() => scrollToSection('research')}>Research</button></li>
            <li><button className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button className={`nav-btn ${activeSection === 'experience' ? 'active' : ''}`} onClick={() => scrollToSection('experience')}>Experience</button></li>
            <li><button className={`nav-btn ${activeSection === 'education' ? 'active' : ''}`} onClick={() => scrollToSection('education')}>Education</button></li>
            <li><button className={`nav-btn ${activeSection === 'scholarships' ? 'active' : ''}`} onClick={() => scrollToSection('scholarships')}>Scholarships</button></li>
            <li><button className={`nav-btn ${activeSection === 'publications' ? 'active' : ''}`} onClick={() => scrollToSection('publications')}>Publications</button></li>
            <li><button className={`nav-btn ${activeSection === 'awards' ? 'active' : ''}`} onClick={() => scrollToSection('awards')}>Awards</button></li>
            <li><button className={`nav-btn ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Hello, I'm <span className="name">Jyuching</span></h2>
          <p className="subtitle">Huang Yucheng | Full Stack Developer & AI Researcher</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="mailto:jyuching@example.com" className="social-link">Email</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-inner">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm Jyuching (Huang Yucheng), a passionate Full Stack Developer and AI Researcher with expertise in building modern web applications and intelligent systems.</p>
              <p>My technical stack includes HTML5, CSS3, JavaScript, React, Vue.js, Node.js, Python, TensorFlow, PyTorch, and various cloud technologies.</p>
              <p>I love turning complex problems into simple, beautiful solutions. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or conducting AI research.</p>
            </div>
            <div className="about-image">
              <img src="/photos/profile.jpg" alt="Jyuching" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="section">
        <div className="section-inner">
          <h2>Research Interests</h2>
          <div className="research-grid">
            <div className="research-card">
              <h3>Knowledge Graph</h3>
              <p>Focusing on knowledge graph construction, reasoning algorithms, and their applications in recommendation systems.</p>
            </div>
            <div className="research-card">
              <h3>Deep Learning</h3>
              <p>Exploring neural network architectures for prediction tasks, including RNN, LSTM, and Transformer models.</p>
            </div>
            <div className="research-card">
              <h3>Mobile Development</h3>
              <p>Building cross-platform mobile applications with React Native and native iOS/Android development.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-inner">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src="/photos/Cruise Route Recommendation.png" alt="Knowledge Graph Recommendation" onError={(e) => { e.target.parentElement.style.display = 'none'; }} />
              <div className="project-card-content">
                <h3>Cruise Route Recommendation</h3>
                <p>A personalized cruise ship route recommendation system based on knowledge graph technology. The system analyzes user preferences and travel history to provide intelligent route suggestions using graph-based algorithms.</p>
                <div className="project-year">2023</div>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">Knowledge Graph</span>
                  <span className="tag">Recommendation System</span>
                  <span className="tag">Neo4j</span>
                </div>
                <a href="#" className="project-link">View Details</a>
              </div>
            </div>

            <div className="project-card">
              <img src="/photos/Manufacturing Demand Prediction.png" alt="Material Demand Prediction" onError={(e) => { e.target.parentElement.style.display = 'none'; }} />
              <div className="project-card-content">
                <h3>Manufacturing Demand Prediction</h3>
                <p>A neural network-based material demand forecasting system for manufacturing industry. Uses LSTM and GRU models to predict future material requirements, improving inventory management efficiency.</p>
                <div className="project-year">2023</div>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">TensorFlow</span>
                  <span className="tag">LSTM</span>
                  <span className="tag">Data Analysis</span>
                </div>
                <a href="#" className="project-link">View Details</a>
              </div>
            </div>

            <div className="project-card">
              <img src="/photos/Momentus.png" alt="Momentus App" onError={(e) => { e.target.parentElement.style.display = 'none'; }} />
              <div className="project-card-content">
                <h3>Momentus</h3>
                <p>A smart reminder application for iOS and Android platforms. Features include location-based reminders, smart scheduling, and AI-powered suggestion engine to help users manage their daily tasks effectively.</p>
                <div className="project-year">2023</div>
                <div className="project-tags">
                  <span className="tag">React Native</span>
                  <span className="tag">iOS</span>
                  <span className="tag">Android</span>
                  <span className="tag">AI Assistant</span>
                </div>
                <a href="#" className="project-link">View Details</a>
              </div>
            </div>

            <div className="project-card">
              <img src="/photos/Xuechao Course Platform.png" alt="Xuechao App" onError={(e) => { e.target.parentElement.style.display = 'none'; }} />
              <div className="project-card-content">
                <h3>Xuechao Course Platform</h3>
                <p>A comprehensive web-based course management platform with frontend and backend implementation. Features include course browsing, online learning, student management, and interactive discussion forums.</p>
                <div className="project-year">2022</div>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">Web Development</span>
                </div>
                <a href="#" className="project-link">View Details</a>
              </div>
            </div>

            <div className="project-card">
              <img src="/photos/I am a Cat.png" alt="I am a Cat Game" onError={(e) => { e.target.parentElement.style.display = 'none'; }} />
              <div className="project-card-content">
                <h3>I am a Cat</h3>
                <p>An engaging casual game where players experience life from a cat's perspective. Features cute graphics, interactive gameplay, and multiple levels with increasing challenges.</p>
                <div className="project-year">2021</div>
                <div className="project-tags">
                  <span className="tag">Unity</span>
                  <span className="tag">C#</span>
                  <span className="tag">Game Development</span>
                  <span className="tag">2D Game</span>
                </div>
                <a href="#" className="project-link">View Details</a>
              </div>
            </div>

            <div className="project-card">
              <img src="/photos/Expense Tracker.png" alt="Expense Tracker App" onError={(e) => { e.target.parentElement.style.display = 'none'; }} />
              <div className="project-card-content">
                <h3>Expense Tracker</h3>
                <p>A clean and intuitive Android expense tracking application. Features include expense categorization, budget management, visual reports, and cloud sync across devices.</p>
                <div className="project-year">2020</div>
                <div className="project-tags">
                  <span className="tag">Android</span>
                  <span className="tag">Java</span>
                  <span className="tag">SQLite</span>
                  <span className="tag">Finance App</span>
                </div>
                <a href="#" className="project-link">View Details</a>
              </div>
            </div>

            <div className="project-card">
              <img src="/photos/Android System Development.png" alt="Android System Development" onError={(e) => { e.target.parentElement.style.display = 'none'; }} />
              <div className="project-card-content">
                <h3>Android System Development</h3>
                <p>Focused on Android system UI/UX development starting from 2013. Specialized in creating intuitive and visually appealing interfaces for Samsung TouchWiz system. Responsibilities included UI component design, animation implementation, and user experience optimization across multiple Android versions.</p>
                <div className="project-year">2013 - 2019</div>
                <div className="project-tags">
                  <span className="tag">Android</span>
                  <span className="tag">TouchWiz</span>
                  <span className="tag">UI/UX Design</span>
                  <span className="tag">Samsung</span>
                </div>
                <a href="#" className="project-link">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-inner">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2024 - Present</div>
              <div className="timeline-content">
                <h3>Senior Full Stack Engineer</h3>
                <p className="timeline-company">Tech Company</p>
                <p>Leading core product development and guiding a team to complete multiple significant projects in AI and web applications.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2022 - 2024</div>
              <div className="timeline-content">
                <h3>Frontend Developer</h3>
                <p className="timeline-company">Internet Company</p>
                <p>Participated in multiple web application developments, responsible for frontend architecture design and implementation.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2020 - 2022</div>
              <div className="timeline-content">
                <h3>Full Stack Developer Intern</h3>
                <p className="timeline-company">Startup Company</p>
                <p>Contributed to product development from scratch, gaining valuable hands-on experience in full stack development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-inner">
          <h2>Education</h2>
          <div className="education-list">
            <div className="education-item">
              <div className="education-icon">🎓</div>
              <div className="education-info">
                <h3>Master of Computer Science</h3>
                <p className="education-school">Xi'an Jiaotong Liverpool University (XJTLU)</p>
                <p className="education-degree">Master's Degree</p>
                <p className="education-year">2020 - 2024</p>
                <p className="education-description">Advanced studies in artificial intelligence and software engineering. Focused on knowledge graph, deep learning, and recommendation systems.</p>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon">🎓</div>
              <div className="education-info">
                <h3>Bachelor of Computer Science & Technology</h3>
                <p className="education-school">Shanghai Maritime University</p>
                <p className="education-degree">Bachelor's Degree</p>
                <p className="education-year">2016 - 2020</p>
                <p className="education-description">Foundation in computer science, programming fundamentals, and software development principles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="scholarships" className="section">
        <div className="section-inner">
          <h2>Scholarships</h2>
          <div className="scholarships-list">
            <div className="scholarship-item">
              <div className="scholarship-icon">🎖️</div>
              <div className="scholarship-info">
                <h3>Undergraduate Scholarship</h3>
                <p className="scholarship-school">Shanghai Maritime University</p>
                <p className="scholarship-year">2018</p>
              </div>
            </div>
            <div className="scholarship-item">
              <div className="scholarship-icon">🎖️</div>
              <div className="scholarship-info">
                <h3>Undergraduate Scholarship</h3>
                <p className="scholarship-school">Shanghai Maritime University</p>
                <p className="scholarship-year">2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="publications" className="section">
        <div className="section-inner">
          <h2>Selected Publications</h2>
          <div className="publications-list">
            <div className="publication-item">
              <h3>Knowledge Graph Enhanced Personalized Recommendation for Cruise Tourism</h3>
              <p className="publication-meta">Published in AI Journal | 2023</p>
              <p className="publication-desc">This paper explores how knowledge graph technology can improve recommendation accuracy in cruise route selection by incorporating rich semantic relationships between user preferences and route attributes.</p>
              <a href="#" className="publication-link">Read Paper</a>
            </div>
            <div className="publication-item">
              <h3>LSTM-Based Material Demand Forecasting in Smart Manufacturing</h3>
              <p className="publication-meta">Published in IEEE Access | 2023</p>
              <p className="publication-desc">A novel approach using Long Short-Term Memory networks for accurate material demand prediction in manufacturing environments, achieving significant improvements in inventory optimization.</p>
              <a href="#" className="publication-link">Read Paper</a>
            </div>
          </div>
        </div>
      </section>

      <section id="awards" className="section">
        <div className="section-inner">
          <h2>Awards & Honors</h2>
          <div className="awards-grid">
            <div className="award-card">
              <div className="award-icon">🏆</div>
              <h3>Outstanding Master's Thesis Award</h3>
              <p className="award-org">Xi'an Jiaotong Liverpool University</p>
              <p className="award-year">2024</p>
            </div>
            <div className="award-card">
              <div className="award-icon">🏆</div>
              <h3>Outstanding Bachelor's Thesis Award</h3>
              <p className="award-org">Shanghai Maritime University</p>
              <p className="award-year">2020</p>
            </div>
            <div className="award-card">
              <div className="award-icon">🥇</div>
              <h3>First Prize - Programming Competition</h3>
              <p className="award-org">Algorithm Competition</p>
              <p className="award-year">2023</p>
            </div>
            <div className="award-card">
              <div className="award-icon">⭐</div>
              <h3>Open Source Contributor</h3>
              <p className="award-org">GitHub</p>
              <p className="award-year">2022</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-inner contact-section">
          <h2>Contact</h2>
          <p className="contact-intro">Feel free to reach out for collaborations, research discussions, or just to say hello!</p>
          <div className="contact-links">
            <a href="mailto:jyuching@example.com" className="contact-btn">Send Email</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-btn">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-btn">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Jyuching. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
