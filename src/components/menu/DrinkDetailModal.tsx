'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Drink } from '@/data/menuData';

interface DrinkDetailModalProps {
  drink: Drink;
  onClose: () => void;
}

export default function DrinkDetailModal({ drink, onClose }: DrinkDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'recipe'>('info');

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative w-full sm:max-w-md mx-auto bg-[rgb(24,20,18)] border border-[rgba(193,154,107,0.15)] rounded-t-3xl sm:rounded-2xl max-h-[85vh] overflow-hidden flex flex-col"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      >
        {/* Drag handle (mobile) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-[rgba(193,154,107,0.3)]" />
        </div>

        {/* Header */}
        <div className="relative px-6 pt-4 pb-5 text-center border-b border-[rgba(193,154,107,0.1)]">
          <motion.button
            onClick={onClose}
            className="absolute right-4 top-4 w-8 h-8 rounded-full bg-[rgba(193,154,107,0.1)] flex items-center justify-center text-[rgb(168,156,144)] hover:bg-[rgba(193,154,107,0.2)] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>

          <motion.span
            className="text-5xl block mb-3"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 12, delay: 0.1 }}
          >
            {drink.icon}
          </motion.span>
          <motion.h2
            className="text-2xl font-bold text-[rgb(245,240,235)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {drink.name}
          </motion.h2>
          <motion.p
            className="text-sm text-[rgb(168,156,144)] mt-1.5 max-w-xs mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {drink.description}
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex px-6 pt-4 gap-2">
          {(['info', 'recipe'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                ${activeTab === tab
                  ? 'bg-[rgba(193,154,107,0.15)] text-[rgb(193,154,107)] shadow-[inset_0_0_0_1px_rgba(193,154,107,0.2)]'
                  : 'text-[rgb(168,156,144)] hover:text-[rgb(193,154,107)]'
                }
              `}
            >
              {tab === 'info' ? '📋 Bilgi' : '👨‍🍳 Tarif'}
            </button>
          ))}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <AnimatePresence mode="wait">
            {activeTab === 'info' ? (
              <motion.div
                key="info"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                {/* Ingredients */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[rgb(193,154,107)] mb-3 flex items-center gap-2">
                    <span className="w-6 h-px bg-[rgba(193,154,107,0.3)]" />
                    İçindekiler
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {drink.ingredients.map((item, i) => (
                      <motion.span
                        key={i}
                        className="text-sm px-3 py-1.5 rounded-full bg-[rgba(193,154,107,0.08)] text-[rgb(200,190,178)] border border-[rgba(193,154,107,0.12)]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                {(drink.coffeeGrams || drink.espressoShot || drink.milkRatio) && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-[rgb(193,154,107)] flex items-center gap-2">
                      <span className="w-6 h-px bg-[rgba(193,154,107,0.3)]" />
                      Detaylar
                    </h4>
                    <div className="grid gap-2">
                      {drink.coffeeGrams && (
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-[rgba(193,154,107,0.05)] border border-[rgba(193,154,107,0.08)]">
                          <span className="text-lg">⚖️</span>
                          <div>
                            <p className="text-xs text-[rgb(168,156,144)]">Kahve Gramajı</p>
                            <p className="text-sm font-medium text-[rgb(245,240,235)]">{drink.coffeeGrams}</p>
                          </div>
                        </div>
                      )}
                      {drink.espressoShot && (
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-[rgba(193,154,107,0.05)] border border-[rgba(193,154,107,0.08)]">
                          <span className="text-lg">☕</span>
                          <div>
                            <p className="text-xs text-[rgb(168,156,144)]">Espresso Shot</p>
                            <p className="text-sm font-medium text-[rgb(245,240,235)]">{drink.espressoShot}</p>
                          </div>
                        </div>
                      )}
                      {drink.milkRatio && (
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-[rgba(193,154,107,0.05)] border border-[rgba(193,154,107,0.08)]">
                          <span className="text-lg">🥛</span>
                          <div>
                            <p className="text-xs text-[rgb(168,156,144)]">Süt / Oran</p>
                            <p className="text-sm font-medium text-[rgb(245,240,235)]">{drink.milkRatio}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Serving Suggestion */}
                {drink.servingSuggestion && (
                  <motion.div
                    className="p-4 rounded-xl bg-gradient-to-br from-[rgba(193,154,107,0.1)] to-[rgba(193,154,107,0.03)] border border-[rgba(193,154,107,0.12)]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-[rgb(193,154,107)] mb-2">
                      🍽️ Servis Önerisi
                    </p>
                    <p className="text-sm text-[rgb(200,190,178)] leading-relaxed">
                      {drink.servingSuggestion}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="recipe"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <h4 className="text-xs font-semibold uppercase tracking-widest text-[rgb(193,154,107)] flex items-center gap-2">
                  <span className="w-6 h-px bg-[rgba(193,154,107,0.3)]" />
                  Hazırlama Adımları
                </h4>
                <ol className="space-y-3">
                  {drink.preparationSteps.map((step, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[rgba(193,154,107,0.25)] to-[rgba(193,154,107,0.1)] text-[rgb(193,154,107)] text-xs flex items-center justify-center font-bold mt-0.5 border border-[rgba(193,154,107,0.15)]">
                        {i + 1}
                      </span>
                      <p className="text-sm text-[rgb(200,190,178)] leading-relaxed pt-1">
                        {step}
                      </p>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
