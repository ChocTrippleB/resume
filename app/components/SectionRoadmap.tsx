import { useState, useEffect } from 'react';
import { User, Briefcase, FolderGit2, Mail, Award } from 'lucide-react';

const SectionRoadmap = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About', icon: User },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>

        {/* Active section indicator */}
        <div
          className="absolute left-4 w-0.5 bg-gradient-to-b from-pink-600 to-pink-700 transition-all duration-500"
          style={{
            top: `${sections.findIndex(s => s.id === activeSection) * 72}px`,
            height: '72px'
          }}
        ></div>

        {/* Section dots */}
        <div className="relative space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            const isPassed = sections.findIndex(s => s.id === activeSection) > index;

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center gap-4 group"
              >
                {/* Dot with icon */}
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center transition-all
                  ${isActive
                    ? 'bg-gradient-to-br from-pink-600 to-pink-700 scale-110 shadow-lg shadow-pink-700/50'
                    : isPassed
                    ? 'bg-pink-700/30 border-2 border-pink-700'
                    : 'bg-slate-800 border-2 border-slate-700'
                  }
                `}>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : isPassed ? 'text-pink-400' : 'text-slate-500'}`} />
                </div>

                {/* Label */}
                <span className={`
                  text-sm font-medium transition-all opacity-0 group-hover:opacity-100
                  ${isActive ? 'text-pink-400' : 'text-slate-400'}
                `}>
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionRoadmap;
