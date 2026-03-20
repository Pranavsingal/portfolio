import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, CodeSquare, Trophy } from 'lucide-react';
import { ROLES } from '../data/resumeData';

export default function Hero({ data, role }) {
  const isSWEDSE = role !== ROLES.GENERAL;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 perspective-1000">

      {/* Left Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex-1 w-full"
      >
        <motion.h1 variants={item} className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none pt-4">
          Hi, I'm <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#aa3bff] to-[#6b21a8] animate-gradient-x drop-shadow-2xl">
            {data.name.split(' ')[0]}
          </span>
        </motion.h1>

        <motion.h2 variants={item} className="text-2xl md:text-3xl text-gray-400 font-bold max-w-2xl leading-tight tracking-tight">
          {isSWEDSE ? `Specializing as a ${role}.` : data.title}
        </motion.h2>

        <motion.p variants={item} className="mt-6 text-xl text-gray-500 font-medium max-w-xl">
          Based in {data.location} • <span className="text-white/80">Studying at {data.university}</span>
        </motion.p>

        <motion.div
          variants={container}
          className="flex flex-wrap gap-5 mt-12 relative z-10"
        >
          {/* Liquid animated modern button */}
          <motion.a
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${data.email}`}
            className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(170,59,255,0.4)] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#aa3bff] to-[#8b20d9] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            <Mail size={20} className="relative z-10 group-hover:text-white transition-colors" />
            <span className="relative z-10 group-hover:text-white transition-colors">Contact Me</span>
          </motion.a>

          <motion.a
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href={`https://${data.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#111116]/80 backdrop-blur-xl border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] text-white rounded-2xl font-bold text-lg hover:border-[#aa3bff]/50 hover:bg-[#aa3bff]/10 transition-all duration-300"
          >
            <Linkedin size={20} className="text-[#aa3bff]" /> LinkedIn
          </motion.a>

          <motion.a
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href={`https://${data.github}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#111116]/80 backdrop-blur-xl border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] text-white rounded-2xl font-bold text-lg hover:border-[#aa3bff]/50 hover:bg-[#aa3bff]/10 transition-all duration-300"
          >
            <Github size={20} className="text-[#aa3bff]" /> GitHub
          </motion.a>

          <motion.a
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href={`https://${data.leetcode}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#111116]/80 backdrop-blur-xl border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] text-white rounded-2xl font-bold text-lg hover:border-[#aa3bff]/50 hover:bg-[#aa3bff]/10 transition-all duration-300"
          >
            <CodeSquare size={20} className="text-[#aa3bff]" /> LeetCode
          </motion.a>

          <motion.a
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href={`https://${data.codolio}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#111116]/80 backdrop-blur-xl border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] text-white rounded-2xl font-bold text-lg hover:border-[#aa3bff]/50 hover:bg-[#aa3bff]/10 transition-all duration-300"
          >
            <Trophy size={20} className="text-[#aa3bff]" /> Codolio
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Image/Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="relative flex-1 w-full max-w-md hidden md:block perspective-1000"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(170,59,255,0.2)] bg-[#111116] aspect-[4/5]"
        >
          <img
            src="/img/profile.png"
            alt="Pranav Profile"
            className="w-full h-full object-cover opacity-90 mix-blend-screen scale-110 hover:scale-100 transition-transform duration-700"
          />
          {/* Aesthetic Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem]"></div>
        </motion.div>

        {/* Glow behind image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[#aa3bff] to-[#6b21a8] opacity-30 blur-[100px] z-0 rounded-full mix-blend-screen animate-blob"></div>
      </motion.div>

    </section>
  );
}
