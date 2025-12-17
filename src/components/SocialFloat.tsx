import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const SocialFloat = () => {
  const socials = [
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/919876543210?text=Hello! I would like to make a reservation at Ravoyi.',
      label: 'WhatsApp',
      color: 'hover:bg-green-500'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/ravoyi',
      label: 'Instagram',
      color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500'
    },
    { 
      icon: Facebook, 
      href: 'https://facebook.com/ravoyi',
      label: 'Facebook',
      color: 'hover:bg-blue-600'
    },
  ];

  return (
    <div className="social-float">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          aria-label={social.label}
          title={social.label}
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialFloat;
