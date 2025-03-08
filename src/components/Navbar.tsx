interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-white">Emre Dönmez</div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`${activeSection === 'home' ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-400 transition`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`${activeSection === 'about' ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-400 transition`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`${activeSection === 'skills' ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-400 transition`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`${activeSection === 'projects' ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-400 transition`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className={`${activeSection === 'blog' ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-400 transition`}
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`${activeSection === 'contact' ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-400 transition`}
            >
              Contact
            </button>
          </div>
          <div className="md:hidden">
            {/* Mobil menü butonu (ileride eklenebilir) */}
            <button className="text-gray-300">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 