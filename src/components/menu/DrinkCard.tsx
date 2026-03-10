'use client';

import { useState } from 'react';
import { Drink } from '@/data/menuData';

interface DrinkCardProps {
  drink: Drink;
}

export default function DrinkCard({ drink }: DrinkCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`
        rounded-xl border transition-all duration-300 overflow-hidden
        ${isOpen
          ? 'bg-[rgba(var(--menu-accent),0.08)] border-[rgba(var(--menu-accent),0.3)] shadow-lg shadow-[rgba(var(--menu-accent),0.05)]'
          : 'bg-[rgba(var(--menu-card),0.6)] border-[rgba(var(--menu-accent),0.08)] hover:border-[rgba(var(--menu-accent),0.2)] hover:shadow-md'
        }
      `}
    >
      {/* Card Header - Always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-4 text-left cursor-pointer group"
      >
        <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {drink.icon}
        </span>
        <div className="flex-grow min-w-0">
          <h3 className="font-semibold text-[rgb(var(--menu-text))] text-lg">
            {drink.name}
          </h3>
          <p className="text-sm text-[rgb(var(--menu-text-secondary))] mt-0.5 line-clamp-1">
            {drink.description}
          </p>
        </div>
        <span
          className={`
            text-[rgb(var(--menu-accent))] transition-transform duration-300 flex-shrink-0 text-xl
            ${isOpen ? 'rotate-180' : ''}
          `}
        >
          ▾
        </span>
      </button>

      {/* Expandable Detail Section */}
      <div
        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-4 pb-4 pt-1 space-y-3 border-t border-[rgba(var(--menu-accent),0.1)]">
          {/* Ingredients */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--menu-accent))] mb-1.5">
              İçindekiler
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {drink.ingredients.map((item, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 rounded-full bg-[rgba(var(--menu-accent),0.1)] text-[rgb(var(--menu-text-secondary))] border border-[rgba(var(--menu-accent),0.1)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Info Row */}
          {(drink.coffeeGrams || drink.espressoShot || drink.milkRatio) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {drink.coffeeGrams && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[rgb(var(--menu-accent))]">⚖️</span>
                  <span className="text-[rgb(var(--menu-text-secondary))]">
                    <span className="font-medium text-[rgb(var(--menu-text))]">Kahve:</span> {drink.coffeeGrams}
                  </span>
                </div>
              )}
              {drink.espressoShot && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[rgb(var(--menu-accent))]">☕</span>
                  <span className="text-[rgb(var(--menu-text-secondary))]">
                    <span className="font-medium text-[rgb(var(--menu-text))]">Shot:</span> {drink.espressoShot}
                  </span>
                </div>
              )}
              {drink.milkRatio && (
                <div className="flex items-center gap-2 text-sm sm:col-span-2">
                  <span className="text-[rgb(var(--menu-accent))]">🥛</span>
                  <span className="text-[rgb(var(--menu-text-secondary))]">
                    <span className="font-medium text-[rgb(var(--menu-text))]">Oran:</span> {drink.milkRatio}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Preparation Steps */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--menu-accent))] mb-1.5">
              Hazırlanışı
            </h4>
            <ol className="space-y-1.5">
              {drink.preparationSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[rgb(var(--menu-text-secondary))]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(var(--menu-accent),0.15)] text-[rgb(var(--menu-accent))] text-xs flex items-center justify-center font-semibold mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Serving Suggestion */}
          {drink.servingSuggestion && (
            <div className="flex items-start gap-2 text-sm bg-[rgba(var(--menu-accent),0.05)] rounded-lg p-3 border border-[rgba(var(--menu-accent),0.08)]">
              <span className="flex-shrink-0 mt-0.5">🍽️</span>
              <span className="text-[rgb(var(--menu-text-secondary))]">
                <span className="font-medium text-[rgb(var(--menu-text))]">Servis:</span> {drink.servingSuggestion}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
