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
            className="flex flex-col gap-4 px-4 md:px-40 py-24 md:py-32 items-center justify-center h-max"
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl text-center font-medium text-primary dark:text-white"
            >
                Creativity That Stands Out, Design That Pinns It Together.
            </motion.h1>
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
                    <Button variant="dark-outline" icon={<ArrowTilted />} iconPosition="right"> Let&rsquo;s Connect</Button>
                </Link>
            </motion.div>
        </motion.section>
    );
}