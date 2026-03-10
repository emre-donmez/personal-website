'use client';

import { menuData } from '@/data/menuData';
import CategorySection from '@/components/menu/CategorySection';

export default function MenuContent() {
  return (
    <div className="menu-page min-h-screen bg-[rgb(var(--menu-bg))]">
      {/* Header */}
      <header className="pt-10 pb-6 px-4 text-center">
        <div className="max-w-lg mx-auto">
          <span className="text-4xl mb-3 block">☕</span>
          <h1 className="text-2xl md:text-3xl font-bold text-[rgb(var(--menu-text))] mb-3">
            Ev Menüsü
          </h1>
          <p className="text-sm md:text-base text-[rgb(var(--menu-text-secondary))] leading-relaxed">
            Hoş geldiniz! Dilerseniz kahve, dilerseniz sıcak veya soğuk başka bir içecek seçebilirsiniz.
          </p>
        </div>
      </header>

      {/* Menu Categories */}
      <main className="max-w-lg mx-auto px-4 pb-12">
        {menuData.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>

      {/* Footer */}
      <footer className="pb-8 text-center">
        <p className="text-xs text-[rgb(var(--menu-text-secondary))] opacity-60">
          Afiyet olsun ☕
        </p>
      </footer>
    </div>
  );
}
