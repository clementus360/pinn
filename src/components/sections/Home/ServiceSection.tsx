"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowTilted, Button, ServiceCard } from "../.."
import { Services } from "@/utils/types"

interface ServiceSectionProps {
    services: Services[]
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ services }) => {

    return (
        <section className="flex flex-col gap-12 px-4 md:px-16 py-12 items-center justify-center h-max">

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col md:px-24 gap-4 items-center justify-center"
            >
                <h2 className="md:w-10/12 text-center text-3xl md:text-5xl font-medium text-primary dark:text-white">
                    Turning Ordinary Into Extraordinary
                </h2>
                <p className="text-primary dark:text-white md:w-8/12 text-center">
                    Pinn crafts creative solutions that elevate your brand and drive results. Our focus is on delivering designs and strategies that connect with your audience and make a lasting impact.
                </p>
                <Link href={"/services"}>
                    <Button variant="primary" icon={<ArrowTilted />} iconPosition="right">View All</Button>
                </Link>
            </motion.div>

            <motion.div
                className="flex flex-col md:grid grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 }
                    }
                }}
            >
                {services.map((service) => (
                    <motion.div
                        key={service.index}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <ServiceCard
                            index={service.index}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
