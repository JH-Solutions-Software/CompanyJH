import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import '../assets/styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video"
        >
          <source src="/video-background.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>
      <div className="content-container">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Impulsamos la Transformación de tus Procesos Internos
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          En JH Software Solutions, nos especializamos en entender tus necesidades y optimizar los procesos internos de tu negocio para alcanzar la máxima eficiencia.
        </motion.p>
        <motion.div 
          className="button-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#contacto" className="primary-button">
            Comienza tu transformación <ArrowRight className="icon" />
          </a>
          <a href="#servicios" className="secondary-button">
            Conoce más
          </a>
        </motion.div>
      </div>
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href="#servicios" className="scroll-link">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="scroll-icon" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}