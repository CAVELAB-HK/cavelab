const Footer = () => {
  return (
    <footer className="bg-[#F8F9FA] border-t border-[#E8EAED] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4">CAVELAB</h3>
            <p className="text-[#4A5568] text-sm">
              Engineering the future of healthcare through precision design and intelligent technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-[#2B2B2B] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#vision" className="text-[#4A5568] hover:text-[#5B8C9E] text-sm transition-colors">Vision</a></li>
              <li><a href="#approach" className="text-[#4A5568] hover:text-[#5B8C9E] text-sm transition-colors">Approach</a></li>
              <li><a href="#products" className="text-[#4A5568] hover:text-[#5B8C9E] text-sm transition-colors">Products</a></li>
              <li><a href="#about" className="text-[#4A5568] hover:text-[#5B8C9E] text-sm transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-[#2B2B2B] mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-[#4A5568] text-sm">Hong Kong</li>
              <li>
                <a href="mailto:cavelabltd@outlook.com" className="text-[#4A5568] hover:text-[#5B8C9E] text-sm transition-colors">
                  cavelabltd@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#E8EAED] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#4A5568] text-sm">
            &copy; 2025 CAVELAB Ltd. All rights reserved.
          </p>
          <p className="text-[#4A5568] text-sm">
            Established June 18, 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
