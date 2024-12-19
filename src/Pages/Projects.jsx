import React, { useState } from "react";
import { Carousel, Splitter, Flex, Typography } from "antd";
import "antd/dist/reset.css";
import { motion } from "framer-motion";
import "../assets/styles/Projects.css"; // Import the CSS file
import DynamicModal from '../Components/Modal.jsx';

import Login from "../assets/images/smartpipes/Login.png";
import Home from "../assets/images/smartpipes/Home.png";
import Production from "../assets/images/smartpipes/Production.png";
import ProductionPhases from "../assets/images/smartpipes/ProductionPhases.png";
import Inventory from "../assets/images/smartpipes/Inventory.png";
import Stock from "../assets/images/smartpipes/Stock.png";
import Restock from "../assets/images/smartpipes/Restock.png";
import OperationsLog from "../assets/images/smartpipes/OperationsLog.png";

const smartPipesImages = [
  Login,
  Home,
  Production,
  ProductionPhases,
  Inventory,
  Stock,
  Restock,
  OperationsLog,
];

const Desc = (props) => (
  <Flex
    justify="center"
    align="center"
    style={{
      height: '100%',
    }}
  >
    <Typography.Text
      type="secondary"
      level={5}
      style={{
        whiteSpace: 'wrap',
        color: '#FFFFFF'
      }}
    >
      {props.text}
    </Typography.Text>
  </Flex>
);

const projects = [
  { name: "Smart Pipes", images: smartPipesImages },
  { name: "Project 2", images: smartPipesImages },
  { name: "Project 3", images: smartPipesImages },
  { name: "Project 4", images: smartPipesImages },
];

export default function ProjectsGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="proyectos" className="projects-section">
      <div className="projects-container">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Proyectos Realizados
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={projectIndex}
              className="projects-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: projectIndex * 0.2 }}
              viewport={{ once: true }}
              onClick={() => openModal(project)}
            >
              <h3 className="projects-name">{project.name}</h3>
              <Carousel autoplay dots>
                {project.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="projects-image-container"
                  >
                    <img
                      src={image}
                      alt={`${project.name} Image ${imageIndex + 1}`}
                      className="projects-image"
                    />
                  </div>
                ))}
              </Carousel>
            </motion.div>
          ))}
        </div>

        <DynamicModal
          title={selectedProject ? selectedProject.name : ''}
          isVisible={isModalOpen}
          close={closeModal}
          footer={null}
          width='80%'
        >
          {selectedProject && (
            <Splitter
              style={{
                height: 400,
                padding: 20,
                backgroundColor: '#545a72',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Splitter.Panel defaultSize="40%" min="20%" max="70%">
                <Desc text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
              </Splitter.Panel>
              <Splitter.Panel>
                <Carousel autoplay dots>
                  {selectedProject.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="projects-image-container"
                    >
                      <img
                        src={image}
                        alt={`${selectedProject.name} Image ${imageIndex + 1}`}
                        className="projects-image"
                      />
                    </div>
                  ))}
                </Carousel>
              </Splitter.Panel>
            </Splitter>
          )}
        </DynamicModal>
      </div>
    </section>
  );
}
