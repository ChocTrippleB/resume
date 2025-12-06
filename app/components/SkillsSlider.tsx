import { useState } from 'react';

const SkillsSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  const skills = [
    { name: 'JavaScript', logo: '/logos/javascript.svg' },
    { name: 'Python', logo: '/logos/python.svg' },
    { name: 'React', logo: '/logos/react.svg' },
    { name: 'ASP.NET', logo: '/logos/dotnet.svg' },
    { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg' },
    { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
    { name: 'Git', logo: '/logos/git.svg' },
    { name: 'Postman', logo: '/logos/postman.svg' },
    { name: 'Firebase', logo: '/logos/firebase.svg' },
    { name: 'WordPress', logo: '/logos/wordpress.svg' },
    { name: 'Figma', logo: '/logos/figma.svg' },
    { name: 'Bootstrap', logo: '/logos/bootstrap.svg' },
    { name: 'Node.js', logo: '/logos/nodedotjs.svg' },
    { name: 'HTML5', logo: '/logos/html5.svg' },
  ];

  // Duplicate the skills array for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 py-4 border-y border-pink-700/30">
      <div
        className="flex space-x-4"
        style={{
          animation: isPaused ? 'none' : 'scroll 40s linear infinite',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-3 py-2 bg-slate-900/80 rounded-lg border border-pink-700/50 shadow-lg hover:shadow-pink-700/50 hover:border-pink-600 transition-all group"
            title={skill.name}
          >
            <div className="flex flex-col items-center gap-1.5">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-7 h-7 object-contain transition-all group-hover:scale-110 brightness-0 invert"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-[10px] font-medium text-slate-300 whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsSlider;
