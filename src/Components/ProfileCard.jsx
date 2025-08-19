import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="rounded-2xl shadow-lg p-8 bg-white max-w-sm">
        <img
          src="/images/Rahul Devkate1.jpeg"
          alt="profile"
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-gray-300"
          
        />

        <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">
           Rahul Deokate
        </h2>
        <p className="text-center text-gray-600 mb-6">Full Stack Developer</p>

        <h3 className="text-xl text-blue-600 font-semibold text-center mb-6">
          "Turning ideas into reality through code!"
        </h3>

        <div className="flex justify-center space-x-4 text-gray-600">
          <a href="https://github.com/rahuldeokate35" target="_blank" rel="noreferrer">
            <FaGithub className="w-6 h-6 hover:text-black hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/rahul-devkate-41814033a" target="_blank" rel="noreferrer">
            <FaLinkedin className="w-6 h-6 hover:text-blue-700 hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://www.instagram.com/rahul.devkate.patil?utm_source=qr&igsh=MTBsZmR1ZGg4a2dodA==" target="_blank" rel="noreferrer">
            <FaInstagram className="w-6 h-6 relative z-10 transition duration-300 ease-in-out hover:text-pink-500" />
          </a>

          
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
