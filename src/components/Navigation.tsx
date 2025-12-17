import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Private Dining', href: '/private-dining' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12">
            {/* Earthen pot silhouette */}
            <svg viewBox="0 0 48 48" className="w-full h-full">
              <defs>
                <linearGradient id="potGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(40, 85%, 55%)" />
                  <stop offset="100%" stopColor="hsl(25, 90%, 50%)" />
                </linearGradient>
              </defs>
              <path 
                d="M12 18 Q8 18 8 24 Q8 36 24 42 Q40 36 40 24 Q40 18 36 18 L36 14 Q36 10 32 10 L16 10 Q12 10 12 14 Z"
                fill="none"
                stroke="url(#potGradient)"
                strokeWidth="1.5"
                className="transition-all duration-300 group-hover:stroke-[2]"
              />
              <ellipse cx="24" cy="10" rx="10" ry="3" fill="none" stroke="url(#potGradient)" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="font-display text-2xl font-medium text-gold-gradient tracking-wider">
            RAVOYI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-body text-sm tracking-[0.15em] uppercase transition-colors duration-300 relative group ${
                isActive(link.href) ? 'text-gold' : 'text-cream/80 hover:text-gold'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
          <Link to="/reservations" className="btn-gold rounded-sm ml-4">
            Book Table
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center text-gold"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 glass transition-all duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-body text-sm tracking-[0.15em] uppercase transition-colors py-2 ${
                isActive(link.href) ? 'text-gold' : 'text-cream/80 hover:text-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/reservations" 
            onClick={() => setMobileOpen(false)}
            className="btn-gold rounded-sm text-center mt-2"
          >
            Book Table
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
