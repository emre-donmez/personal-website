export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">About Me</h2>
        
        <div className="bg-zinc-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-zinc-700/50">
          <p className="text-gray-300 mb-4">
            Hello, I'm Emre! A software developer dedicated to creating value through innovative solutions and continuous improvement.
            I actively participate in every phase of the software development lifecycle, valuing teamwork and quality code production.
          </p>
          <p className="text-gray-300 mb-4">
            I focus on developing sustainable, high-quality software using clean code principles, design patterns, and Agile methodology.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6 text-teal-400">Professional Approach</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <span className="font-medium text-white">End-to-End Project Involvement:</span> Active participation in every phase of the project lifecycle, from initial analysis to deployment, ensuring comprehensive understanding and contribution.
            </li>
            <li>
              <span className="font-medium text-white">Team Collaboration:</span> Experience working closely with team members, fostering a cohesive and productive team environment.
            </li>
            <li>
              <span className="font-medium text-white">Quality & Efficiency:</span> Driven by clean code principles, design patterns, and Agile methodology to create maintainable, high-quality software.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
} 