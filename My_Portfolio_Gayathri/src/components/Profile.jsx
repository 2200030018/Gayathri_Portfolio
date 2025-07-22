import React from 'react';
import gayathri from '../assets/gayathri1.jpg';

function Profile() {
  return (
    <section
      id="profile"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-teal-300 text-white px-6 md:px-20 pt-24"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
        
        {/* Left - Image */}
        <div className="flex-shrink-0">
          <img
            src={gayathri}
            alt="Gayathri Arigela"
            className="w-80 h-96 object-cover rounded-full shadow-lg shadow-yellow-400 hover:shadow-2xl hover:shadow-yellow-300 transition duration-300"
          />
        </div>

        {/* Right - Profile Info */}
        <div className="text-left">
          <h1 className="text-4xl font-bold text-yellow-300 mb-4">
            Gayathri Arigela
          </h1>
          <h2 className="text-xl font-semibold mb-6 text-gray-300">
            Student at KL University | Aspiring Software Engineer
          </h2>
          <p className="text-md text-yellow-200 leading-relaxed max-w-xl">
            I'm a passionate learner with a deep interest in software development,
            design, and emerging technologies. Currently pursuing my studies at KL University,
            I enjoy exploring new frameworks, building projects, and collaborating with others.
            My goal is to grow into a skilled and thoughtful engineer who creates meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
