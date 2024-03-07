"use client";

import React from "react";
import { motion } from "framer-motion";

export const HeaderSection = () => {
  return (
    <header
      id="header"
      className="flex flex-col items-center relative antialiased mb-10"
    >
      <motion.h1
        className="text-h1 font-bold tracking-wide leading-snug text-center mb-2 text-white"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, ease: "easeIn", duration: 0.5 }}
      >
        Collabora Write
      </motion.h1>

      <motion.h5
        className="text-h5 leading-relaxed text-center max-w-[740px] text-zinc-300"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, ease: "easeIn", duration: 0.5 }}
      >
        Elevate Your Writing Experience - Seamlessly{" "}
        <span className="font-bold text-white">
          Collaborate, track every edit, and take control of your data,
        </span>{" "}
        All in One Feature-Rich{" "}
        <span className="text-white font-bold">mark-down</span> editor
      </motion.h5>
      <motion.div
        className="absolute bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-2xl w-full h-full psm:w-[120%] sm:h-[150%] -top-[20%] z-1 rounded-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        transition={{ delay: 0, ease: "easeIn", duration: 2 }}
      />
    </header>
  );
};
