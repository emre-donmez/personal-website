import { useState, useEffect } from 'react';
import { GitHubRepo } from './types';
import { fetchGitHubRepos } from './services/api';
import Section from './ui/Section';
import Card, { CardContent, CardFooter } from './ui/Card';
import Button from './ui/Button';
import Loading from './ui/Loading';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../config/constants';

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  // GitHub repolarını çekme
  useEffect(() => {
    const loadRepos = async () => {
      setLoading(true);
      const data = await fetchGitHubRepos(PERSONAL_INFO.github);
      setRepos(data);
      setLoading(false);
    };

    loadRepos();
  }, []);

  return (
    <Section id="projects" title="GitHub Projects" bgColor="secondary">
      {loading ? (
        <Loading message="Loading GitHub projects..." />
      ) : repos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {repos.map(repo => (
            <Card key={repo.id} className="group h-full flex flex-col bg-gradient-to-br from-[rgba(var(--color-bg-secondary),0.8)] to-[rgba(var(--color-bg-secondary),0.4)] backdrop-blur-sm border border-[rgba(var(--color-primary),0.1)] hover:border-[rgba(var(--color-primary),0.3)]">
              <CardContent className="flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[rgb(var(--color-primary))] group-hover:text-gradient transition-all duration-300">{repo.name}</h3>
                  <div className="flex items-center text-xs text-[rgb(var(--color-text-secondary))/80]">
                  </div>
                </div>
                
                <p className="text-[rgb(var(--color-text-secondary))] mb-5 line-clamp-3 text-sm leading-relaxed">
                  {repo.description || 'No description available.'}
                </p>
                
                {repo.language && (
                  <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[rgba(var(--color-primary),0.1)] text-[rgb(var(--color-primary))] mb-4">
                    <span className="inline-block w-2 h-2 rounded-full bg-[rgb(var(--color-primary))] mr-1.5"></span>
                    {repo.language}
                  </div>
                )}
              </CardContent>
              <CardFooter className="border-t border-[rgba(var(--color-primary),0.1)]">
                <Button href={repo.html_url} variant="link" external className="w-full flex justify-center items-center py-1.5 group-hover:text-[rgb(var(--color-primary))]">
                  <span>View on GitHub</span>
                  <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-[rgb(var(--color-text-secondary))]">
          <p>Error loading GitHub projects or no projects found.</p>
        </div>
      )}
      
      <div className="text-center mt-10">
        <Button href={SOCIAL_LINKS.github} variant="outline" external>
          View All Projects
        </Button>
      </div>
    </Section>
  );
} 