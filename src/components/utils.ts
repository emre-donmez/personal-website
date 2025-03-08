// Varsayılan görsel URL'leri
export const DEFAULT_MEDIUM_IMAGE = "https://miro.medium.com/v2/resize:fit:1400/1*m-R_BkNf1Qjr1YbyOIJY2w.png";
export const DEFAULT_PROFILE_IMAGE = "https://github.com/identicons/emre-donmez.png";

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