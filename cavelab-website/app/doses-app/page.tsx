import Image from 'next/image'
import Navigation from '@/components/Navigation'

export default function DosesApp() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-cavelab-gray mb-6 md:mb-8 tracking-tight">
              Doses App
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Your personal medication companion. Track, monitor, and understand your health journey.
            </p>
          </div>

          <div className="mb-24 md:mb-32">
            <h2 className="text-3xl md:text-4xl font-light text-cavelab-gray mb-8 md:mb-12 text-center tracking-tight">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 max-w-7xl mx-auto">
              <div className="bg-cavelab-light-gray rounded-cavelab overflow-hidden shadow-lg">
                <Image
                  src="/splashpage.PNG"
                  alt="Doses App Splash Screen"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-cavelab-light-gray rounded-cavelab overflow-hidden shadow-lg">
                <Image
                  src="/todaypage.jpg"
                  alt="Doses App Today Page"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-cavelab-light-gray rounded-cavelab overflow-hidden shadow-lg">
                <Image
                  src="/historypage.jpg"
                  alt="Doses App History Page"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mb-24 md:mb-32 bg-cavelab-light-gray py-12 md:py-20 -mx-4 md:-mx-8 px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-light text-cavelab-gray mb-12 md:mb-20 text-center tracking-tight">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-20 gap-y-12 md:gap-y-16 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-light text-cavelab-gray mb-6">Smart Reminders</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Never miss a dose with intelligent notifications that adapt to your schedule and routine.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-light text-cavelab-gray mb-6">Health Tracking</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Log symptoms, side effects, and how you feel to see patterns and correlations over time.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-light text-cavelab-gray mb-6">Data Visualization</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Beautiful charts and graphs help you understand the relationship between your medication and wellbeing.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-light text-cavelab-gray mb-6">Export Reports</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Generate PDF and CSV reports to share with your healthcare provider for better informed decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-cavelab-blue-gray rounded-cavelab p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 md:mb-6 tracking-tight">
              Coming Soon
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-light mb-6 md:mb-8 max-w-2xl mx-auto">
              The Doses app will be available on the iOS App Store soon.
            </p>
            <p className="text-2xl md:text-3xl font-light text-white">
              Free of Charge
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
