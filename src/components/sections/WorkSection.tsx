"use client"

import { Tool } from "@/utils/types";
import { Blender, Figma, Illustrator, InDesign, Photoshop, PremierPro, ImageGallery } from "..";
import { cn } from "@/utils/cn";

const tools: Tool[] = [
    {
        name: "Illustrator",
        icon: <Illustrator />
    },
    {
        name: "Photoshop",
        icon: <Photoshop />
    },
    {
        name: "Premiere Pro",
        icon: <PremierPro />
    },
    {
        name: "Blender",
        icon: <Blender />
    },
    {
        name: "InDesign",
        icon: <InDesign />
    },
    {
        name: "Figma",
        icon: <Figma />
    }
]

interface WorkSectionProps {
    title: string;
    description: string;
    tools: string[];
    tags: string[];
    images: string[];
    variant: "left" | "right";
}

// Function to get the tool icon based on the tool name
const getToolIcon = (toolName: string) => {
    const tool = tools.find(t => t.name.toLowerCase() === toolName.toLowerCase());
    return tool ? tool.icon : null;
};




export const WorkSection: React.FC<WorkSectionProps> = ({ title, description, tools, tags, images, variant }) => {
    return (
        <section className={cn(
            "flex flex-col-reverse md:flex-row gap-8 md:gap-24 px-4 md:px-40 py-8 items-center justify-between text-primary",
            variant === "left" ? "md:flex-row" : "md:flex-row-reverse"
        )}>
            <div className="w-full">
                <ImageGallery images={images} title={title} />
            </div>

            <div className="flex flex-col items-center md:items-start gap-4">
                <h2 className="font-semibold text-4xl md:text-4xl text-center md:text-start cursor-pointer">{title}</h2>
                <div className="w-full flex flex-wrap gap-4 justify-center md:justify-start items-center md:items-start">
                    {tags.map((tag, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-accent rounded-full"></div>
                            <p className="text-sm">{tag}</p>
                        </div>
                    ))}
                </div>
                <p className="text-sm md:text-base text-center md:text-start">{description}</p>
                <div className="flex flex-wrap gap-4 mt-2">
                    {tools.map((tool, index) => (
                        <span key={index} className="w-6 flex items-center justify-center" title={tool}>
                            {getToolIcon(tool)}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
