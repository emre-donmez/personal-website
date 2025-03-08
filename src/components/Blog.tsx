import { useState, useEffect } from 'react';
import { MediumPost } from './types';
import { fetchMediumPosts } from './services/api';
import Section from './ui/Section';
import Card, { CardContent, CardFooter } from './ui/Card';
import Button from './ui/Button';
import Loading from './ui/Loading';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../config/constants';

export default function Blog() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Medium yazılarını çekme
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const data = await fetchMediumPosts(PERSONAL_INFO.medium);
      setPosts(data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <Section id="blog" title="Medium Articles" bgColor="primary">
      {loading ? (
        <Loading message="Loading Medium articles..." />
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="group h-full">
              <CardContent>
                <h3 className="text-lg font-semibold mb-3 text-[rgb(var(--color-primary))] group-hover:text-gradient transition-all duration-300 line-clamp-2">{post.title}</h3>
                <div className="mb-4">
                  <p className="text-[rgb(var(--color-text-secondary))/80] text-xs">
                    {new Date(post.pubDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.categories.slice(0, 3).map((category, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-[rgb(var(--color-bg-secondary))]/70 text-[rgb(var(--color-text-secondary))] text-xs rounded">
                      {category}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button href={post.link} variant="link" external>
                  Read Article
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-[rgb(var(--color-text-secondary))]">
          <p>Error loading Medium articles or no articles found.</p>
        </div>
      )}
      
      <div className="text-center mt-10">
        <Button href={SOCIAL_LINKS.medium} variant="outline" external>
          View All Articles
        </Button>
      </div>
    </Section>
  );
} 