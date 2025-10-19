export default function Footer() {
  return (
    <footer className="bg-cavelab-gray text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-4">CAVELAB</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Making healthcare accessible through innovative technology solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">
              <a href="mailto:cavelabltd@outlook.com" className="hover:text-white transition-colors">
                cavelabltd@outlook.com
              </a>
            </p>
            <p className="text-gray-300 text-sm">
              Hong Kong
            </p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
          <p>2025 CAVELAB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
