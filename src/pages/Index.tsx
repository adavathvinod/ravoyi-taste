import { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import NamasteOverlay from '@/components/NamasteOverlay';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import ReservationSection from '@/components/ReservationSection';
import ContactSection from '@/components/ContactSection';
import SocialFloat from '@/components/SocialFloat';
import Footer from '@/components/Footer';

const Index = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleOverlayComplete = useCallback(() => {
    setShowOverlay(false);
  }, []);

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
        
        {/* Open Graph */}
        <meta property="og:title" content="Ravoyi Virtual Kitchen | Authentic Telangana Cuisine" />
        <meta property="og:description" content="Where tradition meets luxury. Experience the soul of Telangana through our signature dishes." />
        <meta property="og:type" content="restaurant" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Ravoyi Virtual Kitchen",
            "image": "/hero-biryani.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Second Floor, Above Highlander, NTR Nagar",
              "addressLocality": "Kothapet",
              "addressRegion": "Telangana",
              "postalCode": "500035",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 17.3691,
              "longitude": 78.5241
            },
            "telephone": "+91-9876543210",
            "servesCuisine": "Telangana, Indian",
            "priceRange": "₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.3",
              "reviewCount": "500"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "12:00",
                "closes": "15:30"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "19:00",
                "closes": "23:00"
              }
            ]
          })}
        </script>
      </Helmet>

      <main className="relative">
        {/* Namaste Welcome Overlay */}
        {showOverlay && <NamasteOverlay onComplete={handleOverlayComplete} />}
        
        {/* Navigation */}
        <Navigation />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Menu Section */}
        <MenuSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Reservation Section */}
        <ReservationSection />
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Footer */}
        <Footer />
        
        {/* Floating Social Buttons */}
        <SocialFloat />
      </main>
    </>
  );
};

export default Index;
