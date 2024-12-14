import React, { useState } from "react";
import { Modal, Carousel } from "antd";
import "antd/dist/reset.css";
import { motion } from "framer-motion";
import "../assets/styles/Projects.css"; // Import the CSS file

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

const projects = [
  { name: "Smart Pipes", images: smartPipesImages },
  { name: "Project 2", images: smartPipesImages },
  { name: "Project 3", images: smartPipesImages },
  { name: "Project 4", images: smartPipesImages },
];

export default function ProjectsGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const openModal = (image) => {
    setActiveImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveImage("");
    setIsModalOpen(false);
  };

  return (
    <section className="projects-section">
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
            >
              <h3 className="projects-name">{project.name}</h3>
              <Carousel autoplay dots>
                {project.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="projects-image-container"
                    onClick={() => openModal(image)}
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

        <Modal
          open={isModalOpen}
          footer={null}
          onCancel={closeModal}
          centered
          width="80%"
          bodyStyle={{ padding: 0, background: "#f9f9f9" }}
        >
          <img
            src={activeImage}
            alt="Project Detail"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </Modal>
      </div>
    </section>
  );
}