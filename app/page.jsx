"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "General Practice",
      desc: "Comprehensive primary care and routine medical checkups for all ages.",
      icon: (
        <svg className="w-8 h-8 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Ayurvedic Medicine",
      desc: "Holistic healing and natural remedies based on B.A.M.S expertise.",
      icon: (
        <svg className="w-8 h-8 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      )
    },
    {
      title: "Yoga Therapy",
      desc: "Integrated wellness and physical therapy promoting mind-body health.",
      icon: (
        <svg className="w-8 h-8 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Homoeopathy",
      desc: "Alternative medicine approaches customized to individual patient needs.",
      icon: (
        <svg className="w-8 h-8 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 4.5l4.5 0m-2.25 0v15m0 0a3 3 0 01-3-3v-6.75a2.25 2.25 0 00-2.25-2.25h-1.5m9 12a3 3 0 003-3v-6.75a2.25 2.25 0 012.25-2.25h1.5" />
        </svg>
      )
    },
    {
      title: "Pharmacy Services",
      desc: "In-house pharmaceutical guidance and prescription management.",
      icon: (
        <svg className="w-8 h-8 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
        </svg>
      )
    }
  ];

  const clinicServices = [
    {
      title: "Primary Consultations",
      items: [
        "Routine Medical Checkups & Physicals",
        "Fever & Viral Infection Management",
        "Blood Pressure & Diabetes Monitoring",
        "Preventive Healthcare Plans",
        "Dietary & Nutritional Counseling",
        "Geriatric (Elderly) Care",
        "Referrals for Specialized Diagnostics"
      ]
    },
    {
      title: "Alternative Medicine",
      items: [
        "Ayurvedic Consultations (B.A.M.S)",
        "Natural Immunity Boosting Therapies",
        "Homoeopathic Remedies (C.C.H)",
        "Chronic Pain Management",
        "Herbal Supplements & Guidance",
        "Lifestyle Modification Programs",
        "Stress & Anxiety Relief Therapies"
      ]
    },
    {
      title: "Therapy & Pharmacy",
      items: [
        "Post-Graduate Diploma in Yoga Therapy (PGDYT)",
        "Therapeutic Yoga for Rehabilitation",
        "Breathing Exercises (Pranayama) Instruction",
        "Prescription Verification & Dispensing (D.Pharm)",
        "Medication Interaction Checks",
        "Proper Dosage Guidelines",
        "Over-The-Counter Consultation"
      ]
    },
    {
      title: "Legal & Documentation",
      items: [
        "Medical Legal Advice (LL.B.)",
        "Fitness & Medical Certificate Issuance",
        "Govt. Registered Record Keeping",
        "Accident & Trauma First Response",
        "Insurance Claim Documentation Assistance",
        "Workplace Health Assessments"
      ]
    }
  ];

  return (
    <>
      <style>{`
        /* -------------------------------------
           CORE 3D & PERSPECTIVE UTILITIES 
           ------------------------------------- */
        .perspective-container { perspective: 1200px; }
        .preserve-3d { transform-style: preserve-3d; }
        
        /* 3D Card Hover - Tilts on X and Y axes */
        .card-3d-hover {
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s ease;
          transform-style: preserve-3d;
        }
        .card-3d-hover:hover {
          transform: rotateY(8deg) rotateX(6deg) translateY(-10px);
          box-shadow: -20px 25px 50px rgba(13, 148, 136, 0.15);
        }
        
        /* Element popping out of the 3D card */
        .pop-out-3d {
          transform: translateZ(40px);
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .card-3d-hover:hover .pop-out-3d {
          transform: translateZ(70px) scale(1.05);
        }

        /* -------------------------------------
           ANIMATIONS 
           ------------------------------------- */
        /* Hero 3D Float with Axis Rotation */
        @keyframes float3D {
          0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          33% { transform: translateY(-15px) rotateX(4deg) rotateY(-4deg); }
          66% { transform: translateY(5px) rotateX(-2deg) rotateY(2deg); }
          100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
        }
        .animate-float-3d { animation: float3D 8s ease-in-out infinite; transform-style: preserve-3d; }

        @keyframes fadeInUpCard {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-card { animation: fadeInUpCard 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px) rotateY(-10deg); }
          to { opacity: 1; transform: translateX(0) rotateY(0); }
        }
        .animate-slide-left { animation: slideInLeft 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal { animation: fadeInUp 0.8s ease-out forwards; }

        /* Staggered List Item Animation */
        @keyframes slideInRightFade {
          from { opacity: 0; transform: translateX(20px) translateZ(-20px); }
          to { opacity: 1; transform: translateX(0) translateZ(0); }
        }
        .animate-list-item { animation: slideInRightFade 0.5s ease-out forwards; opacity: 0; }

        /* Medical Background Animations */
        @keyframes ecgSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ecg { animation: ecgSlide 8s linear infinite; width: 200%; }

        @keyframes panGrid {
          0% { background-position: 0px 0px; }
          100% { background-position: 40px 40px; }
        }
        .animate-grid { animation: panGrid 4s linear infinite; }

        .glass-card {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.6);
        }
      `}</style>

      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-screen flex items-center pt-32 pb-40 overflow-hidden bg-gradient-to-br from-[#14b8a6] via-[#0d9488] to-[#0f766e] font-sans perspective-container">
        
        {/* Background Concentric Circles - With 3D Z-Depth */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none preserve-3d">
          <div className="absolute -top-[30%] -left-[10%] w-[1000px] h-[1000px] rounded-full bg-white opacity-[0.04] transform translateZ(-100px)"></div>
          <div className="absolute -top-[15%] -left-[5%] w-[800px] h-[800px] rounded-full bg-white opacity-[0.04] transform translateZ(-50px)"></div>
          <div className="absolute top-[0%] left-[0%] w-[600px] h-[600px] rounded-full bg-white opacity-[0.04] transform translateZ(-20px)"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6 text-center lg:text-left preserve-3d">
              <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400 text-orange-100 font-bold text-sm uppercase tracking-widest mb-2 w-max mx-auto lg:mx-0 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                Govt. Reg No. 0185/A
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg">
                Welcome to <span className="text-[#f97316]">MM CLINIC</span> <br />
                <span className="font-light text-white/90 text-3xl md:text-4xl mt-2 block">Compassionate Healthcare</span>
              </h1>
              <p className="text-base md:text-[17px] text-white/90 max-w-lg mx-auto lg:mx-0 leading-relaxed pt-2 drop-shadow-md">
                Led by LION. Dr. R. Swaminathan and Dr.R.swaminathan, a multi-disciplinary Govt. Registered Medical Practitioner offering holistic treatments integrating Allopathy, Ayurveda, Homoeopathy, and Yoga Therapy.
              </p>
              <div className="pt-4 flex justify-center lg:justify-start gap-4">
                <Link 
                  href="tel:+919444796479" 
                  className="inline-flex items-center gap-3 bg-[#f97316] text-white px-8 py-3.5 rounded-md font-bold text-[14px] uppercase tracking-wider shadow-[0_10px_20px_rgba(249,115,22,0.4)] hover:shadow-[0_15px_30px_rgba(249,115,22,0.6)] hover:-translate-y-1 hover:bg-[#ea580c] transition-all duration-300"
                >
                  Call +91 94447 96479
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 3D Floating Hero Image */}
            <div className="relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0 perspective-container">
              <div className="relative w-full max-w-sm lg:max-w-md animate-float-3d">
                <div className="rounded-2xl overflow-hidden border-4 border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative bg-white transform-gpu">
                   <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg z-10 pop-out-3d">
                      <img src="/detail/caduceus-logo.png" alt="Medical Logo" className="w-10 h-10 object-contain" onError={(e) => e.target.style.display = 'none'} />
                   </div>
                   <img 
                    src="/detail/doctor.jpg" 
                    alt="Dr. R. Swaminathan" 
                    className="w-full h-auto object-cover"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM WAVE DIVIDER */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[120px] md:h-[180px] lg:h-[220px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 L1200,120 L1200,80 C900,120 400,10 0,60 Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* SECTION 2: STORY ABOUT US */}
      <section className="relative bg-white py-24 lg:py-32 overflow-hidden perspective-container">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-70 animate-pulse z-0 transform translateZ(-150px)"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-50 rounded-full blur-2xl z-0 transform translateZ(-150px)"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className={`relative ${isVisible ? 'animate-slide-left' : 'opacity-0'} preserve-3d`}>
              <div className="relative z-10 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 transition-transform duration-700 hover:rotate-y-2 hover:scale-[1.02]">
                <img 
                  src="/detail/clinic-interior.jpg" 
                  alt="MM Clinic Interior" 
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full aspect-video bg-teal-50 flex items-center justify-center text-teal-800 font-bold text-xl">
                  MM Clinic Atmosphere
                </div>
              </div>
              
              {/* Floating Badge with 3D offset */}
              <div className="absolute -bottom-10 -right-4 lg:-right-10 z-20 w-1/2 bg-white rounded-xl shadow-2xl border border-gray-50 p-6 flex flex-col items-center text-center transform translateZ(50px) animate-bounce [animation-duration:5s]">
                 <h4 className="font-bold text-teal-800 text-lg">Govt. Registered</h4>
                 <p className="text-sm text-gray-500">Reg No. 0185/A</p>
                 <div className="mt-3 w-12 h-1 bg-orange-500 rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col space-y-8">
              <div className={`${isVisible ? 'animate-reveal' : 'opacity-0'} [animation-delay:200ms]`}>
                <h4 className="text-[#0d9488] font-bold text-sm uppercase tracking-widest mb-3">
                  About the Doctor
                </h4>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222] leading-tight mb-6">
                  LION. Dr. R. Swaminathan And Dr.R.swaminathan<br />
                  <span className="text-[#f97316] text-2xl lg:text-3xl block mt-2">B.Sc., B.A.M.S., PGDYT., D.Pharm., C.C.H., LL.B.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  With a unique and extensive educational background spanning multiple disciplines of health and law, Dr. Swaminathan provides a truly integrative approach to patient care. At MM Clinic, we treat the whole person, addressing the root causes of illness through diverse medical knowledge.
                </p>
              </div>

              <div className="space-y-6">
                <div className={`flex gap-5 transition-all duration-500 hover:translate-x-2 ${isVisible ? 'animate-reveal' : 'opacity-0'} [animation-delay:400ms]`}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#0d9488] flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#222] mb-1">Multi-Disciplinary Care</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Expertise in Ayurveda, Homoeopathy, Pharmacy, and Yoga Therapy ensures you receive the most appropriate and effective treatment plan.
                    </p>
                  </div>
                </div>

                <div className={`flex gap-5 transition-all duration-500 hover:translate-x-2 ${isVisible ? 'animate-reveal' : 'opacity-0'} [animation-delay:600ms]`}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#f97316] flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#222] mb-1">Trusted Community Health</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Conveniently located in Uthukottai, we pride ourselves on delivering ethical, patient-first medical services to our neighbors.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`pt-4 border-t border-gray-100 ${isVisible ? 'animate-reveal' : 'opacity-0'} [animation-delay:800ms]`}>
                <p className="italic text-gray-400 text-sm">
                  "Healing communities through trusted knowledge and compassionate care."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR FEATURES (3D Hover Cards) */}
      <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden font-sans perspective-container">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#222] mb-6">
              Our Medical Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              We offer a broad spectrum of medical services under one roof, leveraging diverse qualifications to offer the most suitable therapeutic pathways for you and your family.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 perspective-container">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 animate-card card-3d-hover`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* 3D Pop-out Icon Container */}
                <div className="relative w-28 h-28 mb-8 flex items-center justify-center pop-out-3d">
                  <div className="absolute inset-0 bg-teal-50 rounded-3xl transform rotate-12 group-hover:rotate-45 group-hover:bg-teal-100 transition-all duration-500 shadow-inner"></div>
                  <div className="absolute inset-2 bg-white rounded-2xl shadow-md border border-teal-50/50"></div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                <div className="pop-out-3d">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#0d9488] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE MODULES (CLINIC CAPABILITIES) */}
      <section className="relative py-24 lg:py-32 bg-[#f4fbfb] overflow-hidden font-sans perspective-container">
        {/* Dynamic Medical Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none preserve-3d">
          <div className="absolute inset-0 opacity-[0.15] animate-grid" style={{ backgroundImage: 'linear-gradient(to right, #0d9488 1px, transparent 1px), linear-gradient(to bottom, #0d9488 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#14b8a6]/20 to-[#0d9488]/5 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#f0fdfa] to-[#14b8a6]/10 blur-[100px] rounded-full"></div>

          {/* Continuous ECG Heartbeat Line SVG */}
          <div className="absolute top-1/4 left-0 h-40 w-full opacity-[0.05] flex animate-ecg text-[#f97316] transform translateZ(-100px)">
            <svg viewBox="0 0 1000 100" className="h-full w-1/2 flex-shrink-0" preserveAspectRatio="none">
              <path d="M0,50 H200 L215,20 L240,90 L260,10 L280,70 L295,50 H500 L515,20 L540,90 L560,10 L580,70 L595,50 H800 L815,20 L840,90 L860,10 L880,70 L895,50 H1000" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <svg viewBox="0 0 1000 100" className="h-full w-1/2 flex-shrink-0" preserveAspectRatio="none">
              <path d="M0,50 H200 L215,20 L240,90 L260,10 L280,70 L295,50 H500 L515,20 L540,90 L560,10 L580,70 L595,50 H800 L815,20 L840,90 L860,10 L880,70 L895,50 H1000" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 relative">
            <h4 className="inline-block px-4 py-1.5 rounded-full bg-teal-50/80 border border-teal-100 text-[#0d9488] font-bold text-xs uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
              Healthcare Solutions
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222] mb-6 tracking-tight">
              Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0d9488] drop-shadow-sm">Programs</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Our clinic focuses on complete wellness. We provide thorough diagnostic assessments and treatments across multiple branches of medicine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 perspective-container">
            {clinicServices.map((service, mIndex) => (
              <div 
                key={mIndex} 
                className="group relative rounded-[1.5rem] p-8 lg:p-10 glass-card shadow-[0_8px_30px_rgba(0,0,0,0.04)] card-3d-hover overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#14b8a6]/20 to-[#0d9488]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10 pop-out-3d">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-teal-50 shadow-md flex items-center justify-center border border-teal-100 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0d9488]">
                        0{mIndex + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-[#0d9488] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.items.map((item, iIndex) => (
                      <li 
                        key={iIndex} 
                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/60 hover:shadow-sm group/item cursor-default transition-all duration-300 transform hover:translate-x-2 animate-list-item"
                        style={{ animationDelay: `${(mIndex * 150) + (iIndex * 80)}ms` }}
                      >
                        <div className="mt-0.5 relative flex-shrink-0 w-6 h-6 flex items-center justify-center">
                          <div className="absolute inset-0 bg-[#14b8a6]/20 rounded-full scale-0 group-hover/item:scale-150 transition-transform duration-300 ease-out"></div>
                          <svg className="w-5 h-5 text-[#14b8a6] group-hover/item:text-[#0d9488] relative z-10 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" className="transform origin-center group-hover/item:translate-x-1 transition-transform duration-300" />
                          </svg>
                        </div>
                        <span className="text-gray-600 text-[15px] font-medium leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT INFORMATION */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden font-sans perspective-container">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: Contact Details */}
            <div className="lg:col-span-7 flex flex-col space-y-12">
              
              <div className="relative inline-flex">
                <div className="bg-[#0f766e] text-white px-8 py-4 rounded-r-xl shadow-lg relative z-10 flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-8 bg-[#f97316] rounded-full"></div>
                  <h2 className="text-3xl font-bold tracking-wide">Visit MM Clinic</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-container">
                
                {/* Location Box - 3D Hover */}
                <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-[0_10px_30px_rgba(13,148,136,0.05)] card-3d-hover">
                  <div className="pop-out-3d">
                    <h3 className="text-xl font-bold text-[#0d9488] mb-5 border-b border-gray-100 pb-3">
                      Location
                    </h3>
                    <div className="flex items-start gap-4">
                        <svg className="w-8 h-8 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p className="text-gray-700 leading-relaxed font-medium">
                          No.2, Kannadhasan Nagar, <br />
                          Nehru Bazzar, <br />
                          UTHUKOTTAI - 602026. <br />
                          <span className="text-sm text-gray-500 block mt-1">(Maharaja Jewellery Backside)</span>
                        </p>
                    </div>
                  </div>
                </div>

                {/* Contact Box - 3D Hover */}
                <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-[0_10px_30px_rgba(249,115,22,0.05)] card-3d-hover">
                  <div className="pop-out-3d">
                    <h3 className="text-xl font-bold text-[#f97316] mb-5 border-b border-gray-100 pb-3">
                      Get in Touch
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4">
                          <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                          </svg>
                          <a href="tel:+919444796479" className="text-gray-800 font-bold hover:text-teal-600 transition-colors">+91 94447 96479</a>
                        </li>
                        <li className="flex items-center gap-4">
                          <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                          <a href="mailto:drswami1981@gmail.com" className="text-gray-800 font-medium hover:text-teal-600 transition-colors">drswami1981@gmail.com</a>
                        </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Clinic Identity Graphic - 3D Hover & Float */}
            <div className="lg:col-span-5 relative h-full flex justify-center items-center mt-12 lg:mt-0 perspective-container">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-teal-400/30 to-orange-400/20 blur-[80px] rounded-full z-0"></div>
              
              <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 text-center animate-float-3d card-3d-hover flex flex-col items-center">
                 <div className="pop-out-3d w-full flex flex-col items-center">
                   <div className="w-24 h-24 rounded-full bg-teal-50 border-4 border-teal-100 flex items-center justify-center mb-6 shadow-inner">
                      <img src="/detail/caduceus-logo.png" alt="MM Clinic Logo" className="w-16 h-16 object-contain" onError={(e) => e.target.style.display = 'none'} />
                   </div>
                   <h2 className="text-3xl font-bold text-teal-800 mb-2">MM CLINIC</h2>
                   <p className="text-gray-500 mb-6">Healing with Care & Expertise</p>
                   <a href="tel:+919444796479" className="w-full block bg-orange-500 text-white py-3 rounded-lg font-bold shadow-[0_8px_20px_rgba(249,115,22,0.3)] hover:bg-orange-600 transition-colors">
                      Book an Appointment
                   </a>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;