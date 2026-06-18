"use client";

import { motion } from "framer-motion";

const PIXELS = [
  { left: "8%", top: "18%", size: 8, delay: 0, color: "bg-primary" },
  { left: "18%", top: "72%", size: 6, delay: 0.8, color: "bg-accent" },
  { left: "34%", top: "28%", size: 10, delay: 1.6, color: "bg-secondary" },
  { left: "48%", top: "84%", size: 6, delay: 0.4, color: "bg-primary" },
  { left: "62%", top: "14%", size: 8, delay: 1.2, color: "bg-secondary" },
  { left: "78%", top: "58%", size: 10, delay: 0.2, color: "bg-accent" },
  { left: "90%", top: "32%", size: 6, delay: 1.8, color: "bg-primary" },
];

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background pointer-events-none">
      <div className="pixel-grid absolute inset-0 opacity-40" />
      <div className="pixel-dither absolute inset-0 opacity-35" />
      <div className="pixel-scanline absolute inset-0 opacity-45" />
      <div className="absolute inset-x-0 top-0 h-24 bg-primary/10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-accent/10" />

      {PIXELS.map((pixel, index) => (
        <motion.div
          key={index}
          className={`absolute ${pixel.color} shadow-[3px_3px_0_var(--pixel-shadow)]`}
          style={{
            left: pixel.left,
            top: pixel.top,
            width: pixel.size,
            height: pixel.size,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.35, 0.95, 0.35],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: pixel.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
