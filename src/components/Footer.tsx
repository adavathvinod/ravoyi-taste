const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-charcoal border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <defs>
                  <linearGradient id="footerPotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(40, 85%, 55%)" />
                    <stop offset="100%" stopColor="hsl(25, 90%, 50%)" />
                  </linearGradient>
                </defs>
                <path 
                  d="M12 18 Q8 18 8 24 Q8 36 24 42 Q40 36 40 24 Q40 18 36 18 L36 14 Q36 10 32 10 L16 10 Q12 10 12 14 Z"
                  fill="none"
                  stroke="url(#footerPotGradient)"
                  strokeWidth="1.5"
                />
                <ellipse cx="24" cy="10" rx="10" ry="3" fill="none" stroke="url(#footerPotGradient)" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="font-display text-xl text-gold-gradient tracking-wider">
              RAVOYI
            </span>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground text-center">
            © {currentYear} Ravoyi Virtual Kitchen. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <a href="#" className="font-body text-sm text-cream/60 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-cream/60 hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8">
          <p className="font-display text-xs tracking-[0.3em] text-gold/40 uppercase">
            Where Tradition Meets Luxury
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
