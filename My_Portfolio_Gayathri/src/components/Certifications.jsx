import React from "react";

const certifications = [
    {
        title: "React Developer Certification",
        issuer: "Coursera",
        date: "June 2023",
        link: "https://www.coursera.org/account/accomplishments/certificate/EXAMPLE1",
    },
    {
        title: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "March 2023",
        link: "https://www.freecodecamp.org/certification/EXAMPLE2",
    },
    {
        title: "Responsive Web Design",
        issuer: "Udemy",
        date: "January 2023",
        link: "https://www.udemy.com/certificate/EXAMPLE3",
    },
];

const Certifications = () => (
    <section className="py-12 bg-gray-50" id="certifications">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Certifications
            </h2>
            <ul className="space-y-6">
                {certifications.map((cert, idx) => (
                    <li
                        key={idx}
                        className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">
                                {cert.title}
                            </h3>
                            <p className="text-gray-500">
                                {cert.issuer} &middot; <span>{cert.date}</span>
                            </p>
                        </div>
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 md:mt-0 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            View Certificate
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Certifications;