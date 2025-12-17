import { useState } from 'react';
import SpiceMeter from './SpiceMeter';
import gonguraMutton from '@/assets/gongura-mutton.jpg';
import heroBiryani from '@/assets/hero-biryani.jpg';

type Category = 'all' | 'soups' | 'starters' | 'mains' | 'biryani';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  spiceLevel: 1 | 2 | 3 | 4;
  isVeg: boolean;
  image?: string;
  isSignature?: boolean;
}

const menuItems: MenuItem[] = [
  // Soups
  { id: 1, name: 'Munakaya Shorba', description: 'Traditional drumstick soup with aromatic spices', price: 189, category: 'soups', spiceLevel: 1, isVeg: true },
  { id: 2, name: 'Kodi Shorba', description: 'Spiced chicken broth with herbs', price: 219, category: 'soups', spiceLevel: 2, isVeg: false },
  { id: 3, name: 'Mutton Marag', description: 'Rich mutton bone broth, Hyderabadi style', price: 249, category: 'soups', spiceLevel: 2, isVeg: false },
  
  // Veg Starters
  { id: 4, name: 'Makka Butta Garelu', description: 'Crispy corn fritters with tomato thokku', price: 349, category: 'starters', spiceLevel: 2, isVeg: true },
  { id: 5, name: 'Paneer Ghee Karam Taco', description: 'Desi taco with spiced paneer', price: 399, category: 'starters', spiceLevel: 3, isVeg: true },
  { id: 6, name: 'Chilli Cheese Punugulu', description: 'Cheesy rice dumplings with green chilli', price: 279, category: 'starters', spiceLevel: 3, isVeg: true },
  
  // Non-Veg Starters
  { id: 7, name: 'Ravoyi Chicken Fry', description: 'Our signature crispy fried chicken', price: 379, category: 'starters', spiceLevel: 3, isVeg: false, isSignature: true },
  { id: 8, name: 'Ulavacharu Chicken Lollipop', description: 'Tangy tamarind glazed chicken', price: 419, category: 'starters', spiceLevel: 3, isVeg: false },
  { id: 9, name: 'Nalgonda Mutton Fry', description: 'Spicy dry mutton from Nalgonda region', price: 529, category: 'starters', spiceLevel: 4, isVeg: false },
  { id: 10, name: 'Kheema Garijalu', description: 'Minced meat stuffed pastry', price: 399, category: 'starters', spiceLevel: 2, isVeg: false },
  
  // Mains
  { id: 11, name: 'Gongura Mamsam Pulao', description: 'Tangy sorrel leaves with tender mutton', price: 499, category: 'mains', spiceLevel: 4, isVeg: false, image: gonguraMutton, isSignature: true },
  { id: 12, name: 'Telangana Chicken Curry', description: 'With Ragi Mudda / Pesara Garelu', price: 429, category: 'mains', spiceLevel: 3, isVeg: false },
  { id: 13, name: 'Mudda Pappu Pacchi Pulusu', description: 'Traditional lentils with tamarind gravy', price: 349, category: 'mains', spiceLevel: 2, isVeg: true },
  { id: 14, name: 'Methi Kura Paneer', description: 'Fenugreek leaves with cottage cheese', price: 449, category: 'mains', spiceLevel: 2, isVeg: true },
  
  // Biryani
  { id: 15, name: 'Chicken Kunda Biryani', description: 'Signature slow-cooked in earthen pot', price: 449, category: 'biryani', spiceLevel: 3, isVeg: false, image: heroBiryani, isSignature: true },
  { id: 16, name: 'Mutton Kunda Biryani', description: 'Premium mutton in traditional kunda', price: 499, category: 'biryani', spiceLevel: 3, isVeg: false },
  { id: 17, name: 'Ulavacharu Chicken Pulao', description: 'Tamarind infused rice with chicken', price: 429, category: 'biryani', spiceLevel: 3, isVeg: false },
  { id: 18, name: 'Vegetable Kunda Biryani', description: 'Garden fresh vegetables in aromatic rice', price: 429, category: 'biryani', spiceLevel: 2, isVeg: true },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'soups', name: 'Soups' },
  { id: 'starters', name: 'Starters' },
  { id: 'mains', name: 'Main Course' },
  { id: 'biryani', name: 'Biryani & Pulao' },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">The Digital Kitchen</p>
          <h2 className="section-title mb-6">Our Menu</h2>
          <div className="gold-divider max-w-md mx-auto" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`px-6 py-2 rounded-full font-body text-sm tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold text-charcoal'
                  : 'bg-secondary text-cream/70 hover:bg-secondary/80 hover:text-cream'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="menu-card group opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
            >
              {/* Image (if available) */}
              {item.image && (
                <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  {item.isSignature && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-gold text-charcoal text-xs font-display tracking-wider rounded-sm">
                      Signature
                    </span>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {/* Veg/Non-veg indicator */}
                    <span className={`w-4 h-4 border-2 flex items-center justify-center ${
                      item.isVeg ? 'border-spice-mild' : 'border-spice-fire'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${
                        item.isVeg ? 'bg-spice-mild' : 'bg-spice-fire'
                      }`} />
                    </span>
                    <h3 className="font-display text-lg text-cream group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    {item.isSignature && !item.image && (
                      <span className="px-2 py-0.5 bg-gold/20 text-gold text-[10px] font-display tracking-wider rounded">
                        SIGNATURE
                      </span>
                    )}
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  <SpiceMeter level={item.spiceLevel} />
                </div>
                <div className="text-right">
                  <span className="font-display text-xl text-gold">₹{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <button className="btn-terracotta rounded-sm">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
