// components/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Filter, X, Users, Star, Zap, Calendar } from 'lucide-react';
import { FaReact, FaNodeJs, FaAws, FaPython } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiNetlify } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'team', name: 'Team Projects' },
    { id: 'webapp', name: 'Web Apps' }
  ];

  const projects = [
    {
      id: 1,
      title: "Netflix Clone 2025",
      description: "Modern Netflix replica with advanced features, real-time streaming simulation, and personalized content recommendations.",
      longDescription: "A feature-rich Netflix clone built with cutting-edge technologies, featuring user authentication, movie trailers, responsive design, and a seamless user experience that mirrors the original platform.",
      image: "https://meryem-hub.github.io/Netflix-Clone-2025",
      technologies: [FaReact, SiTailwindcss, SiExpress],
      techNames: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "#",
      live: "https://meryem-hub.github.io/Netflix-Clone-2025",
      features: [
        "User authentication with JWT",
        "Movie trailer integration",
        "RESTful API with Express",
        "MongoDB database",
        "Responsive design"
      ],
      stats: {
        performance: "95%",
        pagespeed: "90/100",
        complexity: "Advanced"
      },
      status: "completed",
      year: "2025"
    },
    {
      id: 2,
      title: "Amazon Clone",
      description: "Full-stack e-commerce platform with shopping cart, user authentication, and payment integration.",
      longDescription: "A comprehensive Amazon clone featuring product listings, shopping cart functionality, user authentication, and responsive design. Built with modern web technologies for optimal performance.",
      image: "https://amazon-clone-321.netlify.app",
      technologies: [FaReact, SiTailwindcss, FaNodeJs, SiMongodb, SiExpress],
      techNames: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "#",
      live: "https://amazon-clone-321.netlify.app",
      features: [
        "Shopping cart with MongoDB",
        "User authentication & sessions",
        "RESTful API with Express.js",
        "Product search & filtering",
        "Order management system"
      ],
      stats: {
        performance: "92%",
        features: "15+",
        complexity: "Advanced"
      },
      status: "completed",
      year: "2025"
    },
    {
      id: 3,
      title: "Jadoo Travel",
      description: "Beautiful travel booking platform with destination discovery, booking system, and travel guides.",
      longDescription: "A modern travel website offering destination discovery, booking capabilities, and comprehensive travel guides. Features stunning visuals and intuitive user interface for seamless travel planning.",
      image: "https://jadoo-travel21.netlify.app",
      technologies: [FaReact, SiTailwindcss],
      techNames: ["React", "Tailwind CSS", "JavaScript"],
      category: "frontend",
      github: "#",
      live: "https://jadoootravelwebsite.netlify.app/",
      features: [
        "Destination discovery",
        "Booking system",
        "Travel guides",
        "Responsive design",
        "Modern animations"
      ],
      stats: {
        performance: "98%",
        design: "Premium",
        complexity: "Intermediate"
      },
      status: "completed",
      year: "2025"
    },
    {
      id: 4,
      title: "Foodie Finder",
      description: "Team-based restaurant discovery platform with real-time reviews, menu browsing, and location services.",
      longDescription: "A collaborative restaurant discovery platform developed during Kuraz internship. Features include real-time reviews, menu exploration, location-based services, and social features for food enthusiasts.",
      image: "https://foodie-finder121.netlify.app",
      technologies: [FaReact, SiTailwindcss, FaNodeJs],
      techNames: ["React", "Tailwind CSS", "Node.js"],
      category: "team",
      github: "#",
      live: "https://foodie-finder121.netlify.app",
      features: [
        "Restaurant discovery",
        "Real-time reviews",
        "Menu browsing",
        "Location services",
        "Team collaboration"
      ],
      stats: {
        performance: "88%",
        team: "3 members",
        contribution: "Frontend Lead"
      },
      status: "completed",
      year: "2025"
    },
    {
      id: 5,
      title: "Smart Chef Online",
      description: "Interactive cooking platform with recipe management, meal planning, and cooking tutorials.",
      longDescription: "A comprehensive cooking platform that helps users discover recipes, plan meals, and learn cooking techniques. Features include step-by-step instructions, ingredient management, and personalized recommendations.",
      image: "https://smartchefonline.netlify.app",
      technologies: [FaReact, SiTailwindcss, FaNodeJs, SiMongodb, SiExpress],
      techNames: ["React", "Tailwind CSS", "Node.js","Express"],
      category: "fullstack",
      github: "#",
      live: "https://smartchefonline.netlify.app",
      features: [
        "Recipe CRUD operations",
        "User profiles & favorites",
        "RESTful API backend",
        "MongoDB data storage",
        "JWT authentication"
      ],
      stats: {
        performance: "90%",
        recipes: "1000+",
        complexity: "Intermediate"
      },
      status: "completed",
      year: "2025"
    },
    {
      id: 6,
      title: "HifzHub - Quran Memorization",
      description: "Islamic web application for Quran memorization tracking, progress monitoring, and revision scheduling.",
      longDescription: "A specialized web application designed to help Muslims track their Quran memorization progress. Features include verse tracking, progress analytics, revision scheduling, and achievement system to support Hifz journey.",
      image: "/api/placeholder/600/400",
      technologies: [SiNextdotjs, SiTypescript, SiTailwindcss],
      techNames: ["Next.js", "TypeScript", "Tailwind CSS"],
      category: "webapp",
      github: "#",
      live: "#",
      features: [
        "Memorization tracking",
        "Progress analytics",
        "Revision scheduling",
        "Achievement system",
        "Mobile responsive"
      ],
      stats: {
        progress: "In Development",
        features: "25+ planned",
        impact: "Educational"
      },
      status: "development",
      year: "2025"
    },
{
  id: 7,
  title: "EthioAI - AI Solutions",
  description: "Team-based AI platform focusing on Ethiopian language processing and machine learning solutions.",
  longDescription: "An innovative AI platform built during my internship at Nile Tech, focusing on Ethiopian languages and local context. Developed natural language processing capabilities, data analysis tools, and intelligent solutions tailored for Ethiopian businesses and developers. Built collaboratively with a team using the MERN stack.",
  image: "https://ethioai-project.netlify.app", // or your actual image URL
  technologies: [FaReact, FaNodeJs, SiMongodb],
  techNames: ["React", "Node.js", "MongoDB"],
  category: "team", // moved from webapp → team
  github: "https://github.com/meryem-hub/ethioai", // optional if available
  live: "#", // placeholder for live demo
  features: [
    "Amharic language processing",
    "Data analysis dashboard",
    "Team-based development",
    "RESTful API with Node.js",
    "MongoDB integration"
  ],
  stats: {
    performance: "In Development",
    team: "4 members",
    contribution: "Backend & AI Integration"
  },
  status: "development",
  year: "2025"
}
,
    {
      id: 8,
      title: "DevHub - Developer Portfolio Builder",
      description: "AI-powered portfolio builder for developers with automated project imports, resume parsing, and customizable templates.",
      longDescription: "A sophisticated platform that helps developers create stunning portfolios automatically. Features include GitHub project integration, AI-generated descriptions, resume parsing, and multiple responsive templates designed specifically for tech professionals.",
      image: "/api/placeholder/600/400",
      technologies: [SiNextdotjs, SiTypescript, SiTailwindcss, FaAws],
      techNames: ["Next.js 14", "TypeScript", "Tailwind CSS", "AWS"],
      category: "fullstack",
      github: "https://github.com/meryem-hub/devhub",
      live: "#",
      features: [
        "GitHub API integration",
        "AI-generated project descriptions",
        "Resume parsing & analysis",
        "Multiple portfolio templates",
        "Real-time preview",
        "Export as static site"
      ],
      stats: {
        progress: "Development",
        templates: "10+ planned",
        automation: "AI-powered"
      },
      status: "development",
      year: "2025"
    },
    {
      id: 9,
      title: "TaskFlow - Project Management SaaS",
      description: "Enterprise-grade project management platform with AI task automation, team collaboration, and real-time analytics.",
      longDescription: "A comprehensive SaaS platform for project management featuring AI-powered task automation, real-time team collaboration, advanced analytics, and integrations with popular development tools. Built with scalability and enterprise needs in mind.",
      image: "/api/placeholder/600/400",
      technologies: [SiNextdotjs, SiTypescript, SiTailwindcss, FaNodeJs, SiMongodb],
      techNames: ["Next.js 14", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      category: "fullstack",
      github: "https://github.com/meryem-hub/taskflow",
      live: "#",
      features: [
        "AI task prioritization",
        "Real-time team collaboration",
        "Github/Jira integrations",
        "Advanced analytics dashboard",
        "Time tracking & reporting",
        "Custom workflow automation"
      ],
      stats: {
        progress: "Development",
        scalability: "Enterprise",
        integrations: "10+ planned"
      },
      status: "development",
      year: "2025"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => {
        if (activeFilter === 'team') return project.category === 'team';
        return project.category === activeFilter;
      });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'development': return 'text-yellow-400';
      case 'planning': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <div className="w-2 h-2 bg-green-400 rounded-full" />;
      case 'development': return <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />;
      case 'planning': return <div className="w-2 h-2 bg-blue-400 rounded-full" />;
      default: return <div className="w-2 h-2 bg-gray-400 rounded-full" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a2e] overflow-hidden">
      {/* Background Elements */}
    
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
          >
            <Filter className="text-[#FFD700] text-lg" />
            <span className="text-sm font-medium text-gray-300">Real World Projects</span>
           
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700] bg-clip-text text-transparent">
              My Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            From commercial clones to innovative web applications, explore my journey in building 
            digital solutions that solve real-world problems.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[#FFD700] text-black shadow-lg shadow-yellow-400/25'
                  : 'bg-white/5 text-gray-300 border border-white/10 hover:border-[#FFD700]/30'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-[#FFD700]/30 transition-all duration-300 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="p-4 border-b border-white/10 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(project.status)}
                      <span className={`text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-40 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-4xl text-[#FFD700] opacity-50">
                        {project.technologies[0] && React.createElement(project.technologies[0])}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Team Project Badge */}
                    {project.category === 'team' && (
                      <div className="absolute top-3 left-3">
                        <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                          <Users className="w-3 h-3 text-blue-400" />
                          <span className="text-xs text-blue-300">Team</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techNames.map((tech, index) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-[#FFD700] font-bold text-sm">{value}</div>
                          <div className="capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-white/10">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white/5 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                          project.status === 'completed'
                            ? 'bg-[#FFD700] text-black hover:bg-yellow-400'
                            : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                        }`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        {project.status === 'completed' ? 'Live Demo' : 'Coming Soon'}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/meryem-hub"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            <span>Explore More on GitHub</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] rounded-2xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(selectedProject.status)}
                        <span className={getStatusColor(selectedProject.status)}>
                          {selectedProject.status.charAt(0).toUpperCase() + selectedProject.status.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {selectedProject.year}
                      </div>
                      {selectedProject.category === 'team' && (
                        <div className="flex items-center gap-1 text-blue-400">
                          <Users className="w-4 h-4" />
                          Team Project
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <Zap className="w-4 h-4 text-[#FFD700]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                  {selectedProject.status === 'completed' && (
                    <motion.a
                      href={selectedProject.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-[#FFD700] text-black rounded-lg font-medium hover:bg-yellow-400 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;