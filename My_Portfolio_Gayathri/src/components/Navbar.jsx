import React from 'react';
import { Link } from 'react-scroll';


function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
            <ul className="flex justify-center space-x-6 py-4">
                <li>
                    <Link
                        to="profile"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-yellow-400 transition-colors"
                    >
                        Profile
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-yellow-400 transition-colors"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="education"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-yellow-400 transition-colors"
                    >
                        Education
                    </Link>
                </li>
                <li>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-yellow-400 transition-colors"
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-yellow-400 transition-colors"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="certifications"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-yellow-400 transition-colors"
                    >
                        Certifications
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-yellow-400 transition-colors"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
