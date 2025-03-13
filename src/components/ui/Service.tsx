"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowTilted, Button, Check } from "..";

import { cn } from "@/utils/cn";
import { motion } from 'motion/react'

interface Perk {
    title: string;
    description: string
}

export interface ServiceProps {
    title: string;
    description: string;
    cta: string;
    perks: Perk[];
    image: string
    variant: "left" | "right"
}

export const Service: React.FC<ServiceProps> = ({ title, description, cta, perks, image, variant }) => {
    return (
        <div className={cn(
            "flex gap-16 items-center",
            variant === "right" ? "flex-row" : "flex-row-reverse"
        )}>
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.5,
                    y: 20
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                }}
                className={`min-w-[40vw] w-full rounded-4xl rounded-tl-[10rem]`}
            >
                <Image width={600} height={600} src={image} alt={title} className="abdolute w-[200%]" />
            </motion.div>

            <div className="flex flex-col gap-4">
                <h2 className="md:w-10/12 text-center md:text-start text-3xl md:text-3xl font-medium text-primary">{title}</h2>
                <p>{description}</p>

                <div className="flex flex-col gap-2">
                    {perks.map((perk, index) => (
                        <div key={index} className="flex gap-2 justify-start">
                            <span className="w-6 h-6 text-accent">
                                <Check />
                            </span>
                            <p><span className="font-bold text-accent py-0">{perk.title}: </span>{perk.description}</p>
                        </div>
                    ))}
                </div>
                <Link href={"/contact"}>
                    <Button variant={"dark-outline"} icon={<ArrowTilted />}>{cta}</Button>
                </Link>
            </div>
        </div>
    )
}
