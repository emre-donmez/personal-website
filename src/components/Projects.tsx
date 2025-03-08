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
            <Card key={repo.id} className="group h-full">
              <CardContent>
                <h3 className="text-lg font-semibold mb-3 text-[rgb(var(--color-primary))] group-hover:text-gradient transition-all duration-300">{repo.name}</h3>
                <p className="text-[rgb(var(--color-text-secondary))] mb-4 line-clamp-3 text-sm leading-relaxed">
                  {repo.description || 'No description available.'}
                </p>
                <div className="flex items-center text-xs text-[rgb(var(--color-text-secondary))/80] mb-2">
                  {repo.language && (
                    <span className="mr-4 flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-[rgb(var(--color-primary))] mr-1.5"></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center">
                    <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    {repo.stargazers_count}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button href={repo.html_url} variant="link" external>
                  View on GitHub
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