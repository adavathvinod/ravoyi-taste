import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import SocialFloat from '@/components/SocialFloat';
import MusicToggle from '@/components/MusicToggle';
import Footer from '@/components/Footer';
import { Users, Cake, Briefcase, Heart } from 'lucide-react';
import soupDish from '@/assets/soup-dish.jpg';

const PrivateDiningPage = () => {
  const occasions = [
    {
      icon: Cake,
      title: 'Birthday Celebrations',
      description: 'Make your special day unforgettable with our curated birthday menu and personalized service.',
    },
    {
      icon: Heart,
      title: 'Anniversary Dinners',
      description: 'Romantic ambiance with our signature dishes for your milestone celebrations.',
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Host business meetings and corporate gatherings with authentic Telangana hospitality.',
    },
    {
      icon: Users,
      title: 'Family Gatherings',
      description: 'Bring the whole family together for a traditional feast in our private space.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Private Dining & Events | Ravoyi Virtual Kitchen</title>
        <meta 
          name="description" 
          content="Host your special occasions at Ravoyi's private dining room. Perfect for birthdays, anniversaries, corporate events, and family gatherings." 
        />
      </Helmet>

      <main className="relative">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-dark relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-subtitle mb-4">Private Dining</p>
                <h1 className="section-title text-5xl md:text-6xl mb-6">
                  Exclusive<br />
                  <span className="text-gold">Experiences</span>
                </h1>
                <p className="font-body text-cream/70 text-lg leading-relaxed mb-8">
                  Step into our private dining room where tradition meets intimacy. 
                  Perfect for celebrations, corporate gatherings, or simply an exclusive 
                  dining experience with your loved ones.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/reservations" className="btn-gold rounded-sm">
                    Book Private Dining
                  </a>
                  <a href="tel:+919876543210" className="btn-terracotta rounded-sm">
                    Call to Inquire
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={soupDish}
                    alt="Private dining experience at Ravoyi"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-full h-full border border-gold/30 rounded-xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Occasions Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="section-subtitle mb-4">Perfect For</p>
              <h2 className="section-title">Special Occasions</h2>
              <div className="gold-divider max-w-md mx-auto mt-6" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {occasions.map((occasion, index) => (
                <div 
                  key={occasion.title}
                  className="menu-card text-center opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <occasion.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-xl text-cream mb-3">{occasion.title}</h3>
                  <p className="text-sm text-muted-foreground">{occasion.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { value: '20', label: 'Guests Capacity' },
                { value: 'Custom', label: 'Menu Options' },
                { value: '₹500', label: 'Per Person (Min)' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-8">
                  <span className="block font-display text-4xl text-gold mb-2">{stat.value}</span>
                  <span className="text-sm text-cream/60 tracking-wider uppercase">{stat.label}</span>
                </div>
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

export default PrivateDiningPage;
