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
        .perspective-container { perspective: 1200px; }
        .preserve-3d { transform-style: preserve-3d; }
        
        .card-3d-hover {
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s ease;
          transform-style: preserve-3d;
        }
        .card-3d-hover:hover {
          transform: rotateY(-4deg) rotateX(4deg) translateY(-8px);
          box-shadow: -15px 20px 40px rgba(13, 148, 136, 0.15);
        }

        .pop-out-3d {
          transform: translateZ(30px);
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .card-3d-hover:hover .pop-out-3d {
          transform: translateZ(50px);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
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
          background: rgba(255, 255, 255, 0.85);
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
      <section className="relative w-full pt-40 pb-32 overflow-hidden bg-gradient-to-br from-[#14b8a6] via-[#0d9488] to-[#0f766e] perspective-container">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 preserve-3d">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#f97316] opacity-20 blur-[120px] animate-blob transform translateZ(-100px)"></div>
          <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-white opacity-10 blur-[100px] animate-blob transform translateZ(-50px)" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center preserve-3d">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-semibold uppercase tracking-widest mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse"></span>
            Contact Us
          </div>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Get in <span className="text-[#f97316]">Touch</span>
          </h1>
          <p className={`max-w-2xl mx-auto text-lg md:text-xl text-teal-100 leading-relaxed drop-shadow-sm ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
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
      <section className="relative py-16 lg:py-24 perspective-container">
        {/* Hex Matrix Background */}
        <div className="absolute inset-0 z-0 bg-hex-matrix opacity-40"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#f4fbfb] via-transparent to-[#f4fbfb] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            
            {/* LEFT COLUMN: Contact Form (Takes up 7 columns on large screens) */}
            <div className="lg:col-span-7 flex flex-col">
              
              <div className={`relative glass-card p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-white overflow-hidden card-3d-hover ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#14b8a6] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#f97316] rounded-full blur-[80px] opacity-10 pointer-events-none"></div>

                <div className="pop-out-3d">
                  <h3 className="text-3xl font-bold text-[#0f766e] mb-2">Send a Message</h3>
                  <p className="text-gray-500 mb-8">We will get back to you as soon as possible.</p>

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
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Details & Map (Takes up 5 columns) */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              
              {/* Contact Information Cards */}
              <div className={`grid grid-cols-1 gap-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                
                {/* Location Card */}
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-teal-100 shadow-[0_10px_30px_rgba(13,148,136,0.06)] card-3d-hover">
                  <div className="flex items-start gap-5 pop-out-3d">
                    <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 shadow-inner">
                      <svg className="w-7 h-7 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Clinic Address</h4>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        No.2, Kannadhasan Nagar,<br />
                        Nehru Bazzar, UTHUKOTTAI - 602026.<br />
                        <span className="text-sm text-gray-400 block mt-1">(Maharaja Jewellery Backside)</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Card */}
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-orange-100 shadow-[0_10px_30px_rgba(249,115,22,0.06)] card-3d-hover">
                  <div className="flex flex-col space-y-5 pop-out-3d">
                    
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 shadow-inner">
                        <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Phone</p>
                        <a href="tel:+919444796479" className="text-gray-800 font-bold text-lg hover:text-[#f97316] transition-colors">+91 94447 96479</a>
                      </div>
                    </div>

                    <div className="w-full h-px bg-gray-100"></div>

                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 shadow-inner">
                        <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Email</p>
                        <a href="mailto:drswami1981@gmail.com" className="text-gray-800 font-bold hover:text-[#f97316] transition-colors">drswami1981@gmail.com</a>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* Map Component */}
              <div className={`relative w-full h-64 md:h-80 rounded-[2rem] overflow-hidden border-4 border-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] card-3d-hover bg-gray-200 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
                {/* Using an iframe for Google Maps. The query points roughly to Uthukottai, Tamil Nadu.
                  You can replace the src URL with the exact embed link from Google Maps for "MM Clinic".
                */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15530.13888371286!2d79.8884!3d13.3323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d6423c21a4fbd%3A0xc6c738e85c136f1c!2sUthukkottai%2C%20Tamil%20Nadu%20602026!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale-[20%] contrast-125 transition-all duration-500 hover:grayscale-0"
                ></iframe>
                
                {/* Custom Map Overlay Badge (Optional UI flare) */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 pointer-events-none pop-out-3d">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">MM Clinic</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;