import { motion } from 'framer-motion';

export default function Education({ data }) {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-8 flex items-center gap-4 text-[var(--heading-color)]">
          Education
          <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1"></div>
        </h3>
        
        <div className="space-y-6">
          {data.map((edu, idx) => (
            <div key={idx} className="flex gap-6 items-start bg-gray-50/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                <edu.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[var(--heading-color)]">{edu.institution}</h4>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">{edu.degree}</p>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mt-2">{edu.graduation}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
