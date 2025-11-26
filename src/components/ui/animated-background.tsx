"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Particles */}
      <Particles number={50} />

      {/* Moving Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-[40%] left-[40%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]"
      />
    </div>
  );
}

const Particles = ({ number = 50 }: { number?: number }) => {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; duration: number; delay: number }>
  >([]);

  useEffect(() => {
    const newParticles = [...new Array(number)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2, // Increased size: 2px - 7px
      duration: Math.random() * 10 + 10, // Faster duration: 10s - 20s
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, [number]);

  return (
    <div className="absolute inset-0">
      {particles.map((particle, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full bg-primary" // Removed /10 opacity, using primary color
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.8, 0], // Increased opacity max value
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
