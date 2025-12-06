import { useState } from 'react';
import { Award, X, ExternalLink } from 'lucide-react';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  pdfUrl: string;
}

const Certifications = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      name: 'HTML & CSS',
      issuer: 'IBM',
      date: '2020',
      pdfUrl: '/certificates/HTML___CSS_Badge20231025-37-axcxv8.pdf',
    },
    {
      id: 2,
      name: 'Git & Version Control',
      issuer: 'IBM',
      date: '2020',
      pdfUrl: '/certificates/Git_Badge20240403-40-ep7nhf.pdf',
    },
    {
      id: 3,
      name: 'Introduction to IT & Cybersecurity',
      issuer: 'Cybrary',
      date: '2021',
      pdfUrl: '/certificates/cybrary-cert-introduction-to-it-and-cybersecurity (1).pdf',
    },
    {
      id: 4,
      name: 'CCNA 1',
      issuer: 'Cisco',
      date: '2023',
      pdfUrl: '/certificates/Bantu-BethuBeya-CCNA_1_2023 Grou-certificate (1).pdf',
    },
    {
      id: 5,
      name: 'Cyber Security Essentials',
      issuer: 'Cisco',
      date: '2023',
      pdfUrl: '/certificates/Bantu-BethuBeya-Cyber Security --certificate.pdf',
    },
    {
      id: 6,
      name: 'Cloud Computing Introduction',
      issuer: 'IBM',
      date: '2021',
      pdfUrl: '/certificates/Cloud_Intro_Badge20240403-29-gu1sec.pdf',
    },
    {
      id: 7,
      name: 'Coding Introduction',
      issuer: 'IBM',
      date: '2020',
      pdfUrl: '/certificates/Coding_Intro_Badge20231025-40-dinu8d.pdf',
    },
    {
      id: 8,
      name: 'Enterprise Design Thinking Practitioner',
      issuer: 'IBM',
      date: '2020',
      pdfUrl: '/certificates/Enterprise_Design_Thinking_Practitioner_Badge20231025-29-5h4kh9.pdf',
    },
  ];

  const openPdfPreview = (pdfUrl: string) => {
    setSelectedPdf(pdfUrl);
  };

  const closePdfPreview = () => {
    setSelectedPdf(null);
  };

  return (
    <section id="certifications" className="min-h-screen py-16 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-12 text-center">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => openPdfPreview(cert.pdfUrl)}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-pink-700/30 shadow-xl hover:shadow-pink-700/20 hover:border-pink-600/50 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-pink-700 rounded-lg flex items-center justify-center shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-pink-400 transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-pink-400 text-sm font-medium mb-1">{cert.issuer}</p>
              <p className="text-slate-400 text-xs font-mono">{cert.date}</p>

              <div className="mt-4 pt-4 border-t border-pink-700/30">
                <span className="text-xs text-slate-400 group-hover:text-pink-400 transition-colors">
                  Click to view certificate
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Preview Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] bg-slate-900 rounded-xl overflow-hidden border-2 border-pink-700/50">
            {/* Close Button */}
            <button
              onClick={closePdfPreview}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-800 rounded-full border border-pink-700/50 hover:bg-pink-700 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* PDF Viewer */}
            <iframe
              src={selectedPdf}
              className="w-full h-full"
              title="Certificate Preview"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
