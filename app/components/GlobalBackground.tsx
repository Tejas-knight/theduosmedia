'use client';

import { motion } from 'framer-motion';

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">

      {/* base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111] to-black" />

      {/* 🔥 BLOB 1 */}
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -120, 80, 0],
        }}
        transition={{
          duration: 12,   // 👈 FAST so you SEE movement
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[600px] h-[600px] bg-yellow-400/30 rounded-full blur-[120px] top-[-100px] left-[-100px]"
      />

      {/* 🔥 BLOB 2 */}
      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] bg-yellow-300/30 rounded-full blur-[120px] bottom-[-100px] right-[-100px]"
      />

    </div>
  );
}