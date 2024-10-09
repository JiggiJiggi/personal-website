// src/components/Projects.jsx
import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";
import medicalMSImage from "../assets/medical-system.png";
import StemMSImage from "../assets/Stem.png";
import crackinterviewMSImage from "../assets/crackinterview.png";
import rasaMSImage from "../assets/rasa.png";
import medsMSImage from "../assets/meds.png";
import sentiMSImage from "../assets/senti.png";
import heartMSImage from "../assets/heart.png";


const projects = [
  {
    id: 1,
    name: "Stem Career Center",
    technologies: "React",
    image: StemMSImage,
    github: "https://jiggijiggi.github.io/Stem-Fellowship/", // Update with actual GitHub link
    netlify: "https://hilarious-cat-653c7d.netlify.app/",
  },
  {
    id: 2,
    name: "CrackInterview Web App",
    technologies: "MERN Stack",
    image: crackinterviewMSImage,
    github: "https://github.com/JiggiJiggi/crackinterview-project", // Update with actual GitHub link
  },
  {
    id: 3,
    name: "Machine Learning Model",
    technologies: "Python Jupyter Notebook",
    image: medicalMSImage,
    github: "https://github.com/JiggiJiggi/Depression-level-of-Individuals", // Update with actual GitHub link
  },
  {
    id: 4,
    name: "Conversational AI Fitness Chatbot",
    technologies: "Rasa & OpenAI",
    image: rasaMSImage,
    github: "https://github.com/JiggiJiggi/Conversational-AI-Chatbot", // Update with actual GitHub link
  },
  {
    id: 5,
    name: "Medical Recommendation System",
    technologies: "Machine Learning Models",
    image: medsMSImage,
    github: "https://github.com/JiggiJiggi/Medical-Recommendation-System", // Update with actual GitHub link
  },
  {
    id: 6,
    name: "Sentiment Analysis Machine Learning",
    technologies: "Machine Learning Models",
    image: sentiMSImage,
    github: "https://github.com/JiggiJiggi/Sentiment-Analysis", // Update with actual GitHub link
  },
  {
    id: 6,
    name: "Heart Risk Prediction System",
    technologies: "EDA Techniques",
    image: heartMSImage,
    github: "https://github.com/JiggiJiggi/Heart-Risk-Prediction", // Update with actual GitHub link
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
