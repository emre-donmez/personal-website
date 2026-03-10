import { DrinkCategory } from '@/data/menuData';
import DrinkCard from './DrinkCard';

interface CategorySectionProps {
  category: DrinkCategory;
}

export default function CategorySection({ category }: CategorySectionProps) {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{category.icon}</span>
        <h2 className="text-xl font-bold text-[rgb(var(--menu-text))]">
          {category.name}
        </h2>
      </div>
      <div className="space-y-3">
        {category.drinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </section>
  );
}
