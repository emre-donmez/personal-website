import { motion } from 'framer-motion';
import { DrinkCategory, Drink } from '@/data/menuData';
import DrinkCard from './DrinkCard';

interface CategorySectionProps {
  category: DrinkCategory;
  onSelectDrink: (drink: Drink) => void;
}

export default function CategorySection({ category, onSelectDrink }: CategorySectionProps) {
  return (
    <motion.section
      className="mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex items-center gap-3 mb-5"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="text-2xl">{category.icon}</span>
        <h2 className="text-lg font-bold text-[rgb(245,240,235)] tracking-tight">
          {category.name}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[rgba(193,154,107,0.2)] to-transparent" />
      </motion.div>
      <div className="space-y-3">
        {category.drinks.map((drink, index) => (
          <DrinkCard
            key={drink.id}
            drink={drink}
            index={index}
            onSelect={onSelectDrink}
          />
        ))}
      </div>
    </motion.section>
  );
}
