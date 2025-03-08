import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title=".NET Core Development" description="Specializing in .NET Core to build scalable applications, with strong proficiency in Entity Framework and Dapper for efficient data management." />
          <SkillCard title="SQL & Database Management" description="Expertise in SQL for optimized database design, management, and data integrity." />
          <SkillCard title="RESTful APIs" description="Skilled in creating and integrating RESTful APIs to ensure seamless communication across services." />
          <SkillCard title="CI/CD & DevOps" description="Passionate about streamlining deployment processes through Azure DevOps and CI/CD practices." />
          <SkillCard title="JavaScript & Front-End" description="Experienced in JavaScript and front-end technologies, enabling contributions to full-stack development." />
          <SkillCard title="Java & Spring Boot" description="Hands-on experience in developing applications using Java and Spring Boot technologies." />
        </div>
      </div>
    </section>
  );
} 