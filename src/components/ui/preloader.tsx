"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const shouldReduceMotion = useReducedMotion();

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

  useEffect(() => {
    if (counter === 100) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Wait 0.5s after reaching 100% before hiding
      return () => clearTimeout(timer);
    }
  }, [counter]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="pixel-grid fixed inset-0 z-[9999] flex items-center justify-center bg-background px-4"
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
              {counter}%
            </motion.div>
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
