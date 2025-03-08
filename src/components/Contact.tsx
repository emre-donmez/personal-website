import { FaGithub, FaMedium, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import Section from './ui/Section';
import Card from './ui/Card';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../config/constants';

export default function Contact() {
  return (
    <Section id="contact" title="Contact" bgColor="secondary">
      <div className="max-w-3xl mx-auto">
        <Card className="p-6 md:p-8">
          <p className="text-center text-[rgb(var(--color-text-secondary))] mb-8 leading-relaxed max-w-xl mx-auto">
            Feel free to reach out for questions about my projects, collaboration opportunities, or just to connect.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href={SOCIAL_LINKS.email} 
              className="group flex items-center p-4 rounded-lg border border-[rgb(var(--color-bg-secondary))]/80 hover:border-[rgb(var(--color-primary))]/30 transition-all duration-300"
              aria-label="Email"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgb(var(--color-primary))]/10 mr-3 group-hover:bg-[rgb(var(--color-primary))]/20 transition-all duration-300">
                <FaEnvelope className="text-lg text-[rgb(var(--color-primary))]" />
              </div>
              <div>
                <h3 className="font-medium text-[rgb(var(--color-text))] mb-0.5 text-sm">Email</h3>
                <p className="text-[rgb(var(--color-text-secondary))] text-xs">{PERSONAL_INFO.email}</p>
              </div>
            </a>
            
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center p-4 rounded-lg border border-[rgb(var(--color-bg-secondary))]/80 hover:border-[rgb(var(--color-primary))]/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgb(var(--color-primary))]/10 mr-3 group-hover:bg-[rgb(var(--color-primary))]/20 transition-all duration-300">
                <FaLinkedin className="text-lg text-[rgb(var(--color-primary))]" />
              </div>
              <div>
                <h3 className="font-medium text-[rgb(var(--color-text))] mb-0.5 text-sm">LinkedIn</h3>
                <p className="text-[rgb(var(--color-text-secondary))] text-xs">linkedin.com/in/{PERSONAL_INFO.linkedin}</p>
              </div>
            </a>
            
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center p-4 rounded-lg border border-[rgb(var(--color-bg-secondary))]/80 hover:border-[rgb(var(--color-primary))]/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgb(var(--color-primary))]/10 mr-3 group-hover:bg-[rgb(var(--color-primary))]/20 transition-all duration-300">
                <FaGithub className="text-lg text-[rgb(var(--color-primary))]" />
              </div>
              <div>
                <h3 className="font-medium text-[rgb(var(--color-text))] mb-0.5 text-sm">GitHub</h3>
                <p className="text-[rgb(var(--color-text-secondary))] text-xs">github.com/{PERSONAL_INFO.github}</p>
              </div>
            </a>
            
            <a 
              href={SOCIAL_LINKS.medium} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center p-4 rounded-lg border border-[rgb(var(--color-bg-secondary))]/80 hover:border-[rgb(var(--color-primary))]/30 transition-all duration-300"
              aria-label="Medium"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgb(var(--color-primary))]/10 mr-3 group-hover:bg-[rgb(var(--color-primary))]/20 transition-all duration-300">
                <FaMedium className="text-lg text-[rgb(var(--color-primary))]" />
              </div>
              <div>
                <h3 className="font-medium text-[rgb(var(--color-text))] mb-0.5 text-sm">Medium</h3>
                <p className="text-[rgb(var(--color-text-secondary))] text-xs">medium.com/@{PERSONAL_INFO.medium}</p>
              </div>
            </a>
          </div>
        </Card>
      </div>
    </Section>
  );
} 