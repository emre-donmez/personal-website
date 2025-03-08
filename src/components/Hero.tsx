import Image from 'next/image';
import { FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa6';
import { DEFAULT_PROFILE_IMAGE } from './utils';

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[calc(100vh-4rem)] bg-gradient-to-b from-black via-black to-zinc-900">
      <div className="mb-8 relative w-40 h-40 rounded-full overflow-hidden border-2 border-teal-500/50 shadow-lg shadow-teal-500/10">
        <Image 
          src={DEFAULT_PROFILE_IMAGE}
          alt="Emre Dönmez" 
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Emre Dönmez</h1>
      <h2 className="text-xl md:text-2xl text-teal-400 mb-6">Software Developer</h2>
      <p className="max-w-2xl text-gray-300 mb-8">
        A dedicated software developer specialized in .NET Core, SQL, RESTful APIs, CI/CD, and JavaScript, 
        focused on continuous improvement and delivering value through innovative solutions.
      </p>
      <div className="flex space-x-6">
        <a href="https://github.com/emre-donmez" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-teal-400 transition">
          <FaGithub />
        </a>
        <a href="https://medium.com/@emrecandonmez" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-teal-400 transition">
          <FaMedium />
        </a>
        <a href="https://linkedin.com/in/emredonmez" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-teal-400 transition">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
} 