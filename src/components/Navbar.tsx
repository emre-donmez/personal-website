import MobileMenu from './ui/MobileMenu';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800/50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1"></div> {/* Boş div, sol tarafı dengelemek için */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`${activeSection === 'home' ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'} hover:text-teal-600 dark:hover:text-teal-400 transition`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`${activeSection === 'about' ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'} hover:text-teal-600 dark:hover:text-teal-400 transition`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`${activeSection === 'skills' ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'} hover:text-teal-600 dark:hover:text-teal-400 transition`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`${activeSection === 'projects' ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'} hover:text-teal-600 dark:hover:text-teal-400 transition`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className={`${activeSection === 'blog' ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'} hover:text-teal-600 dark:hover:text-teal-400 transition`}
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`${activeSection === 'contact' ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'} hover:text-teal-600 dark:hover:text-teal-400 transition`}
            >
              Contact
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