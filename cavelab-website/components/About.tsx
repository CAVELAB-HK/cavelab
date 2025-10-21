export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-8 bg-cavelab-light-gray scroll-mt-20">
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="grid md:grid-cols-[1fr,2fr] gap-12 md:gap-16 items-start">
          {/* Left Side - Title */}
          <div>
            <h2 className="text-5xl md:text-6xl font-light text-cavelab-gray tracking-tight sticky top-32">
              Our Mission
            </h2>
          </div>
          
          {/* Right Side - Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
              Medication management is challenging for millions of people worldwide. Whether you're taking daily vitamins, managing prescriptions, or caring for loved ones, staying on track with medications can be overwhelming.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
              At CAVELAB, we believe technology should serve those who need it most. Founded by HKU students who witnessed the gap between medical innovation and everyday accessibility, we're building solutions that don't just remind you to take your pills—they empower you to understand your health, track your progress, and take control of your wellbeing.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-12">
              Healthcare shouldn't be complicated. It should work for you.
            </p>
            <div className="pt-8 border-t border-gray-300">
              <p className="text-sm text-gray-600">
                Founded June 18, 2025 by undergraduate and postgraduate students at The University of Hong Kong
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
