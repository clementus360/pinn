"use client"

import { Testimonial } from "@/utils/types"
import { Testimonials } from "../.."
import { motion } from "motion/react"

interface TestimonialSectionProps {
    testimonials: Testimonial[]
}

export const TestimonialsSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
    return (
        <section className="flex flex-col md:flex-row items-center md:gap-8 py-8">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-center w-11/12 md:items-start gap-4"
            >
                <h2 className="md:w-10/12 text-center md:text-start text-3xl md:text-5xl font-medium text-primary dark:text-white">
                    Happy Clients, Even Happier Brands
                </h2>
                <p className="text-primary dark:text-white text-center md:text-start md:w-8/12">
                    Don’t just take our word for it—see what our clients have to say. Real stories from real brands that have experienced the impact of great design.
                </p>
            </motion.div>

            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
            >
                <Testimonials testimonials={testimonials} />
            </motion.div>
        </section>
    )
}
