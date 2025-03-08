import MobileMenu from './ui/MobileMenu';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-[rgb(var(--color-primary))]/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1"></div> {/* Boş div, sol tarafı dengelemek için */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`${activeSection === 'home' ? 'text-[rgb(var(--color-primary))]' : 'text-[rgb(var(--color-text-secondary))]'} hover:text-[rgb(var(--color-primary))] transition-all duration-300 relative group overflow-hidden px-2 py-1`}
            >
              <span className="relative z-10">Home</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[rgb(var(--color-primary))]/70 transform origin-left scale-x-0 transition-transform duration-300 ${activeSection === 'home' ? 'scale-x-100' : 'group-hover:scale-x-100'}`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`${activeSection === 'about' ? 'text-[rgb(var(--color-primary))]' : 'text-[rgb(var(--color-text-secondary))]'} hover:text-[rgb(var(--color-primary))] transition-all duration-300 relative group overflow-hidden px-2 py-1`}
            >
              <span className="relative z-10">About</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[rgb(var(--color-primary))]/70 transform origin-left scale-x-0 transition-transform duration-300 ${activeSection === 'about' ? 'scale-x-100' : 'group-hover:scale-x-100'}`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`${activeSection === 'skills' ? 'text-[rgb(var(--color-primary))]' : 'text-[rgb(var(--color-text-secondary))]'} hover:text-[rgb(var(--color-primary))] transition-all duration-300 relative group overflow-hidden px-2 py-1`}
            >
              <span className="relative z-10">Skills</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[rgb(var(--color-primary))]/70 transform origin-left scale-x-0 transition-transform duration-300 ${activeSection === 'skills' ? 'scale-x-100' : 'group-hover:scale-x-100'}`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`${activeSection === 'projects' ? 'text-[rgb(var(--color-primary))]' : 'text-[rgb(var(--color-text-secondary))]'} hover:text-[rgb(var(--color-primary))] transition-all duration-300 relative group overflow-hidden px-2 py-1`}
            >
              <span className="relative z-10">Projects</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[rgb(var(--color-primary))]/70 transform origin-left scale-x-0 transition-transform duration-300 ${activeSection === 'projects' ? 'scale-x-100' : 'group-hover:scale-x-100'}`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className={`${activeSection === 'blog' ? 'text-[rgb(var(--color-primary))]' : 'text-[rgb(var(--color-text-secondary))]'} hover:text-[rgb(var(--color-primary))] transition-all duration-300 relative group overflow-hidden px-2 py-1`}
            >
              <span className="relative z-10">Blog</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[rgb(var(--color-primary))]/70 transform origin-left scale-x-0 transition-transform duration-300 ${activeSection === 'blog' ? 'scale-x-100' : 'group-hover:scale-x-100'}`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`${activeSection === 'contact' ? 'text-[rgb(var(--color-primary))]' : 'text-[rgb(var(--color-text-secondary))]'} hover:text-[rgb(var(--color-primary))] transition-all duration-300 relative group overflow-hidden px-2 py-1`}
            >
              <span className="relative z-10">Contact</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[rgb(var(--color-primary))]/70 transform origin-left scale-x-0 transition-transform duration-300 ${activeSection === 'contact' ? 'scale-x-100' : 'group-hover:scale-x-100'}`}></span>
            </button>
          </div>
          <div className="flex-1 flex justify-end">
            <MobileMenu activeSection={activeSection} scrollToSection={scrollToSection} />
          </div>
        </div>
      </div>
    </nav>
  );
} 