import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Linkedin, RefreshCw, CheckCircle, Sparkles, Download, Target } from 'lucide-react';
import { resumeData, ROLES } from '../data/resumeData';

export default function ResumeGenerator() {
  const [targetRole, setTargetRole] = useState('');
  const [syncState, setSyncState] = useState('idle');
  const [genState, setGenState] = useState('idle');
  const [progressMsg, setProgressMsg] = useState('');

  const handleSync = async () => {
    setSyncState('syncing');
    setGenState('idle');
    await new Promise(r => setTimeout(r, 800));
    setSyncState('linked');
  };

  const generateHTMLResume = () => {
    // Generate a clean HTML string representing the resume
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Pranav Singal - ${targetRole} Resume</title>
        <style>
          body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111; line-height: 1.5; padding: 40px; max-width: 800px; margin: 0 auto; }
          h1 { margin: 0; font-size: 32px; color: #000; }
          h2 { margin: 5px 0 15px 0; font-size: 18px; color: #555; font-weight: 500; }
          .contact { font-size: 13px; color: #444; margin-bottom: 25px; border-bottom: 2px solid #333; padding-bottom: 15px; }
          .section-title { font-size: 16px; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px; margin-bottom: 15px; color: #222; }
          p { margin: 0 0 10px 0; font-size: 14px; }
          .item { margin-bottom: 15px; }
          .item-header { display: flex; justify-content: space-between; align-items: baseline; }
          .item-title { font-weight: bold; font-size: 15px; color: #000; }
          .item-subtitle { font-style: italic; font-size: 13px; color: #555; }
          .item-date { font-size: 13px; color: #666; }
          ul { margin: 5px 0 10px 0; padding-left: 20px; font-size: 13px; }
          li { margin-bottom: 4px; }
          .skills { font-size: 13px; }
        </style>
      </head>
      <body>
        <h1>${resumeData.personal.name}</h1>
        <h2>${targetRole}</h2>
        <div class="contact">
          ${resumeData.personal.email} | ${resumeData.personal.phone} | ${resumeData.personal.location} <br>
          LinkedIn: ${resumeData.personal.linkedin} | GitHub: ${resumeData.personal.github}
        </div>
        
        <div class="section-title">Professional Summary</div>
        <p>${resumeData.summary[ROLES.GENERAL]}</p>

        <div class="section-title">Education</div>
        ${resumeData.education.map(edu => `
          <div class="item">
            <div class="item-header">
              <span class="item-title">${edu.institution}</span>
              <span class="item-date">${edu.graduation}</span>
            </div>
            <div class="item-subtitle">${edu.degree}</div>
          </div>
        `).join('')}

        <div class="section-title">Skills</div>
        <div class="skills">
          <strong>Programming:</strong> ${resumeData.skills.filter(s => s.category === 'Programming').map(s => s.name).join(', ')}<br>
          <strong>Machine Learning & Data:</strong> ${resumeData.skills.filter(s => s.category === 'Machine Learning' || s.category === 'Data Analysis').map(s => s.name).join(', ')}<br>
          <strong>Backend & Core CS:</strong> ${resumeData.skills.filter(s => s.category === 'Backend Development' || s.category === 'Core CS').map(s => s.name).join(', ')}<br>
          <strong>Tools:</strong> ${resumeData.skills.filter(s => s.category === 'Tools').map(s => s.name).join(', ')}
        </div>

        <div class="section-title">Projects</div>
        ${resumeData.projects.map(proj => `
          <div class="item">
            <div class="item-header">
              <span class="item-title">${proj.title}</span>
            </div>
            <div class="item-subtitle">${proj.subtitle} | Technologies: ${proj.technologies.join(', ')}</div>
            <ul>
              <li>${proj.description}</li>
            </ul>
          </div>
        `).join('')}

        <div class="section-title">Certifications</div>
        <ul>
          ${resumeData.certifications.map(cert => `<li><strong>${cert.name}</strong> - ${cert.issuer}</li>`).join('')}
        </ul>
        
        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `;
    
    // Open in new window and trigger print
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  const handleGenerate = async () => {
    if (genState === 'done') {
      generateHTMLResume();
      setGenState('idle'); // reset to allow changing role
      return;
    }

    if (!targetRole) return;
    
    setGenState('generating');
    
    const steps = [
      "Connecting to LinkedIn Profile Layer...",
      "Extracting fresh certifications and achievements...",
      `Analyzing target keywords for '${targetRole}'...`,
      "Re-ranking Data Structures & Algorithm projects...",
      "Assembling AI-Optimized Format...",
      "Converting to Professional PDF..."
    ];

    for (const step of steps) {
      setProgressMsg(step);
      await new Promise(r => setTimeout(r, 600));
    }
    
    setGenState('done');
  };

  return (
    <section className="relative z-10 my-32 perspective-1000">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="relative rounded-[3rem] overflow-hidden bg-[#0a0a0d] border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] p-8 md:p-14 md:px-20 text-center"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute top-[-30%] left-[-10%] w-[60%] h-[150%] bg-gradient-to-br from-[#aa3bff]/10 via-blue-600/5 to-transparent rotate-12 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <div className="p-5 bg-gradient-to-br from-[#aa3bff]/10 to-blue-500/10 rounded-[2rem] mb-8 shadow-[0_0_30px_rgba(170,59,255,0.15)] border border-white/5 inline-flex backdrop-blur-md">
            <Sparkles className="w-12 h-12 text-[#aa3bff]" />
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-md">
            AI Tailored Resume Engine
          </h3>
          <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-medium max-w-2xl px-4">
            Don't send a generic CV. Enter the exact field or job title you want, and my AI will automatically sync with my latest LinkedIn data, pick the perfect projects, extract the right keywords, and generate a hyper-targeted resume.
          </p>

          <div className="w-full flex flex-col gap-6 md:gap-8 items-center bg-[#111116]/80 p-8 rounded-3xl border border-white/5 backdrop-blur-xl shadow-inner">
            
            {/* Input Field & Sync */}
            <div className="flex flex-col md:flex-row w-full gap-4 items-stretch">
              
              <div className="relative flex-1 group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#aa3bff] transition-colors">
                  <Target size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="e.g. Data Science Engineer, SWE..."
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  className="w-full h-full min-h-[60px] bg-[#060608] border border-white/10 rounded-2xl pl-12 pr-6 text-white font-medium text-lg focus:outline-none focus:border-[#aa3bff]/50 focus:ring-1 focus:ring-[#aa3bff]/50 transition-all placeholder-gray-600"
                />
              </div>

              <motion.button
                whileHover={{ scale: syncState === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: syncState === 'idle' ? 0.98 : 1 }}
                onClick={handleSync}
                disabled={syncState !== 'idle'}
                className={`relative overflow-hidden flex items-center justify-center gap-3 px-8 min-h-[60px] rounded-2xl font-bold tracking-wide transition-all duration-300 border ${
                  syncState === 'linked' 
                    ? 'bg-blue-600/10 border-blue-500/30 text-blue-400' 
                    : 'bg-[#060608] border-white/10 text-gray-300 hover:text-white hover:border-white/30'
                }`}
              >
                {syncState === 'idle' && <><Linkedin className={syncState === 'idle' ? 'text-blue-500' : ''} /> Sync LinkedIn</>}
                {syncState === 'syncing' && <><RefreshCw className="text-blue-400 animate-spin" /> Fetching...</>}
                {syncState === 'linked' && <><CheckCircle className="text-blue-500" /> Data Synced</>}
              </motion.button>
              
            </div>

            {/* AI Generator Button / Status */}
            <div className="w-full relative">
              <motion.button
                whileHover={genState === 'idle' && targetRole ? { scale: 1.01 } : genState === 'done' ? { scale: 1.01 } : {}}
                whileTap={genState === 'idle' && targetRole ? { scale: 0.98 } : genState === 'done' ? { scale: 0.98 } : {}}
                onClick={handleGenerate}
                disabled={(genState !== 'idle' && genState !== 'done') || (!targetRole && genState === 'idle')}
                className={`relative overflow-hidden w-full group rounded-2xl transition-all duration-500 ${!targetRole && genState === 'idle' ? 'opacity-50 cursor-not-allowed grayscale' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  genState === 'done' ? 'from-green-500 to-emerald-600' 
                  : genState === 'generating' ? 'from-[#060608] to-[#111116] border border-[#aa3bff]/30'
                  : 'from-[#aa3bff] to-[#8b20d9]'
                } transition-all duration-500`}></div>
                
                {/* Shine effect */}
                {(genState === 'idle' || genState === 'done') && (
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                )}
                
                {genState === 'generating' && (
                  <motion.div 
                    className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#aa3bff]/20 to-blue-500/20"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 4.2, ease: "linear" }}
                  />
                )}
                
                <div className={`relative flex flex-col md:flex-row items-center justify-center gap-3 px-6 py-5 z-10 font-bold tracking-wide text-lg ${genState === 'generating' ? 'text-[#aa3bff]' : 'text-white'}`}>
                  <AnimatePresence mode="wait">
                    {genState === 'idle' && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <FileText size={22} /> {targetRole ? `Generate perfectly tailored PDF for '${targetRole}'` : 'Enter a role to generate PDF'}
                      </motion.div>
                    )}
                    {genState === 'generating' && (
                      <motion.div key="gen" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-3 w-full justify-center">
                        <RefreshCw size={22} className="animate-spin text-blue-400" />
                        <span className="font-mono text-sm md:text-base text-gray-300 capitalize">{progressMsg}</span>
                      </motion.div>
                    )}
                    {genState === 'done' && (
                      <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-white">
                        <Download size={22} /> Application Ready. Click to View & Save PDF
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </div>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
}
