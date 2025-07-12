import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "LangChain LangGraph Agentic AI Workflow Automation",
    description: "Developed an advanced AI-powered workflow automation system using LangChain and LangGraph for customer support and business process optimization. The system features intelligent routing, automated responses, and seamless integration with existing CRM systems.",
    technologies: ["LangChain", "LangGraph", "Python", "OpenAI", "FastAPI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Hugging Face Model Fine-tuning & Deployment",
    description: "Implemented end-to-end machine learning pipeline for fine-tuning and deploying custom models using Hugging Face Transformers. Built scalable infrastructure for model training, evaluation, and production deployment with monitoring and A/B testing capabilities.",
    technologies: ["Hugging Face", "PyTorch", "Docker", "AWS", "MLflow", "Gradio"],
    image: "https://images.unsplash.com/photo-1673187738279-984e48d34064?w=500&h=300&fit=crop",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Developer Network Platform",
    description: "Full-stack developer networking platform with real-time collaboration features, project sharing, and community building tools. Includes advanced search, skill matching, and integrated development environment connections.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
    githubUrl: "#",
    liveUrl: "#"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in AI/ML, 
            full-stack development, and modern web technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden 
                         hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 
                                   text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex-1 bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-lg 
                               text-center font-medium hover:bg-gray-800 dark:hover:bg-gray-500 
                               transition-colors duration-200"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center 
                               font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 