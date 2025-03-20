// WorkCard.tsx
"use client"
import Image from "next/image";
import { Tool } from "@/utils/types";
import { Blender, Figma, Illustrator, InDesign, Photoshop, PremierPro } from "..";
import { AfterEffects } from "../icons/Aftereffects";
import { motion } from "motion/react";

const tools: Tool[] = [
    { name: "Illustrator", icon: <Illustrator /> },
    { name: "Photoshop", icon: <Photoshop /> },
    { name: "Premiere Pro", icon: <PremierPro /> },
    { name: "Blender", icon: <Blender /> },
    { name: "InDesign", icon: <InDesign /> },
    { name: "Figma", icon: <Figma /> },
    { name: "After Effects", icon: <AfterEffects /> }
];

interface WorkCardProps {
    title: string;
    description: string;
    tools: string[];
    tags: string[];
    image: string;
}

// Function to get the tool icon based on the tool name
const getToolIcon = (toolName: string) => {
    const tool = tools.find(t => t.name.toLowerCase() === toolName.toLowerCase());
    return tool ? tool.icon : null;
};

export const WorkCard: React.FC<WorkCardProps> = ({ title, description, tools, tags, image }) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="break-inside-avoid"
        >
            <Image src={image} alt={title} width={400} height={400} className="w-full h-auto rounded-2xl" />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col justify-end p-4"
            >
                <h3 className="font-semibold text-lg md:text-3xl cursor-pointer">{title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-gray-800 text-white text-xs px-2 py-1 rounded-lg">{tag}</span>
                    ))}
                </div>
                <p className="text-sm">{description}</p>
                <div className="flex gap-2 mt-2">
                    {tools.map((tool, index) => (
                        <div key={index} className="w-6 h-6 text-primary dark:text-white">{getToolIcon(tool)}</div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
