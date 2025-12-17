import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Find Us</p>
          <h2 className="section-title mb-6">Visit Ravoyi</h2>
          <div className="gold-divider max-w-md mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative rounded-xl overflow-hidden h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5547847775447!2d78.5241!3d17.3691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIyJzA4LjgiTiA3OMKwMzEnMjYuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
            <div className="absolute inset-0 pointer-events-none border border-gold/20 rounded-xl" />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="glass rounded-xl p-6 flex gap-4 group hover:border-gold/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg text-cream mb-2">Location</h3>
                <p className="font-body text-cream/70">
                  Second Floor, Above Highlander<br />
                  NTR Nagar, Kothapet<br />
                  Hyderabad, Telangana 500035
                </p>
                <a 
                  href="https://maps.google.com/?q=NTR+Nagar+Kothapet+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-gold text-sm hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="glass rounded-xl p-6 flex gap-4 group hover:border-gold/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg text-cream mb-2">Hours</h3>
                <div className="font-body text-cream/70 space-y-1">
                  <p><span className="text-cream/50">Lunch:</span> 12:00 PM - 3:30 PM</p>
                  <p><span className="text-cream/50">Dinner:</span> 7:00 PM - 11:00 PM</p>
                  <p className="text-gold text-sm mt-2">Open all days of the week</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass rounded-xl p-6 flex gap-4 group hover:border-gold/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg text-cream mb-2">Contact</h3>
                <p className="font-body text-cream/70 mb-2">
                  For reservations and inquiries
                </p>
                <a 
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 text-gold hover:underline"
                >
                  <span className="font-display text-xl">+91 98765 43210</span>
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919876543210"
                className="btn-gold rounded-lg flex-1 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a 
                href="https://maps.google.com/?q=NTR+Nagar+Kothapet+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terracotta rounded-lg flex-1 flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
