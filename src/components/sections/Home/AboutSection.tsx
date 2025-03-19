"use client"

import Link from "next/link";
import { motion } from "motion/react";
import { AboutVisuals, ArrowTilted, Button } from "../..";

interface AboutSectionProps {
    teamImage: string;
    workspaceImage: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ teamImage, workspaceImage }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-8 md:gap-0 md:flex-row px-4 md:px-16 py-16 bg-primary rounded-4xl"
        >
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="flex flex-col items-center md:items-start gap-6 w-full"
            >
                <h2 className="text-center md:text-start text-3xl md:text-5xl font-medium text-white">
                    We Give Your Brand the Design It Deserves
                </h2>
                <p className="text-center md:text-start text-white w-10/12">
                    We blend strategy with creativity to craft designs that don’t just look good—they drive results.
                    From brand identity to digital experiences, we create with purpose, ensuring every detail aligns with
                    your vision and business goals.
                </p>
                <Link href={"/about"}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" icon={<ArrowTilted />} iconPosition="right">
                            More About Us
                        </Button>
                    </motion.div>
                </Link>
            </motion.div>
            <motion.div
                className="w-full md:w-full flex justify-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
                <AboutVisuals teamImage={teamImage} workspaceImage={workspaceImage} />
            </motion.div>

        </motion.section>
    );
};