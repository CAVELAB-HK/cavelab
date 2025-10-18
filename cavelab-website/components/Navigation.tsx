'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'vision', 'problem', 'approach', 'products', 'roadmap', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Vision', href: '#vision' },
    { name: 'Approach', href: '#approach' },
    { name: 'Products', href: '#products' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/98 backdrop-blur-md py-4 border-b-2 border-grey-800' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="#hero" className="hover:opacity-70 transition-opacity">
          <Image 
            src="/cavelab-logo.png" 
            alt="CAVELAB" 
            width={600} 
            height={200}
            className="h-[120px] w-auto"
            priority
          />
        </Link>
        
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-sm font-medium tracking-wide uppercase transition-all duration-200 relative group ${
                  activeSection === item.href.slice(1)
                    ? 'text-grey-800'
                    : 'text-grey-500 hover:text-grey-800'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-grey-800 transform origin-left transition-transform duration-200 ${
                  activeSection === item.href.slice(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
