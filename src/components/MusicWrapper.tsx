"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function MusicWrapper({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = () => {
      if (audio) {
        audio.volume = 0.2;
        audio.play().catch((err) => {
          console.warn("Autoplay blocked by browser:", err);
        });
      }
    };

    const pauseAudio = () => {
      if (audio) {
        audio.pause();
      }
    };

    if (pathname === "/home" || pathname === "/benefits") {
      playAudio();
    } else {
      pauseAudio();
    }

    const handleInteraction = () => {
      if (pathname === "/home" || pathname === "/benefits") {
        playAudio();
      }
      document.removeEventListener("click", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
    };
  }, [pathname]);

  return (
    <>
      <audio ref={audioRef} src="/background2.mp3" loop autoPlay />
      {children}
    </>
  );
}
