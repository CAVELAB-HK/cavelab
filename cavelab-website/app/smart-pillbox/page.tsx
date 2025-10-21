import Image from 'next/image'
import Navigation from '@/components/Navigation'

export default function SmartPillbox() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-cavelab-gray mb-8 md:mb-12 tracking-tight">
              Smart Pillbox
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Advanced hardware designed to keep you safe and on track with your medication routine.
            </p>
          </div>

          <div className="mb-32 md:mb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
              <div className="bg-cavelab-light-gray rounded-cavelab overflow-hidden shadow-lg">
                <Image
                  src="/1.png"
                  alt="Smart Pillbox Design 1"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-cavelab-light-gray rounded-cavelab overflow-hidden shadow-lg">
                <Image
                  src="/2.png"
                  alt="Smart Pillbox Design 2"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mb-32 md:mb-40 max-w-4xl mx-auto">
            <div className="space-y-10 text-gray-600">
              <p className="text-lg md:text-xl leading-relaxed font-light">
                The Smart Pillbox represents the next generation of medication management hardware. Designed with both functionality and safety in mind, it seamlessly integrates into your daily routine while providing peace of mind for you and your loved ones.
              </p>
              <p className="text-lg md:text-xl leading-relaxed font-light">
                With built-in emergency features including fall detection and GPS tracking, the Smart Pillbox goes beyond simple medication reminders. It's a comprehensive safety device that can automatically alert emergency contacts when needed, making it ideal for seniors living independently or anyone managing complex medication schedules.
              </p>
              <p className="text-lg md:text-xl leading-relaxed font-light">
                The device connects wirelessly to the Doses mobile app via Bluetooth and WiFi, allowing you to sync your medication schedule, receive audio alerts through the built-in buzzer, and quickly call for help with the emergency button. Everything works together to create a complete ecosystem for medication management and personal safety.
              </p>
            </div>
          </div>

          <div className="mb-32 md:mb-40 py-12 md:py-20">
            <h2 className="text-3xl md:text-4xl font-light text-cavelab-gray mb-12 md:mb-20 text-center tracking-tight">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-20 gap-y-16 md:gap-y-20 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-light text-cavelab-gray mb-6">Audio Alerts</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Built-in buzzer provides clear audio reminders when it's time to take your medication.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-light text-cavelab-gray mb-6">Emergency Call Button</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  One-touch emergency button instantly contacts your designated emergency contacts for immediate assistance.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-light text-cavelab-gray mb-6">Fall Detection</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Advanced sensors automatically detect falls and can trigger emergency calls without any user action.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-light text-cavelab-gray mb-6">GPS Tracking</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Built-in GPS module enables emergency location tracking so help can find you quickly when needed.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-light text-cavelab-gray mb-6">Wireless Connectivity</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Bluetooth and WiFi connectivity ensures seamless syncing with the mobile app and cloud services.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-light text-cavelab-gray mb-6">App Integration</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Works seamlessly with the Doses mobile app for complete medication and health tracking.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-cavelab-blue-gray rounded-cavelab p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 md:mb-6 tracking-tight">
              Available Soon
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-light mb-6 md:mb-8 max-w-2xl mx-auto">
              The Smart Pillbox will be available for pre-order soon. Stay tuned for updates.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
