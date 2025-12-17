import biryaniPot from '@/assets/biryani-pot.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-terracotta/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden">
              <img 
                src={biryaniPot}
                alt="Traditional Kunda Biryani preparation"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            </div>
            
            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 rounded-lg -z-10" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-terracotta/30 rounded-lg -z-10" />
            
            {/* Stats Card */}
            <div className="absolute bottom-8 left-8 right-8 glass rounded-lg p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <span className="block font-display text-3xl text-gold">4.3</span>
                  <span className="text-xs text-cream/60 tracking-wider">RATING</span>
                </div>
                <div>
                  <span className="block font-display text-3xl text-gold">500+</span>
                  <span className="text-xs text-cream/60 tracking-wider">REVIEWS</span>
                </div>
                <div>
                  <span className="block font-display text-3xl text-gold">50+</span>
                  <span className="text-xs text-cream/60 tracking-wider">DISHES</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="section-subtitle mb-4">Our Story</p>
            <h2 className="section-title mb-8">
              The Heart of<br />Telangana
            </h2>
            
            <div className="space-y-6 font-body text-cream/70 leading-relaxed">
              <p>
                At Ravoyi, we believe food is more than sustenance—it's a story, 
                a tradition, a celebration of culture passed down through generations. 
                Our kitchen is where the soul of Telangana comes alive.
              </p>
              <p>
                Every dish we serve carries the essence of our heritage. From the 
                smoky depths of our signature <span className="text-gold">Kunda Biryani</span>, 
                slow-cooked in traditional earthen pots, to the tangy embrace of 
                <span className="text-gold"> Gongura Mutton</span>—each bite is a 
                journey through the rich culinary landscape of our land.
              </p>
              <p>
                Our chefs, trained in the ancient art of Telangana cooking, use 
                only the finest ingredients and time-honored techniques to bring 
                you an experience that's both authentic and unforgettable.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { title: 'Traditional Kunda', desc: 'Earthen pot cooking' },
                { title: 'Family Recipes', desc: 'Generations of taste' },
                { title: 'Local Sourcing', desc: 'Fresh ingredients' },
                { title: 'Handcrafted Spices', desc: 'Authentic blends' },
              ].map((feature) => (
                <div key={feature.title} className="border-l-2 border-gold/30 pl-4">
                  <h4 className="font-display text-cream text-lg">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
