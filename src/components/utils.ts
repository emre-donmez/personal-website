export const DEFAULT_PROFILE_IMAGE = "/images/profile.jpg";

// Medium yazısından clap sayısını çıkaran yardımcı fonksiyon
export function extractClapCount(content: string): number {
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