import React from 'react';
import { Settings, BarChart, CheckCircle, User } from 'lucide-react';

export default function LongDarkSection() {
  return (
    <div className="w-full md:w-[90vw] lg:w-[85vw] mx-auto bg-gray-900  md:rounded-xl p-8 pb-12 md:p-12 text-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Find the right investor to fund<br />your dream
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Angel Match consists of millions of investor data points categorized by
          locations, investment interests, investment stages, and investor types so you
          don't have to manually search for the wrong investors.
        </p>
      </div>

      {/* Match Types Section */}
      <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
        {/* Industry Match */}
        <div className="flex items-center gap-4">
          <div className="bg-gray-800 p-3 rounded-full">
            <Settings size={24} className="text-gray-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Industry match</h3>
            <p className="text-gray-400">Investors that match your business</p>
          </div>
        </div>

        {/* Stage Match */}
        <div className="flex items-center gap-4">
          <div className="bg-gray-800 p-3 rounded-full">
            <BarChart size={24} className="text-amber-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Stage match</h3>
            <p className="text-gray-400">Match your startup stage with the right investor</p>
          </div>
        </div>

        {/* Geo Match */}
        <div className="flex items-center gap-4">
          <div className="bg-gray-800 p-3 rounded-full">
            <CheckCircle size={24} className="text-green-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Geo match</h3>
            <p className="text-gray-400">Find investors that are in your country and region</p>
          </div>
        </div>
      </div>

      {/* Investment Portfolio Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Diverse Investment Portfolio */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-3">Very diverse investment portfolio</h3>
          <p className="text-gray-300 mb-6">
            Diverse backgrounds ranging from fashion and cleantech to blockchain and SaaS.
          </p>
          
          <div className="bg-white rounded-lg p-4 text-gray-800">
            <div className="flex justify-between items-center mb-3">
              <span>Mobile</span>
              <span>18,518</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span>Enterprise Software</span>
              <span>18,039</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span>E-Commerce</span>
              <span>15,535</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Information Technology</span>
              <span>19,985</span>
            </div>
            
            <div className="mt-6 bg-gray-100 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-blue-500 p-1 rounded-md text-white">
                  <User size={16} />
                </div>
                <div className="w-full bg-blue-200 h-3 rounded-full"></div>
              </div>
              <div className="bg-gray-200 h-2 rounded-full w-full mb-2"></div>
              <div className="bg-gray-200 h-2 rounded-full w-3/4"></div>
            </div>
          </div>
        </div>

        {/* Top VC Funds */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-3">Investors from the top VC funds</h3>
          <p className="text-gray-300 mb-6">
            From leading funds such as Andreessen Horowitz, Benchmark, and many more.
          </p>
          
          <div className="bg-white rounded-lg p-4 text-gray-800">
            <div className="space-y-3">
              {[
                { name: 'Darlene Robertson', amount: '$105,483' },
                { name: 'Jane Cooper', amount: '$18,788' },
                { name: 'Ronald Richards', amount: '$66,881' },
                { name: 'Esther Howard', amount: '$37,927' },
                { name: 'Gretchen Botosh', amount: '$85,631' },
                { name: 'Talan Press', amount: '$1,004' }
              ].map((investor, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <span>{investor.name}</span>
                  </div>
                  <span>{investor.amount}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex items-center gap-2">
              <div className="bg-white border border-gray-200 rounded-lg py-1 px-3">
                <span className="text-2xl font-bold">520</span>
                <span className="text-green-500 ml-1">+12%</span>
              </div>
              <div className="flex items-end gap-1">
                <div className="bg-yellow-400 w-3 h-8 rounded-t-sm"></div>
                <div className="bg-yellow-400 w-3 h-12 rounded-t-sm"></div>
                <div className="bg-yellow-400 w-3 h-10 rounded-t-sm"></div>
                <div className="bg-yellow-400 w-3 h-6 rounded-t-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Database Section */}
      <div className="bg-gray-800 rounded-xl p-6 mb-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-3">Comprehensive investor database</h3>
            <p className="text-gray-300">
              Investor profiles include emails, social media profiles, past investments, 
              investment interests, investor types, and geo.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="bg-white rounded-lg p-4 text-gray-800">
              <div className="space-y-2 mb-4">
                <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                <div className="bg-blue-200 h-2 rounded-full w-full"></div>
                <div className="bg-blue-100 h-2 rounded-full w-5/6"></div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="border border-gray-200 rounded-lg p-2 flex justify-center items-center">
                  <div className="text-purple-600 flex justify-center items-center w-6 h-6">
                    <User size={16} />
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-2 flex justify-center items-center">
                  <div className="text-orange-500 flex justify-center items-center w-6 h-6">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-2 flex justify-center items-center">
                  <div className="text-blue-600 flex justify-center items-center w-6 h-6">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-2 flex justify-center items-center">
                  <div className="text-purple-600 flex justify-center items-center w-6 h-6">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-2 flex justify-center items-center">
                  <div className="text-green-500 flex justify-center items-center w-6 h-6">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    </svg>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-2 flex justify-center items-center">
                  <div className="text-teal-500 flex justify-center items-center w-6 h-6">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg text-lg transition-colors">
          Try Angel Match today!
        </button>
      </div>
    </div>
  );
}