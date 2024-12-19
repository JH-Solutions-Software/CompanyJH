import React from "react";
import { FaReact, FaVuejs, FaNodeJs, FaPython, FaPhp, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiDjango, SiPostgresql, SiMongodb, SiMysql, SiKotlin } from "react-icons/si";
import '../assets/styles/Technologies.css';

const Technologies = () => {
  const categories = [
    {
      title: "Frontend",
      technologies: [
        { icon: <FaReact className="icon icon-react" />, name: "React.js" },
        { icon: <FaVuejs className="icon icon-vue" />, name: "Vue.js" },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { icon: <FaNodeJs className="icon icon-node" />, name: "Node.js" },
        { icon: <SiDjango className="icon icon-django" />, name: "Django" },
        { icon: <FaPhp className="icon icon-php" />, name: "Laravel/PHP" },
        { icon: <SiTypescript className="icon icon-typescript" />, name: "TypeScript/JS" },
        { icon: <SiKotlin className="icon icon-kotlin" />, name: "Jetpack Compose" },
      ],
    },
    {
      title: "Bases de Datos",
      technologies: [
        { icon: <SiMysql className="icon icon-mysql" />, name: "SQL" },
        { icon: <SiMongodb className="icon icon-mongodb" />, name: "MongoDB" },
        { icon: <SiPostgresql className="icon icon-postgresql" />, name: "PostgreSQL" },
      ],
    },
  ];

  return (
    <section className="section spacer layer4">
      <div className="container">
        <h2 className="title">Tecnologías que manejamos</h2>
        <div className="grid">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="category">{category.title}</h3>
              <ul className="list">
                {category.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="listItem"
                    onMouseEnter={(e) => (e.target.querySelector('.text').style.color = 'white')}
                    onMouseLeave={(e) => (e.target.querySelector('.text').style.color = 'white')}
                  >
                    {tech.icon}
                    <span className="text">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;