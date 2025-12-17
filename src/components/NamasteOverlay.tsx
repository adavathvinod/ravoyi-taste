import { useState, useEffect } from 'react';

interface NamasteOverlayProps {
  onComplete: () => void;
}

const NamasteOverlay = ({ onComplete }: NamasteOverlayProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="namaste-overlay">
      <div className="text-center">
        {/* Telugu Namaskaram */}
        <h1 className="namaste-text animate-namaste">
          నమస్కారం
        </h1>
        <p className="mt-4 font-display text-lg tracking-[0.5em] text-gold/60 opacity-0 animate-fade-in delay-500">
          Welcome to Ravoyi
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-terracotta/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      </div>
    </div>
  );
};

export default NamasteOverlay;
