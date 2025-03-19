"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowTilted, Button, WorksVisuals } from "../.."
import { Work } from "@/utils/types"

interface WorksSectionProps {
    works: Work[]
}

export const WorksSection: React.FC<WorksSectionProps> = ({ works }) => {
    return (
        <section className="flex flex-col md:flex-row items-center gap-8 py-8">
            {/* Works Visuals Animation */}
            <motion.div
                className="flex flex-nowrap w-full h-96 rounded-4xl overflow-hidden cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.8 } }
                }}
            >
                {works.map((work, index) => (
                    <WorksVisuals key={index} title={work.title} description={work.description} image={work.image} />
                ))}
            </motion.div>

            {/* Title & Button Animation */}
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-center md:items-start gap-4"
            >
                <h2 className="md:w-10/12 text-center md:text-start text-3xl md:text-5xl font-medium text-primary dark:text-white">
                    Our Works
                </h2>
                <p className="text-primary dark:text-white text-center md:text-start md:w-8/12">
                    A showcase of creativity, strategy, and impact. Explore our work and see how we bring brands to life through thoughtful design.
                </p>
                <Link href={"/works"}>
                    <Button variant="dark-outline" icon={<ArrowTilted />} iconPosition="right">
                        View All
                    </Button>
                </Link>
            </motion.div>
        </section>
    )
}
