// client/src/pages/ContactSection.jsx
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to backend or WhatsApp)
    const whatsappUrl = `https://wa.me/918982836220?text=Name: ${formData.name}%0aPhone: ${formData.phone}%0aMessage: ${formData.message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="md:py-10 py-4 bg-black text-white text-sm md:text-2xl">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have questions about booking or tournaments? Reach out to us directly or drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-8">
            
            {/* Info Cards */}
            <div className="grid gap-6">
              <a href="tel:+918982836220" className="flex items-start gap-4 md:p-6 p-3 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500 transition group">
                <div className="bg-zinc-800 p-3 rounded-full text-white group-hover:bg-green-500 group-hover:text-black transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Phone / WhatsApp</h3>
                  <p className="text-gray-400 mt-1">+91 89828 36220</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500 transition group">
                <div className="bg-zinc-800 p-3 rounded-full text-white group-hover:bg-green-500 group-hover:text-black transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Location</h3>
                  <p className="text-gray-400 mt-1">
                    Near City Stadium, Sports Complex Area,<br />
                    Indore, Madhya Pradesh
                  </p>
                </div>
              </div>
            </div>

            {/* Map Embed (Grayscale filter for style) */}
            <div className="w-full h-64 rounded-3xl overflow-hidden border border-zinc-800 grayscale hover:grayscale-0 transition duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.086932403612!2d75.8577258153375!3d22.72442498510488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0b6fc0d55b%3A0xbf174786d3996767!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1675240000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-zinc-900/30 p-6 rounded-[40px] border border-zinc-800">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-black border border-zinc-700 rounded-2xl text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 bg-black border border-zinc-700 rounded-2xl text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition"
                  placeholder="+91 99999 99999"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-4 bg-black border border-zinc-700 rounded-2xl text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition resize-none"
                  placeholder="I want to book a slot for..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-green-500 text-black font-bold py-4 rounded-2xl hover:bg-green-400 transition transform active:scale-[0.98] mt-2"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;