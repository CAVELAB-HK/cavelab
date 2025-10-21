export default function Products() {
  return (
    <section id="products" className="min-h-screen px-8 scroll-mt-20 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-light text-cavelab-gray mb-20 text-center tracking-tight">
          Introducing Doses
        </h2>
        
        <div className="mb-40">
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto leading-relaxed font-light">
            A comprehensive medication management system combining smart hardware with an intelligent mobile app to help patients stay on track and understand their health better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 mb-40">
          <a href="/doses-app" className="bg-cavelab-blue-gray rounded-cavelab p-10 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer block">
            <h3 className="text-3xl font-light mb-8 tracking-tight">The Mobile App</h3>
            <ul className="space-y-5 mb-10">
              <li className="flex items-start leading-relaxed">
                <span className="mr-4 mt-1 text-white/60">•</span>
                <span>Medication inventory tracking</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <span className="mr-4 mt-1 text-white/60">•</span>
                <span>Smart reminders with push notifications</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <span className="mr-4 mt-1 text-white/60">•</span>
                <span>Side effects and efficacy logging</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <span className="mr-4 mt-1 text-white/60">•</span>
                <span>Symptom relief rating and tracking</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <span className="mr-4 mt-1 text-white/60">•</span>
                <span>Export reports to PDF and CSV with data visualizations</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <span className="mr-4 mt-1 text-white/60">•</span>
                <span>Correlation graphs showing relationships between medication and how you feel</span>
              </li>
            </ul>
            <div className="mt-auto pt-8 border-t border-white/20">
              <p className="text-sm text-white/80 mb-2">Coming soon to iOS App Store</p>
              <p className="text-3xl font-light">Free of Charge</p>
            </div>
          </a>

          <a href="/smart-pillbox" className="bg-white border border-gray-200 rounded-cavelab p-10 shadow-lg hover:shadow-xl transition-all cursor-pointer block">
            <h3 className="text-3xl font-light mb-8 text-cavelab-gray tracking-tight">The Smart Pillbox</h3>
            <ul className="space-y-5 mb-10 text-gray-700">
              <li className="flex items-start leading-relaxed">
                <span className="mr-4 mt-1 text-gray-400">•</span>
                <span>Buzzer for audio alerts</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <span className="mr-4 mt-1 text-gray-400">•</span>
                <span>Emergency call button for immediate assistance</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <span className="mr-4 mt-1 text-gray-400">•</span>
                <span>Fall detection sensors with automatic emergency call</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <span className="mr-4 mt-1 text-gray-400">•</span>
                <span>GPS module for emergency location tracking</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <span className="mr-4 mt-1 text-gray-400">•</span>
                <span>Bluetooth and WiFi connectivity</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <span className="mr-4 mt-1 text-gray-400">•</span>
                <span>Syncs seamlessly with mobile app</span>
              </li>
            </ul>
            <div className="mt-auto pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">Available for pre-order soon</p>
            </div>
          </a>
        </div>

        <div className="text-center py-24">
          <h3 className="text-3xl font-light text-cavelab-gray mb-20 tracking-tight">
            Designed For
          </h3>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-8 text-left inline-block">
              <li className="flex items-start text-gray-700 text-lg leading-relaxed">
                <span className="mr-3 text-cavelab-gray">•</span>
                <span>People with long-term illnesses requiring consistent medication</span>
              </li>
              <li className="flex items-start text-gray-700 text-lg leading-relaxed">
                <span className="mr-3 text-cavelab-gray">•</span>
                <span>Patients managing multiple medications and complex schedules</span>
              </li>
              <li className="flex items-start text-gray-700 text-lg leading-relaxed">
                <span className="mr-3 text-cavelab-gray">•</span>
                <span>Caregivers monitoring loved ones remotely</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
