import rocket from '../../assets/rokect.png'
import money from '../../assets/money.png'

export default function CardsDark() {
  return (
    <div className="w-full mx-auto px-4 py-16 bg-white">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">What Angel Match can do for you</h2>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* For Startups Card */}
        <div className="bg-gray-900 rounded-xl p-8 shadow-lg flex flex-col items-center text-center flex-1 max-w-xl min-h-96 justify-evenly">
          <div className="mb-6">
            {/* Rocket icon placeholder - in actual implementation you'd use an image */}
            <img src={rocket} alt="Rocket icon" className="w-20 h-20" />
          </div>
          <h3 className="text-white text-2xl font-semibold mb-4">For startups</h3>
          <p className="text-gray-300 text-lg">
            Expand your network and save 100s of hours searching for funding with our database of 110,000+ investors.
          </p>
        </div>

        {/* For Business Owners Card */}
        <div className="bg-gray-900 rounded-xl p-8 shadow-lg flex flex-col items-center text-center flex-1 max-w-xl min-h-96 justify-evenly">
          <div className="mb-6">
            {/* Money icon placeholder - in actual implementation you'd use an image */}
            <img src={money} alt="Money icon" className="w-20 h-20" />
          </div>
          <h3 className="text-white text-2xl font-semibold mb-4">For business owners</h3>
          <p className="text-gray-300 text-lg">
            Angel Match connects you with investors to give your business the boost and headstart it needs to develop.
          </p>
        </div>
      </div>
    </div>
  );
}