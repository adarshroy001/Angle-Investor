

const Hero = () => {
    return (
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-8 md:pt-16">
        {/* Hero Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="mb-4">Connect with thousands of </span>
            <br />
            <span className="bg-gradient-to-r from-[#2D5BFF] to-[#73737300] border-l-8 border-l-[#1184ff] ">investors </span>
            <span>in seconds</span>
          </h1>
          <p className="text-blue-300 text-lg mb-8">
            Angel Match connects you with 110,000+ angel investors and 
            venture capitalists in one platform so you save time on the
            grueling process of searching for investors.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-blue-500 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
              Find investors
            </a>
            <a href="#" className="border border-gray-600 text-white font-medium px-6 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center">
              Try for free
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Dashboard Preview */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
              <span className="font-medium text-gray-700">Fundraising CRM</span>
              <div className="ml-auto text-xs text-gray-500">
                My list 1 <span className="opacity-50">(used 53 of 1000)</span> Export limit <span className="opacity-50">(used 0 of 1000)</span>
              </div>
            </div>
            
            <div className="p-4">
              {/* This is a simplified version of the CRM interface shown in the image */}
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/3 p-2">
                  <div className="border border-gray-200 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span className="font-medium">New</span>
                        <span className="ml-2 text-gray-500">18</span>
                      </div>
                      <button className="text-gray-400">•••</button>
                    </div>
                    <button className="w-full text-center py-1 text-gray-500 hover:bg-gray-100 rounded">
                      + Create Card
                    </button>
                  </div>
                </div>
                
                <div className="w-full md:w-1/3 p-2">
                  <div className="border border-gray-200 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span className="font-medium">Responded</span>
                        <span className="ml-2 text-gray-500">23</span>
                      </div>
                      <button className="text-gray-400">•••</button>
                    </div>
                    <button className="w-full text-center py-1 text-gray-500 hover:bg-gray-100 rounded">
                      + Create Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;