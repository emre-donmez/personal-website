import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

interface MobileMenuProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function MobileMenu({ activeSection, scrollToSection }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Menü açıkken scroll'u engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };
  
  return (
    <>
      <button 
        onClick={toggleMenu} 
        className="md:hidden text-gray-600 dark:text-gray-300 p-2"
        aria-label="Toggle mobile menu"
      >
        ☰
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-white dark:bg-black z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 p-2"
              aria-label="Close mobile menu"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-grow space-y-8 text-xl">
            <button 
              onClick={() => handleMenuClick('home')}
              className={`${activeSection === 'home' ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'} hover:text-teal-600 dark:hover:text-teal-400 transition`}
            >
              Home
            </button>
            <button 
              onClick={() => handleMenuClick('about')}
              className={`${activeSection === 'about' ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'} hover:text-teal-600 dark:hover:text-teal-400 transition`}
            >
              About
            </button>
            <button 
              onClick={() => handleMenuClick('skills')}
              className={`${activeSection === 'skills' ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'} hover:text-teal-600 dark:hover:text-teal-400 transition`}
            >
              Skills
            </button>
            <button 
              onClick={() => handleMenuClick('projects')}
              className={`${activeSection === 'projects' ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'} hover:text-teal-600 dark:hover:text-teal-400 transition`}
            >
              Projects
            </button>
            <button 
              onClick={() => handleMenuClick('blog')}
              className={`${activeSection === 'blog' ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'} hover:text-teal-600 dark:hover:text-teal-400 transition`}
            >
              Blog
            </button>
            <button 
              onClick={() => handleMenuClick('contact')}
              className={`${activeSection === 'contact' ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'} hover:text-teal-600 dark:hover:text-teal-400 transition`}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
} 