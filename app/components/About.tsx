import { GraduationCap, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-16 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-12 text-center">
          About Me
        </h2>

        

        {/* Image + Education Side by Side */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/bantu.jpg"
                alt="Bantu Bethu Beya"
                className="rounded-lg w-68 h-68 object-cover border-2 border-pink-700/50 shadow-2xl shadow-pink-700/30"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg blur opacity-20 -z-10"></div>
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-pink-700/30 shadow-xl">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-7 h-7 text-pink-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h4 className="text-xl font-bold text-white">
                Nelson Mandela University
              </h4>
              <span className="text-sm text-pink-400 mt-1 md:mt-0">
                Expected Dec 2025
              </span>
            </div>

            <p className="text-base text-slate-200 mb-2">
              N.Dip. Information Technology: Software Development
            </p>
            <p className="text-sm text-slate-300 mb-2">
              GPA: 3.31 / 4.0
            </p>
            <div className="mb-5">
              <span className="inline-block px-3 py-1 bg-pink-700/30 border border-pink-600/50 text-pink-400 text-xs font-semibold rounded-full">
                🎓 Completed with 9 Distinctions
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex items-start">
                  <BookOpen className="w-5 h-5 text-pink-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">Core Coursework</h5>
                    <p className="text-sm text-slate-300">
                      Data Structures & Algorithms (C#), React, ASP.NET Web API, Python for Data Analysis,
                      Advanced C#, Project Management, SQL Server
                    </p>
                  </div>
                </div>
              </div>


              <div className="pt-3 border-t border-pink-700/30">
                <h5 className="font-semibold text-white mb-1">Capstone Project</h5>
                <p className="text-sm text-slate-300">
                  Full Hospital Ward Management System built in ASP.NET Core MVC
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience Overview - Text Below */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Professional Experience
          </h3>
          <div className="max-w-7xl mx-auto">
            <p className="text-base text-slate-300 text-center leading-relaxed mb-4">
              Founder of <span className="font-semibold text-pink-400">CampusSwap</span>, building a full-stack student marketplace platform.
              Previously worked as a <span className="font-semibold text-pink-400">Digital Media & IT Specialist</span> at
              Caremonde Health and currently a <span className="font-semibold text-pink-400">Software Developer & WordPress Engineer</span> at
              Africorp International Properties.
            </p>
            <p className="text-base text-slate-300 text-center leading-relaxed">
              Experienced in optimizing web performance, developing internal tools,
              and launching multiple production websites while collaborating with cross-functional teams.
            </p>
            <p className="text-center mt-4 text-slate-400 text-sm">
              See the Experience section below for detailed information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
