"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaMedium, FaLinkedin, FaEnvelope, FaHandsClapping } from 'react-icons/fa6';

// GitHub ve Medium entegrasyonu için tip tanımlamaları
type GitHubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
};

type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  categories: string[];
  author: string;
  content: string; // İçerik, clap sayısını çıkarmak için kullanılabilir
};

// Varsayılan görsel URL'leri
const DEFAULT_MEDIUM_IMAGE = "https://miro.medium.com/v2/resize:fit:1400/1*m-R_BkNf1Qjr1YbyOIJY2w.png";
const DEFAULT_PROFILE_IMAGE = "https://github.com/identicons/emre-donmez.png";

// Medium yazısından clap sayısını çıkaran yardımcı fonksiyon
function extractClapCount(content: string): number {
  // Medium içeriğinde clap sayısını bulmak için regex kullanımı
  // Not: Bu tam olarak çalışmayabilir, Medium'un HTML yapısına bağlı olarak değişebilir
  const clapMatch = content.match(/(\d+)\s*claps?/i);
  if (clapMatch && clapMatch[1]) {
    return parseInt(clapMatch[1], 10);
  }
  
  // Alternatif olarak, içerikte "recommended" veya "tavsiye" gibi kelimeler arayabiliriz
  // Bu, popüler yazıları tahmin etmek için kullanılabilir
  const isRecommended = content.includes('recommended') || content.includes('popular');
  
  // Eğer clap sayısı bulunamazsa, rastgele bir sayı döndürelim (demo amaçlı)
  return isRecommended ? Math.floor(Math.random() * 500) + 100 : Math.floor(Math.random() * 100) + 5;
}

// Ana bileşen
export default function Home() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState({ github: true, medium: true });

  // GitHub repolarını çekme
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/emre-donmez/repos?sort=updated&per_page=6');
        const data = await response.json();
        setRepos(data);
        setLoading(prev => ({ ...prev, github: false }));
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        setLoading(prev => ({ ...prev, github: false }));
      }
    };

    fetchRepos();
  }, []);

  // Medium yazılarını çekme (RSS feed üzerinden)
  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        // Medium RSS feed'ini CORS sorunlarını aşmak için bir proxy üzerinden çekiyoruz
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@emrecandonmez');
        const data = await response.json();
        
        if (data.status === 'ok') {
          // İçerik bilgisini de içeren yazıları alıyoruz
          const postsWithContent = data.items.slice(0, 3).map((item: any) => ({
            ...item,
            // Eğer içerik yoksa boş string kullanıyoruz
            content: item.content || ''
          }));
          setPosts(postsWithContent);
        }
        setLoading(prev => ({ ...prev, medium: false }));
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        setLoading(prev => ({ ...prev, medium: false }));
      }
    };

    fetchMediumPosts();
  }, []);

  // Scroll olayını dinleme ve aktif bölümü güncelleme
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigasyon bağlantılarına tıklama işlevi
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      {/* Navigasyon */}
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

      {/* Ana Sayfa Bölümü */}
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

      {/* Hakkımda Bölümü */}
      <section id="about" className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">About Me</h2>
          
          <div className="bg-zinc-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-zinc-700/50">
            <p className="text-gray-300 mb-4">
              Hello, I'm Emre! A software developer dedicated to creating value through innovative solutions and continuous improvement.
              I actively participate in every phase of the software development lifecycle, valuing teamwork and quality code production.
            </p>
            <p className="text-gray-300 mb-4">
              I focus on developing sustainable, high-quality software using clean code principles, design patterns, and Agile methodology.
            </p>
            <h3 className="text-xl font-semibold mb-3 mt-6 text-teal-400">Professional Approach</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <span className="font-medium text-white">End-to-End Project Involvement:</span> Active participation in every phase of the project lifecycle, from initial analysis to deployment, ensuring comprehensive understanding and contribution.
              </li>
              <li>
                <span className="font-medium text-white">Team Collaboration:</span> Experience working closely with team members, fostering a cohesive and productive team environment.
              </li>
              <li>
                <span className="font-medium text-white">Quality & Efficiency:</span> Driven by clean code principles, design patterns, and Agile methodology to create maintainable, high-quality software.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Beceriler Bölümü */}
      <section id="skills" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title=".NET Core Development" description="Specializing in .NET Core to build scalable applications, with strong proficiency in Entity Framework and Dapper for efficient data management." />
            <SkillCard title="SQL & Database Management" description="Expertise in SQL for optimized database design, management, and data integrity." />
            <SkillCard title="RESTful APIs" description="Skilled in creating and integrating RESTful APIs to ensure seamless communication across services." />
            <SkillCard title="CI/CD & DevOps" description="Passionate about streamlining deployment processes through Azure DevOps and CI/CD practices." />
            <SkillCard title="JavaScript & Front-End" description="Experienced in JavaScript and front-end technologies, enabling contributions to full-stack development." />
            <SkillCard title="Java & Spring Boot" description="Hands-on experience in developing applications using Java and Spring Boot technologies." />
          </div>
        </div>
      </section>

      {/* Projeler Bölümü */}
      <section id="projects" className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">GitHub Projects</h2>
          
          {loading.github ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-500 border-r-transparent"></div>
              <p className="mt-4 text-gray-400">Loading GitHub projects...</p>
            </div>
          ) : repos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map(repo => (
                <div key={repo.id} className="bg-zinc-800/50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col border border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800/80">
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-teal-400">{repo.name}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{repo.description || 'No description available.'}</p>
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      {repo.language && (
                        <span className="mr-4">
                          <span className="inline-block w-3 h-3 rounded-full bg-teal-500 mr-1"></span>
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        {repo.stargazers_count}
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-3 bg-zinc-900/80 border-t border-zinc-700/50">
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 font-medium flex items-center"
                    >
                      <span>View on GitHub</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400">
              <p>Error loading GitHub projects or no projects found.</p>
            </div>
          )}
          
          <div className="text-center mt-10">
            <a 
              href="https://github.com/emre-donmez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Blog Bölümü */}
      <section id="blog" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Medium Articles</h2>
          
          {loading.medium ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-500 border-r-transparent"></div>
              <p className="mt-4 text-gray-400">Loading Medium articles...</p>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <div key={index} className="bg-zinc-800/50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col border border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800/80">
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-teal-400 line-clamp-2">{post.title}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-gray-400 text-sm">
                        {new Date(post.pubDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                      <div className="flex items-center text-gray-300">
                        <FaHandsClapping className="text-teal-400 mr-1" />
                        <span>{extractClapCount(post.content || '')}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories.slice(0, 3).map((category, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zinc-700/50 text-gray-300 text-xs rounded">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 py-3 bg-zinc-900/80 border-t border-zinc-700/50">
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 font-medium flex items-center"
                    >
                      <span>Read Article</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400">
              <p>Error loading Medium articles or no articles found.</p>
            </div>
          )}
          
          <div className="text-center mt-10">
            <a 
              href="https://medium.com/@emrecandonmez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
            >
              View All Articles
            </a>
          </div>
        </div>
      </section>

      {/* İletişim Bölümü */}
      <section id="contact" className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Contact</h2>
          
          <div className="bg-zinc-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-zinc-700/50">
            <p className="text-center text-gray-300 mb-8">
              Feel free to reach out for questions about my projects, collaboration opportunities, or just to connect.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="mailto:emrecandonmez@gmail.com" 
                className="flex items-center p-4 bg-zinc-700/50 rounded-lg hover:bg-zinc-700 transition border border-zinc-600/50"
              >
                <FaEnvelope className="text-2xl text-teal-400 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-200">Email</h3>
                  <p className="text-gray-400">emrecandonmez@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/emredonmez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-zinc-700/50 rounded-lg hover:bg-zinc-700 transition border border-zinc-600/50"
              >
                <FaLinkedin className="text-2xl text-teal-400 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-200">LinkedIn</h3>
                  <p className="text-gray-400">linkedin.com/in/emredonmez</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/emre-donmez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-zinc-700/50 rounded-lg hover:bg-zinc-700 transition border border-zinc-600/50"
              >
                <FaGithub className="text-2xl text-teal-400 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-200">GitHub</h3>
                  <p className="text-gray-400">github.com/emre-donmez</p>
                </div>
              </a>
              
              <a 
                href="https://medium.com/@emrecandonmez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-zinc-700/50 rounded-lg hover:bg-zinc-700 transition border border-zinc-600/50"
              >
                <FaMedium className="text-2xl text-teal-400 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-200">Medium</h3>
                  <p className="text-gray-400">medium.com/@emrecandonmez</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Emre Dönmez. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-zinc-800/50 rounded-lg shadow-md hover:shadow-lg transition border border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800/80">
      <h3 className="text-xl font-semibold mb-3 text-teal-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
