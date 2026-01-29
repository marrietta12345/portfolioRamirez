import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'Framer Motion'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL', 'Firebase'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'GitHub Actions', 'VS Code', 'Figma'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700/30 p-8 rounded-lg border border-gray-600"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">{category.category}</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 p-3 bg-gray-600/20 rounded-lg hover:bg-gray-600/40 transition-colors cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Proficiency Levels</h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { name: 'React & Frontend', level: 95 },
              { name: 'JavaScript/TypeScript', level: 90 },
              { name: 'Node.js & Backend', level: 85 },
              { name: 'Database Design', level: 80 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-semibold">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-400 to-green-400"
                  ></motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
