import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { FaReact, FaJs, FaNodeJs, FaAws, FaGithub, FaLinkedin, FaArrowRight, FaCode, FaPalette, FaLightbulb, FaTools, FaMobile, FaCloud, FaServer } from "react-icons/fa";
import { SiTypescript, SiAmazon, SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  const texts = [
    { 
      title: "Full-Stack Developer", 
      icon: FaCode,
      color: "text-blue-400"
    },
    { 
      title: "UI/UX Enthusiast", 
      icon: FaPalette,
      color: "text-pink-400"
    },
    { 
      title: "Tech Innovator", 
      icon: FaLightbulb,
      color: "text-yellow-400"
    },
    { 
      title: "Problem Solver", 
      icon: FaTools,
      color: "text-green-400"
    },
    { 
      title: "React Specialist", 
      icon: FaReact,
      color: "text-cyan-400"
    },
    { 
      title: "Mobile First Developer", 
      icon: FaMobile,
      color: "text-purple-400"
    }
  ];

  const techIcons = [
    { icon: FaReact, name: "React", color: "text-cyan-400" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
    { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-300" },
    { icon: FaAws, name: "AWS", color: "text-orange-400" },
  ];

  // Mouse parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  const backgroundX = useTransform(smoothX, [-100, 100], [-30, 30]);
  const backgroundY = useTransform(smoothY, [-100, 100], [-30, 30]);
  const floatingX = useTransform(smoothX, [-100, 100], [-10, 10]);
  const floatingY = useTransform(smoothY, [-100, 100], [-10, 10]);

  // Performance-optimized text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  // Mouse move handler with throttling
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 25;
    const y = (clientY - window.innerHeight / 2) / 25;
    
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x: clientX, y: clientY });
  }, [mouseX, mouseY]);

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const heroSection = document.getElementById('home');
    if (heroSection) observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  // Typing effect simulation
  const TypingText = ({ text, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 50 + delay);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, delay]);

    return <span>{displayText}</span>;
  };

  const floatingElements = [
    { top: '20%', left: '10%', delay: 0, size: 'w-4 h-4' },
    { top: '70%', left: '85%', delay: 1, size: 'w-6 h-6' },
    { top: '40%', left: '90%', delay: 2, size: 'w-3 h-3' },
    { top: '80%', left: '15%', delay: 3, size: 'w-5 h-5' },
    { top: '25%', left: '75%', delay: 4, size: 'w-4 h-4' },
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen text-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a2e] text-white cursor-none pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Advanced Background Effects */}
      <motion.div
        style={{ x: backgroundX, y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a2e]"
      />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FFD700] to-yellow-400 rounded-full blur-[120px] opacity-20"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-[100px] opacity-20"
      />

      {/* Floating Particles */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -50, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          className={`absolute ${element.size} bg-[#FFD700] rounded-full opacity-60`}
          style={{ top: element.top, left: element.left }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
        >
          <SiAmazon className="text-[#FFD700] text-lg" />
          <span className="text-sm font-medium text-gray-300">Senior Frontend Developer</span>
          <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" />
        </motion.div>

        {/* Main Heading - Single Line */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-7xl lg:text-8xl font-black leading-tight text-white mb-6 whitespace-nowrap"
        >
          <span className="text-gray-300">HI, I'M </span>
          <motion.span
            style={{ x: floatingX, y: floatingY }}
            className="bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700] bg-clip-text text-transparent"
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 30px rgba(255,215,0,0.5)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            MERYEM
          </motion.span>
        </motion.h1>

        {/* Animated Subtitle */}
        <div className="h-20 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={textIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-bold text-gray-300 flex items-center justify-center gap-3"
            >
              {(() => {
                const IconComponent = texts[textIndex].icon;
                return (
                  <IconComponent className={`${texts[textIndex].color} text-3xl`} />
                );
              })()}
              <TypingText text={texts[textIndex].title} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Crafting exceptional digital experiences with {""}
          <span className="text-[#FFD700] font-semibold">17+ years</span> of expertise at Amazon. 
          Specializing in scalable frontend architecture, immersive UI/UX, and cutting-edge web technologies.
        </motion.p>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center items-center gap-6 mb-12 flex-wrap"
        >
          {techIcons.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.3, y: -5 }}
                className={`${tech.color} text-2xl md:text-3xl transition-all duration-300 relative group`}
                title={tech.name}
              >
                <IconComponent />
                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {tech.name}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255,215,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-4 bg-[#FFD700] text-black font-bold rounded-full overflow-hidden transition-all duration-300 flex items-center gap-3"
          >
            <span className="relative z-10">View My Work</span>
            <FaGithub className="relative z-10 text-lg" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-[#FFD700]"
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              borderColor: "#FFD700",
              color: "#FFD700",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 border-2 border-gray-600 text-gray-300 font-bold rounded-full hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-300 group flex items-center gap-3"
          >
            <span className="flex items-center gap-2">
              Let's Connect
            </span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center items-center gap-6 mb-8"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#FFD700" }}
            className="text-gray-400 text-2xl transition-colors duration-300"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#FFD700" }}
            className="text-gray-400 text-2xl transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10"
        >
          {[
            { number: "17+", label: "Years Experience" },
            { number: "200+", label: "Projects Delivered" },
            { number: "99%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#FFD700]">{stat.number}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-sm mb-2">Explore More</span>
        <motion.div
          className="w-1 h-8 bg-gradient-to-b from-[#FFD700] to-transparent rounded-full"
          animate={{ height: [8, 20, 8] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-[#FFD700]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;