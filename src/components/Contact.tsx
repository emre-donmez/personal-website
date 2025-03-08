import { FaGithub, FaMedium, FaLinkedin, FaEnvelope } from 'react-icons/fa6';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Contact</h2>
        
        <div className="bg-zinc-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-zinc-700/50">
          <p className="text-center text-gray-300 mb-8">
            Feel free to reach out for questions about my projects, collaboration opportunities, or just to connect.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="mailto:emrecandonmez@gmail.com" 
              className="flex items-center p-4 bg-zinc-700/50 rounded-lg hover:bg-zinc-700 transition border border-zinc-600/50"
            >
              <FaEnvelope className="text-2xl text-teal-400 mr-4" />
              <div>
                <h3 className="font-medium text-gray-200">Email</h3>
                <p className="text-gray-400">emrecandonmez@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/emredonmez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-zinc-700/50 rounded-lg hover:bg-zinc-700 transition border border-zinc-600/50"
            >
              <FaLinkedin className="text-2xl text-teal-400 mr-4" />
              <div>
                <h3 className="font-medium text-gray-200">LinkedIn</h3>
                <p className="text-gray-400">linkedin.com/in/emredonmez</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/emre-donmez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-zinc-700/50 rounded-lg hover:bg-zinc-700 transition border border-zinc-600/50"
            >
              <FaGithub className="text-2xl text-teal-400 mr-4" />
              <div>
                <h3 className="font-medium text-gray-200">GitHub</h3>
                <p className="text-gray-400">github.com/emre-donmez</p>
              </div>
            </a>
            
            <a 
              href="https://medium.com/@emrecandonmez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-zinc-700/50 rounded-lg hover:bg-zinc-700 transition border border-zinc-600/50"
            >
              <FaMedium className="text-2xl text-teal-400 mr-4" />
              <div>
                <h3 className="font-medium text-gray-200">Medium</h3>
                <p className="text-gray-400">medium.com/@emrecandonmez</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 