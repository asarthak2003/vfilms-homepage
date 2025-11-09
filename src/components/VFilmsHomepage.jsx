import React, { useState } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Check, AlertCircle } from 'lucide-react';

const VFilmsHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: 'Film Production',
      description: 'Filmmaking is a chance to live many lifetimes.',
      image: 'https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=400&h=500&fit=crop',
      details: ['Documentaries', 'Corporate Videos', 'Short Films', 'Promotional Films']
    },
    {
      title: 'Branding',
      description: 'A brand is a voice, and a product is a souvenir.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop',
      details: ['Market Mapping', 'Content Management', 'Digital Advertisement', 'Rebranding']
    },
    {
      title: 'Art Curation',
      description: 'V take art where it belongs, to the people.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=500&fit=crop',
      details: ['Live Performances', 'Community Events', 'Exhibition Curation', 'Art Workshops']
    }
  ];

  const portfolioImages = [
    'https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1574267432644-f9495e8ebf08?w=800&h=600&fit=crop'
  ];

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[0-9]{10}$/.test(phone.replace(/[\s-]/g, ''));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
    setSubmitError('');
  };

  const handleSubmit = async () => {
    // Reset states
    setSubmitError('');
    setSubmitSuccess(false);

    // Validation
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Phone must be 10 digits';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError(data.message || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-orange-50 font-serif">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-orange-600">V</span>
              <span className="text-2xl font-bold text-gray-800">Films</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition">Their Stories</a>
              <a href="#portfolio" className="text-gray-700 hover:text-orange-600 transition">Our Story</a>
              <a href="#contact" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                Let's Talk
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-gray-700 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="block text-gray-700 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Their Stories</a>
              <a href="#portfolio" className="block text-gray-700 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Our Story</a>
              <a href="#contact" className="block bg-orange-500 text-white px-4 py-2 rounded-full text-center" onClick={() => setIsMenuOpen(false)}>
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-block p-6 bg-white rounded-lg shadow-lg mb-8 transform hover:scale-105 transition">
              <svg viewBox="0 0 200 200" className="w-32 h-32 mx-auto">
                <defs>
                  <pattern id="mandala" x="0" y="0" width="100%" height="100%">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#fb923c" strokeWidth="0.5" opacity="0.3"/>
                    <circle cx="100" cy="100" r="60" fill="none" stroke="#fb923c" strokeWidth="0.5" opacity="0.3"/>
                    <circle cx="100" cy="100" r="40" fill="none" stroke="#fb923c" strokeWidth="0.5" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#mandala)"/>
                <text x="70" y="115" fontSize="48" fontWeight="bold" fill="#ea580c">V</text>
                <text x="95" y="115" fontSize="36" fill="#1f2937">Films</text>
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-6 italic leading-tight">
            Varnan is where stories find<br />their voice and form
          </h1>
          
          <div className="flex justify-center items-center space-x-4 text-orange-600 text-xl">
            <span className="hover:scale-110 transition cursor-pointer">Films</span>
            <span className="text-gray-400">.</span>
            <span className="hover:scale-110 transition cursor-pointer">Brands</span>
            <span className="text-gray-400">.</span>
            <span className="hover:scale-110 transition cursor-pointer">Art</span>
          </div>

          <p className="mt-8 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Since 2009, V've been telling stories - stories of people, their journeys, and the places that shape them. 
            Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by 
            listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
            V doesn't just tell stories - V honors them.
          </p>
        </div>
      </section>

      {/* About Team Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 bg-orange-100 p-12 rounded-lg">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-24 h-32 bg-orange-200 rounded-lg opacity-50"></div>
                <p className="text-lg text-gray-700 italic leading-relaxed relative z-10 bg-yellow-100 p-6 rounded shadow-md transform -rotate-2">
                  Some craft films. Some build brands. Some curate art. We bring it all together - a collective of 
                  storytellers driven by one belief: every project deserves to be more than just a message; it should become a masterpiece.
                  <br/><br/>
                  From first spark to final frame, from raw ideas to timeless visuals - we shape stories that stay with you.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-light italic text-gray-800 mb-8">Film Makers</h2>
              <div className="flex justify-center gap-8 mb-12">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-16 h-24 bg-gray-800 rounded-t-full"></div>
                ))}
              </div>
              <h3 className="text-xl italic text-center text-gray-600 mb-4">Branding Experts</h3>
              <h3 className="text-xl italic text-center text-gray-600">Art Curators</h3>
              <p className="text-center text-gray-700 mt-8 text-lg">
                Take a closer look at the stories V bring to life.
              </p>
              <div className="text-center mt-6">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-800 mb-4">A montage of familiar faces and names.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Some stories come from the biggest names. Others begin with bold, rising voices. 
              We've been fortunate to walk alongside both - listening, creating, and building stories that matter.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="bg-yellow-100 p-8 rounded-lg shadow-md transform -rotate-2 hover:rotate-0 transition">
              <div className="text-4xl font-bold text-gray-800">85+</div>
              <div className="text-orange-600 mt-2">Projects</div>
            </div>
            <div className="bg-yellow-100 p-8 rounded-lg shadow-md transform rotate-1 hover:rotate-0 transition">
              <div className="text-4xl font-bold text-gray-800">50+</div>
              <div className="text-orange-600 mt-2">Happy Clients</div>
            </div>
            <div className="bg-yellow-100 p-8 rounded-lg shadow-md transform -rotate-1 hover:rotate-0 transition">
              <div className="text-4xl font-bold text-gray-800">10+</div>
              <div className="text-orange-600 mt-2">Experts Team</div>
            </div>
          </div>

          <div className="bg-white/70 p-8 rounded-lg border-2 border-gray-800 max-w-3xl mx-auto">
            <p className="text-xl italic text-gray-700 leading-relaxed">
              Every project is more than just a brief - it's a new chapter waiting to be written. 
              Together, we've crafted tales that inspire, connect, and endure.
            </p>
          </div>

          <div className="mt-12 flex justify-center items-center gap-12 flex-wrap opacity-60">
            <span className="text-3xl font-bold text-orange-500">Coca Cola</span>
            <span className="text-3xl font-bold text-red-600">TED</span>
            <span className="text-3xl font-bold text-orange-600">AMIGO</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-800 mb-4">The storyboard reveals the breadth of our craft.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white p-4 rounded-lg shadow-lg transform hover:-translate-y-2 transition">
                  <div className="aspect-[3/4] overflow-hidden rounded">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  </div>
                </div>
                <div className="mt-4 bg-orange-50 p-6 rounded-lg">
                  <p className="text-gray-700 italic mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-4">The Highlight Reel</h2>
            <p className="text-gray-600">Watch the magic we've captured.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-800 p-4 rounded-lg shadow-2xl">
              <div className="relative aspect-video bg-gray-900 rounded overflow-hidden">
                <img 
                  src={portfolioImages[currentSlide]}
                  alt={`Portfolio ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <button 
                  onClick={prevSlide}
                  className="p-2 hover:bg-gray-700 rounded-full transition"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="text-white" size={24} />
                </button>
                <div className="flex gap-2">
                  {portfolioImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2 h-2 rounded-full transition ${
                        idx === currentSlide ? 'bg-white' : 'bg-gray-600'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextSlide}
                  className="p-2 hover:bg-gray-700 rounded-full transition"
                  aria-label="Next slide"
                >
                  <ChevronRight className="text-white" size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-20">
          <svg viewBox="0 0 200 200">
            {[...Array(6)].map((_, i) => (
              <circle 
                key={i}
                cx="100" 
                cy="100" 
                r={30 + i * 15} 
                fill="none" 
                stroke="#fb923c" 
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>
        
        <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
          <svg viewBox="0 0 200 200">
            {[...Array(6)].map((_, i) => (
              <circle 
                key={i}
                cx="100" 
                cy="100" 
                r={30 + i * 15} 
                fill="none" 
                stroke="#fb923c" 
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-800 mb-4">Join the Story</h2>
              <p className="text-gray-600 mb-8">Ready to bring your vision to life? Let's talk.</p>
              
              <div className="space-y-4 text-gray-700">
                <p>Whether you have an idea, a question, or simply want to explore how V can work together, V're just a message away.</p>
                <p className="font-semibold">Let's catch up over coffee.</p>
                <p>Great stories always begin with a good conversation.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl">
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2">
                  <Check size={20} />
                  <span className="font-semibold">Form Submitted Successfully!</span>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-2">
                  <AlertCircle size={20} />
                  <span className="font-semibold">{submitError}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name*"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      formErrors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email*"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone (10 digits)*"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      formErrors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message*"
                    rows="4"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-1 mb-4">
            <span className="text-2xl font-bold text-orange-500">V</span>
            <span className="text-2xl font-bold">Films</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 VFilms. Where stories find their voice and form.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VFilmsHomepage;