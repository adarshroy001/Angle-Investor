import dashboardImg from '../../public/dashboard.png'
const Hero = () => {
    return (
      <div className="flex flex-col lg:flex-row justify-between max-w-screen lg:justify-between mx-auto lg:mx-0 pt-8 md:pt-16 min-h-[90vh]  bg-gray-900 text-white relative">
        {/* Hero Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 mx-4 md:mx-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span>Connect with thousands of </span><br />
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
        {/* dashboard */}
        <div className='w-4/5 self-end lg:w-full'>
          <img src={dashboardImg} alt="" />
        </div>
      </div>
    );
  };
  
  export default Hero;