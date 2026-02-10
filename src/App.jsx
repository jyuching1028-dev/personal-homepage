import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredImage, setHoveredImage] = useState(null);
  const imageTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'research', 'projects', 'experience', 'education', 'scholarships', 'publications', 'awards', 'contact me'];
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

  const handleMouseEnter = (src) => {
    if (imageTimeoutRef.current) {
      clearTimeout(imageTimeoutRef.current);
    }
    setHoveredImage(src);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const closePreview = () => {
    setHoveredImage(null);
  };

  return (
    <div className="app">
      {hoveredImage && (
        <div 
          className="image-preview-overlay"
          onClick={closePreview}
        >
          <img 
            src={hoveredImage} 
            alt="Preview" 
            className="image-preview-zoomed"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Yucheng Huang (Jyuching Wong)</div>
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
            <li><button className={`nav-btn ${activeSection === 'contact me' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact Me</button></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-bg-images">
          <img src="/photos/skills.png" alt="Skills" />
          <img src="/photos/projects.png" alt="Projects" />
        </div>
        <div className="hero-content">
          <h2>Hello, I'm <span className="name">Jyuching</span></h2>
          <p className="subtitle">Huang Yucheng | Full Stack Developer & AI Researcher</p>
          <div className="social-links">
            <a href="https://github.com/Jyucing1028" target="_blank" rel="noopener noreferrer" className="social-link" data-tooltip="Jyucing1028">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" data-tooltip="LinkedIn Profile">LinkedIn</a>
            <a href="mailto:yuching-1028@outlook.com" className="social-link" data-tooltip="yuching-1028@outlook.com">Email</a>
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
              <img 
                src="/photos/Cruise Route Recommendation.png" 
                alt="Knowledge Graph Recommendation" 
                onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                onMouseEnter={(e) => handleMouseEnter(e.target.src)}
                onMouseLeave={handleMouseLeave}
              />
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
              <img 
                src="/photos/Manufacturing Demand Prediction.png" 
                alt="Material Demand Prediction" 
                onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                onMouseEnter={(e) => handleMouseEnter(e.target.src)}
                onMouseLeave={handleMouseLeave}
              />
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
              <img 
                src="/photos/Momentus.png" 
                alt="Momentus App" 
                onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                onMouseEnter={(e) => handleMouseEnter(e.target.src)}
                onMouseLeave={handleMouseLeave}
              />
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
              <img 
                src="/photos/Xuechao Course Platform.png" 
                alt="Xuechao App" 
                onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                onMouseEnter={(e) => handleMouseEnter(e.target.src)}
                onMouseLeave={handleMouseLeave}
              />
              <div className="project-card-content">
                <h3>Xuechao Course Platform</h3>
                <p>A comprehensive web-based course management platform with frontend and backend implementation. Features include course browsing, online learning, student management, and interactive discussion forums.</p>
                <div className="project-year">2024 - 2025</div>
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
              <img 
                src="/photos/I am a Cat.png" 
                alt="I am a Cat Game" 
                onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                onMouseEnter={(e) => handleMouseEnter(e.target.src)}
                onMouseLeave={handleMouseLeave}
              />
              <div className="project-card-content">
                <h3>I am a Cat</h3>
                <p>An engaging casual game where players experience life from a cat's perspective. Features cute graphics, interactive gameplay, and multiple levels with increasing challenges.</p>
                <div className="project-year">2025</div>
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
              <img 
                src="/photos/Expense Tracker.png" 
                alt="Expense Tracker App" 
                onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                onMouseEnter={(e) => handleMouseEnter(e.target.src)}
                onMouseLeave={handleMouseLeave}
              />
              <div className="project-card-content">
                <h3>Expense Tracker</h3>
                <p>A clean and intuitive Android expense tracking application. Features include expense categorization, budget management, visual reports, and cloud sync across devices.</p>
                <div className="project-year">2024 - 2025</div>
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
              <img 
                src="/photos/Android System Development.png" 
                alt="Android System Development" 
                onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                onMouseEnter={(e) => handleMouseEnter(e.target.src)}
                onMouseLeave={handleMouseLeave}
              />
              <div className="project-card-content">
                <h3>Mobile System Development</h3>
                <p>Focused on Mobile system UI/UX development starting from 2013. Specialized in creating intuitive and visually appealing interfaces for Samsung TouchWiz system. Responsibilities included UI component design, animation implementation, and user experience optimization across multiple Android versions.</p>
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

            <div className="project-card">
              <img 
                src="/photos/Low Frequency Quantitative Trading.png" 
                alt="Low Frequency Quantitative Trading" 
                onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                onMouseEnter={(e) => handleMouseEnter(e.target.src)}
                onMouseLeave={handleMouseLeave}
              />
              <div className="project-card-content">
                <h3>Low Frequency Quantitative Trading</h3>
                <p>A financial investment trading software based on TradingView and Python. Used for A-share and cryptocurrency markets. Features include automated trading strategies, technical analysis indicators, backtesting capabilities, and real-time market data integration.</p>
                <div className="project-year">2024</div>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">TradingView</span>
                  <span className="tag">Quantitative Trading</span>
                  <span className="tag">Financial Software</span>
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
              <div className="timeline-date">2023 - 2024</div>
              <div className="timeline-content">
                <h3>Logistics Information System Development @ Caterpillar Inc.</h3>
                <p className="timeline-subtitle">CLC Factory & CL TC Factory</p>
                <ul className="timeline-details">
                  <li>Assisted colleagues in developing logistics information systems for two Caterpillar factories</li>
                  <li>Led the development of logistics tracking and post-inspection module</li>
                  <li>Conducted requirements gathering and analysis with factory stakeholders</li>
                  <li>Successfully reduced logistics inspection time to <strong>60%</strong> of original duration</li>
                  <li>Significantly improved operational efficiency and reduced manpower requirements</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2024 - Present</div>
              <div className="timeline-content">
                <h3>Frontend & Backend Development, Mini-Game Development</h3>
                <p className="timeline-subtitle">Representative Works</p>
                <ul className="timeline-details">
                  <li><strong>Intelligent Question Bank System:</strong> Web-based exam preparation platform with AI-powered question classification</li>
                  <li><strong>Legal Contract Inspection System:</strong> Automated contract analysis tool for legal professionals</li>
                  <li><strong>I am a Cat:</strong> Casual mini-game developed following the viral "Orange Cat" internet trend</li>
                  <li>Engaged in comprehensive web development including frontend and backend development, as well as mini-game development</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023 - Present</div>
              <div className="timeline-content">
                <h3>Application Software Development</h3>
                <p className="timeline-subtitle">Representative Works</p>
                <ul className="timeline-details">
                  <li><strong>Momentus:</strong> All-in-one lifestyle assistant app combining multiple daily functions</li>
                  <li><strong>Expense Tracking System:</strong> Personal finance management application with smart categorization</li>
                  <li>Started developing various application software including PC clients and mobile applications</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2022 - 2023</div>
              <div className="timeline-content">
                <h3>Recommendation Systems</h3>
                <p className="timeline-subtitle">Representative Works</p>
                <ul className="timeline-details">
                  <li><strong>Knowledge Graph-based Cruise Route Recommendation:</strong> Intelligent recommendation system using knowledge graph technology, providing more accurate and efficient recommendations compared to traditional collaborative filtering methods</li>
                  <li>Began learning and exploring recommendation systems and recommendation algorithms</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2020 - 2022</div>
              <div className="timeline-content">
                <h3>Python Development</h3>
                <p className="timeline-subtitle">Representative Works</p>
                <ul className="timeline-details">
                  <li><strong>Desktop File Editing Software:</strong> Custom file management and editing tools for productivity</li>
                  <li><strong>Office Widgets:</strong> Small utility applications to enhance office productivity</li>
                  <li>Started learning Python programming and developing practical software applications using Python</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2019 - 2020</div>
              <div className="timeline-content">
                <h3>Computer Software Development</h3>
                <p className="timeline-subtitle">Representative Works</p>
                <ul className="timeline-details">
                  <li><strong>Desktop File Editing Software:</strong> Custom file management and editing tools for productivity</li>
                  <li><strong>Office Widgets:</strong> Small utility applications to enhance office productivity</li>
                  <li>Began learning computer software development and programming fundamentals</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2013 - 2019</div>
              <div className="timeline-content">
                <h3>Mobile System UI Development</h3>
                <p className="timeline-subtitle">Samsung TouchWiz & Android Native System</p>
                <ul className="timeline-details">
                  <li><strong>Tuifei OS:</strong> Major personal ROM project with over <strong>100+ users</strong>, featuring customized UI and enhanced functionality</li>
                  <li>Started Android system UI modification and personalized system customization</li>
                  <li>Specialized in Samsung TouchWiz system development and Android native system customization</li>
                  <li>Focused on creating intuitive and visually appealing user interfaces</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2012 - 2013</div>
              <div className="timeline-content">
                <h3>Java Learning</h3>
                <p className="timeline-subtitle">The Beginning of Programming Journey</p>
                <ul className="timeline-details">
                  <li>Started by developing small Java games, which sparked deep interest in programming</li>
                  <li>Became fascinated with Java's object-oriented concepts and syntax</li>
                  <li>Dedicated significant time to learning programming theory and fundamentals</li>
                  <li>This early passion for Java laid the foundation for a career in software development</li>
                </ul>
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
                <p className="education-school">University of Liverpool(UOL)</p>
                <p className="education-degree">Master's Degree</p>
                <p className="education-year">2023 - 2025</p>
                <p className="education-description">Advanced studies in artificial intelligence and software engineering. Focused on knowledge graph, deep learning, and recommendation systems.</p>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon">🎓</div>
              <div className="education-info">
                <h3>Bachelor of Computer Science & Technology</h3>
                <p className="education-school">Shanghai Maritime University</p>
                <p className="education-degree">Bachelor's Degree</p>
                <p className="education-year">2019 - 2023</p>
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
                <p className="scholarship-year">2022</p>
              </div>
            </div>
            <div className="scholarship-item">
              <div className="scholarship-icon">🎖️</div>
              <div className="scholarship-info">
                <h3>Undergraduate Scholarship</h3>
                <p className="scholarship-school">Shanghai Maritime University</p>
                <p className="scholarship-year">2021</p>
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
              <p className="publication-meta">2023</p>
              <p className="publication-desc">This paper explores how knowledge graph technology can improve recommendation accuracy in cruise route selection by incorporating rich semantic relationships between user preferences and route attributes.</p>
              <a href="#" className="publication-link">Read Paper</a>
            </div>
            <div className="publication-item">
              <h3>LSTM-Based Material Demand Forecasting in Smart Manufacturing</h3>
              <p className="publication-meta">2023</p>
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
              <p className="award-org">UOL</p>
              <p className="award-year">2025</p>
            </div>
            <div className="award-card">
              <div className="award-icon">🏆</div>
              <h3>Outstanding Bachelor's Thesis Award</h3>
              <p className="award-org">Shanghai Maritime University</p>
              <p className="award-year">2023</p>
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
            <a href="mailto:yuching-1028@outlook.com" className="contact-btn" data-tooltip="yuching-1028@outlook.com">Email</a>
            <a href="https://github.com/Jyucing1028" target="_blank" rel="noopener noreferrer" className="contact-btn" data-tooltip="Jyucing1028">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-btn" data-tooltip="LinkedIn Profile">LinkedIn</a>
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
