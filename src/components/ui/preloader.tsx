"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Tick the loading percentage up to 100
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    setIsLoading(false);
    if (typeof window !== "undefined") {
      (window as Window & { __preloaderComplete?: boolean }).__preloaderComplete = true;
    }
    window.dispatchEvent(new Event("portfolio-preloader-complete"));
  };

  // Keyboard shortcut listener when loading is complete
  useEffect(() => {
    if (counter !== 100) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleStart();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [counter]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="pixel-grid fixed inset-0 z-9999 flex items-center justify-center bg-background px-4"
          exit={
            shouldReduceMotion
              ? { opacity: 0, transition: { duration: 0.1 } }
              : { y: "-100vh", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
          }
        >
          <div className="pixel-panel flex w-full max-w-md flex-col items-center gap-6 px-5 py-8 text-center">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              className="pixel-text text-3xl text-primary md:text-5xl"
            >
              {counter === 100 ? "READY" : `${counter}%`}
            </motion.div>

            <AnimatePresence mode="wait">
              {counter < 100 ? (
                <motion.div
                  key="loading-elements"
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center gap-6 w-full"
                >
                  <div className="pixel-runner" aria-hidden="true">
                    <div className="pixel-runner-sprite" />
                    <div className="pixel-runner-ground" />
                  </div>
                  <div className="grid w-full grid-cols-10 gap-1 border-[3px] border-border bg-muted p-1 shadow-[4px_4px_0_var(--pixel-shadow)]">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <div
                        key={index}
                        className={`h-5 border-2 border-border ${
                          counter >= (index + 1) * 10 ? "bg-primary" : "bg-background"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="start-elements"
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col items-center gap-4 w-full"
                >
                  <button
                    onClick={handleStart}
                    className="pixel-text pixel-press w-full border-[3px] border-border bg-accent text-accent-foreground px-6 py-4 shadow-[6px_6px_0_var(--pixel-shadow)] text-lg md:text-xl font-bold cursor-pointer"
                  >
                    <motion.span
                      animate={shouldReduceMotion ? {} : { opacity: [1, 0.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                    >
                      PRESS START
                    </motion.span>
                  </button>
                  <span className="pixel-text text-[10px] text-muted-foreground mt-1 tracking-wider animate-pulse hidden md:inline">
                    OR PRESS ENTER / SPACE
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
