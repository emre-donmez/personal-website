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
        className="md:hidden text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-primary))] p-2 transition-all duration-300 border border-[rgb(var(--color-primary))]/20 rounded-md hover:bg-[rgb(var(--color-primary))]/5"
        aria-label="Toggle mobile menu"
      >
        <span className="text-xl">☰</span>
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-[#000000] z-50 flex flex-col">
          {/* Üst kısım - Kapatma butonu */}
          <div className="flex justify-end p-4 border-b border-[rgb(var(--color-primary))]/20 relative z-10 bg-[#000000]">
            <button 
              onClick={toggleMenu}
              className="text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-primary))] p-2 transition-all duration-300 border border-[rgb(var(--color-primary))]/20 rounded-md hover:bg-[rgb(var(--color-primary))]/5"
              aria-label="Close mobile menu"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
          
          {/* Menü öğeleri */}
          <div className="flex flex-col items-center justify-center flex-grow py-8 bg-[#000000]">
            <nav className="w-64 flex flex-col space-y-4">
              <div 
                onClick={() => handleMenuClick('home')}
                className={`cursor-pointer px-4 py-3 border-l-2 ${activeSection === 'home' ? 'border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))]' : 'border-[#333333] text-[rgb(var(--color-text))]'} hover:border-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-primary))] transition-all duration-300`}
              >
                <span className="font-medium text-lg">Home</span>
              </div>
              
              <div 
                onClick={() => handleMenuClick('about')}
                className={`cursor-pointer px-4 py-3 border-l-2 ${activeSection === 'about' ? 'border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))]' : 'border-[#333333] text-[rgb(var(--color-text))]'} hover:border-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-primary))] transition-all duration-300`}
              >
                <span className="font-medium text-lg">About</span>
              </div>
              
              <div 
                onClick={() => handleMenuClick('skills')}
                className={`cursor-pointer px-4 py-3 border-l-2 ${activeSection === 'skills' ? 'border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))]' : 'border-[#333333] text-[rgb(var(--color-text))]'} hover:border-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-primary))] transition-all duration-300`}
              >
                <span className="font-medium text-lg">Skills</span>
              </div>
              
              <div 
                onClick={() => handleMenuClick('projects')}
                className={`cursor-pointer px-4 py-3 border-l-2 ${activeSection === 'projects' ? 'border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))]' : 'border-[#333333] text-[rgb(var(--color-text))]'} hover:border-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-primary))] transition-all duration-300`}
              >
                <span className="font-medium text-lg">Projects</span>
              </div>
              
              <div 
                onClick={() => handleMenuClick('blog')}
                className={`cursor-pointer px-4 py-3 border-l-2 ${activeSection === 'blog' ? 'border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))]' : 'border-[#333333] text-[rgb(var(--color-text))]'} hover:border-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-primary))] transition-all duration-300`}
              >
                <span className="font-medium text-lg">Blog</span>
              </div>
              
              <div 
                onClick={() => handleMenuClick('contact')}
                className={`cursor-pointer px-4 py-3 border-l-2 ${activeSection === 'contact' ? 'border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))]' : 'border-[#333333] text-[rgb(var(--color-text))]'} hover:border-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-primary))] transition-all duration-300`}
              >
                <span className="font-medium text-lg">Contact</span>
              </div>
            </nav>
          </div>
          
          {/* Alt kısım */}
          <div className="h-px w-full bg-[rgb(var(--color-primary))]/20 mb-8 relative z-10 bg-[#000000]"></div>
        </div>
      )}
    </>
  );
} 