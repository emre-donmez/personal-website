import SkillCard from './SkillCard';
import Section from './ui/Section';
import { SKILLS } from '../config/constants';

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" bgColor="primary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {SKILLS.map((skill, index) => (
          <SkillCard 
            key={index}
            title={skill.title} 
            description={skill.description} 
          />
        ))}
      </div>
    </Section>
  );
} 