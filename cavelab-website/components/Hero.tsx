import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-48 pb-32 px-8 overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/5.png"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>
      
      {/* Content with White Box */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="bg-white backdrop-blur-sm rounded-cavelab p-8 md:p-12 shadow-2xl border border-white/50">
          <h1 className="text-5xl md:text-6xl font-light text-cavelab-gray mb-8 tracking-tight">
            Making Healthcare Accessible
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Technology-driven healthcare solutions designed to empower patients and improve lives.
          </p>
        </div>
      </div>
    </section>
  )
}
