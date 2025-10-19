export default function Products() {
  return (
    <section id="products" className="pt-48 pb-20 px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-light text-cavelab-gray mb-8 text-center tracking-tight">
          Introducing Doses
        </h2>
        
        <div className="mb-12">
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto leading-relaxed font-light">
            A comprehensive medication management system combining smart hardware with an intelligent mobile app to help patients stay on track and understand their health better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-48">
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

          <div className="bg-white border border-gray-200 rounded-cavelab p-10 shadow-lg">
            <h3 className="text-3xl font-light mb-8 text-cavelab-gray tracking-tight">The Smart Pillbox</h3>
            <ul className="space-y-5 mb-10 text-gray-700">
              <li className="flex items-start leading-relaxed">
                <span className="mr-4 mt-1 text-gray-400">•</span>
                <span>LCD screen for visual reminders</span>
              </li>
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
          </div>
        </div>

        <div className="text-center bg-cavelab-light-gray py-16 -mx-8 px-8">
          <h3 className="text-3xl font-light text-cavelab-gray mb-16 tracking-tight">
            Designed For
          </h3>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-cavelab shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-cavelab-blue-gray rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">People with long-term illnesses requiring consistent medication</p>
            </div>
            <div className="bg-white p-10 rounded-cavelab shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-cavelab-blue-gray rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">Patients managing multiple medications and complex schedules</p>
            </div>
            <div className="bg-white p-10 rounded-cavelab shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-cavelab-blue-gray rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">Caregivers monitoring loved ones remotely</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
