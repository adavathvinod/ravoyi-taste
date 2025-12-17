import { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import NamasteOverlay from '@/components/NamasteOverlay';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SocialFloat from '@/components/SocialFloat';
import MusicToggle from '@/components/MusicToggle';
import Footer from '@/components/Footer';
import { ChefHat, CalendarDays, Star, MapPin } from 'lucide-react';

const Index = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleOverlayComplete = useCallback(() => {
    setShowOverlay(false);
  }, []);

  const features = [
    {
      icon: ChefHat,
      title: 'Digital Kitchen',
      description: 'Explore our authentic Telangana cuisine menu',
      link: '/menu',
    },
    {
      icon: CalendarDays,
      title: 'Reserve Table',
      description: 'Book your table with spice preferences',
      link: '/reservations',
    },
    {
      icon: Star,
      title: 'Wall of Flavors',
      description: 'Read what our guests say about us',
      link: '/reviews',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Find us at NTR Nagar, Kothapet',
      link: '/contact',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ravoyi Virtual Kitchen | Authentic Telangana Cuisine in Hyderabad</title>
        <meta 
          name="description" 
          content="Experience authentic Telangana cuisine at Ravoyi. Signature Kunda Biryani, Gongura Mutton, and traditional recipes. Book your table at NTR Nagar, Kothapet." 
        />
        <meta name="keywords" content="Telangana food, Hyderabad restaurant, Kunda Biryani, Gongura Mutton, Indian restaurant, traditional cuisine" />
        <link rel="canonical" href="https://ravoyi.com" />
      </Helmet>

      <main className="relative">
        {showOverlay && <NamasteOverlay onComplete={handleOverlayComplete} />}
        <Navigation />
        <HeroSection />
        
        {/* Quick Links Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="section-subtitle mb-4">Discover Ravoyi</p>
              <h2 className="section-title">Experience Telangana</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Link
                  key={feature.title}
                  to={feature.link}
                  className="menu-card group text-center opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-xl text-cream mb-2 group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <SocialFloat />
        <MusicToggle />
      </main>
    </>
  );
};

export default Index;
