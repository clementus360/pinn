"use client"
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowTilted, Button, ClientAvatars } from "../..";

interface HeroSectionProps {
  imageUrls: string[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ imageUrls }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-4 px-4 md:px-40 py-24 md:pt-32 md:pb-12 items-center justify-center h-max"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <style jsx>{`
          @keyframes spotlight1 {
            0%, 100% { 
              background-position: 0% 50%; 
            }
            50% { 
              background-position: 100% 50%; 
            }
          }
          
          @keyframes spotlight2 {
            0%, 100% { 
              background-position: 100% 0%; 
            }
            50% { 
              background-position: 0% 100%; 
            }
          }
          
          .spotlight-text {
            background: linear-gradient(
              120deg,
              currentColor 0%,
              currentColor 30%,
              #3b82f6 35%,
              #8b5cf6 40%,
              currentColor 45%,
              currentColor 55%,
              #ec4899 60%,
              #f59e0b 65%,
              currentColor 70%,
              currentColor 100%
            );
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: spotlight1 12s ease infinite;
          }
          
          .spotlight-text::before {
            content: attr(data-text);
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            background: linear-gradient(
              240deg,
              transparent 0%,
              transparent 30%,
              #06b6d4 35%,
              #10b981 40%,
              transparent 45%,
              transparent 100%
            );
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            animation: spotlight2 12s ease infinite;
          }
        `}</style>
        
        <h1 
          className="spotlight-text text-4xl md:text-7xl text-center font-medium text-primary dark:text-white relative"
          data-text="Creativity That Stands Out, Design That Pinns It Together."
        >
          Creativity That Stands Out, Design That Pinns It Together.
        </h1>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center text-primary dark:text-white md:w-8/12"
      >
        We design with purpose and precision to elevate your brand. From bold ideas to flawless execution, we create experiences that inspire and captivate.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col md:flex-row gap-8 items-center justify-center mt-4"
      >
        <ClientAvatars images={imageUrls} />
        <Link href={"/contact"}>
          <Button variant="dark-outline" icon={<ArrowTilted />} iconPosition="right">
            Let&rsquo;s Connect
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
}