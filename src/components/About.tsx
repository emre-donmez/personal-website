import Section from './ui/Section';
import Card from './ui/Card';

export default function About() {
  return (
    <Section id="about" title="About Me" bgColor="zinc">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Hello, I'm Emre! A software developer dedicated to creating value through innovative solutions and continuous improvement.
            I actively participate in every phase of the software development lifecycle, valuing teamwork and quality code production.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I focus on developing sustainable, high-quality software using clean code principles, design patterns, and Agile methodology.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6 text-teal-600 dark:text-teal-400">Professional Approach</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>
              <span className="font-medium text-gray-800 dark:text-white">End-to-End Project Involvement:</span> Active participation in every phase of the project lifecycle, from initial analysis to deployment, ensuring comprehensive understanding and contribution.
            </li>
            <li>
              <span className="font-medium text-gray-800 dark:text-white">Team Collaboration:</span> Experience working closely with team members, fostering a cohesive and productive team environment.
            </li>
            <li>
              <span className="font-medium text-gray-800 dark:text-white">Quality & Efficiency:</span> Driven by clean code principles, design patterns, and Agile methodology to create maintainable, high-quality software.
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  );
} 