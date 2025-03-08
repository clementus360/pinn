// components/GradientBackground.tsx
"use client";

import React, { useEffect, useRef, ReactNode } from 'react';

interface GradientBackgroundProps {
    children: ReactNode;
}

export const GradientBackground = ({ children }: GradientBackgroundProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Optional: Add subtle parallax effect on mouse move
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth) * 10;
            const y = (clientY / window.innerHeight) * 10;

            container.style.setProperty('--mouse-x', `${x}px`);
            container.style.setProperty('--mouse-y', `${y}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={containerRef} className="gradient-background">
            {children}
        </div>
    );
}