import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import ReservationSection from '@/components/ReservationSection';
import SocialFloat from '@/components/SocialFloat';
import MusicToggle from '@/components/MusicToggle';
import Footer from '@/components/Footer';

const ReservationsPage = () => {
  return (
    <>
      <Helmet>
        <title>Reserve a Table | Ravoyi Virtual Kitchen - Book Online</title>
        <meta 
          name="description" 
          content="Book your table at Ravoyi Virtual Kitchen. Select your preferred date, time, and spice level. Pre-order to skip the wait." 
        />
      </Helmet>

      <main className="relative">
        <Navigation />
        
        {/* Hero Banner */}
        <section className="pt-32 pb-8 bg-gradient-dark">
          <div className="container mx-auto px-6 text-center">
            <p className="section-subtitle mb-4">Table Reservations</p>
            <h1 className="section-title text-5xl md:text-6xl">Book Your Table</h1>
          </div>
        </section>
        
        <ReservationSection showHeader={false} />
        <Footer />
        <SocialFloat />
        <MusicToggle />
      </main>
    </>
  );
};

export default ReservationsPage;
