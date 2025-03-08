import Section from './ui/Section';
import Card from './ui/Card';

export default function About() {
  return (
    <Section id="about" title="About Me" bgColor="secondary">
      <div className="max-w-3xl mx-auto">
        <Card className="p-6 md:p-8">
          <p className="text-[rgb(var(--color-text))] content-spacing leading-relaxed">
            Hello, I'm Emre! A software developer dedicated to creating value through innovative solutions and continuous improvement.
            I actively participate in every phase of the software development lifecycle, valuing teamwork and quality code production.
          </p>
          <p className="text-[rgb(var(--color-text))] mb-8 leading-relaxed">
            I focus on developing sustainable, high-quality software using clean code principles, design patterns, and Agile methodology.
          </p>
          
          <h3 className="text-xl font-semibold mb-5 text-[rgb(var(--color-primary))]">Professional Approach</h3>
          
          <div className="space-y-5">
            <div className="pl-4 border-l-2 border-[rgb(var(--color-primary))]">
              <h4 className="font-medium text-[rgb(var(--color-text))] mb-1">End-to-End Project Involvement</h4>
              <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">
                Active participation in every phase of the project lifecycle, from initial analysis to deployment, ensuring comprehensive understanding and contribution.
              </p>
            </div>
            
            <div className="pl-4 border-l-2 border-[rgb(var(--color-primary))]">
              <h4 className="font-medium text-[rgb(var(--color-text))] mb-1">Team Collaboration</h4>
              <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">
                Experience working closely with team members, fostering a cohesive and productive team environment.
              </p>
            </div>
            
            <div className="pl-4 border-l-2 border-[rgb(var(--color-primary))]">
              <h4 className="font-medium text-[rgb(var(--color-text))] mb-1">Quality & Efficiency</h4>
              <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">
                Driven by clean code principles, design patterns, and Agile methodology to create maintainable, high-quality software.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
} 