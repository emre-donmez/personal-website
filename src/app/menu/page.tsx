import type { Metadata } from 'next';
import MenuContent from './MenuContent';

export const metadata: Metadata = {
  title: 'Ev Menüsü | İçecek Seçenekleri',
  robots: {
    index: false,
    follow: false,
  },
};

export default function MenuPage() {
  return <MenuContent />;
}
