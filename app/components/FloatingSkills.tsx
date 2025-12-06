import { useState } from 'react';

const FloatingSkills = () => {
  const [isPausedLeft, setIsPausedLeft] = useState(false);
  const [isPausedRight, setIsPausedRight] = useState(false);

  const leftSkills = [
    { name: 'JavaScript', logo: '/logos/javascript.svg' },
    { name: 'React', logo: '/logos/react.svg' },
    { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg' },
    { name: 'Git', logo: '/logos/git.svg' },
    { name: 'Firebase', logo: '/logos/firebase.svg' },
    { name: 'Figma', logo: '/logos/figma.svg' },
    { name: 'HTML5', logo: '/logos/html5.svg' },
  ];

  const rightSkills = [
    { name: 'Python', logo: '/logos/python.svg' },
    { name: 'ASP.NET', logo: '/logos/dotnet.svg' },
    { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
    { name: 'Postman', logo: '/logos/postman.svg' },
    { name: 'WordPress', logo: '/logos/wordpress.svg' },
    { name: 'Bootstrap', logo: '/logos/bootstrap.svg' },
    { name: 'Node.js', logo: '/logos/nodedotjs.svg' },
  ];

  const duplicatedLeft = [...leftSkills, ...leftSkills, ...leftSkills];
  const duplicatedRight = [...rightSkills, ...rightSkills, ...rightSkills];

  return (
    <>
      {/* Left Floating Skills */}
      <div className="fixed left-0 top-1/4 z-30 hidden xl:block">
        <div className="w-20 overflow-hidden">
          <div
            className="flex flex-col space-y-4 py-4"
            style={{
              animation: isPausedLeft ? 'none' : 'scrollVertical 30s linear infinite',
            }}
            onMouseEnter={() => setIsPausedLeft(true)}
            onMouseLeave={() => setIsPausedLeft(false)}
          >
            {duplicatedLeft.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-3 bg-slate-800/80 rounded-lg border border-pink-700/50 shadow-lg hover:shadow-pink-700/50 hover:border-pink-600 transition-all group backdrop-blur-sm"
                title={skill.name}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 object-contain transition-all group-hover:scale-110 brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Floating Skills */}
      <div className="fixed right-0 top-1/4 z-30 hidden xl:block">
        <div className="w-20 overflow-hidden">
          <div
            className="flex flex-col space-y-4 py-4"
            style={{
              animation: isPausedRight ? 'none' : 'scrollVerticalReverse 30s linear infinite',
            }}
            onMouseEnter={() => setIsPausedRight(true)}
            onMouseLeave={() => setIsPausedRight(false)}
          >
            {duplicatedRight.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-3 bg-slate-800/80 rounded-lg border border-pink-700/50 shadow-lg hover:shadow-pink-700/50 hover:border-pink-600 transition-all group backdrop-blur-sm"
                title={skill.name}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 object-contain transition-all group-hover:scale-110 brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollVertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.33%);
          }
        }

        @keyframes scrollVerticalReverse {
          0% {
            transform: translateY(-33.33%);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default FloatingSkills;
