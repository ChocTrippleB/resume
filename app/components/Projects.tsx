import { Github, ExternalLink, Code2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
  highlights: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Student Marketplace',
      description:
        'A full-stack student marketplace platform for item trading with integrated payment processing and real-time messaging.',
      technologies: [
        'React',
        'Redux',
        'ASP.NET Web API',
        'SQL Server',
        'Hangfire',
        'JWT',
        'Paystack',
        'Firebase',
      ],
      githubUrl: 'https://github.com/chocTrippleB',
      demoUrl: '',
      highlights: [
        'Integrated Paystack for secure in-app payments and automatic batch disbursements via Hangfire',
        'Built advanced search and filtering with Redux-managed state and real-time suggestions',
        'Implemented JWT authentication with role-based access control and password hashing',
        'Added profile systems, reviews, and messaging features with scalable backend APIs',
      ],
    },
    {
      id: 2,
      title: 'Ward Management System',
      description:
        'A comprehensive hospital ward management system developed as a capstone project with four integrated subsystems.',
      technologies: [
        'ASP.NET Core MVC',
        'Entity Framework Core',
        'SQL Server',
      ],
      githubUrl: 'https://github.com/chocTrippleB',
      demoUrl: '',
      highlights: [
        'Engineered four key subsystems: Consumables, Doctor–Patient, Nursing, and Admissions modules',
        'Led the Consumables & Script Management subsystem with validation and normalized schemas',
        'Collaborated with a 4-person dev team on system integration and delivery',
        'Implemented service layer logic and optimized database design',
      ],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-16 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-pink-700/30 shadow-xl overflow-hidden hover:shadow-pink-700/20 hover:border-pink-600/50 transition-all"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-44 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex items-center justify-center border-b border-pink-700/30">
                <Code2 className="w-16 h-16 text-pink-400/50" />
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-3 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-slate-900/80 border border-pink-700/50 text-slate-200 text-xs font-medium rounded-full font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start text-slate-300 text-sm"
                      >
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-pink-400 rounded-full flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-600 transition-colors shadow-lg"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 border border-pink-700/50 text-white rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
