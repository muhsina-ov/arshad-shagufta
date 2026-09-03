import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface AudioPlayerHandle {
  startAudio: () => void;
  stopAudio: () => void;
}

export const AudioPlayer = forwardRef<AudioPlayerHandle>((_, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    // Use the 30-second trimmed m4a audio, with fallback
    audio.src = "/bgm.m4a";
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.6; // Keep music volume at 60% as requested

    // Enforce 30s cut loop limit
    const handleTimeUpdate = () => {
      if (audio.currentTime >= 30) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const startMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : 0.6;
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn("Audio play prevented or interrupted:", err);
      });
  };

  const stopMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  useImperativeHandle(ref, () => ({
    startAudio: () => {
      startMusic();
    },
    stopAudio: () => {
      stopMusic();
    },
  }));

  const togglePlay = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.muted = false;
      audioRef.current.volume = 0.6;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex items-center gap-1.5">
      <motion.button
        type="button"
        onClick={togglePlay}
        whileTap={{ scale: 0.94 }}
        whileHover={{ scale: 1.04 }}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className="group relative flex items-center gap-2.5 rounded-full border border-gold/40 bg-emerald-deep/85 px-4 py-2.5 shadow-[0_8px_25px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:border-gold hover:shadow-[0_0_20px_rgba(230,195,110,0.35)] cursor-pointer"
      >
        <span className="relative flex h-3.5 w-3.5 items-center justify-center">
          {isPlaying ? (
            <span className="flex items-end gap-[2px] h-3.5">
              <span
                className="w-[3px] bg-gold rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"
                style={{ height: "70%" }}
              />
              <span
                className="w-[3px] bg-gold rounded-full animate-[pulse_0.6s_ease-in-out_infinite_0.2s]"
                style={{ height: "100%" }}
              />
              <span
                className="w-[3px] bg-gold rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s]"
                style={{ height: "50%" }}
              />
            </span>
          ) : (
            <Music className="h-3.5 w-3.5 text-gold/80 group-hover:text-gold" />
          )}
        </span>

        <span className="text-[0.7rem] font-medium tracking-wider text-cream uppercase">
          {isPlaying ? "Music On" : "Play Music"}
        </span>
      </motion.button>

      <AnimatePresence>
        {isPlaying && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            type="button"
            onClick={toggleMute}
            whileTap={{ scale: 0.92 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-emerald-deep/85 text-gold shadow-[0_8px_25px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:border-gold hover:text-gold-soft cursor-pointer"
            title={isMuted ? "Unmute" : "Mute (60%)"}
          >
            {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
});

export default AudioPlayer;
