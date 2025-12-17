import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import SocialFloat from '@/components/SocialFloat';
import MusicToggle from '@/components/MusicToggle';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact & Location | Ravoyi Virtual Kitchen - NTR Nagar, Kothapet</title>
        <meta 
          name="description" 
          content="Find Ravoyi at Second Floor, Above Highlander, NTR Nagar, Kothapet, Hyderabad. Get directions, contact number, and opening hours." 
        />
      </Helmet>

      <main className="relative">
        <Navigation />
        
        {/* Hero Banner */}
        <section className="pt-32 pb-8 bg-gradient-dark">
          <div className="container mx-auto px-6 text-center">
            <p className="section-subtitle mb-4">Find Us</p>
            <h1 className="section-title text-5xl md:text-6xl">Contact & Location</h1>
          </div>
        </section>
        
        <ContactSection showHeader={false} />
        <Footer />
        <SocialFloat />
        <MusicToggle />
      </main>
    </>
  );
};

export default ContactPage;
