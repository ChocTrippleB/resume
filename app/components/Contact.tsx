import { useState } from 'react';
import { Mail, Linkedin, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = `Portfolio Contact: ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    window.location.href = `mailto:bantubeya27@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRequestCV = () => {
    const subject = 'CV Request';
    const body = 'Hi Bantu,%0D%0A%0D%0AI would like to request your CV/Resume.%0D%0A%0D%0AThank you!';

    window.location.href = `mailto:bantubeya27@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="min-h-screen py-16 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-12 text-center">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Connect
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed text-sm">
              I'm always open to discussing new opportunities, collaborations, or
              just having a chat about technology and software development.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href="mailto:bantubeya27@gmail.com"
                className="flex items-center gap-3 text-slate-200 hover:text-pink-400 transition-colors"
              >
                <div className="p-2 bg-slate-700 rounded-lg border border-pink-700/30">
                  <Mail className="w-5 h-5 text-pink-400" />
                </div>
                <span className="text-sm">bantubeya27@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/bantu-bethu-beya-05331b223"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-200 hover:text-pink-400 transition-colors"
              >
                <div className="p-2 bg-slate-700 rounded-lg border border-pink-700/30">
                  <Linkedin className="w-5 h-5 text-pink-400" />
                </div>
                <span className="text-sm">LinkedIn Profile</span>
              </a>
            </div>

            {/* Request CV Button */}
            <button
              onClick={handleRequestCV}
              className="w-full md:w-auto px-6 py-2.5 bg-pink-700 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium shadow-lg mb-3"
            >
              Request CV / Resume
            </button>

            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com/in/bantu-bethu-beya-05331b223"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:w-auto"
            >
              <button className="w-full px-6 py-2.5 bg-slate-700 border border-pink-700/30 text-white rounded-lg hover:bg-slate-600 transition-colors font-medium flex items-center justify-center gap-2">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </button>
            </a>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-pink-700/30 shadow-xl p-6">
              <h3 className="text-xl font-bold text-white mb-5">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-200 mb-2"
                  >
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-pink-400" />
                      Name
                    </div>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-900 border border-pink-700/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-200 mb-2"
                  >
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-pink-400" />
                      Email
                    </div>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-900 border border-pink-700/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-200 mb-2"
                  >
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-pink-400" />
                      Message
                    </div>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-slate-900 border border-pink-700/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-pink-700 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-pink-700/30 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Bantu Bethu Beya. Built with React Router & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
