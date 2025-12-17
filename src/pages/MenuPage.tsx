import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import MenuSection from '@/components/MenuSection';
import SocialFloat from '@/components/SocialFloat';
import MusicToggle from '@/components/MusicToggle';
import Footer from '@/components/Footer';

const MenuPage = () => {
  return (
    <>
      <Helmet>
        <title>Menu | Ravoyi Virtual Kitchen - Authentic Telangana Cuisine</title>
        <meta 
          name="description" 
          content="Explore our authentic Telangana menu featuring Kunda Biryani, Gongura Mutton, traditional soups, starters, and more. View spice levels for each dish." 
        />
      </Helmet>

      <main className="relative">
        <Navigation />
        
        {/* Hero Banner */}
        <section className="pt-32 pb-16 bg-gradient-dark">
          <div className="container mx-auto px-6 text-center">
            <p className="section-subtitle mb-4">The Digital Kitchen</p>
            <h1 className="section-title text-5xl md:text-6xl">Our Menu</h1>
          </div>
        </section>
        
        <MenuSection showHeader={false} />
        <Footer />
        <SocialFloat />
        <MusicToggle />
      </main>
    </>
  );
};

export default MenuPage;
