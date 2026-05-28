"use client";

import React from 'react';
import Image from 'next/image';

export default function ClientsPage() {
  const clientLogos = [
    { id: 1, src: "/client/cli1.jpg" },
    { id: 2, src: "/client/cli2.jpg" },
    { id: 3, src: "/client/cli3.jpg" },
    { id: 4, src: "/client/cli4.jpg" },
    { id: 5, src: "/client/cli5.jpg" },
    { id: 6, src: "/client/cli6.jpg" },
    { id: 7, src: "/client/cli7.jpg" },
    { id: 8, src: "/client/cli8.jpg" },
    { id: 9, src: "/client/cli9.jpg" },
    { id: 10, src: "/client/cli10.jpg" },
    { id: 11, src: "/client/cli11.jpg" }
  ];
const AnimatedNumber = ({ value }) => {
  const [count, setCount] = React.useState(0);
  const target = parseInt(value);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps logic

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}{value.includes('%') ? '%' : value.includes('+') ? '+' : ''}</>;
};
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-red-100">
      {/* 1. ANIMATION STYLES */}
      <style jsx global>{`
        @keyframes revealLogo {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .logo-animate {
          opacity: 0;
          animation: revealLogo 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      {/* 2. COMPACT HERO SECTION (Reduced to 50vh) */}
      <div className="relative min-h-[50vh] flex items-center justify-center bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20"
            alt="Logistics Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-slate-900/10 to-slate-900/10"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="inline-block px-3 py-1 border border-red-600/30 bg-red-600/10 rounded-full mb-6">
            <span className="text-red-500 font-black uppercase text-[10px] tracking-[0.3em]">Global Partners</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
            Trusted by <br />
            <span className="text-red-600">Industrial</span> Giants.
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Powering the logistics backbone for India's most respected corporate leaders.
          </p>
        </div>
      </div>

      {/* 3. LOGO GRID SECTION (Reduced Padding) */}
      <div className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clientLogos.map((client, index) => (
            <div 
              key={client.id} 
              className="logo-animate group relative bg-white aspect-[4/3] rounded-[2rem] flex items-center justify-center border border-slate-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-[80%] h-[60%]">
                <Image
                  src={client.src}
                  alt={`Partner ${client.id}`}
                  fill
                  sizes="(max-width: 768px) 40vw, 20vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                  priority={index < 4}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. STATS & CTA (Compressed) */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
  <div className="bg-slate-950 p-10 md:p-20 rounded-[3rem] text-center space-y-12 relative overflow-hidden">
    {/* Decorative Glow */}
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/10 rounded-full blur-[80px]"></div>
    
    <div className="grid md:grid-cols-3 gap-8 relative z-10">
      {/* Stat 1 */}
      <div>
        <p className="text-5xl md:text-6xl font-black text-white leading-none">
          <AnimatedNumber value="50+" />
        </p>
        <p className="text-red-600 font-bold uppercase tracking-widest text-[9px] mt-2">Partners</p>
      </div>

      {/* Stat 2 */}
      <div className="md:border-x border-slate-800 py-6 md:py-0">
        <p className="text-5xl md:text-6xl font-black text-white leading-none">
          <AnimatedNumber value="99%" />
        </p>
        <p className="text-red-600 font-bold uppercase tracking-widest text-[9px] mt-2">Retention</p>
      </div>

      {/* Stat 3 */}
      <div>
        <p className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter">
          24/7
        </p>
        <p className="text-red-600 font-bold uppercase tracking-widest text-[9px] mt-2">Support</p>
      </div>
    </div>
    
    <div className="pt-10 border-t border-slate-900">
      <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">
        READY TO SCALE?
      </h2>
      <button className="bg-red-600 hover:bg-white hover:text-red-600 text-white px-10 py-4 rounded-2xl font-black text-sm transition-all shadow-xl active:scale-95">
        REQUEST A QUOTE
      </button>
    </div>
  </div>

      </div>
    </div>
  );
}