import Image from 'next/image';
import { FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa6';
import { DEFAULT_PROFILE_IMAGE } from './utils';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../config/constants';

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center py-16 md:py-24 px-4 text-center min-h-[calc(100vh-4rem)] bg-gradient overflow-hidden">
      {/* Arka plan dekoratif öğeleri */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[rgb(var(--color-primary))] blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[rgb(var(--color-accent))] blur-[120px]"></div>
      </div>
      
      {/* Dekoratif çizgiler */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgb(var(--color-primary))] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgb(var(--color-primary))] to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="mb-8 relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-2 border-[rgb(var(--color-primary))]/50 shadow-lg shadow-[rgb(var(--color-primary))]/10">
          <Image 
            src={DEFAULT_PROFILE_IMAGE}
            alt={PERSONAL_INFO.name} 
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <h1 className="mb-3 text-gradient">{PERSONAL_INFO.name}</h1>
        <h2 className="mb-6 text-[rgb(var(--color-primary))]">{PERSONAL_INFO.title}</h2>
        
        <p className="max-w-2xl mx-auto mb-8 text-[rgb(var(--color-text-secondary))] leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>
        
        <div className="flex justify-center space-x-6 mb-10">
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a 
            href={SOCIAL_LINKS.medium} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
            aria-label="Medium Blog"
          >
            <FaMedium />
          </a>
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
        </div>
        
        <div>
          <button 
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn btn-outline"
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
} 