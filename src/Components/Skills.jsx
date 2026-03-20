import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { ROLES } from '../data/resumeData';

export default function Skills({ data, role }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  // Group skills by category, and highlight ones relevant to the current role
  const categories = useMemo(() => {
    const cats = {};
    data.forEach(skill => {
      if (!cats[skill.category]) cats[skill.category] = [];
      const isHighlighted = skill.roles.includes(role);
      cats[skill.category].push({ ...skill, isHighlighted });
    });
    
    if (role !== ROLES.GENERAL) {
      Object.keys(cats).forEach(k => {
        cats[k].sort((a, b) => (a.isHighlighted === b.isHighlighted ? 0 : a.isHighlighted ? -1 : 1));
      });
    }

    return cats;
  }, [data, role]);

  return (
    <section className="relative z-10 perspective-1000">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-4xl font-extrabold mb-12 flex items-center gap-6 text-white tracking-tight">
          Technical Arsenal
          <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-1"></div>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.entries(categories).map(([catName, skills], idx) => (
            <motion.div 
              key={catName}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={container}
              className="bg-[#111116]/80 backdrop-blur-xl rounded-[2rem] p-8 border border-white/5 shadow-2xl hover:border-white/10 transition-colors"
            >
              <h4 className="text-2xl font-bold mb-6 text-white/90 tracking-tight">{catName}</h4>
              <div className="flex flex-wrap gap-4">
                {skills.map(skill => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      rotateX: 10,
                      rotateY: -10,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg backdrop-blur-md cursor-pointer ${
                      skill.isHighlighted
                        ? 'bg-gradient-to-br from-[#aa3bff]/20 to-[#8b20d9]/20 text-white border border-[#aa3bff]/50 shadow-[0_0_15px_rgba(170,59,255,0.3)]'
                        : 'bg-white/5 text-gray-400 border border-white/5 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <skill.icon size={18} className={skill.isHighlighted ? "text-[#aa3bff]" : "text-gray-500"} />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
