import Card from './ui/Card';

interface SkillCardProps {
  title: string;
  description: string;
}

export default function SkillCard({ title, description }: SkillCardProps) {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-teal-600 dark:text-teal-400">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </Card>
  );
} 