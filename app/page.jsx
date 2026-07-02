'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Code, Terminal, Briefcase, User, Download, ExternalLink, ChevronDown, Award, FileText, Eye } from 'lucide-react';

const PortfolioWebsite = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [terminalText, setTerminalText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCertFilter, setSelectedCertFilter] = useState('all');
  
  const fullText = "Full Stack Developer";
  
  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: 'My-Drive',
      description: 'Cloud storage app dengan Firebase Auth, Cloudinary Storage, dan IndexedDB. Dual save system 45GB total capacity.',
      tech: ['JavaScript', 'Firebase', 'Cloudinary', 'IndexedDB', 'HTML5', 'CSS3'],
      image: '☁️',
      category: 'fullstack',
      link: 'https://simpandata.netlify.app/',
      github: 'https://github.com/Ariefnaufal67/drive'
    },
    {
      title: 'Peringkas Teks AI',
      description: 'Peringkas Teks dengan AI',
      tech: ['HTML', 'CSS', 'JavaScript', 'OpenAI API'],
      image: '📝',
      category: 'frontend',
      link: '/peringkas-teks.html',
      github: 'https://github.com/Ariefnaufal67/peringkas-teks.git'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task manager dengan drag & drop',
      tech: ['Next.js', 'Tailwind', 'Firebase'],
      image: '✅',
      category: 'frontend',
      link: 'https://taskmanagementpro.vercel.app/',
      github: 'https://github.com/Ariefnaufal67/Task-Management'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather data visualization',
      tech: ['React', 'Chart.js', 'API Integration'],
      image: '🌤️',
      category: 'frontend',
      link: '#',
      github: '#'
    },
    {
      title: 'Portfolio CMS',
      description: 'Headless CMS untuk portfolio websites',
      tech: ['Next.js', 'Sanity', 'TypeScript'],
      image: '📝',
      category: 'fullstack',
      link: '#',
      github: '#'
    }
  ];

  const skills = [
    { name: 'React', level: 70, category: 'frontend' },
    { name: 'Next.js', level: 80, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'language' },
    { name: 'Tailwind CSS', level: 75, category: 'frontend' },
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Mysql', level: 80, category: 'database' },
    { name: 'PostgreSQL', level: 70, category: 'database' },
    { name: 'Git', level: 86, category: 'tools' },
  ];

  const certificates = [
    // === IBM (via Coursera) ===
    {
      title: 'Supervised Machine Learning: Classification',
      provider: 'Coursera',
      issuer: 'IBM',
      date: 'November 2025',
      credentialId: '1EL0SUFYTZE5',
      file: '/Coursera 1EL0SUFYTZE5.pdf',
      icon: '🎓',
      category: 'coursera'
    },
    {
      title: 'Supervised Machine Learning: Regression',
      provider: 'Coursera',
      issuer: 'IBM',
      date: 'November 2025',
      credentialId: 'SL2HRSMFSW40',
      file: '/Coursera SL2HRSMFSW40.pdf',
      icon: '📈',
      category: 'coursera'
    },
    {
      title: 'Exploratory Data Analysis for Machine Learning',
      provider: 'Coursera',
      issuer: 'IBM',
      date: 'October 2025',
      credentialId: 'CYPLBRLW9MX9',
      file: '/Coursera CYPLBRLW9MX9.pdf',
      icon: '📊',
      category: 'coursera'
    },
    {
      title: 'Introduction to Artificial Intelligence (AI)',
      provider: 'Coursera',
      issuer: 'IBM',
      date: 'November 2025',
      credentialId: 'B5V5UTW2R15W',
      file: '/Coursera_4513_15048_Arief.pdf',
      icon: '🤖',
      category: 'coursera'
    },
    {
      title: 'Introduction to Software, Programming, and Databases',
      provider: 'Coursera',
      issuer: 'IBM',
      date: 'April 2026',
      credentialId: '88OJVNM3RIZJ',
      file: '/Coursera 88OJVNM3RIZJ.pdf',
      icon: '💻',
      category: 'coursera'
    },
    {
      title: 'Introduction to Hardware and Operating Systems',
      provider: 'Coursera',
      issuer: 'IBM',
      date: 'April 2026',
      credentialId: 'ES1N84MMSMZZ',
      file: '/Coursera ES1N84MMSMZZ.pdf',
      icon: '💾',
      category: 'coursera'
    },
    {
      title: 'Introduction to Networking and Storage',
      provider: 'Coursera',
      issuer: 'IBM',
      date: 'April 2026',
      credentialId: 'TMLYPUTD3OMK',
      file: '/Coursera TMLYPUTD3OMK.pdf',
      icon: '🌐',
      category: 'coursera'
    },
    {
      title: 'Introduction to Cloud Computing',
      provider: 'Coursera',
      issuer: 'IBM',
      date: 'April 2026',
      credentialId: 'HS01MW3YPCIC',
      file: '/Coursera HS01MW3YPCIC.pdf',
      icon: '☁️',
      category: 'coursera'
    },
    {
      title: 'Introduction to Cybersecurity Essentials',
      provider: 'Coursera',
      issuer: 'IBM',
      date: 'April 2026',
      credentialId: 'O5SQSYTUNXMG',
      file: '/Coursera O5SQSYTUNXMG.pdf',
      icon: '🛡️',
      category: 'coursera'
    },
    {
      title: 'Introduction to Cybersecurity Careers',
      provider: 'Coursera',
      issuer: 'IBM',
      date: 'April 2026',
      credentialId: 'H4D7MSYXWKYI',
      file: '/Coursera H4D7MSYXWKYI.pdf',
      icon: '🕵️',
      category: 'coursera'
    },
    // === ISC2 (via Coursera) ===
    {
      title: 'Security Principles',
      provider: 'Coursera',
      issuer: 'ISC2',
      date: 'April 2026',
      credentialId: '8URAOOZWHN2Y',
      file: '/Coursera 8URAOOZWHN2Y.pdf',
      icon: '🔐',
      category: 'coursera'
    },
    {
      title: 'Access Control Concepts',
      provider: 'Coursera',
      issuer: 'ISC2',
      date: 'April 2026',
      credentialId: '0RQSWIWG6NXS',
      file: '/Coursera 0RQSWIWG6NXS.pdf',
      icon: '🔑',
      category: 'coursera'
    },
    {
      title: 'Network Security',
      provider: 'Coursera',
      issuer: 'ISC2',
      date: 'April 2026',
      credentialId: '2KPXF8Z3B60L',
      file: '/Coursera 2KPXF8Z3B60L.pdf',
      icon: '🌐',
      category: 'coursera'
    },
    {
      title: 'Incident Response, BC, and DR Concepts',
      provider: 'Coursera',
      issuer: 'ISC2',
      date: 'April 2026',
      credentialId: '0A0IQY7AF7T4',
      file: '/Coursera 0A0IQY7AF7T4.pdf',
      icon: '🚨',
      category: 'coursera'
    },
    // === Dicoding ===
    {
      title: 'Belajar Dasar Pemrograman Web',
      provider: 'Dicoding',
      issuer: 'Dicoding Indonesia',
      date: 'Juni 2026',
      credentialId: 'KEXLQDVORPG2',
      file: '/sertifikat_course_123_4026307_190626130127.pdf',
      icon: '🌐',
      category: 'dicoding'
    },
    {
      title: 'Belajar Dasar Pemrograman JavaScript',
      provider: 'Dicoding',
      issuer: 'Dicoding Indonesia',
      date: 'Juni 2026',
      credentialId: 'EYX4Q3V2WPDL',
      file: '/sertifikat_course_256_4026307_300626183834.pdf',
      icon: '📜',
      category: 'dicoding'
    },
    {
      title: 'Belajar Membuat Front-End Web untuk Pemula',
      provider: 'Dicoding',
      issuer: 'Dicoding Indonesia',
      date: 'Juni 2026',
      credentialId: '81P2OYL5QZOY',
      file: '/sertifikat_course_315_4026307_300626221035.pdf',
      icon: '🎨',
      category: 'dicoding'
    },
    {
      title: 'Belajar Dasar Cloud dan Gen AI di AWS',
      provider: 'Dicoding',
      issuer: 'Dicoding Indonesia x AWS',
      date: 'Februari 2026',
      credentialId: 'MRZMWKYJRPYQ',
      file: '/sertifikat_course_251_4026307_200226144128.pdf',
      icon: '☁️',
      category: 'dicoding'
    },
    {
      title: 'Introduction to Financial Literacy',
      provider: 'Dicoding',
      issuer: 'Dicoding Indonesia',
      date: 'Desember 2025',
      credentialId: '1OP8J8VVVPQK',
      file: '/sertifikat_course_905_4026307_311225095452.pdf',
      icon: '💰',
      category: 'dicoding'
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  const filteredCertificates = selectedCertFilter === 'all'
    ? certificates
    : certificates.filter(c => c.category === selectedCertFilter);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-purple-500' : 'bg-purple-300'
          }`}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
        <div 
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-blue-500' : 'bg-blue-300'
          }`}
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg ${
        darkMode ? 'bg-gray-900/50 border-gray-700' : 'bg-white/50 border-gray-200'
      } border-b`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className={darkMode ? 'text-purple-400' : 'text-purple-600'} size={24} />
            <span className={`font-mono font-bold text-xl ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>{'Portofolio'}</span>
          </div>
          
          <div className="hidden md:flex gap-8">
            {['Home', 'About', 'Projects', 'Skills', 'Certificates', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors ${
                  darkMode 
                    ? 'text-gray-300 hover:text-purple-400' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-full transition-all ${
              darkMode 
                ? 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30' 
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }`}
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>

      {/* Hero Section with Terminal Theme */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl w-full">
          <div className={`backdrop-blur-xl rounded-2xl p-8 shadow-2xl border ${
            darkMode 
              ? 'bg-gray-800/30 border-gray-700/50' 
              : 'bg-white/30 border-white/50'
          }`}>
            {/* Terminal Header */}
            <div className={`flex items-center gap-2 mb-6 pb-4 border-b ${
              darkMode ? 'border-gray-700' : 'border-gray-300'
            }`}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className={`font-mono text-sm ml-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>~/portfolio</span>
            </div>

            {/* Terminal Content */}
            <div className="font-mono">
              <p className={darkMode ? 'text-green-400' : 'text-green-600'}>
                <span className={darkMode ? 'text-purple-400' : 'text-purple-600'}></span> whoami
              </p>
              <h1 className={`text-5xl md:text-7xl font-bold my-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Arief Naufal Al Azmi
              </h1>
              <p className={`text-2xl md:text-3xl mb-8 ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`}>
                {terminalText}
                <span className="animate-pulse">_</span>
              </p>
              
              <p className={`text-lg mb-8 max-w-2xl ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Perkenalkan Nama saya Arief Naufal Al Azmi, 
                seorang Full Stack Developer. 
                Saya memiliki beberapa keahlian dalam berbagai teknologi seperti React, Next.js, Node.js. 
                Saya selalu bersemangat untuk belajar hal baru dan siap menghadapi tantangan dalam dunia pengembangan web Development.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}>
                  <Download size={20} />
                  Download CV
                </button>
                <button className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all border-2 ${
                  darkMode 
                    ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10' 
                    : 'border-purple-600 text-purple-600 hover:bg-purple-100'
                }`}>
                  <Mail size={20} />
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 animate-bounce">
            <ChevronDown className={darkMode ? 'text-purple-400' : 'text-purple-600'} size={32} />
          </div>
        </div>
      </section>

      {/* About Section - Bento Grid */}
      <section id="about" className="min-h-screen px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card */}
            <div className={`md:col-span-2 backdrop-blur-xl rounded-2xl p-8 shadow-xl border transform hover:scale-105 transition-all ${
              darkMode 
                ? 'bg-gray-800/40 border-gray-700/50' 
                : 'bg-white/40 border-white/50'
            }`}>
              <User className={`mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} size={32} />
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                My Story
              </h3>
              <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Started my journey in web development 5 years ago. Since then, I've worked on 
                numerous projects ranging from small business websites to large-scale enterprise 
                applications. I love turning complex problems into simple, beautiful solutions.
              </p>
            </div>

            {/* Small Card 1 */}
            <div className={`backdrop-blur-xl rounded-2xl p-8 shadow-xl border transform hover:scale-105 transition-all ${
              darkMode 
                ? 'bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-700/50' 
                : 'bg-gradient-to-br from-purple-100/40 to-blue-100/40 border-purple-200/50'
            }`}>
              <Code className={`mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} size={32} />
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                3
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Projects Completed
              </p>
            </div>

            {/* Small Card 2 */}
            <div className={`backdrop-blur-xl rounded-2xl p-8 shadow-xl border transform hover:scale-105 transition-all ${
              darkMode 
                ? 'bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-700/50' 
                : 'bg-gradient-to-br from-blue-100/40 to-purple-100/40 border-blue-200/50'
            }`}>
              <Briefcase className={`mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={32} />
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                0
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Years Experience
              </p>
            </div>

            {/* Medium Card */}
            <div className={`md:col-span-2 backdrop-blur-xl rounded-2xl p-8 shadow-xl border transform hover:scale-105 transition-all ${
              darkMode 
                ? 'bg-gray-800/40 border-gray-700/50' 
                : 'bg-white/40 border-white/50'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                What I Do
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Frontend Development', 'Backend Development', 'UI/UX Design', 'API Integration'].map((service) => (
                  <div 
                    key={service}
                    className={`p-4 rounded-lg ${
                      darkMode ? 'bg-purple-500/10' : 'bg-purple-100'
                    }`}
                  >
                    <p className={`font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'frontend', 'backend', 'fullstack'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedFilter === filter
                    ? darkMode
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-600 text-white'
                    : darkMode
                      ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                      : 'bg-white/50 text-gray-700 hover:bg-white/70'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group backdrop-blur-xl rounded-2xl p-6 shadow-xl border transform hover:scale-105 transition-all ${
                  darkMode 
                    ? 'bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/60' 
                    : 'bg-white/40 border-white/50 hover:bg-white/60'
                }`}
              >
                <div className="text-6xl mb-4">{project.image}</div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        darkMode 
                          ? 'bg-purple-500/20 text-purple-300' 
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                      darkMode 
                        ? 'text-purple-400 hover:text-purple-300' 
                        : 'text-purple-600 hover:text-purple-700'
                    }`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                      darkMode 
                        ? 'text-gray-400 hover:text-gray-300' 
                        : 'text-gray-600 hover:text-gray-700'
                    }`}
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`backdrop-blur-xl rounded-xl p-6 shadow-xl border ${
                  darkMode 
                    ? 'bg-gray-800/40 border-gray-700/50' 
                    : 'bg-white/40 border-white/50'
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {skill.name}
                  </span>
                  <span className={`text-sm ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    {skill.level}%
                  </span>
                </div>
                <div className={`w-full h-3 rounded-full overflow-hidden ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="min-h-screen px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Certificates & Achievements
          </h2>

          <p className={`text-center mb-12 text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Professional certifications and courses completed
          </p>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'coursera', 'dicoding'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedCertFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCertFilter === filter
                    ? darkMode
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-600 text-white'
                    : darkMode
                      ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                      : 'bg-white/50 text-gray-700 hover:bg-white/70'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert, index) => (
              <div
                key={index}
                className={`group backdrop-blur-xl rounded-2xl p-6 shadow-xl border transform hover:scale-105 transition-all ${
                  darkMode 
                    ? 'bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/60' 
                    : 'bg-white/40 border-white/50 hover:bg-white/60'
                }`}
              >
                {/* Icon/Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl">{cert.icon}</div>
                  <Award className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} size={28} />
                </div>

                {/* Certificate Info */}
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {cert.title}
                </h3>
                
                <p className={`text-sm mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                  {cert.provider}
                </p>
                
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {cert.issuer} • {cert.date}
                </p>

                <p className={`text-xs mb-4 font-mono ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  ID: {cert.credentialId}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      darkMode 
                        ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    <Eye size={16} />
                    View
                  </a>
                  <a
                    href={cert.file}
                    download
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all border-2 ${
                      darkMode 
                        ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10' 
                        : 'border-purple-600 text-purple-600 hover:bg-purple-100'
                    }`}
                  >
                    <Download size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Work Together
          </h2>
          <p className={`text-center mb-12 text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Have a project in mind? Let's discuss how we can work together.
          </p>

          <div className={`backdrop-blur-xl rounded-2xl p-8 shadow-2xl border ${
            darkMode 
              ? 'bg-gray-800/40 border-gray-700/50' 
              : 'bg-white/40 border-white/50'
          }`}>
            <form className="space-y-6">
              <div>
                <label className={`block mb-2 font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all border-2 ${
                    darkMode 
                      ? 'bg-gray-900/50 border-gray-700 text-white focus:border-purple-500' 
                      : 'bg-white/50 border-gray-300 text-gray-900 focus:border-purple-500'
                  }`}
                  placeholder="Arief Naufal Al Azmi"
                />
              </div>

              <div>
                <label className={`block mb-2 font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all border-2 ${
                    darkMode 
                      ? 'bg-gray-900/50 border-gray-700 text-white focus:border-purple-500' 
                      : 'bg-white/50 border-gray-300 text-gray-900 focus:border-purple-500'
                  }`}
                  placeholder="azminaufalarief54@gmail.com"
                />
              </div>

              <div>
                <label className={`block mb-2 font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Message
                </label>
                <textarea
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all border-2 ${
                    darkMode 
                      ? 'bg-gray-900/50 border-gray-700 text-white focus:border-purple-500' 
                      : 'bg-white/50 border-gray-300 text-gray-900 focus:border-purple-500'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button className={`w-full py-4 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                darkMode 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}>
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-gray-700">
              <a 
                href="https://github.com/Ariefnaufal67" 
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-purple-600' 
                    : 'bg-gray-200 hover:bg-purple-600'
                }`}
              >
                <Github className="text-white" size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/arief-naufal-35469a211/" 
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-blue-600' 
                    : 'bg-gray-200 hover:bg-blue-600'
                }`}
              >
                <Linkedin className="text-white" size={24} />
              </a>
              <a 
                href="mailto:azminaufalanef54@gmail.com"
                className={`p-3 rounded-full transition-all hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-red-600' 
                    : 'bg-gray-200 hover:bg-red-600'
                }`}
              >
                <Mail className="text-white" size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center border-t ${
        darkMode 
          ? 'border-gray-700 text-gray-400' 
          : 'border-gray-300 text-gray-600'
      }`}>
        <p className="font-mono">
          © 2024 Arief Naufal Al Azmi. Built with Next.js & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
