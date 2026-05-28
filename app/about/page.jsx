"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      title: "Holistic Healing",
      desc: "We look beyond isolated symptoms, treating the whole person—mind, body, and spirit—for lasting wellness.",
      icon: (
        <svg className="w-8 h-8 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
        </svg>
      )
    },
    {
      title: "Integrative Medicine",
      desc: "By combining the best of Allopathy, Ayurveda, and Homoeopathy, we create highly personalized treatment plans.",
      icon: (
        <svg className="w-8 h-8 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      title: "Community Trust",
      desc: "Deeply rooted in Uthukottai, we are dedicated to improving the health and well-being of our neighbors through ethical care.",
      icon: (
        <svg className="w-8 h-8 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const AnimatedCounter = ({ value }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const countRef = useRef(null);

    // Extract the number and suffix (e.g., "50+" -> target: 50, suffix: "+")
    const match = String(value).match(/^(\d+)(.*)$/);
    const target = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : "";

    // Trigger animation when scrolled into view
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        },
        { threshold: 0.5 }
      );

      if (countRef.current) {
        observer.observe(countRef.current);
      }

      return () => {
        if (countRef.current) observer.unobserve(countRef.current);
      };
    }, [hasAnimated]);

    // Run the counting animation
    useEffect(() => {
      if (!hasAnimated || target === 0) return;

      let startTimestamp = null;
      const duration = 2000; // Animation duration in milliseconds (2 seconds)

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // easeOutExpo easing function for a natural slow-down effect at the end
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * target));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(target); // Ensure it ends exactly on the target number
        }
      };

      window.requestAnimationFrame(step);
    }, [hasAnimated, target]);

    if (!match) return <span>{value}</span>;

    return (
      <span ref={countRef}>
        {count}{suffix}
      </span>
    );
  };

  return (
    <div className="bg-[#f4fbfb] min-h-screen font-sans overflow-hidden">
      
      {/* GLOBAL ANIMATION STYLES */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }

        @keyframes morphBlob {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: translate(30px, -30px) scale(1.05) rotate(15deg); }
          66% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(-20px, 20px) scale(0.95) rotate(-10deg); }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(0px, 0px) scale(1) rotate(0deg); }
        }
        .animate-blob { animation: morphBlob 15s infinite alternate ease-in-out; }

        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.6);
        }

        .hover-sweep::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(20,184,166,0.1) 0%, rgba(13,148,136,0.05) 100%);
          transform: translateY(100%);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
          border-radius: inherit;
        }
        .hover-sweep:hover::before { transform: translateY(0); }
      `}</style>

      {/* SECTION 1: ABOUT HERO */}
      <section className="relative w-full pt-40 pb-32 overflow-hidden bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#14b8a6]">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#f97316] opacity-20 blur-[120px] animate-blob"></div>
          <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-white opacity-10 blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-semibold uppercase tracking-widest mb-6 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse"></span>
            Who We Are
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight animate-slide-up" style={{ animationDelay: '100ms' }}>
            Compassionate Care for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fdba74]">Body & Mind</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-teal-100 leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Led by LION. Dr. R. Swaminathan, MM Clinic integrates traditional wisdom with modern medical practices to provide ethical, effective, and patient-centered healthcare.
          </p>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
          <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 L1200,120 L1200,0 C900,100 400,0 0,100 Z" className="fill-[#f4fbfb]"></path>
          </svg>
        </div>
      </section>

      {/* SECTION 2: MISSION & VISION */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Images/Visuals */}
            <div className="relative animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f97316] to-[#14b8a6] rounded-[2.5rem] transform rotate-3 scale-105 opacity-20 blur-lg animate-pulse"></div>
              <div className="relative glass-card p-4 rounded-[2.5rem] shadow-2xl z-10 bg-white">
                <img 
                  src="/detail/doctor.jpg" 
                  alt="Dr. R. Swaminathan" 
                  className="w-full h-auto rounded-[2rem] object-cover"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=MM+Clinic+Care'; }}
                />
                
                {/* Floating Stats Badge */}
                <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-float">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0d9488] flex items-center justify-center text-white">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#0f766e]">Govt. Reg</h4>
                    <p className="text-gray-500 text-sm font-medium">No. 0185/A</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col space-y-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <div>
                <h4 className="text-[#0d9488] font-bold text-sm uppercase tracking-widest mb-3">Our Mission</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-6 leading-tight">
                  Bridging the gap between <span className="text-[#f97316]">traditional wisdom</span> and <span className="text-[#0d9488]">modern medicine.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  With degrees spanning B.Sc., B.A.M.S., PGDYT., D.Pharm., C.C.H., and LL.B., Dr. Swaminathan established MM Clinic to offer a truly multi-disciplinary approach to healing. We recognize that no two patients are exactly alike, and therefore, their treatments shouldn't be either.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our goal is to accurately diagnose illnesses and utilize the most effective therapeutic pathway—whether that is allopathic medicine, ayurvedic remedies, homoeopathy, or yoga therapy—to ensure a swift and complete recovery.
                </p>
              </div>

              {/* Quick Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                {['Multi-Disciplinary Expertise', 'Personalized Treatment Plans', 'Natural & Safe Remedies', 'Ethical Medical Practices'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-50 text-[#0d9488] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-800 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: STATS/MILESTONES */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-x divide-gray-100">
            
            {[
              { number: "10+", label: "Years Experience" },
              { number: "5", label: "Medical Disciplines" },
              { number: "1000+", label: "Happy Patients" },
              { number: "100%", label: "Care Commitment" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center px-4 animate-slide-up" style={{ animationDelay: `${500 + (idx * 100)}ms` }}>
                <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0f766e] to-[#14b8a6] mb-2">
                  <AnimatedCounter value={stat.number} />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </h3>
                <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SECTION 4: CORE VALUES */}
      <section className="relative py-24 lg:py-32 bg-[#f4fbfb] overflow-hidden">
        
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#f97316]/10 to-transparent rounded-full blur-[100px] z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#14b8a6]/10 to-transparent rounded-full blur-[100px] z-0 pointer-events-none"></div>
        
        {/* Subtle dot pattern for medical/tech texture */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0d9488 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-24 animate-slide-up">
            <h4 className="inline-block px-5 py-2 rounded-full bg-white border border-teal-100 text-[#0d9488] font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
              Why Choose Us
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222] mb-6 tracking-tight">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0d9488]">Values</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
              We treat patients, not just diseases. Our clinic is founded on principles of empathy, expertise, and comprehensive care.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mt-12">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="relative group animate-slide-up"
                style={{ animationDelay: `${(idx * 150)}ms` }}
              >
                {/* Floating Icon Badge (Breaks out of the card top) */}
                <div className="absolute -top-10 left-8 z-20 w-20 h-20 rounded-[1.25rem] bg-gradient-to-br from-white to-[#f4fbfb] shadow-xl border border-teal-50 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-teal-500/20 transition-all duration-500">
                  {/* Subtle inner glow on hover */}
                  <div className="absolute inset-0 bg-[#0d9488] rounded-[1.25rem] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {val.icon}
                  </div>
                </div>

                {/* Main Card Container */}
                <div className="relative h-full bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 pt-16 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(13,148,136,0.12)] hover:-translate-y-3 transition-all duration-500 overflow-hidden z-10">
                  
                  {/* Background Watermark Number for Depth */}
                  <div className="absolute -bottom-8 -right-4 text-[140px] font-black text-[#f0fdfa] group-hover:text-[#ccfbf1] group-hover:scale-110 group-hover:-translate-x-4 transition-all duration-700 select-none z-0 leading-none">
                    0{idx + 1}
                  </div>

                  {/* Decorative Sweep Line (Top edge highlight on hover) */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20"></div>

                  {/* Content Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#0f766e] mb-4 group-hover:text-[#0d9488] transition-colors duration-300">
                      {val.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {val.desc}
                    </p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* SECTION 5: OUR TEAM / TRUSTED PARTNER */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden border-t border-gray-100">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0d9488 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="flex flex-col space-y-6 animate-slide-up">
              <h4 className="text-[#0d9488] font-bold text-sm uppercase tracking-widest mb-2">The Expert</h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222] leading-tight">
                Driven by <span className="text-[#0d9488]">Knowledge.</span><br/>
                Committed to <span className="text-[#f97316]">Healing.</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] rounded-full my-2"></div>
              
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  At MM Clinic, our strength lies in the vast educational background of Dr. Swaminathan. By mastering various disciplines of health science, he is uniquely positioned to evaluate a patient's condition from multiple medical perspectives.
                </p>
                <p>
                  Whether it involves prescribing modern medications, formulating an Ayurvedic regimen, or recommending specific Yoga therapies, our focus is entirely on delivering consistent, effective solutions that align with your health goals.
                </p>
              </div>

              {/* Trusted Partner Badge */}
              <div className="inline-flex items-center gap-4 bg-[#f4fbfb] border border-teal-100 p-4 rounded-2xl mt-4 w-fit">
                <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-[#0d9488]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0f766e] font-bold">Trusted Medical Care</p>
                  <p className="text-sm text-gray-500">Government Registered</p>
                </div>
              </div>
            </div>

            {/* Interactive Visual Graphic */}
            <div className="relative h-full min-h-[400px] flex items-center justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="absolute w-full h-full bg-gradient-to-tr from-[#14b8a6]/10 to-[#f97316]/5 rounded-full blur-[60px] animate-pulse"></div>
              
              <div className="relative w-full max-w-md h-[400px]">
                {/* Center Core Logo/Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl z-20 flex items-center justify-center border-4 border-[#f4fbfb] animate-float">
                  <div className="text-center flex flex-col items-center">
                    <img src="/detail/caduceus-logo.png" alt="Medical Cross" className="w-10 h-10 mb-1" onError={(e) => e.target.style.display = 'none'} />
                    <span className="block text-xl font-black text-[#0d9488] tracking-tighter">MM</span>
                    <span className="block text-sm font-bold text-[#f97316] tracking-widest leading-none">CLINIC</span>
                  </div>
                </div>

                {/* Orbiting Cards representing "Disciplines" */}
                {/* Discipline 1 */}
                <div className="absolute top-[10%] left-[10%] glass-card p-4 rounded-2xl shadow-lg flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="w-10 h-10 bg-[#fff7ed] rounded-full flex items-center justify-center text-[#f97316]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Ayurveda</p>
                  </div>
                </div>

                {/* Discipline 2 */}
                <div className="absolute bottom-[15%] left-[5%] glass-card p-4 rounded-2xl shadow-lg flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-[#0d9488]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Homoeopathy</p>
                  </div>
                </div>

                {/* Discipline 3 */}
                <div className="absolute top-[30%] right-[0%] glass-card p-4 rounded-2xl shadow-lg flex items-center gap-3 animate-float" style={{ animationDelay: '3s' }}>
                  <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-[#ea580c]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Yoga Therapy</p>
                  </div>
                </div>

                {/* Connecting SVG Lines (Decorative) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="120" fill="none" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="5,5" />
                  <circle cx="200" cy="200" r="180" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: CALL TO ACTION */}
      <section className="relative py-24 mb-10 mx-6 lg:mx-auto max-w-7xl rounded-[3rem] overflow-hidden bg-[#0d9488] animate-slide-up" style={{ animationDelay: '300ms' }}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#14b8a6] rounded-full blur-[100px] opacity-60"></div>
        
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to start your healing journey?</h2>
          <p className="text-teal-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Trust your health with Dr. Swaminathan and experience the benefits of integrative medical care today.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-white text-[#f97316] px-10 py-4 rounded-full font-bold text-[15px] uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Book an Appointment
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;