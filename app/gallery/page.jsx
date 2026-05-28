"use client";

import React, { useState, useEffect } from 'react';

const galleryImages = [
  { id: 1, img: '/serviceimage/g1.jpg' },
  { id: 2, img: '/serviceimage/g2.jpg' },
  { id: 3, img: '/serviceimage/g3.jpg' },
  { id: 4, img: '/serviceimage/g4.jpg' },
  { id: 5, img: '/serviceimage/g5.jpg' },
  { id: 6, img: '/serviceimage/g6.jpg' },
  { id: 7, img: '/serviceimage/g7.jpg' },
  { id: 8, img: '/serviceimage/g8.jpg' },
  { id: 9, img: '/serviceimage/g9.jpg' },
  { id: 10, img: '/serviceimage/g10.jpg' },
  { id: 11, img: '/serviceimage/g11.jpg' },
  { id: 12, img: '/serviceimage/g12.jpg' },
  { id: 13, img: '/serviceimage/g13.jpg' },
  { id: 14, img: '/serviceimage/g14.jpg' },
  { id: 15, img: '/serviceimage/g15.jpg' },
];

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  // Close lightbox on 'Esc' key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImg(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-red-100">
      
      {/* 1. INDUSTRIAL HEADER */}
      <div className="relative bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop" 
            /* 1. Changed opacity-20 to opacity-50 to make the image brighter */
            className="w-full h-full object-cover opacity-50"
            alt="Gallery Background"
          />
          {/* 2. Lightened the top of the gradient from 60% dark to 20% dark */}
         <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-slate-900/20 to-slate-900/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-block px-3 py-1 border border-red-600/30 bg-red-600/10 rounded mb-4 shadow-sm">
            <span className="text-red-500 font-black uppercase text-xs tracking-[0.3em]">Fleet Showcase</span>
          </div>
          {/* Added drop-shadow-lg to ensure the text stays readable over the brighter image */}
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase drop-shadow-lg">
            Pragadeesh <span className="text-red-600">Visuals</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-medium drop-shadow-md">
            Click on any image to inspect our high-performance transportation assets in detail.
          </p>
        </div>
      </div>

      {/* 2. INTERACTIVE VISUAL GRID */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {galleryImages.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedImg(item.img)}
              className="group relative h-[350px] overflow-hidden rounded-2xl bg-slate-100 cursor-zoom-in transition-all duration-700 ease-out border-2 border-[#0000fe] hover:-translate-y-3 hover:border-[#fe0000] hover:shadow-[0_20px_60px_-10px_rgb(220,38,38,0.5)]"
            >
              <img 
                src={item.img} 
                alt="Pragadeesh Fleet Vehicle" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. LIGHTBOX MODAL */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-red-500 transition-colors z-[110]"
            onClick={() => setSelectedImg(null)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div 
            className="relative max-w-5xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImg} 
              alt="Fleet Detail View" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
            />
            
            <div className="absolute bottom-[-40px] left-0 right-0 text-center">
               <p className="text-white/50 text-sm font-bold uppercase tracking-widest">PSV Pragadeesh Transport • Fleet Detail</p>
            </div>
          </div>
        </div>
      )}

      {/* 4. CALL TO ACTION */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-slate-900 rounded-[2.5rem] p-12 text-center relative overflow-hidden border border-slate-800 shadow-xl">
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              A Complete <span className="text-blue-500">Logistics</span> Arsenal
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-medium">
              Ready to move? Our full fleet is at your service.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-black px-12 py-4 rounded-full transition-all duration-300 uppercase tracking-widest text-sm shadow-xl shadow-red-600/30"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}