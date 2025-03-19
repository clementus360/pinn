"use client"
import { FAQ } from "@/utils/types";
import { FAQs, FAQVisuals } from "../.."
import React from "react";
import { motion } from "framer-motion";

interface FAQSectionProps {
    faqImage: string;
    faqs: FAQ[]
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqImage, faqs }) => {
    return (
        <section className="flex flex-col max-h-max gap-16 md:gap-20 md:flex-row px-4 md:px-16 py-12 bg-primary rounded-4xl transition-all">
            {/* FAQ Visual Animation */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full"
            >
                <FAQVisuals image={faqImage} />
            </motion.div>

            <div className="flex w-full flex-col justify-center gap-8 md:gap-4">
                {/* FAQ Title Animation */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center md:text-start md:w-10/12 text-4xl md:text-5xl font-medium text-white"
                >
                    FAQs
                </motion.h2>

                {/* FAQ Questions Animation */}
                <motion.div
                    className="flex flex-col gap-2 w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <FAQs question={faq.question} answer={faq.answer} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}