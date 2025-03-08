interface SkillCardProps {
  title: string;
  description: string;
}

export default function SkillCard({ title, description }: SkillCardProps) {
  return (
    <div className="p-6 bg-zinc-800/50 rounded-lg shadow-md hover:shadow-lg transition border border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800/80">
      <h3 className="text-xl font-semibold mb-3 text-teal-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
} 