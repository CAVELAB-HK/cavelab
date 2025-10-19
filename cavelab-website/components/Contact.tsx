export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-cavelab-gray mb-4 tracking-tight">
          Get In Touch
        </h2>
        <p className="text-base md:text-lg text-gray-600 font-light mb-16 leading-relaxed max-w-2xl mx-auto">
          Interested in our products? Looking to invest? We'd love to hear from you.
        </p>
        
        <div className="space-y-12">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Email</p>
            <a
              href="mailto:cavelabltd@outlook.com"
              className="text-lg md:text-xl font-light text-cavelab-gray hover:text-cavelab-blue-gray transition-colors inline-block"
            >
              cavelabltd@outlook.com
            </a>
          </div>
          
          <div className="mb-48">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Location</p>
            <p className="text-lg md:text-xl font-light text-cavelab-gray">
              Hong Kong
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
