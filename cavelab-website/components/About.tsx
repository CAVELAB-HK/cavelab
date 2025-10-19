export default function About() {
  return (
    <section id="about" className="pt-32 pb-20 px-8 bg-cavelab-light-gray scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-light text-cavelab-gray mb-12 text-center">
          Our Mission
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Medication non-adherence affects over 50% of patients with chronic conditions worldwide, leading to preventable hospitalizations, worsening symptoms, and even death.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At CAVELAB, we believe technology should serve those who need it most. Founded by HKU students who witnessed the gap between medical innovation and everyday accessibility, we're building solutions that don't just remind you to take your pills—they empower you to understand your health, track your progress, and take control of your wellbeing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Healthcare shouldn't be complicated. It should work for you.
          </p>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-600 text-center">
            Founded June 18, 2025 by undergraduate and postgraduate students at The University of Hong Kong
          </p>
        </div>
      </div>
    </section>
  )
}
