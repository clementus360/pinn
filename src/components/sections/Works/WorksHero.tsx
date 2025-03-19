"use client"

import { motion } from "framer-motion"

export const WorksHero: React.FC = () => {
    return (
        <section className="flex flex-col gap-4 px-4 md:px-40 py-24 md:py-24 items-center justify-center h-max">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="md:w-6/12 text-4xl md:text-6xl text-center font-medium text-primary dark:text-white"
            >
                Welcome to the Pinn Hall of Fame!
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-center text-primary dark:text-white md:w-8/12"
            >
                We don't just make things look good—we make them work. Whether it's branding, web design, or ads that stop thumbs mid-scroll, our projects speak for themselves. Check out what we've done, then let's talk about what we can do for you!
            </motion.p>
        </section>
    )
}