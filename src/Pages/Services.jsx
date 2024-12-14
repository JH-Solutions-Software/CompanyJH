import React from "react";
import { Code, Database, Globe } from "lucide-react";
import Card from "../Components/Card";
import "../assets/styles/Services.css";

const services = [
  {
    title: "Automatización de Procesos",
    description:
      "Optimiza los flujos de trabajo mediante automatización inteligente, liberando tiempo y recursos para tareas más estratégicas.",
    icon: Code,
  },
  {
    title: "Optimización de Base de Datos",
    description:
      "Aumentamos la velocidad y eficiencia de tus sistemas de información, con soluciones avanzadas en PostgreSQL y MongoDB.",
    icon: Database,
  },
  {
    title: "Desarrollo Web Personalizado",
    description:
      "Diseñamos y desarrollamos aplicaciones web que se ajustan a tus necesidades específicas utilizando tecnologías de vanguardia.",
    icon: Globe,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item"
              style={{
                animation: `fadeInUp 0.5s forwards ${index * 0.2}s`,
              }}
            >
              <Card
                title={service.title}
                description={service.description}
                Icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}