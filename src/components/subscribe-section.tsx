"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { useToast } from "./ui/use-toast";

const MotionInput = motion(Input);
const MotionButton = motion(Button);

export const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleButtonClick = async () => {
    try {
      await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      toast({
        description: "You have been successfully subscribed",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Oops, an error. Please try again later",
      });
    }
  };

  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 sm:items-stretch "
      layout
    >
      <MotionInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.3 }}
        className="bg-accent placeholder:text-zinc-30 h-11 border-none text-white font-bold tracking-wide w-[300px]"
        type="email"
        placeholder="johndoe@gmail.com"
      />
      <MotionButton
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.3 }}
        onClick={() => handleButtonClick()}
        variant="default"
        size="lg"
        className="hover:cursor-pointer shadow-lg shadow-primary/50 font-bold tracking-wider z-10 sm:w-[170px] w-full"
      >
        Subscribe
      </MotionButton>
    </motion.div>
  );
};
