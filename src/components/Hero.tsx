import Image from 'next/image';
import { FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa6';
import { DEFAULT_PROFILE_IMAGE } from './utils';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../config/constants';

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[calc(100vh-4rem)] bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-black dark:to-zinc-900">
      <div className="mb-8 relative w-40 h-40 rounded-full overflow-hidden border-2 border-teal-500/50 shadow-lg shadow-teal-500/10">
        <Image 
          src={DEFAULT_PROFILE_IMAGE}
          alt={PERSONAL_INFO.name} 
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">{PERSONAL_INFO.name}</h1>
      <h2 className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 mb-6">{PERSONAL_INFO.title}</h2>
      <p className="max-w-2xl text-gray-600 dark:text-gray-300 mb-8">
        {PERSONAL_INFO.bio}
      </p>
      <div className="flex space-x-6">
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition">
          <FaGithub />
        </a>
        <a href={SOCIAL_LINKS.medium} target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition">
          <FaMedium />
        </a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
} 