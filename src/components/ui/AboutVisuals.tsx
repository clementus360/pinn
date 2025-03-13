"use client"

import { useState, useEffect } from "react";
import Image from 'next/image'


import { cn } from "@/utils/cn";

interface AboutVisualsProps {
    teamImage: string;
    workspaceImage: string;
}

export const AboutVisuals: React.FC<AboutVisualsProps> = ({ teamImage, workspaceImage }) => {
    // State to track mouse position
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Update mouse position when mouse moves
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Get mouse position relative to window size
            setMousePosition({
                x: e.clientX / window.innerWidth - 0.5,
                y: e.clientY / window.innerHeight - 0.5
            });
        };

        // Add event listener
        window.addEventListener('mousemove', handleMouseMove);

        // Clean up event listener
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Calculate movement for each element (different intensity for each)
    const teamImageTransform = {
        transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`
    };

    const workspaceImageTransform = {
        transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`
    };

    const experienceDivTransform = {
        transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
    };

    return (
        <div className="relative flex items-end justify-end w-full">
            <Image
                height={200}
                width={200}
                src={teamImage}
                alt={'Team'}
                className={cn(
                    "absolute bottom-12 left-24 w-5/12 rounded-2xl ",
                    "transition-transform duration-300 ease-out z-10"
                )}
                style={teamImageTransform}
            />
            <Image
                height={400}
                width={400}
                src={workspaceImage}
                alt={'Workspace'}
                className={cn(
                    "object-cover w-8/12 h-[24rem] rounded-4xl",
                    "transition-transform duration-300 ease-out z-0"
                )}
                style={workspaceImageTransform}
            />
            <div
                className={cn(
                    'absolute w-max left-0 bottom-16 text-white flex flex-col py-6',
                    'justify-center items-center bg-accent rounded-xl',
                    'transition-transform duration-300 ease-out z-20'
                )}
                style={experienceDivTransform}
            >
                <h3 className='font-medium text-5xl'>10+</h3>
                <p className='font-medium text-sm w-8/12 text-center'>Years Of Cumulative Experience</p>
            </div>
        </div>
    )
}