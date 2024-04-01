"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

export const SignupSection = () => {
  return (
    <Link href="https://app.collaborawrite.com" target="_blank">
      <MotionButton
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.3 }}
        variant="default"
        size="lg"
        className="hover:cursor-pointer shadow-lg shadow-primary/50 font-bold tracking-wider z-10 sm:w-[170px] w-full"
      >
        Sign up
      </MotionButton>
    </Link>
  );
};
