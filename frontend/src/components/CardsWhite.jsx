import { ChartBarIcon, Users , Clipboard , UsersIcon, ArrowRight , ChartLineIcon } from "lucide-react";
import { useState } from "react";

export default function CardWhites() {
  const [hoverIndex, setHoverIndex] = useState(null);
  
  const features = [
    {
      icon: <Users  className="text-indigo-500" size={28} />,
      title: "Database of 110,000+ investors",
      description: "Gain access to a database of thousands of potential investors complete with profiles and contact details."
    },
    {
      icon: <ChartBarIcon className="text-emerald-400" size={28} />,
      title: "Investor contact details & profile",
      description: "Download the active contact details of your investor leads. Have access to investors' email addresses and phone numbers."
    },
    {
      icon: <ChartLineIcon className="text-orange-400" size={28} />,
      title: "Investor search and filtering",
      description: "Customize your filters to do the searching for you and find the right investor for your business in just a few clicks."
    },
    {
      icon: <UsersIcon className="text-blue-500" size={28} />,
      title: "Diverse investor profiles",
      description: "Angel Match is the hub for startups across all industries. Find the right investor that best compliments your industry niche."
    },
    {
      icon: <ArrowRight className="text-green-500" size={28} />,
      title: "Track investor engagements",
      description: "Centralize your investor relations in one place. Track and organize investor leads to build your own personalized database."
    },
    {
      icon: <Clipboard  className="text-yellow-500" size={28} />,
      title: "Up-To-Date Data",
      description: "We make sure to allocate financial and human resources to keep the data of the investors on the platform updated and relevant."
    }
  ];

  return (
    <div className="w-full  mx-auto px-4 py-12 bg-white">
      {/* Hero Section */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          How Angel Match unlocks<br/>your startup's potential
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Angel Match helps you expand your network, save time searching for
          funding, and find the perfect investor for your startup
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-6 transition-all duration-200 hover:shadow-md"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}