import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { ROLES } from '../data/resumeData';

// 3D Tilt Card Component with Image
function TiltCard({ project, isHighlighted }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const imgY = useTransform(mouseYSpring, [-0.5, 0.5], ["-15px", "15px"]);
  const imgX = useTransform(mouseXSpring, [-0.5, 0.5], ["-15px", "15px"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative perspective-1000 z-10 w-full"
    >
      <div 
        className={`relative group rounded-[2.5rem] border transition-all duration-500 overflow-hidden flex flex-col md:flex-row shadow-2xl ${
          isHighlighted 
            ? 'bg-[#111116] border-[#aa3bff]/30 shadow-[0_20px_50px_rgba(170,59,255,0.15)]' 
            : 'bg-[#0a0a0d] border-white/5 opacity-60 grayscale-[40%] hover:opacity-100 hover:grayscale-[10%]'
        }`}
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Dynamic Glare */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none opacity-20 transition-opacity duration-300 group-hover:opacity-40"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.5) 0%, transparent 60%)`
          }}
        />

        {/* Content Half */}
        <div className="relative z-10 flex-1 p-8 md:p-12" style={{ transform: "translateZ(60px)" }}>
          <div className="absolute top-8 right-8 p-4 bg-white/5 rounded-2xl text-white/50 group-hover:text-[#aa3bff] group-hover:scale-110 group-hover:bg-[#aa3bff]/10 transition-all duration-300 backdrop-blur-md border border-white/5">
            <project.icon size={28} />
          </div>
          
          <h4 className="text-3xl md:text-4xl font-black text-white pr-20 tracking-tighter leading-tight drop-shadow-lg">{project.title}</h4>
          <p className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#aa3bff] to-[#8b20d9] mt-4 mb-6 tracking-widest uppercase">{project.subtitle}</p>
          <p className="text-gray-400 leading-relaxed mb-8 text-lg font-medium max-w-lg">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(20px)" }}>
            {project.technologies.map(tech => (
              <span 
                key={tech} 
                className={`px-4 py-1.5 text-xs font-bold rounded-full border shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md ${
                  isHighlighted 
                    ? 'bg-[#aa3bff]/10 text-white border-[#aa3bff]/30'
                    : 'bg-white/5 text-gray-500 border-white/5'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Image Half */}
        <div className="relative flex-1 min-h-[300px] md:min-h-full overflow-hidden border-l border-white/5 bg-[#060608]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#111116] to-transparent z-10 opacity-70"></div>
          {project.image && (
            <motion.img 
              src={project.image} 
              alt={project.title}
              style={{ x: imgX, y: imgY, transform: "translateZ(10px) scale(1.15)" }}
              className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}
        </div>

      </div>
    </motion.div>
  );
}

export default function Projects({ data, role }) {
  const sortedProjects = useMemo(() => {
    return [...data].sort((a, b) => {
      const aRelevant = a.roles.includes(role);
      const bRelevant = b.roles.includes(role);
      
      if (aRelevant && !bRelevant) return -1;
      if (!aRelevant && bRelevant) return 1;
      return 0;
    });
  }, [data, role]);

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-4xl font-extrabold mb-12 flex items-center gap-6 text-white tracking-tight">
          Featured Projects
          <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-1"></div>
        </h3>
        
        <div className="grid grid-cols-1 gap-12 perspective-1000">
          {sortedProjects.map((project, idx) => {
            const isHighlighted = project.roles.includes(role);
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="perspective-1000"
              >
                <TiltCard project={project} isHighlighted={isHighlighted} />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
