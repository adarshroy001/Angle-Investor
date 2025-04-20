const Hero = () => {
    return (
      <div className="flex flex-col lg:flex-row max-w-[90%] mx-auto px-4 md:px-8 lg:px-16 pt-8 md:pt-16">
        {/* Hero Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <div>Connect with thousands of </div>
            <div className="inline-block bg-gradient-to-r from-[#2D5BFF] to-[#73737300] border-l-[3px] border-l-[#0011ff]">investors</div>
            <span> in seconds</span>
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
        <div className="w-full lg:w-1/2 relative min-h-[800px]">
          <div className="bg-white rounded-xl shadow-2xl w-[160%] h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
                <span className="font-medium text-gray-800">Fundraising CRM</span>
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-4">
                <span>My list 1 (used 53 of 1000)</span>
                <span>Export limit (used 0 of 1000)</span>
                <button className="text-blue-500">Up</button>
              </div>
            </div>
  
            {/* Search Bar */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-white">
                    <option>Default pipeline</option>
                  </select>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <input 
                      type="search" 
                      placeholder="Search investors..." 
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg pl-10"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50">Filter</button>
                <button className="px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50">Export to</button>
                <button className="px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600">+ Create</button>
              </div>
            </div>
  
            {/* Pipeline Columns */}
            <div className="p-6 grid grid-cols-3 gap-6">
              {/* New Column */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="font-medium">New</span>
                    <span className="ml-2 text-gray-500">18</span>
                  </div>
                  <button className="text-gray-400">•••</button>
                </div>
                <button className="w-full text-center py-2.5 text-gray-500 hover:bg-gray-100 rounded-lg border border-gray-200">
                  + Create Card
                </button>
              </div>
  
              {/* Responded Column */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span className="font-medium">Responded</span>
                    <span className="ml-2 text-gray-500">23</span>
                  </div>
                  <button className="text-gray-400">•••</button>
                </div>
                <button className="w-full text-center py-2.5 text-gray-500 hover:bg-gray-100 rounded-lg border border-gray-200">
                  + Create Card
                </button>
              </div>
  
              {/* Call Scheduled Column */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    <span className="font-medium">Call Scheduled</span>
                    <span className="ml-2 text-gray-500">12</span>
                  </div>
                  <button className="text-gray-400">•••</button>
                </div>
                <button className="w-full text-center py-2.5 text-gray-500 hover:bg-gray-100 rounded-lg border border-gray-200">
                  + Create Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;