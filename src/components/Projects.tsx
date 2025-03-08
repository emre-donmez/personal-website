import { useState, useEffect } from 'react';
import { GitHubRepo } from './types';

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  // GitHub repolarını çekme
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/emre-donmez/repos?sort=updated&per_page=6');
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">GitHub Projects</h2>
        
        {loading ? (
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
  );
} 