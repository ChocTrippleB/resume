import { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, MapPin, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const Experience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: 'Founder & Lead Developer',
      company: 'CampusSwap',
      location: 'Startup',
      period: 'Nov 2024 – Present',
      responsibilities: [
        'Founded and developed a full-stack student marketplace for item trading, integrating Paystack for secure in-app payments and automatic batch disbursements.',
        'Built advanced search and filtering with Redux-managed state, real-time suggestions, and optimized database design.',
        'Implemented JWT authentication, role-based access control, profile systems, reviews, and messaging features with scalable backend APIs.',
        'Leading product development and technical architecture decisions for the platform.',
      ],
    },
    {
      id: 2,
      role: 'Digital Media & IT Specialist',
      company: 'Caremonde Health',
      location: 'Remote, Contract',
      period: 'Jul 2025 – Nov 2025',
      responsibilities: [
        "Optimized Caremonde Health's web performance and implemented automation tools improving efficiency across departments.",
        'Led UX/UI revamp and improved load times by 35% through media optimization and caching.',
        'Collaborated remotely with cross-functional teams to streamline IT operations and reduce support overhead.',
      ],
    },
    {
      id: 3,
      role: 'Software Developer & WordPress Engineer',
      company: 'Africorp International Properties',
      location: 'Hybrid, Part-Time',
      period: 'May 2024 – Present',
      responsibilities: [
        'Developed internal data tools using SQL Server and Microsoft Access to automate reporting and improve database security.',
        'Designed and launched 7+ live WordPress websites using Elementor and Figma — including e-commerce, corporate, restaurant, and student accommodation platforms.',
        'Managed hosting, SEO, and content delivery for all Africorp client sites, improving traffic visibility and uptime to 99.9%.',
      ],
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="min-h-screen py-16 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-12 text-center">
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-pink-700/30 shadow-xl overflow-hidden transition-all hover:shadow-pink-700/20 hover:border-pink-600/50 cursor-pointer"
                onClick={() => toggleExpand(exp.id)}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <div className="space-y-1">
                        <div className="flex items-center text-slate-200">
                          <Briefcase className="w-4 h-4 mr-2 text-pink-400" />
                          <span className="font-medium text-sm">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-slate-300 text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-pink-400" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center text-slate-300 text-sm">
                          <Calendar className="w-4 h-4 mr-2 text-pink-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      className="ml-4 p-2 hover:bg-slate-700/50 rounded-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(exp.id);
                      }}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-pink-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-pink-400" />
                      )}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="mt-5 pt-5 border-t border-pink-700/30">
                      <h4 className="font-semibold text-white mb-3">
                        Key Responsibilities & Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start text-slate-300"
                          >
                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-pink-400 rounded-full flex-shrink-0"></span>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
