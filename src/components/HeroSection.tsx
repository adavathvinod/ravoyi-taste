import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import heroBiryani from '@/assets/hero-biryani.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x: x * 15, y: y * 15 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px) scale(1.1)`,
        }}
      >
        <img 
          src={heroBiryani}
          alt="Signature Chicken Kunda Biryani"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-gold/40 animate-float" />
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-terracotta/30 animate-float delay-200" />
        <div className="absolute bottom-40 left-20 w-2 h-2 rounded-full bg-gold/30 animate-float delay-300" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div 
          className="transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
        >
          <p className="section-subtitle mb-4 opacity-0 animate-fade-up">
            Authentic Telangana Cuisine
          </p>
          <h1 className="section-title text-5xl md:text-7xl lg:text-8xl mb-6 opacity-0 animate-fade-up delay-100">
            Where Tradition<br />
            <span className="text-gold">Meets Luxury</span>
          </h1>
          <p className="font-body text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up delay-200">
            Experience the soul of Telangana through our signature Kunda Biryani, 
            Gongura Mutton, and time-honored recipes passed down through generations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-300">
            <a href="#menu" className="btn-gold rounded-sm">
              Explore Menu
            </a>
            <a href="#reserve" className="btn-terracotta rounded-sm">
              Reserve Table
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
          <a 
            href="#menu" 
            className="flex flex-col items-center gap-2 text-gold/60 hover:text-gold transition-colors"
          >
            <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Side Decorative Lines */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        <span className="text-gold/40 text-xs tracking-[0.3em] uppercase rotate-90 origin-center whitespace-nowrap">
          Est. 2023
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
