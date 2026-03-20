import { motion } from 'framer-motion';
import { Activity, Github, CodeSquare } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Stats() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  const githubUser = resumeData.personal.github.split('/').pop();
  const leetcodeUser = resumeData.personal.leetcode.split('/').pop();

  return (
    <section className="relative z-10 my-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="flex flex-col gap-16"
      >
        <div className="flex items-center gap-4">
          <div className="p-4 bg-[#111116] rounded-2xl border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
            <Activity className="w-8 h-8 text-[#aa3bff]" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Real-Time Stats</h2>
            <p className="text-gray-400 mt-2 font-medium">Tracking my open source and competitive programming journey.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          
          {/* GitHub Stats Panel */}
          <motion.div variants={item} className="flex flex-col gap-6 bg-[#0a0a0d] p-8 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#aa3bff] to-[#6b21a8] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center gap-3 mb-2">
              <Github className="text-[#aa3bff]" size={24} />
              <h3 className="text-2xl font-bold text-white">GitHub Activity</h3>
            </div>
            
            <div className="flex flex-col gap-4">
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&theme=radical&hide_border=true&bg_color=060608`} 
                alt="GitHub Stats" 
                className="w-full rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-lg"
              />
              <img 
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUser}&theme=radical&hide_border=true&background=060608`} 
                alt="GitHub Streak" 
                className="w-full rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-lg"
              />
            </div>
          </motion.div>

          {/* LeetCode & Extra Stats Panel */}
          <motion.div variants={item} className="flex flex-col gap-6 bg-[#0a0a0d] p-8 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center gap-3 mb-2">
              <CodeSquare className="text-yellow-500" size={24} />
              <h3 className="text-2xl font-bold text-white">LeetCode Profile</h3>
            </div>
            
            <div className="flex flex-col h-full gap-4">
              <img 
                src={`https://leetcard.jacoblin.cool/${leetcodeUser}?theme=dark&font=Inter&ext=heatmap`} 
                alt="LeetCode Stats" 
                className="w-full rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-lg"
              />
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=radical&hide_border=true&bg_color=060608`} 
                alt="Top Languages" 
                className="w-full rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-lg mt-auto"
              />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
