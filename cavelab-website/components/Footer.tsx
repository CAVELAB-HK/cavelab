const Footer = () => {
  return (
    <footer className="bg-grey-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-widest">CAVELAB</h3>
            <p className="text-grey-300 text-sm leading-relaxed">
              Engineering the future of healthcare through precision design and intelligent technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#vision" className="text-grey-300 hover:text-white text-sm transition-colors uppercase tracking-wide">Vision</a></li>
              <li><a href="#approach" className="text-grey-300 hover:text-white text-sm transition-colors uppercase tracking-wide">Approach</a></li>
              <li><a href="#products" className="text-grey-300 hover:text-white text-sm transition-colors uppercase tracking-wide">Products</a></li>
              <li><a href="#about" className="text-grey-300 hover:text-white text-sm transition-colors uppercase tracking-wide">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="text-grey-300 text-sm">Hong Kong</li>
              <li>
                <a href="mailto:cavelabltd@outlook.com" className="text-grey-300 hover:text-white text-sm transition-colors break-all">
                  cavelabltd@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-grey-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-grey-400 text-sm uppercase tracking-wide">
            &copy; 2025 CAVELAB Ltd. All rights reserved.
          </p>
          <p className="text-grey-400 text-sm uppercase tracking-wide">
            Established June 18, 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
