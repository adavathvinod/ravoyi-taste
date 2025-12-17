import { useState } from 'react';
import { Calendar, Clock, Users, ChefHat, Check } from 'lucide-react';
import { toast } from 'sonner';

interface ReservationSectionProps {
  showHeader?: boolean;
}

const ReservationSection = ({ showHeader = true }: ReservationSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    spicePreference: 'medium',
    specialRequests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Reservation Request Submitted!', {
      description: 'We will confirm your booking shortly via phone.',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
  ];

  return (
    <section id="reserve" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-terracotta/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        {showHeader && (
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Table Reservations</p>
            <h2 className="section-title mb-6">Reserve Your Table</h2>
            <p className="font-body text-cream/60 max-w-xl mx-auto">
              Skip the wait and secure your dining experience. Pre-book your table 
              and let us know your spice preferences for a personalized meal.
            </p>
            <div className="gold-divider max-w-md mx-auto mt-6" />
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="glass rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block font-display text-sm text-cream/80 mb-2 tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-body text-cream placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-display text-sm text-cream/80 mb-2 tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-body text-cream placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-display text-sm text-cream/80 mb-2 tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-body text-cream placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="block font-display text-sm text-cream/80 mb-2 tracking-wider">
                  <Users className="inline w-4 h-4 mr-2" />
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-body text-cream focus:border-gold focus:outline-none transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block font-display text-sm text-cream/80 mb-2 tracking-wider">
                  <Calendar className="inline w-4 h-4 mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-body text-cream focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block font-display text-sm text-cream/80 mb-2 tracking-wider">
                  <Clock className="inline w-4 h-4 mr-2" />
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-body text-cream focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="">Select time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              {/* Spice Preference */}
              <div className="md:col-span-2">
                <label className="block font-display text-sm text-cream/80 mb-3 tracking-wider">
                  <ChefHat className="inline w-4 h-4 mr-2" />
                  Spice Preference for the Chef
                </label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'mild', label: 'Mild', color: 'bg-spice-mild' },
                    { id: 'medium', label: 'Medium', color: 'bg-spice-medium' },
                    { id: 'hot', label: 'Hot', color: 'bg-spice-hot' },
                    { id: 'fire', label: 'Extra Hot 🔥', color: 'bg-spice-fire' },
                  ].map((option) => (
                    <label 
                      key={option.id}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all ${
                        formData.spicePreference === option.id 
                          ? 'bg-gold/20 border-gold' 
                          : 'bg-secondary/50 border-border hover:border-gold/50'
                      } border`}
                    >
                      <input
                        type="radio"
                        name="spicePreference"
                        value={option.id}
                        checked={formData.spicePreference === option.id}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className={`w-3 h-3 rounded-full ${option.color}`} />
                      <span className="font-body text-sm text-cream">{option.label}</span>
                      {formData.spicePreference === option.id && (
                        <Check className="w-4 h-4 text-gold" />
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div className="md:col-span-2">
                <label className="block font-display text-sm text-cream/80 mb-2 tracking-wider">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-body text-cream placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Any dietary restrictions, celebration, or special arrangements..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button type="submit" className="btn-gold rounded-lg w-full md:w-auto md:px-16">
                Confirm Reservation
              </button>
              <p className="mt-4 text-sm text-muted-foreground">
                We'll call you within 30 minutes to confirm your booking
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
