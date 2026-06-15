import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Moon,
  Briefcase,
  Code,
  Globe,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ExternalLink,
  Users,
  Sparkles,
  Download,
  Github,
  Linkedin,
  Monitor,
  CheckCircle,
  MessageSquare,
  Cpu,
  Palette,
  Database,
  Rocket,
  UserCheck,
  Menu,
  X,
  GraduationCap,
  Cloud,
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

  const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'];

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
                Senior Full-Stack Engineer | AI-Augmented Product Engineering
              </div>
              <h1>Muhammad Usama</h1>
              <h2 className='hero-subtitle'>React.js · Next.js · Node.js · TypeScript</h2>
              <p className='hero-description'>
                Senior Full-Stack Engineer with 5+ years building scalable, production-grade web
                applications. Experienced in frontend architecture, API integration, data-driven
                workflows, technical leadership, and using modern AI tools to accelerate delivery.
              </p>

              <div className='hero-stats'>
                <div className='stat'>
                  <span className='stat-number'>5+</span>
                  <span className='stat-label'>Years Experience</span>
                </div>
                <div className='stat'>
                  <span className='stat-number'>30+</span>
                  <span className='stat-label'>Featured Platforms</span>
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
            <p className='section-subtitle'>
              Senior Full-Stack Engineer with Product Engineering Focus
            </p>
          </motion.div>

          <div className='about-content'>
            {[
              {
                icon: <Code size={24} />,
                title: 'Full-Stack Engineering',
                description:
                  '5+ years building production-grade applications with React.js, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, MongoDB, Prisma, and AWS.',
              },
              {
                icon: <Users size={24} />,
                title: 'Technical Leadership',
                description:
                  'Leading technical decisions, mentoring developers, conducting code reviews, and translating business requirements into scalable engineering solutions.',
              },
              {
                icon: <Sparkles size={24} />,
                title: 'AI-Augmented Delivery',
                description:
                  'Using AI-assisted development for prompt-driven debugging, refactoring, documentation, test planning, and workflow automation to improve delivery efficiency.',
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
                title: 'Senior Software Engineer',
                company: 'CodeFulcrum',
                period: 'Feb 2022 - Present',
                location: 'Lahore, Pakistan',
                tags: [
                  { icon: <Code size={12} />, label: 'Full-Stack' },
                  { icon: <Users size={12} />, label: 'Mentorship' },
                  { icon: <MessageSquare size={12} />, label: 'Client Delivery' },
                ],
                achievements: [
                  'Lead full-stack delivery using React.js, Next.js, TypeScript, Node.js, and Express.js',
                  'Define scalable project structures, component systems, routing, and state management',
                  'Integrate REST APIs and data-driven workflows with PostgreSQL, MongoDB, and Prisma',
                  'Support production readiness with AWS and deployment workflow configuration',
                  'Mentor developers and use AI-assisted tools to accelerate debugging and documentation',
                ],
              },
              {
                title: 'Software Engineer',
                company: 'Graffitecs Solutions',
                period: 'Mar 2021 - Jan 2022',
                location: 'Lahore, Pakistan',
                tags: [],
                achievements: [
                  'Developed responsive web interfaces using React.js, Next.js, TypeScript, HTML, and CSS',
                  'Implemented reusable UI components and frontend workflows aligned with business needs',
                  'Integrated backend APIs, handled data rendering, and supported end-user debugging',
                  'Collaborated through code reviews, troubleshooting, and documentation',
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
            <p className='section-subtitle'>Full-stack, cloud, and AI-augmented engineering</p>
          </motion.div>

          <div className='skills-grid'>
            {[
              {
                icon: <Code size={20} />,
                title: 'Frontend',
                skills: [
                  'React.js',
                  'Next.js',
                  'TypeScript',
                  'JavaScript',
                  'Redux Toolkit',
                  'React Query',
                  'HTML5',
                  'CSS3',
                  'Tailwind CSS',
                  'Material UI',
                  'Chakra UI',
                  'Bootstrap',
                  'SCSS',
                  'Angular',
                ],
              },
              {
                icon: <Database size={20} />,
                title: 'Backend & Databases',
                skills: [
                  'Node.js',
                  'Express.js',
                  'REST APIs',
                  'Authentication',
                  'PostgreSQL',
                  'MongoDB',
                  'Prisma ORM',
                  'Data Modeling',
                ],
              },
              {
                icon: <Cloud size={20} />,
                title: 'Cloud & DevOps',
                skills: [
                  'AWS',
                  'Git',
                  'GitHub',
                  'CI/CD',
                  'Deployment Workflows',
                  'Environment Configuration',
                ],
              },
              {
                icon: <Palette size={20} />,
                title: 'Architecture',
                skills: [
                  'Scalable Frontend Architecture',
                  'Reusable Components',
                  'Responsive Design',
                  'Performance Optimization',
                  'Code Reviews',
                  'Technical Documentation',
                ],
              },
              {
                icon: <Sparkles size={20} />,
                title: 'AI & Productivity',
                skills: [
                  'AI-Assisted Development',
                  'Prompt-Driven Debugging',
                  'Refactoring',
                  'Documentation',
                  'Test Planning',
                  'Workflow Automation',
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='skill-category'
              >
                <h3>
                  {category.icon} {category.title}
                </h3>
                <div className='skill-tags'>
                  {category.skills.map((skill) => (
                    <span key={skill} className='skill-tag'>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
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
            <p className='section-subtitle'>
              Production platforms across energy, fleet, AI, e-commerce, and education
            </p>
          </motion.div>

          <div className='projects-grid'>
            {[
              {
                type: 'Web App',
                icon: <Monitor size={16} />,
                title: 'MYEPC',
                role: 'Energy Certification & Document Management',
                description:
                  'Developed React.js and TypeScript interfaces, integrated APIs, and implemented map and document management workflows for building energy performance certification.',
                tech: ['React.js', 'TypeScript', 'REST APIs', 'Map Integration'],
                link: 'https://app.myepc.be/',
              },
              {
                type: 'Web App',
                icon: <Monitor size={16} />,
                title: 'TrackHero',
                role: 'Fleet Management Platform',
                description:
                  'Built Next.js-based interfaces and integrated real-time data APIs for vehicle tracking, reporting, and fleet activity management.',
                tech: ['Next.js', 'TypeScript', 'REST APIs', 'Real-time Data'],
                link: 'https://trackhero.com/',
              },
              {
                type: 'Web App',
                icon: <Monitor size={16} />,
                title: 'STRADA',
                role: 'AI-Enabled Building Management',
                description:
                  'Developed UI modules and integrated AI-supported workflows for automated task generation, vendor management, certifications, and events.',
                tech: ['React.js', 'TypeScript', 'AI Integration', 'Material UI'],
                link: 'https://strada.ai/',
              },
              {
                type: 'Web App',
                icon: <Monitor size={16} />,
                title: 'Lalaji',
                role: 'Marketplace & E-Commerce Platform',
                description:
                  'Implemented marketplace UI features including cart, billing, product flows, and checkout experiences.',
                tech: ['React.js', 'Next.js', 'E-Commerce', 'Responsive UI'],
                link: 'https://lalaaji.com/',
              },
              {
                type: 'Web App',
                icon: <Monitor size={16} />,
                title: 'SkoolFame',
                role: 'School Management Platform',
                description:
                  'Designed and developed interfaces for school management, user groups, posts, and administrative workflows.',
                tech: ['React.js', 'TypeScript', 'Admin Dashboards', 'User Management'],
                link: 'https://skoolfame.com/',
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

      {/* Education Section */}
      <section id='education' className='experience'>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='section-header'
          >
            <GraduationCap className='section-icon' />
            <h2>Education</h2>
            <p className='section-subtitle'>Academic foundation in computer science</p>
          </motion.div>

          <div className='timeline'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='timeline-item'
            >
              <div className='timeline-marker'>
                <div className='marker-dot'></div>
              </div>
              <div className='timeline-content'>
                <div className='timeline-header'>
                  <h3>Bachelor of Computer Science (BSCS)</h3>
                  <span className='company'>
                    Khawaja Fareed University of Engineering and Information Technology
                  </span>
                  <span className='period'>Feb 2017 - Feb 2021</span>
                  <span className='location'>
                    <MapPin size={14} /> Rahim Yar Khan, Pakistan
                  </span>
                </div>
              </div>
            </motion.div>
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
                  Available for senior full-stack engineering roles, technical leadership
                  opportunities, and challenging product engineering projects.
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
              <p className='footer-description'>
                Senior Full-Stack Engineer | AI-Augmented Product Engineering
              </p>
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
            <p>© {new Date().getFullYear()} Muhammad Usama. Senior Full-Stack Engineer.</p>
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
