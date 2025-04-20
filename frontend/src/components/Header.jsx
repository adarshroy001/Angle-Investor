import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-4 px-4 md:px-8 lg:px-16 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="mr-2">
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 0L8 24H0L16 0H24Z" fill="#3B82F6" />
                <path d="M32 0L16 24H8L24 0H32Z" fill="#60A5FA" />
              </svg>
            </div>
            <span className="text-xl font-bold">AngelMatch</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-white hover:text-blue-300">
                Resources
                <svg
                  className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute z-50 mt-2 w-64 bg-gray-800 border border-gray-700 rounded shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Accelerator Hunt</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Pitch Deck Database</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Join Investor Database</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">VC Search</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Fundraising Templates</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Publication</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Pitch Perfect</a>
                <div className="relative">
                  <a href="#" className="flex justify-between px-4 py-2 hover:bg-gray-700 items-center">
                    Calculators
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Investor Outreach AI Email Generator</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Elevator Pitch Generator</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Startup Fundraising Glossary</a>
              </div>
            </div>
            <a href="#" className="text-white hover:text-blue-300">Pricing</a>
            <a href="#" className="text-white hover:text-blue-300">Login</a>
            <a href="#" className="text-white border border-white rounded-md px-6 py-2 hover:bg-white hover:text-gray-900 transition-colors">Sign up</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 bg-gray-800 rounded">
            <div className="px-4 py-2">
              <button 
                onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)} 
                className="flex items-center justify-between w-full text-white"
              >
                Resources
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isMobileResourcesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isMobileResourcesOpen && (
                <div className="mt-2 pl-4 border-l border-gray-700">
                  <a href="#" className="block py-2 text-white">Accelerator Hunt</a>
                  <a href="#" className="block py-2 text-white">Pitch Deck Database</a>
                  <a href="#" className="block py-2 text-white">Join Investor Database</a>
                  <a href="#" className="block py-2 text-white">VC Search</a>
                  <a href="#" className="block py-2 text-white">Fundraising Templates</a>
                  <a href="#" className="block py-2 text-white">Publication</a>
                  <a href="#" className="block py-2 text-white">Pitch Perfect</a>
                  <a href="#" className="block py-2 text-white">Calculators</a>
                  <a href="#" className="block py-2 text-white">Investor Outreach AI Email Generator</a>
                  <a href="#" className="block py-2 text-white">Elevator Pitch Generator</a>
                  <a href="#" className="block py-2 text-white">Startup Fundraising Glossary</a>
                </div>
              )}
            </div>
            <a href="#" className="block px-4 py-2 text-white">Pricing</a>
            <a href="#" className="block px-4 py-2 text-white">Login</a>
            <a href="#" className="block mx-4 mt-2 py-2 text-center text-white border border-white rounded-md hover:bg-white hover:text-gray-900 transition-colors">Sign up</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;