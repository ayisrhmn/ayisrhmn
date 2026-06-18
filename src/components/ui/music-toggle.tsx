"use client";

import { Button } from "@/components/ui/button";
import { SpeakerHighIcon, SpeakerSlashIcon } from "@phosphor-icons/react";
import * as React from "react";

const MUSIC_SRC = "/music/bakamitai_8bit_remix.mp3";

export function MusicToggle() {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const userPausedRef = React.useRef(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [preloaderFinished, setPreloaderFinished] = React.useState(false);

  // 1. Initialize audio object and listen to preloader completion
  React.useEffect(() => {
    const audio = new Audio(MUSIC_SRC);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.5;
    audioRef.current = audio;

    const handlePreloaderComplete = () => {
      setPreloaderFinished(true);
    };

    window.addEventListener("portfolio-preloader-complete", handlePreloaderComplete);

    // If preloader has already finished when component mounts/remounts
    if (
      typeof window !== "undefined" &&
      (window as Window & { __preloaderComplete?: boolean }).__preloaderComplete
    ) {
      setPreloaderFinished(true);
    }

    return () => {
      window.removeEventListener("portfolio-preloader-complete", handlePreloaderComplete);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // 2. Manage music play/pause interactions once preloader has completed
  React.useEffect(() => {
    if (!preloaderFinished) return;

    const audio = audioRef.current;
    if (!audio) return;

    const attemptPlay = async () => {
      if (userPausedRef.current) return;
      if (!audio.paused) {
        setIsPlaying(true);
        removeInteractionListeners();
        return;
      }
      try {
        await audio.play();
        setIsPlaying(true);
        removeInteractionListeners();
      } catch (err) {
        console.warn("Autoplay blocked, waiting for user interaction:", err);
        setIsPlaying(false);
      }
    };

    const handleInteraction = (e: Event) => {
      // If user interacted with the toggle button, let toggleMusic handle it directly
      // to avoid double triggering (which would play then immediately pause).
      if (e.type === "click" || e.type === "pointerdown" || e.type === "touchstart") {
        const target = e.target as HTMLElement;
        if (target && target.closest(".music-toggle-btn")) {
          return;
        }
      }
      attemptPlay();
    };

    const addInteractionListeners = () => {
      window.addEventListener("pointerdown", handleInteraction, { capture: true });
      window.addEventListener("click", handleInteraction, { capture: true });
      window.addEventListener("keydown", handleInteraction);
      window.addEventListener("touchstart", handleInteraction, { capture: true });
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("pointerdown", handleInteraction, { capture: true });
      window.removeEventListener("click", handleInteraction, { capture: true });
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction, { capture: true });
    };

    // Attempt to play immediately (browser might allow if user clicked inside preloader)
    attemptPlay();

    // If audio is not yet playing, listen for user interactions to start it
    if (audio.paused) {
      addInteractionListeners();
    }

    return () => {
      removeInteractionListeners();
    };
  }, [preloaderFinished]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        userPausedRef.current = false;
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Failed to play audio on button click:", err);
        setIsPlaying(false);
      }
    } else {
      userPausedRef.current = true;
      audio.pause();
      setIsPlaying(false);
    }
  };

  const Icon = isPlaying ? SpeakerHighIcon : SpeakerSlashIcon;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleMusic}
      className="music-toggle-btn fixed right-4 bottom-4 z-50 h-10 w-10 border-border bg-card md:right-6 md:bottom-6"
      aria-label={isPlaying ? "Pause music" : "Play music"}
      aria-pressed={isPlaying}
    >
      <Icon className="h-5 w-5" />
    </Button>
  );
}
