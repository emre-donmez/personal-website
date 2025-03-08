// GitHub ve Medium entegrasyonu için tip tanımlamaları
export type GitHubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
};

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  categories: string[];
  author: string;
  content: string; // İçerik, clap sayısını çıkarmak için kullanılabilir
}; 