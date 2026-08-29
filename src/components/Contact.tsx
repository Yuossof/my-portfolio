import { ArrowUpRight, Mail, Download, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left - Content */}
          <div>
            <span className="text-sm text-gray-400 uppercase tracking-widest">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mt-4 leading-[1.1]">
              Let's work
              <span className="text-gray-300"> together</span>
            </h2>

            <p className="text-gray-500 text-lg mt-6 max-w-md leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>

            {/* Info Cards */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-gray-900 font-medium">Cairo, Egypt</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Availability</p>
                  <p className="text-gray-900 font-medium">Open for freelance projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="flex items-center">
            <div className="w-full bg-gray-900 rounded-[32px] p-10 md:p-12">
              <div className="mb-10">
                <p className="text-white/40 text-sm mb-2">Get in touch</p>
                <a
                  href="mailto:youssofwr@gmail.com"
                  className="text-2xl md:text-3xl text-white font-medium hover:text-white/80 transition-colors"
                >
                  youssofwr@gmail.com
                </a>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:youssofwr@gmail.com"
                  className="group flex items-center justify-between w-full px-6 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    Send an email
                  </span>
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </a>

                <a
                  href="https://drive.google.com/file/d/1s2zVbT6FylUj6x9ibCWRmOnzFhKc7SIN/view?usp=sharing"
                  target='_blank'
                  className="group flex items-center justify-between w-full px-6 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Download className="w-5 h-5" />
                    Download CV
                  </span>
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </a>
              </div>

              {/* Decorative */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-white/30 text-sm">
                  Usually respond within 24 hours
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact