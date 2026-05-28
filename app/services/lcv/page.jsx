import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'LCV Segment - Light Commercial Vehicles',
  description: 'Fleets providing in LCV Segment for regional logistics and medium-duty transport.',
};

const lcvVehicles = [
  {
    id: 1,
    name: "EICHER 1060",
    service: "Regional Transport & Distribution",
    description: "A highly reliable medium-duty truck designed for excellent fuel efficiency and turnaround time. Perfect for transporting FMCG, white goods, and industrial materials across regional distances.",
    specs: { length: "14 ft", width: "6.5 ft", height: "6.0 ft", payload: "3 Tons" },
    image: "/serviceimage/g7.jpg", 
  },
  {
    id: 2,
    name: "EICHER 1090",
    service: "Heavy Regional Logistics",
    description: "The versatile workhorse of the LCV segment. Engineered to handle heavier payloads with superior stability, making it ideal for agricultural produce, textiles, and medium machinery transport.",
    specs: { length: "17 ft", width: "6.5 ft", height: "6.0 ft", payload: "5 Tons" },
    image: "/serviceimage/g8.jpg", 
  },
  {
    id: 3,
    name: "EICHER 1110",
    service: "High-Volume Cargo Transport",
    description: "The heavy-lifter of our Light Commercial fleet, offering expansive cargo space for maximum volume. Best suited for long-haul distribution and specialized goods. (Note: Higher variants are also available upon request).",
    specs: { length: "19 - 20 ft", width: "7.0 ft", height: "6.0 ft", payload: "7 Tons" },
    image: "/serviceimage/g9.jpg", 
  }
];

export default function LCVSegmentPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-20 pb-24 font-sans">
      
      {/* Corporate Page Header */}
      <div className="relative bg-slate-900 border-b border-gray-200 shadow-sm mb-20 overflow-hidden">
  {/* Background Image Wrapper */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop" 
      alt="LCV Eicher Fleet Background" 
      className="w-full h-full object-cover"
    />
    {/* High-Contrast Industrial Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/60 to-slate-900/60"></div>
  </div>

  {/* Content Layer */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
    <span className="text-[#0000fe] font-bold tracking-widest uppercase text-sm mb-3 block">
      Fleet Overview
    </span>
    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
      Light Commercial <span className="text-[#fe0000]">Vehicles</span> (LCV)
    </h1>
    <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
      Optimized for medium-duty transport, our Eicher fleet delivers the perfect balance of volume and payload capacity for your growing business needs.
    </p>
  </div>
</div>
      {/* Alternating Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {lcvVehicles.map((vehicle, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={vehicle.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 bg-white p-2 group">
                  <div className="rounded-xl overflow-hidden bg-gray-50 relative aspect-[4/3]">
                     <img 
                        src={vehicle.image} 
                        alt={vehicle.name} 
                        className="object-cover w-full h-full mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                      />
                  </div>
                </div>
              </div>

              {/* Text & Details Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                
                {/* Badge & Title */}
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#0000fe]/10 text-[#0000fe] font-semibold text-xs tracking-wider uppercase mb-4">
                    Payload: {vehicle.specs.payload}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-2">
                    {vehicle.name}
                  </h2>
                  <h3 className="text-lg font-medium text-gray-500 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#fe0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {vehicle.service}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {vehicle.description}
                </p>

                {/* Professional Data Grid */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
                  <h4 className="text-sm font-bold text-[#000000] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Length</span>
                      <span className="block text-xl font-bold text-[#0000fe]">{vehicle.specs.length}</span>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Width</span>
                      <span className="block text-xl font-bold text-[#0000fe]">{vehicle.specs.width}</span>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Height</span>
                      <span className="block text-xl font-bold text-[#0000fe]">{vehicle.specs.height}</span>
                    </div>
                  </div>
                </div>

                {/* Corporate Call to Action */}
                <div>
                  <Link href="/contact" className="inline-flex items-center justify-center bg-[#fe0000] text-white px-8 py-3.5 rounded-lg font-semibold tracking-wide transition-all duration-300 hover:bg-[#cc0000] hover:shadow-lg">
                    Request a Quote
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}