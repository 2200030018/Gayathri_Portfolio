import React from 'react';

const projects = [
    {
        title: 'Personal Portfolio Website',
        description: 'A responsive portfolio website built with React to showcase my projects and skills.',
        link: 'https://your-portfolio-link.com',
        technologies: ['React', 'CSS', 'JavaScript'],
    },
    {
        title: 'E-commerce Store',
        description: 'A full-stack e-commerce application with product listings, cart, and checkout functionality.',
        link: 'https://your-ecommerce-link.com',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
        title: 'Weather App',
        description: 'A weather forecasting app that displays current weather data using a public API.',
        link: 'https://your-weather-app-link.com',
        technologies: ['React', 'API', 'Bootstrap'],
    },
];

const Projects = () => (
    <section id="projects" className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Projects</h2>
        <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
            {projects.map((project, idx) => (
                <div
                    className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
                    key={idx}
                >
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-blue-700">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <p className="text-sm text-gray-500 mb-4">
                            <strong className="font-medium text-gray-700">Technologies:</strong> {project.technologies.join(', ')}
                        </p>
                    </div>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center"
                    >
                        View Project
                    </a>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;