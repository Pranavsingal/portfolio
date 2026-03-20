import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { RefreshCw, CodeSquare, Github, Linkedin, CheckCircle } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [step, setStep] = useState(0);

  const steps = [
    { text: "Establishing secure connection...", icon: RefreshCw, color: "text-gray-400" },
    { text: "Syncing heatmaps from LeetCode...", icon: CodeSquare, color: "text-yellow-500" },
    { text: "Fetching open-source commits from GitHub...", icon: Github, color: "text-white" },
    { text: "Extracting professional timeline from LinkedIn...", icon: Linkedin, color: "text-blue-500" },
    { text: "Compiling dynamic AI interface...", icon: CheckCircle, color: "text-emerald-500" }
  ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setStep(currentStep);
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 800); // Step every 800ms
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060608]"
      exit={{ opacity: 0, y: -50, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#aa3bff]/20 rounded-full blur-[100px]"></div>

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-md w-full px-6">
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={step}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-6 w-full"
          >
            <div className={`p-6 rounded-3xl bg-white/5 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] ${steps[step].color}`}>
              {(() => {
                const Icon = steps[step].icon;
                return <Icon size={48} className={step === 0 ? "animate-spin" : "animate-pulse"} />;
              })()}
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide text-center h-16 flex items-center justify-center">
              {steps[step].text}
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-white/5 shadow-inner"></div>
          <motion.div 
            className="h-full bg-gradient-to-r from-[#aa3bff] to-[#6b21a8] relative z-10"
            initial={{ width: "0%" }}
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.8, ease: "circOut" }}
          />
        </div>

      </div>
    </motion.div>
  );
}
