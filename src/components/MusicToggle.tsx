import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with ambient Telangana folk-fusion style music
    // Using a royalty-free ambient Indian music URL
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.3;
    
    // Using a placeholder ambient music URL - in production, replace with actual Telangana folk-fusion track
    audio.src = 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_946ac2c4b1.mp3?filename=indian-ambient-118234.mp3';
    
    audio.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
    });

    audio.addEventListener('error', () => {
      console.log('Audio failed to load, using fallback');
      setIsLoaded(true);
    });

    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Audio playback error:', error);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className={`fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group ${
        isPlaying 
          ? 'bg-gold text-charcoal animate-pulse-glow' 
          : 'bg-charcoal-light border border-gold/30 text-gold hover:bg-gold hover:text-charcoal'
      }`}
      aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
      title={isPlaying ? 'Click to mute' : 'Play Telangana Folk-Fusion'}
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6" />
      ) : (
        <VolumeX className="w-6 h-6" />
      )}
      
      {/* Animated rings when playing */}
      {isPlaying && (
        <>
          <span className="absolute inset-0 rounded-full border-2 border-gold/30 animate-ping" />
          <span className="absolute inset-[-4px] rounded-full border border-gold/20 animate-pulse" />
        </>
      )}
      
      {/* Tooltip */}
      <span className="absolute left-full ml-3 px-3 py-1.5 bg-charcoal-light border border-gold/20 rounded text-xs text-gold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {isPlaying ? 'Playing • Click to mute' : 'Play ambient music'}
      </span>
    </button>
  );
};

export default MusicToggle;
