import Image from 'next/image'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-8 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Logo */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/cavelab logo (pic).png"
                alt="CAVELAB Logo"
                fill
                className="object-contain opacity-20"
              />
            </div>
          </div>
          
          {/* Right Side - Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-cavelab-gray mb-4 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-light mb-12 leading-relaxed">
              Interested in our products? Looking to invest? We'd love to hear from you.
            </p>
            
            <div className="space-y-8">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Email</p>
                <a
                  href="mailto:cavelabltd@outlook.com"
                  className="text-lg md:text-xl font-light text-cavelab-gray hover:text-cavelab-blue-gray transition-colors inline-block"
                >
                  cavelabltd@outlook.com
                </a>
              </div>
              
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Location</p>
                <p className="text-lg md:text-xl font-light text-cavelab-gray">
                  Hong Kong
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
