import SkillsSlider from './SkillsSlider';
import { Briefcase, Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  const experiences = [
    { role: 'Founder & Developer', company: 'CampusSwap', period: 'Nov 2024 - Present' },
    { role: 'Software Developer', company: 'Africorp International', period: 'May 2024 - Present' },
  ];

  const topSkills = ['C#', 'React', 'ASP.NET Core', 'SQL Server', 'TypeScript', 'Git'];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-4 pt-20 pb-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-4xl font-bold bg-gradient-to-r from-white via-pink-200 to-pink-400 bg-clip-text text-transparent mb-3">
            Bantu Bethu Beya
          </h1>
          <p className="text-2xl md:text-3xl text-pink-400 font-semibold">
            Software Developer
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Left Column - Experience Summary with Mini Roadmap */}
          <div className="lg:row-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-pink-700/30 p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-6 h-6 text-pink-400" />
              <h3 className="text-xl font-bold text-white">Experience Journey</h3>
            </div>

            {/* Mini Roadmap */}
            <div className="relative pl-8">
              {/* Vertical Line */}
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-600 to-pink-700"></div>

              {/* Experience Items */}
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-pink-600 to-pink-700 border-4 border-slate-900 shadow-lg shadow-pink-700/50"></div>

                    {/* Content */}
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-pink-700/20 hover:border-pink-600/50 transition-all">
                      <h4 className="text-white font-semibold mb-1">{exp.role}</h4>
                      <p className="text-pink-400 text-sm font-medium mb-1">{exp.company}</p>
                      <p className="text-slate-400 text-xs font-mono">{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6 pt-6 border-t border-pink-700/30">
              <p className="text-slate-300 text-sm leading-relaxed">
                Experienced in optimizing web performance, developing internal tools, and launching production websites.
                Specialized in full-stack development with ASP.NET Core and React.
              </p>
            </div>
          </div>

          {/* Right Top - Quote Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-pink-700/30 p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-pink-400" />
              <h3 className="text-lg font-bold text-white">Philosophy</h3>
            </div>

            <blockquote className="relative">
              <div className="text-pink-400 text-6xl font-serif absolute -top-2 -left-2 opacity-30">"</div>
              <p className="text-slate-200 text-base italic leading-relaxed pl-6">
                Building scalable solutions and crafting exceptional digital experiences through
                clean code and modern technologies.
              </p>
              <div className="text-pink-400 text-6xl font-serif absolute -bottom-8 right-0 opacity-30">"</div>
            </blockquote>
          </div>

          {/* Right Bottom - Top Skills Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-pink-700/30 p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-pink-400" />
              <h3 className="text-lg font-bold text-white">Core Skills</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {topSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-slate-900/80 border border-pink-700/50 text-slate-200 text-sm font-medium rounded-lg font-mono hover:border-pink-600 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Slider */}
        <div className="w-full">
          <SkillsSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
