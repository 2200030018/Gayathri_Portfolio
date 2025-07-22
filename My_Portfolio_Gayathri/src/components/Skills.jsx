import React from 'react';

const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'HTML5', level: 'Advanced' },
    { name: 'CSS3', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' },
    { name: 'Redux', level: 'Intermediate' },
    { name: 'TypeScript', level: 'Beginner' },
];

const Skills = () => (
    <section className="py-8 px-4 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, idx) => (
                <li
                    key={idx}
                    className="flex justify-between items-center bg-white p-4 rounded-md shadow hover:shadow-lg transition-shadow"
                >
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}</span>
                </li>
            ))}
        </ul>
    </section>
);

export default Skills;