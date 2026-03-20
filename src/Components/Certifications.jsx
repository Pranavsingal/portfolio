import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Certifications() {
  const certIds = [
    'YRLOC1NLUK8K',
    'RHM5UOEM4JQ1',
    '51XZCBUNGERW'
  ];

  // Construct official Coursera thumbnail URLs
  const imageUrls = certIds.map(
    id => `https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~${id}/CERTIFICATE_LANDING_PAGE~${id}.jpeg`
  );

  // Duplicate the array to create a seamless infinite loop effect
  const loopingImages = [...imageUrls, ...imageUrls, ...imageUrls];

  return (
    <section className="relative z-10 my-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-12 flex items-center gap-4">
        <div className="p-4 bg-[#111116] rounded-2xl border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
          <Award className="w-8 h-8 text-[#aa3bff]" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Verified Credentials</h2>
          <p className="text-gray-400 mt-2 font-medium">Professional licenses and coursework accomplishments.</p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center py-10 before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-[#060608] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-[#060608] after:to-transparent after:z-10">
        
        <motion.div 
          className="flex gap-8 w-max px-4"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {loopingImages.map((src, index) => (
            <div 
              key={index}
              className="relative shrink-0 w-[400px] h-[280px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] group bg-[#111116]"
            >
              <img 
                src={src} 
                alt="Coursera Certificate" 
                className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
