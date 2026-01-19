import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Moon,
  Briefcase,
  GraduationCap,
  Code,
  Globe,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ExternalLink,
  Award,
  Users,
  Sparkles,
  Download,
  Github,
  Linkedin,
  Smartphone,
  Monitor,
  Zap,
  CheckCircle,
  MessageSquare,
  Target,
  Star,
  Cpu,
  Palette,
  Database,
  GitMerge,
  Rocket,
  UserCheck,
  PieChart,
  Layers,
  GitBranch,
  Shield,
  Menu,
  X,
} from 'lucide-react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Loading animation
    const timer = setTimeout(() => setIsLoading(false), 1000);

    // Scroll progress
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = document.documentElement.scrollTop;
      setScrollProgress((currentScroll / totalScroll) * 100);
      setShowBackToTop(currentScroll > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <div className='app'>
      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className='loading'
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className='loader'></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <div className='scroll-progress' style={{ width: `${scrollProgress}%` }}></div>

      {/* Navigation */}
      <nav className='navbar'>
        <div className='container'>
          <div className='nav-content'>
            <div className='logo' onClick={() => scrollToSection('home')}>
              <Code size={24} />
              <span>Muhammad Usama</span>
            </div>

            <div className='nav-links'>
              {/* Desktop Menu */}
              <div className='desktop-menu'>
                {navItems.map((item) => (
                  <button key={item} onClick={() => scrollToSection(item.toLowerCase())}>
                    {item}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button className='mobile-menu-toggle' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Mobile Menu */}
              <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                {navItems.map((item) => (
                  <button key={item} onClick={() => scrollToSection(item.toLowerCase())}>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className='nav-actions'>
              <button className='theme-toggle' onClick={toggleTheme}>
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a href='#contact' className='btn-contact'>
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='home' className='hero'>
        <div className='container'>
          <div className='hero-content'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='hero-text'
            >
              <div className='hero-badge'>
                <Sparkles size={16} />
                Senior Frontend Developer & Team Lead
              </div>
              <h1>Muhammad Usama</h1>
              <h2 className='hero-subtitle'>
                5+ Years Experience in React.js, Next.js & React Native
              </h2>
              <p className='hero-description'>
                I lead frontend teams to build scalable web and mobile applications. Specializing in
                React ecosystem, client communication, and delivering exceptional user experiences.
              </p>

              <div className='hero-stats'>
                <div className='stat'>
                  <span className='stat-number'>5+</span>
                  <span className='stat-label'>Years Experience</span>
                </div>
                <div className='stat'>
                  <span className='stat-number'>30+</span>
                  <span className='stat-label'>Projects</span>
                </div>
              </div>

              <div className='hero-cta'>
                <a href='#projects' className='btn-primary'>
                  <Rocket size={20} />
                  View Projects
                </a>
                <a href='/M.Usama.pdf' download className='btn-secondary'>
                  <Download size={20} />
                  Download CV
                </a>
                <div className='social-links'>
                  <a href='https://github.com/usama1734' target='_blank' rel='noopener noreferrer'>
                    <Github size={20} />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/muhammad-usama-1b386528b'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='about'>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='section-header'
          >
            <UserCheck className='section-icon' />
            <h2>Professional Profile</h2>
            <p className='section-subtitle'>Senior Frontend Developer with Leadership Experience</p>
          </motion.div>

          <div className='about-content'>
            {[
              {
                icon: <Code size={24} />,
                title: 'Technical Expertise',
                description:
                  '5+ years mastering React.js, Next.js, and React Native. Expert in modern frontend architecture, performance optimization, and scalable application development.',
              },
              {
                icon: <Users size={24} />,
                title: 'Team Leadership',
                description:
                  'Leading teams of 6+ developers, conducting code reviews, and establishing development standards for enterprise projects.',
              },
              {
                icon: <MessageSquare size={24} />,
                title: 'Client Communication',
                description:
                  'Expert in requirements gathering, stakeholder management, and translating business needs into technical specifications.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='about-card'
              >
                <div className='about-icon'>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className='experience'>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='section-header'
          >
            <Briefcase className='section-icon' />
            <h2>Work Experience</h2>
            <p className='section-subtitle'>5+ years of progressive growth</p>
          </motion.div>

          <div className='timeline'>
            {[
              {
                title: 'Senior Software Engineer & Frontend Team Lead',
                company: 'CodeFulcrum',
                period: 'Feb 2022 - Present',
                location: 'Lahore, Pakistan',
                tags: [
                  { icon: <Code size={12} />, label: 'Frontend Lead' },
                  { icon: <Users size={12} />, label: 'Team Management' },
                  { icon: <MessageSquare size={12} />, label: 'Client Liaison' },
                ],
                achievements: [
                  'Lead team of 6+ frontend developers',
                  'Architect scalable React/Next.js solutions',
                  'Mentor junior developers and conduct training',
                  'Client requirements gathering and management',
                  'Improve code quality and development processes',
                ],
              },
              {
                title: 'Software Engineer',
                company: 'Graffites Solutions',
                period: 'Mar 2021 - Jan 2022',
                location: 'Lahore, Pakistan',
                tags: [],
                achievements: [
                  'Developed React & Next.js applications',
                  'Implemented Redux Toolkit for state management',
                  'Collaborated with backend teams on API integration',
                  'Participated in code reviews and agile processes',
                ],
              },
            ].map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='timeline-item'
              >
                <div className='timeline-marker'>
                  <div className='marker-dot'></div>
                </div>
                <div className='timeline-content'>
                  <div className='timeline-header'>
                    <h3>{job.title}</h3>
                    <span className='company'>{job.company}</span>
                    <span className='period'>{job.period}</span>
                    <span className='location'>
                      <MapPin size={14} /> {job.location}
                    </span>
                  </div>
                  {job.tags.length > 0 && (
                    <div className='role-tags'>
                      {job.tags.map((tag, i) => (
                        <span key={i} className='role-tag'>
                          {tag.icon} {tag.label}
                        </span>
                      ))}
                    </div>
                  )}
                  <ul className='achievements'>
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>
                        <CheckCircle size={14} /> {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='skills'>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='section-header'
          >
            <Cpu className='section-icon' />
            <h2>Technical Skills</h2>
            <p className='section-subtitle'>5+ years mastering modern technologies</p>
          </motion.div>

          <div className='skills-grid'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='skill-category'
            >
              <h3>
                <Code size={20} /> Frontend
              </h3>
              <div className='skill-items'>
                {[
                  { name: 'React.js', level: '95%', years: '5+ years' },
                  { name: 'Next.js', level: '90%', years: '4 years' },
                  { name: 'React Native', level: '85%', years: '3 years' },
                  { name: 'TypeScript', level: '88%', years: '4 years' },
                ].map((skill, index) => (
                  <div key={skill.name} className='skill-item' style={{ '--index': index }}>
                    <span className='skill-name'>{skill.name}</span>
                    <div className='skill-bar'>
                      <div className='skill-level' style={{ width: skill.level }}></div>
                    </div>
                    <span className='skill-years'>{skill.years}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='skill-category'
            >
              <h3>
                <Palette size={20} /> UI & Styling
              </h3>
              <div className='skill-tags'>
                {[
                  'Tailwind CSS',
                  'Material-UI',
                  'Chakra UI',
                  'Bootstrap',
                  'HTML',
                  'SCSS/SASS',
                  'CSS3',
                ].map((skill) => (
                  <span key={skill} className='skill-tag'>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='skill-category'
            >
              <h3>
                <Database size={20} /> State & Tools
              </h3>
              <div className='skill-tags'>
                {[
                  'Redux Toolkit',
                  'React Query',
                  'Context API',
                  'Git & GitHub',
                  'Jest',
                  'Webpack',
                ].map((skill) => (
                  <span key={skill} className='skill-tag'>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='projects'>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='section-header'
          >
            <Globe className='section-icon' />
            <h2>Projects</h2>
            <p className='section-subtitle'>Web & Mobile applications delivered</p>
          </motion.div>

          <div className='projects-grid'>
            {[
              {
                type: 'Web App',
                icon: <Monitor size={16} />,
                title: 'MYEPC Platform',
                role: 'Lead Developer',
                description: 'Building energy performance certificate management system.',
                tech: ['React.js', 'TypeScript', 'Mapbox', 'Node.js'],
                link: 'https://app.alta-group.eu/',
              },
              {
                type: 'Web App',
                icon: <Monitor size={16} />,
                title: 'TrackHero',
                role: 'Frontend Lead',
                description: 'Fleet management system with real-time vehicle tracking.',
                tech: ['Next.js', 'TypeScript', 'WebSockets', 'Chart.js'],
                link: 'https://trackhero.com/',
              },
              {
                type: 'Web App',
                icon: <Monitor size={16} />,
                title: 'STRADA AI',
                role: 'Technical Lead',
                description: 'AI-driven building management tool with automation features.',
                tech: ['React.js', 'AI Integration', 'Material-UI', 'Express'],
                link: 'https://www.strada.ai/',
              },
              {
                type: 'Mobile App',
                icon: <Smartphone size={16} />,
                title: 'HealthTrack Pro',
                role: 'Mobile Lead',
                description:
                  'Healthcare monitoring app with real-time vitals tracking and doctor consultation.',
                tech: ['React Native', 'Firebase', 'HealthKit', 'Redux'],
                link: null,
              },
              {
                type: 'Mobile App',
                icon: <Smartphone size={16} />,
                title: 'FoodExpress Delivery',
                role: 'Lead Developer',
                description:
                  'Food delivery app with real-time order tracking and payment integration.',
                tech: ['React Native', 'Google Maps', 'Stripe', 'Node.js'],
                link: null,
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='project-card'
              >
                <div className='project-header'>
                  <div className='project-type'>
                    {project.icon}
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <span className='project-role'>{project.role}</span>
                </div>
                <p className='project-description'>{project.description}</p>
                <div className='project-tech'>
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='project-link'
                  >
                    <ExternalLink size={14} />
                    Visit Site
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='contact'>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='section-header'
          >
            <Mail className='section-icon' />
            <h2>Contact Me</h2>
            <p className='section-subtitle'>Let's build something amazing together</p>
          </motion.div>

          <div className='contact-content'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='contact-info'
            >
              <div className='contact-card'>
                <h3>Get In Touch</h3>
                <p className='contact-description'>
                  Available for senior frontend positions, team lead roles, and challenging
                  projects.
                </p>

                <div className='contact-details'>
                  <div className='contact-item'>
                    <Mail size={20} />
                    <div>
                      <h4>Email</h4>
                      <p>usama171034@gmail.com</p>
                    </div>
                  </div>
                  <div className='contact-item'>
                    <Phone size={20} />
                    <div>
                      <h4>Phone</h4>
                      <p>+92 305 2935815</p>
                    </div>
                  </div>
                  <div className='contact-item'>
                    <MapPin size={20} />
                    <div>
                      <h4>Location</h4>
                      <p>Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>

                <div className='contact-social'>
                  <h4>Connect with me</h4>
                  <div className='social-links'>
                    <a
                      href='https://github.com/usama1734'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='social-link'
                    >
                      <Github size={20} />
                      GitHub
                    </a>
                    <a
                      href='https://www.linkedin.com/in/muhammad-usama-1b386528b'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='social-link'
                    >
                      <Linkedin size={20} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='contact-form'
            >
              <div className='form-card'>
                <h3>Send Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <input type='text' placeholder='Your Name' required />
                  </div>
                  <div className='form-group'>
                    <input type='email' placeholder='Your Email' required />
                  </div>
                  <div className='form-group'>
                    <textarea
                      placeholder='Tell me about your project...'
                      rows='4'
                      required
                    ></textarea>
                  </div>
                  <button type='submit' className='btn-primary'>
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='footer'>
        <div className='container'>
          <div className='footer-content'>
            <div className='footer-brand'>
              <div className='logo'>
                <Code size={24} />
                <span>M.Usama</span>
              </div>
              <p className='footer-description'>Senior Frontend Developer & Team Lead</p>
            </div>

            <div className='footer-links'>
              <div className='link-group'>
                <h4>Navigation</h4>
                {navItems.map((link) => (
                  <button key={link} onClick={() => scrollToSection(link.toLowerCase())}>
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className='footer-bottom'>
            <p>© {new Date().getFullYear()} Muhammad Usama. Senior Frontend Developer.</p>
            <div className='footer-cta'>
              <a href='/M.Usama.pdf' download className='btn-outline'>
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showBackToTop ? 1 : 0, y: showBackToTop ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronRight size={20} style={{ transform: 'rotate(-90deg)' }} />
      </motion.button>
    </div>
  );
}

export default App;
