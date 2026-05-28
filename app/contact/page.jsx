"use client";

import React, { useState, useEffect } from "react";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formState);
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

        .input-field {
          width: 100%;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(13, 148, 136, 0.2);
          border-radius: 0.75rem;
          padding: 1rem 1.25rem;
          font-size: 1rem;
          color: #333;
          transition: all 0.3s ease;
        }
        .input-field:focus {
          outline: none;
          border-color: #0d9488;
          box-shadow: 0 0 0 4px rgba(13, 148, 136, 0.1);
          background: #ffffff;
        }

        /* Tech Hex Background - Updated to Teal */
        @keyframes hexPan {
          from { background-position: 0 0; }
          to { background-position: 100px 173.2px; }
        }
        .bg-hex-matrix {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='103.92304845413263' viewBox='0 0 60 103.92304845413263' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230d9488' fill-opacity='0.03'%3E%3Cpolygon points='30 103.92304845413263 0 86.60254037844386 0 51.96152422706631 30 34.64101615137754 60 51.96152422706631 60 86.60254037844386'/%3E%3Cpolygon points='30 51.96152422706631 0 34.64101615137754 0 0 30 -17.32050807568877 60 0 60 34.64101615137754'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          animation: hexPan 20s linear infinite;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative w-full pt-40 pb-32 overflow-hidden bg-gradient-to-br from-[#14b8a6] via-[#0d9488] to-[#0f766e]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#f97316] opacity-20 blur-[120px] animate-blob"></div>
          <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-white opacity-10 blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-semibold uppercase tracking-widest mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse"></span>
            Contact Us
          </div>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Get in <span className="text-[#f97316]">Touch</span>
          </h1>
          <p className={`max-w-2xl mx-auto text-lg md:text-xl text-teal-100 leading-relaxed ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Whether you need to book an appointment, have a medical inquiry, or need directions to the clinic, our team is ready to assist you.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
          <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 L1200,120 L1200,0 C900,100 400,0 0,100 Z" className="fill-[#f4fbfb]"></path>
          </svg>
        </div>
      </section>

      {/* CONTACT CONTENT SECTION */}
      <section className="relative py-20 lg:py-24">
        {/* Hex Matrix Background */}
        <div className="absolute inset-0 z-0 bg-hex-matrix opacity-50"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#f4fbfb] via-transparent to-[#f4fbfb] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* LEFT COLUMN: Contact Form & Info Cards */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              
              {/* Form Component */}
              <div className={`relative glass-card p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white overflow-hidden ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                {/* Decorative background flare */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#14b8a6] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

                <h3 className="text-2xl font-bold text-[#0f766e] mb-8">Send us a Message</h3>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe" 
                        className="input-field"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com" 
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?" 
                      className="input-field"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                    <textarea 
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows="5" 
                      placeholder="Tell us about your medical inquiry or appointment request..." 
                      className="input-field resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white px-8 py-4 rounded-xl font-bold text-[16px] uppercase tracking-wider shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] transition-all duration-300 mt-4 group"
                  >
                    Send Message
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Get in Touch Component (From User Snippet) */}
              <div className={`bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-orange-100 shadow-[0_10px_30px_rgba(249,115,22,0.05)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.1)] transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
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

            {/* RIGHT COLUMN: MM Clinic Info Component (From User Snippet) */}
            <div className={`lg:col-span-5 relative h-full flex justify-center items-center mt-12 lg:mt-0 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-teal-400/30 to-orange-400/20 blur-[80px] rounded-full animate-pulse-soft z-0"></div>
              
              <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 text-center animate-float flex flex-col items-center">
                 <div className="w-24 h-24 rounded-full bg-teal-50 border-4 border-teal-100 flex items-center justify-center mb-6">
                    <img src="/detail/caduceus-logo.png" alt="MM Clinic Logo" className="w-16 h-16 object-contain" onError={(e) => e.target.style.display = 'none'} />
                    <svg className="w-12 h-12 text-orange-500 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                    </svg>
                 </div>
                 <h2 className="text-3xl font-bold text-teal-800 mb-2">MM CLINIC</h2>
                 <p className="text-gray-500 mb-6">Healing with Care & Expertise</p>
                 <a href="tel:+919444796479" className="w-full block bg-orange-500 text-white py-3 rounded-lg font-bold shadow-md hover:bg-orange-600 transition-colors">
                    Book an Appointment
                 </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;