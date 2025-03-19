"use client"

import { ArrowTilted, Button, ClientAvatars } from '@/components'
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react"

interface AboutHeroProps {
    imageUrls: string[];
}

export const AboutHero: React.FC<AboutHeroProps> = ({ imageUrls }) => {
    return (
        <section className="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-16 px-4 py-24 md:py-24 items-center justify-center h-max text-primary dark:text-white">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col gap-8 items-center md:items-start justify-between"
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-4xl md:text-6xl text-center md:text-start font-medium text-primary dark:text-white"
                >
                    Redefining Creativity, One Design at a Time
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Link href={"/contact"}>
                        <Button variant="dark-outline" icon={<ArrowTilted />} iconPosition="right"> Let&rsquo;s Connect</Button>
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col items-center md:items-start gap-4"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                >
                    <ClientAvatars images={imageUrls} />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                    className="text-center md:text-start text-primary dark:text-white"
                >
                    Hi, we&rsquo;re Pinn Creative—a collective of designers, strategists, and storytellers passionate about crafting bold, impactful brand experiences. From identity design to digital solutions, we bring ideas to life with precision, creativity, and purpose. Let&rsquo;s create something unforgettable together.
                </motion.p>
            </motion.div>
        </section>
    )
}