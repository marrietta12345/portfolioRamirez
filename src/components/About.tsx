import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '25+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Technologies', value: '20+' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a commitment to clean, efficient code. With experience across various technologies and frameworks, I create digital solutions that make an impact.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My approach combines technical expertise with creative problem-solving to deliver projects that not only meet requirements but exceed expectations. I'm always learning and staying updated with the latest industry trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700/50 p-6 rounded-lg text-center"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
