import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and real-time inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts with real-time data visualization.',
      tags: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
      link: '#',
      github: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
      github: '#',
    },
    {
      title: 'Weather Application',
      description: 'Modern weather app with location-based forecasts and interactive weather visualizations.',
      tags: ['React', 'API Integration', 'Responsive Design'],
      link: '#',
      github: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects, skills, and experience with smooth animations.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
      github: '#',
    },
    {
      title: 'Music Streaming App',
      description: 'Feature-rich music streaming application with playlist management and recommendation engine.',
      tags: ['React', 'WebAudio API', 'Node.js'],
      link: '#',
      github: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400 transition-colors"
            >
              <div className="h-40 bg-gradient-to-br from-blue-500 to-green-500 opacity-10"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink size={18} /> View
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.github}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-300"
                  >
                    <Github size={18} /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
