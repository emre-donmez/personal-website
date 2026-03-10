'use client';

import { motion } from 'framer-motion';
import { Drink } from '@/data/menuData';

interface DrinkCardProps {
  drink: Drink;
  index: number;
  onSelect: (drink: Drink) => void;
}

export default function DrinkCard({ drink, index, onSelect }: DrinkCardProps) {
  return (
    <motion.button
      onClick={() => onSelect(drink)}
      className="w-full text-left group relative rounded-2xl overflow-hidden cursor-pointer border border-[rgba(193,154,107,0.08)] bg-[rgba(32,26,22,0.6)] backdrop-blur-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[rgba(193,154,107,0.08)] via-transparent to-[rgba(193,154,107,0.04)]" />
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_0_1px_rgba(193,154,107,0.2)]" />

      <div className="relative p-4 flex items-center gap-4">
        {/* Icon container */}
        <motion.div
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(193,154,107,0.15)] to-[rgba(193,154,107,0.05)] flex items-center justify-center text-2xl flex-shrink-0 border border-[rgba(193,154,107,0.1)]"
          whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
        >
          {drink.icon}
        </motion.div>

        {/* Text */}
        <div className="flex-grow min-w-0">
          <h3 className="font-semibold text-[rgb(245,240,235)] text-base group-hover:text-[rgb(193,154,107)] transition-colors duration-300">
            {drink.name}
          </h3>
          <p className="text-sm text-[rgb(168,156,144)] mt-0.5 line-clamp-1">
            {drink.description}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(193,154,107,0.08)] flex items-center justify-center text-[rgb(193,154,107)] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </motion.button>
  );
}
