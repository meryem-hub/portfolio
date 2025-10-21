// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart, Code, Palette, Lightbulb, Zap } from 'lucide-react';
import { FaReact, FaNodeJs,FaJs, FaAws, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiAmazon,SiMongodb, } from 'react-icons/si';

const About = () => {
  const stats = [
    { icon: Award, number: "25+", label: "Projects Completed" },
    { icon: Clock, number: "2+", label: "Years Experience" },
    { icon: Heart, number: "100%", label: "Client Satisfaction" },
    { icon: Code, number: "8+", label: "Technologies Mastered" }

  ];

 const skills = [
  { name: "Next.js", level: 76, icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", level: 65, icon: SiTypescript, color: "text-blue-500" },
  { name: "JavaScript", level: 96, icon: FaJs, color: "text-yellow-400" },
  { name: "Node.js", level: 90, icon: FaNodeJs, color: "text-green-500" },
  { name: "MongoDB", level: 85, icon: SiMongodb, color: "text-green-400" },
  { name: "Tailwind CSS", level: 100, icon: SiTailwindcss, color: "text-cyan-300" }
];

  const principles = [
    { 
      icon: Code, 
      title: "Clean Architecture", 
      description: "Scalable, maintainable code following best practices",
      gradient: "from-cyan-400 to-blue-500"
    },
    { 
      icon: Zap, 
      title: "Performance First", 
      description: "Lightning-fast applications optimized for speed",
      gradient: "from-[#FFD700] to-yellow-300"
    },
    { 
      icon: Palette, 
      title: "Beautiful UX", 
      description: "Intuitive interfaces with pixel-perfect design",
      gradient: "from-purple-400 to-pink-500"
    },
    { 
      icon: Lightbulb, 
      title: "Innovation", 
      description: "Leveraging cutting-edge technologies and patterns",
      gradient: "from-green-400 to-cyan-400"
    }
  ];

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
    <section id="about" className="relative py-20 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a2e] overflow-hidden">
      {/* Background Elements */}

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4"
              >
                <SiAmazon className="text-[#FFD700] text-xl" />
                <span className="text-sm font-medium text-gray-300">Senior Frontend Engineer</span>
                <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold"
              >
                <span className="bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700] bg-clip-text text-transparent">
                  About Me
                </span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 text-gray-300 text-lg leading-relaxed"
            >
              <p>
                With <span className="text-[#FFD700] font-semibold">1+ years</span> of experience at Amazon, 
                I've dedicated my career to pushing the boundaries of web development and creating 
                exceptional digital experiences at scale.
              </p>
              
              <p>
                As a Frontend Engineer, I specialize in building robust, scalable applications 
                using modern technologies like React, TypeScript, and Next.js. My expertise lies in 
                creating intuitive user interfaces that combine beautiful design with cutting-edge 
                functionality.
              </p>
              
              <p>
                I'm passionate about mentoring developers, contributing to open-source projects, 
                and staying at the forefront of emerging technologies. My approach combines technical 
                excellence with user-centered design principles to deliver products that users love.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300 group"
                >
                  <stat.icon className="w-8 h-8 text-[#FFD700] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Skills Progress */}
        {/* Skills Progress */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
>
  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
    <Zap className="text-[#FFD700]" />
    Technical Expertise
  </h3>

  <div className="space-y-6">
    {skills.map((skill, index) => {
      const IconComponent = skill.icon;
      return (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <IconComponent className={`${skill.color} text-lg`} />
              <span className="text-gray-300 font-medium">{skill.name}</span>
            </div>
            <span className="text-[#FFD700] font-bold">{skill.level}%</span>
          </div>

          {/* Background bar */}
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            {/* Animated fill bar */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
              className="h-full bg-white rounded-full shadow-[0_0_10px_white]"
            />
          </div>
        </div>
      );
    })}
  </div>
</motion.div>

            {/* Principles Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${principle.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-bold mb-2 text-sm">{principle.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-yellow-400 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300"
          >
            <span>View My Journey</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;