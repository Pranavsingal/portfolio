import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ROLES, resumeData } from './data/resumeData';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import ResumeGenerator from './Components/ResumeGenerator';
import Stats from './Components/Stats';
import Preloader from './Components/Preloader';

function App() {
  const role = ROLES.GENERAL;
  const [loading, setLoading] = useState(true);

  // Smooth mouse follower
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#060608] text-gray-200 font-sans antialiased overflow-x-hidden selection:bg-[#aa3bff]/30 selection:text-white">
      
      {/* Dynamic Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-[50vw] h-[50vw] bg-[#aa3bff]/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* Custom Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-[#aa3bff] rounded-full mix-blend-screen pointer-events-none z-50 blur-sm opacity-60"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-[#aa3bff]/10 rounded-full pointer-events-none z-0 blur-[80px]"
        style={{
          x: useSpring(useMotionValue(0), { damping: 40, stiffness: 100 }), // Follows a bit delayed
          y: useSpring(useMotionValue(0), { damping: 40, stiffness: 100 }),
        }}
        animate={{
          x: cursorX.get() - 200,
          y: cursorY.get() - 200,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 100 }}
      />

      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Sticky Top Nav */}
            <nav className="fixed top-0 w-full bg-[#060608]/60 backdrop-blur-xl border-b border-white/5 z-40 transition-colors duration-300">
              <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
                <div className="font-bold text-xl tracking-wide text-white flex items-center gap-2 group cursor-pointer relative z-50">
                  Pranav
                  <span className="text-[#aa3bff] group-hover:scale-150 transition-transform duration-300 inline-block">.</span>
                  Singal
                </div>
              </div>
            </nav>

            <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-32">
              <Hero data={resumeData.personal} role={role} />
              <About data={resumeData.summary} role={role} />
              
              <ResumeGenerator />

              <Education data={resumeData.education} />
              <Skills data={resumeData.skills} role={role} />
              <Stats />
              <Projects data={resumeData.projects} role={role} />
              
              {/* Contact Footer */}
              <section className="relative text-center py-20 border-t border-white/10 gap-6 flex flex-col items-center overflow-hidden rounded-3xl group">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#aa3bff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <h2 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Let's build the future.</h2>
                  <p className="opacity-70 max-w-md mx-auto text-lg leading-relaxed">Currently seeking internship opportunities to apply my knowledge in AI, Machine Learning, and Software Development.</p>
                  <a 
                    href={`mailto:${resumeData.personal.email}`}
                    className="mt-6 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] relative z-50"
                  >
                    Get In Touch
                  </a>
                  <div className="flex gap-4 mt-12 opacity-50 text-sm font-medium tracking-wide items-center justify-center">
                      <span>{resumeData.personal.location}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                      <span>{resumeData.personal.phone}</span>
                  </div>
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;