// components/Experience.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Award, ChevronRight, ExternalLink, Code, Users, GraduationCap,Cpu, BookOpen, Heart } from 'lucide-react';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('kuraz');

  const experiences = {
    kuraz: {
      company: "Kuraz Technology",
      position: "Frontend Developer Intern",
      period: "2025",
      location: "Remote",
      type: "Internship",
      icon: <Code className="w-6 h-6" />,
      color: "from-gray-500 to-cyan-400",
      borderColor: "border-gray-500/30",
      achievements: [
        "Developed and maintained responsive web applications using React.js and TypeScript",
        "Participated in agile development processes and weekly code reviews",
        "Optimized application performance, reducing load times by 30%",
        "Contributed to team projects using Git version control and CI/CD pipelines"
      ],
      technologies: [FaReact, SiTypescript, SiTailwindcss, FaGitAlt],
      techNames: ["React", "TypeScript", "Tailwind CSS", "Git"],
      projects: ["Foodie Finder", "Travel Website", "TipTop"]
    },
    insa: {
  company: "INSA",
  position: "Software Development Trainee",
  period: "2025",
  location: "On-site, Addis Ababa, Ethiopia",
  type: "Training",
  icon: <Cpu className="w-6 h-6" />, // You can use any appropriate icon
  color: "from-blue-500 to-indigo-400",
  borderColor: "border-blue-500/30",
  achievements: [
    "Participated in intensive software development training program",
    "Gained hands-on experience in modern software engineering practices",
    "Collaborated on real-world projects in an on-site environment",
    "Developed skills in problem-solving and technical implementation",
    "Worked with cross-functional teams to deliver software solutions"
  ],
  technologies: [FaReact, FaNodeJs, SiMongodb, FaGitAlt],
  techNames: ["React", "Node.js",'TypeScript' ,"MongoDB", "Git"],
  projects: ["Training Projects", "Team Collaborations", "Practical Assignments"]
},
    nile: {
      company: "Nile Tech",
      position: "Software Development Intern",
      period: "2025",
      location: "Remote",
      type: "Internship",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-emerald-400",
      borderColor: "border-green-500/30",
      achievements: [
        "Assisted in full-stack development of web applications using MERN stack",
        "Implemented RESTful APIs and integrated third-party services",
        "Conducted unit testing and participated in quality assurance processes",
        "Gained experience in database design and management"
      ],
      technologies: [FaReact, FaNodeJs, SiMongodb, SiTailwindcss],
      techNames: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      projects: ["EthioAI Data Labeling Platform"]
    },
    womenTechsters: {
      company: "Women Techsters Fellowship",
      position: "Software Development Trainee",
      period: "2025 - Present",
      location: "Virtual - Cohort 4.1",
      type: "Bootcamp",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-500 to-rose-400",
      borderColor: "border-pink-500/30",
      achievements: [
        "Currently undergoing intensive software development training program",
        "Learning full-stack development with focus on modern web technologies",
        "Participating in collaborative projects and hackathons",
        "Receiving mentorship from industry professionals",
        "Developing skills in problem-solving and technical communication"
      ],
      technologies: [FaReact, FaNodeJs, SiMongodb],
      techNames: ["React", "Node.js", "MongoDB", "JavaScript"],
      projects: ["Ongoing Capstone Project", "Group Assignments", "Technical Workshops"]
    },
    nsda: {
      company: "NSDA",
      position: "Web Development Mentor",
      period: "2025",
      location: "Remote",
      type: "Mentorship",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-orange-500 to-amber-400",
      borderColor: "border-orange-500/30",
      achievements: [
        "Mentored beginners in web development fundamentals (HTML, CSS, JavaScript)",
        "Conducted coding workshops and practical sessions",
        "Provided guidance on project development and best practices",
        "Helped students build their first web applications",
        "Fostered inclusive learning environment for aspiring developers"
      ],
      technologies: [FaReact, SiTailwindcss],
      techNames: ["HTML/CSS", "JavaScript"],
      projects: ["Student Projects", "Workshop Materials"]
    }
  };

  const education = {
    degree: "Bachelor of Science in Electrical and Computer Engineering",
    university: "Hawassa University",
    period: "2023 - 2027 (Expected)",
    location: "Hawassa, Ethiopia",
    achievements: [
      "Current Focus: Software Engineering and Web Technologies",
      "Relevant Courses: Programming Fundamentals, Data Structures, Computer Networks",
      "Participating in tech clubs and coding communities",
      "Building practical projects alongside academic studies"
    ]
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
    <section id="experience" className="relative py-20 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a2e] overflow-hidden">
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
            <Award className="text-[#FFD700] text-lg" />
            <span className="text-sm font-medium text-gray-300">Career Journey</span>
         
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[rgb(255,215,0)] bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            From university studies to professional internships and mentorship roles, 
            my journey in technology continues to evolve and expand.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Tabs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Tab Navigation */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {Object.entries(experiences).map(([key, experience]) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-3 ${
                    activeTab === key
                      ? 'bg-[#FFD700] text-black shadow-lg shadow-yellow-400/25'
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:border-[#FFD700]/30'
                  }`}
                >
                  <div className={`p-1 rounded-lg ${
                    activeTab === key ? 'bg-black/20' : 'bg-white/10'
                  }`}>
                    {experience.icon}
                  </div>
                  {experience.company}
                </motion.button>
              ))}
            </motion.div>

            {/* Experience Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {experiences[activeTab].position}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-300 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {experiences[activeTab].period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {experiences[activeTab].location}
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${experiences[activeTab].color} text-white`}>
                    {experiences[activeTab].type}
                  </span>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#FFD700]" />
                    Key Achievements & Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {experiences[activeTab].achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <ChevronRight className="w-4 h-4 text-[#FFD700] mt-1 flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies & Projects */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeTab].techNames.map((tech, index) => {
                        const IconComponent = experiences[activeTab].technologies[index];
                        return (
                          <span
                            key={tech}
                            className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10"
                          >
                            {IconComponent && React.createElement(IconComponent, { className: "w-4 h-4" })}
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Projects</h4>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeTab].projects.map((project) => (
                        <span
                          key={project}
                          className="px-3 py-2 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-[#FFD700] to-yellow-400 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {education.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {education.location}
                    </div>
                  </div>
                  <p className="text-gray-400 mt-2">{education.university}</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Academic Highlights</h4>
                <ul className="space-y-3">
                  {education.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <ChevronRight className="w-4 h-4 text-[#FFD700] mt-1 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
      <motion.a
  href="/resume.pdf"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-yellow-400 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300"
  download  // Add this attribute to force download
>
  <ExternalLink className="w-5 h-5" />
  <span>Download Resume</span>
</motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;