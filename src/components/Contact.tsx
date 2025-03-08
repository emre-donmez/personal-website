import { FaGithub, FaMedium, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import Section from './ui/Section';
import Card from './ui/Card';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../config/constants';

export default function Contact() {
  return (
    <Section id="contact" title="Contact" bgColor="zinc">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Feel free to reach out for questions about my projects, collaboration opportunities, or just to connect.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href={SOCIAL_LINKS.email} 
              className="flex items-center p-4 bg-gray-100 dark:bg-zinc-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition border border-gray-200 dark:border-zinc-600/50"
            >
              <FaEnvelope className="text-2xl text-teal-600 dark:text-teal-400 mr-4" />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">{PERSONAL_INFO.email}</p>
              </div>
            </a>
            
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-100 dark:bg-zinc-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition border border-gray-200 dark:border-zinc-600/50"
            >
              <FaLinkedin className="text-2xl text-teal-600 dark:text-teal-400 mr-4" />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-400">linkedin.com/in/{PERSONAL_INFO.linkedin}</p>
              </div>
            </a>
            
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-100 dark:bg-zinc-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition border border-gray-200 dark:border-zinc-600/50"
            >
              <FaGithub className="text-2xl text-teal-600 dark:text-teal-400 mr-4" />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-400">github.com/{PERSONAL_INFO.github}</p>
              </div>
            </a>
            
            <a 
              href={SOCIAL_LINKS.medium} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-100 dark:bg-zinc-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition border border-gray-200 dark:border-zinc-600/50"
            >
              <FaMedium className="text-2xl text-teal-600 dark:text-teal-400 mr-4" />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">Medium</h3>
                <p className="text-gray-600 dark:text-gray-400">medium.com/@{PERSONAL_INFO.medium}</p>
              </div>
            </a>
          </div>
        </Card>
      </div>
    </Section>
  );
} 