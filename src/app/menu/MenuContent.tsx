'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData, Drink } from '@/data/menuData';
import CategorySection from '@/components/menu/CategorySection';
import DrinkDetailModal from '@/components/menu/DrinkDetailModal';

const STEAM_PARTICLES = Array.from({ length: 6 }, (_, i) => i);

export default function MenuContent() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

  const filteredCategories = useMemo(() => {
    if (activeCategory === 'all') return menuData;
    return menuData.filter((c) => c.id === activeCategory);
  }, [activeCategory]);

  const allCategories = [
    { id: 'all', name: 'Tümü', icon: '🍽️' },
    ...menuData.map((c) => ({ id: c.id, name: c.name, icon: c.icon })),
  ];

  return (
    <div className="menu-page min-h-screen bg-[rgb(var(--menu-bg))] overflow-hidden relative">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgba(193,154,107,0.03)] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgba(140,100,60,0.04)] rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="relative pt-12 pb-8 px-4 text-center overflow-hidden">
        {/* Steam animation */}
        <div className="absolute inset-x-0 top-0 flex justify-center">
          {STEAM_PARTICLES.map((i) => (
            <motion.div
              key={i}
              className="w-1 rounded-full bg-gradient-to-t from-[rgba(193,154,107,0.15)] to-transparent"
              style={{
                position: 'absolute',
                left: `${38 + i * 5}%`,
                height: `${30 + i * 8}px`,
              }}
              animate={{
                y: [-20, -60 - i * 10],
                opacity: [0, 0.6, 0],
                scaleX: [1, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        <div className="max-w-lg mx-auto relative z-10">
          <motion.span
            className="text-6xl mb-4 block"
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 10, stiffness: 100 }}
          >
            ☕
          </motion.span>
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-[rgb(var(--menu-text))] mb-3 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ev Menüsü
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-[rgb(var(--menu-text-secondary))] leading-relaxed max-w-sm mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            Hoş geldiniz! Dilerseniz kahve, dilerseniz sıcak veya soğuk başka bir içecek seçebilirsiniz.
          </motion.p>
        </div>

        {/* Decorative line */}
        <motion.div
          className="max-w-[120px] mx-auto mt-6 h-px bg-gradient-to-r from-transparent via-[rgba(193,154,107,0.4)] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        />
      </header>

      {/* Category Tabs */}
      <motion.nav
        className="sticky top-0 z-30 bg-[rgba(var(--menu-bg),0.85)] backdrop-blur-xl border-b border-[rgba(193,154,107,0.08)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <div className="max-w-lg mx-auto px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar">
          {allCategories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap
                ${activeCategory === cat.id
                  ? 'bg-[rgba(193,154,107,0.15)] text-[rgb(193,154,107)] shadow-[inset_0_0_0_1px_rgba(193,154,107,0.25)]'
                  : 'text-[rgb(168,156,144)] hover:text-[rgb(200,190,178)] hover:bg-[rgba(193,154,107,0.06)]'
                }
              `}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.name}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Menu Content */}
      <main className="max-w-lg mx-auto px-4 pt-8 pb-12 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {filteredCategories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                onSelectDrink={setSelectedDrink}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.footer
        className="pb-10 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-xs text-[rgb(var(--menu-text-secondary))] opacity-50">
          Afiyet olsun ☕
        </p>
      </motion.footer>

      {/* Drink Detail Modal */}
      <AnimatePresence>
        {selectedDrink && (
          <DrinkDetailModal
            drink={selectedDrink}
            onClose={() => setSelectedDrink(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
