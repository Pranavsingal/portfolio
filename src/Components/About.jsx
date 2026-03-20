import { motion } from 'framer-motion';

export default function About({ data, role }) {
  const summary = data[role];

  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-8 flex items-center gap-4 text-[var(--heading-color)]">
          About Me
          <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1"></div>
        </h3>
        
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300">
          {summary}
        </p>
      </motion.div>
    </section>
  );
}
