import Card from './ui/Card';

interface SkillCardProps {
  title: string;
  description: string;
}

export default function SkillCard({ title, description }: SkillCardProps) {
  return (
    <Card className="group h-full">
      <div className="p-5 h-full flex flex-col">
        <h3 className="text-lg font-semibold mb-3 text-[rgb(var(--color-primary))] group-hover:text-gradient transition-all duration-300">{title}</h3>
        <p className="text-[rgb(var(--color-text-secondary))] text-sm leading-relaxed">{description}</p>
      </div>
    </Card>
  );
} 