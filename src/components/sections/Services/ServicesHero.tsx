"use client"
import { motion } from "framer-motion"

export const ServicesHero: React.FC = () => {
    return (
        <section className="flex flex-col gap-4 px-4 md:px-40 py-20 md:py-24 items-center justify-center h-max">
            <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-6xl text-center font-medium text-primary dark:text-white"
            >
                Your Brand Deserves a Glow-Up!
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-center text-primary dark:text-white md:w-8/12"
            >
                At Pinn Creative Hub, we don't just design—we Pinnpoint exactly what makes your brand shine (see what we did there?). Need a logo that slaps? A website that doesn't make people rage-quit? We've got you. Let's make your brand unforgettable
            </motion.p>
        </section>
    )
}