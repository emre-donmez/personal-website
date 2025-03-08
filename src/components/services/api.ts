import { GitHubRepo, MediumPost } from '../types';

// GitHub API çağrıları
export const fetchGitHubRepos = async (username: string, perPage: number = 6): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}`);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

// Medium API çağrıları
export const fetchMediumPosts = async (username: string): Promise<MediumPost[]> => {
  try {
    // Medium RSS feed'ini CORS sorunlarını aşmak için bir proxy üzerinden çekiyoruz
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`);
    if (!response.ok) {
      throw new Error(`Medium API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.status === 'ok') {
      // İçerik bilgisini de içeren yazıları alıyoruz
      return data.items.slice(0, 3).map((item: any) => ({
        ...item,
        // Eğer içerik yoksa boş string kullanıyoruz
        content: item.content || ''
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
}; 