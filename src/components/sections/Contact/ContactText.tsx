"use client"
import { BehanceOutline, GithubOutline, InstagramOutline, LinkedinOutline, TwitterOutline } from "@/components"
import Link from "next/link"
import { motion } from "framer-motion"

export const ContactText = () => {
    // Animation variants for social icons
    const socialIconVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.6 + (custom * 0.1), duration: 0.5, ease: "easeOut" }
        })
    };

    return (
        <section className="flex flex-col gap-8 items-center md:items-start justify-between">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-6xl text-center md:text-start font-medium text-primary dark:text-white"
            >
                Let&rsquo;s Create, Collaborate, and Elevate!
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="text-center md:text-start text-primary dark:text-white"
            >
                Got a project in mind? Need a creative boost? Or just want to say hi? We&rsquo;re all ears (and keyboards). Whether it&rsquo;s branding, web design, or social media magic, we&rsquo;re here to bring your vision to life. Drop us a message, and let&rsquo;s make something awesome together!
            </motion.p>

            <motion.div
                initial="hidden"
                animate="visible"
                className='flex gap-4'
            >
                <motion.span
                    custom={0}
                    variants={socialIconVariants}
                    whileHover={{ scale: 1.2, color: "#1769FF" }}
                    className='w-8 h-8 transition-all rounded-full flex items-center justify-center'
                >
                    <Link href="">
                        <BehanceOutline />
                    </Link>
                </motion.span>

                <motion.span
                    custom={1}
                    variants={socialIconVariants}
                    whileHover={{ scale: 1.2, color: "#0077B5" }}
                    className='w-8 h-8 transition-all rounded-full flex items-center justify-center'
                >
                    <Link href="">
                        <LinkedinOutline />
                    </Link>
                </motion.span>

                <motion.span
                    custom={2}
                    variants={socialIconVariants}
                    whileHover={{ scale: 1.2, color: "#E4405F" }}
                    className='w-8 h-8 transition-all rounded-full flex items-center justify-center'
                >
                    <Link href="">
                        <InstagramOutline />
                    </Link>
                </motion.span>

                <motion.span
                    custom={3}
                    variants={socialIconVariants}
                    whileHover={{ scale: 1.2, color: "#333" }}
                    className='w-8 h-8 transition-all rounded-full flex items-center justify-center'
                >
                    <Link href="">
                        <GithubOutline />
                    </Link>
                </motion.span>

                <motion.span
                    custom={4}
                    variants={socialIconVariants}
                    whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                    className='w-8 h-8 transition-all rounded-full flex items-center justify-center'
                >
                    <Link href="">
                        <TwitterOutline />
                    </Link>
                </motion.span>
            </motion.div>
        </section>
    )
}