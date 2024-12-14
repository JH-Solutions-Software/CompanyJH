import { motion } from 'framer-motion'
import { FaSearch, FaChartLine, FaCogs, FaCheckCircle } from 'react-icons/fa'
import '../assets/styles/Process.css'
import Card from '../Components/Card'

const steps = [
  {
    number: "1",
    title: "Escuchamos y analizamos tus necesidades",
    description: "Nos reunimos contigo para entender tus objetivos y desafíos.",
    icon: FaSearch
  },
  {
    number: "2",
    title: "Identificamos áreas de mejora",
    description: "Realizamos un análisis detallado para detectar oportunidades de optimización.",
    icon: FaChartLine
  },
  {
    number: "3",
    title: "Desarrollamos soluciones personalizadas",
    description: "Creamos estrategias y soluciones a medida para tu negocio.",
    icon: FaCogs
  },
  {
    number: "4",
    title: "Implementación y seguimiento",
    description: "Ejecutamos las soluciones y monitoreamos su efectividad continuamente.",
    icon: FaCheckCircle
  },
]

export default function Process() {
  return (
    <section id="proceso" className="process-section">
      <div className="process-container">
        <motion.h2 
          className="process-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nuestro Proceso
        </motion.h2>
        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card 
                title={step.title} 
                description={step.description} 
                Icon={step.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}