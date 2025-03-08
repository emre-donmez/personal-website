import { useState, useEffect } from 'react';
import { FaHandsClapping } from 'react-icons/fa6';
import { MediumPost } from './types';
import { extractClapCount } from './utils';

export default function Blog() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <section id="blog" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Medium Articles</h2>
        
        {loading ? (
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
  );
} 