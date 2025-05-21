
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 shadow-md backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl bg-gradient-to-r from-portfolio-purple to-portfolio-lightPurple bg-clip-text text-transparent">
            Architha Sree L K
          </div>
          
          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-portfolio-darkPurple hover:text-portfolio-purple cursor-pointer transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-portfolio-purple after:transition-all"
              >
                {item.name}
              </ScrollLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-portfolio-darkPurple hover:text-portfolio-purple focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="text-portfolio-darkPurple hover:text-portfolio-purple cursor-pointer transition-colors px-2 py-1"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
