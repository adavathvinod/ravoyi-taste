import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import SocialFloat from '@/components/SocialFloat';
import MusicToggle from '@/components/MusicToggle';
import Footer from '@/components/Footer';
import { Star, Quote, ThumbsUp, MapPin } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Priya Reddy',
    rating: 5,
    date: '2 weeks ago',
    text: 'The Chicken Kunda Biryani is absolutely divine! The flavors are authentic and remind me of my grandmother\'s cooking. The ambiance is perfect for family dinners.',
    source: 'Google',
  },
  {
    id: 2,
    name: 'Rahul Kumar',
    rating: 5,
    date: '1 month ago',
    text: 'Best Gongura Mutton in Hyderabad! The tangy flavor is perfectly balanced. Staff is courteous and the private dining room is great for celebrations.',
    source: 'Google',
  },
  {
    id: 3,
    name: 'Sameera Rao',
    rating: 4,
    date: '3 weeks ago',
    text: 'Loved the traditional Telangana dishes. The Ulavacharu Chicken Pulao was amazing. Slightly spicy but that\'s authentic! Will definitely come back.',
    source: 'Zomato',
  },
  {
    id: 4,
    name: 'Venkat Prasad',
    rating: 5,
    date: '1 week ago',
    text: 'A hidden gem in Kothapet! The Nalgonda Mutton Fry is a must-try. The earthen pot cooking really makes a difference in taste.',
    source: 'Google',
  },
  {
    id: 5,
    name: 'Lakshmi Devi',
    rating: 5,
    date: '2 months ago',
    text: 'Finally found a place that serves authentic Telangana food! The Mudda Pappu and Pacchi Pulusu combo took me back to my village. Highly recommended!',
    source: 'Google',
  },
  {
    id: 6,
    name: 'Arjun Sharma',
    rating: 4,
    date: '1 month ago',
    text: 'Great food and excellent service. The Ravoyi Chicken Fry is crispy and flavorful. Portions are generous. Only wish they had more vegetarian options.',
    source: 'Dineout',
  },
];

const ReviewsPage = () => {
  return (
    <>
      <Helmet>
        <title>Reviews | Ravoyi Virtual Kitchen - What Our Guests Say</title>
        <meta 
          name="description" 
          content="Read reviews from our guests about their dining experience at Ravoyi. 4.3 star rating with 500+ reviews." 
        />
      </Helmet>

      <main className="relative">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-dark">
          <div className="container mx-auto px-6 text-center">
            <p className="section-subtitle mb-4">Testimonials</p>
            <h1 className="section-title text-5xl md:text-6xl mb-8">Wall of Flavors</h1>
            
            {/* Rating Summary */}
            <div className="inline-flex items-center gap-6 glass rounded-full px-8 py-4">
              <div className="flex items-center gap-2">
                <Star className="w-8 h-8 text-gold fill-gold" />
                <span className="font-display text-4xl text-gold">4.3</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-left">
                <span className="block text-cream font-display text-lg">500+ Reviews</span>
                <span className="text-sm text-muted-foreground">on Google, Zomato & Dineout</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div 
                  key={review.id}
                  className="menu-card opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <Quote className="w-8 h-8 text-gold/30 mb-4" />
                  
                  <p className="font-body text-cream/80 mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-cream">{review.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < review.rating ? 'text-gold fill-gold' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">• {review.date}</span>
                      </div>
                    </div>
                    <span className="text-xs text-gold/60 px-2 py-1 bg-gold/10 rounded">
                      {review.source}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">Enjoyed your meal? Share your experience!</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://g.page/r/ravoyi/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-gold rounded-sm flex items-center gap-2"
                >
                  <ThumbsUp className="w-4 h-4" />
                  Write a Review
                </a>
                <a 
                  href="/reservations"
                  className="btn-terracotta rounded-sm flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Reserve Table
                </a>
              </div>
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

export default ReviewsPage;
