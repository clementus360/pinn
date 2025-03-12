"use client"
import { AnimatePresence, motion } from 'motion/react'
import { Button, TestimonialCard, ArrowLeft, ArrowRight, } from '..';
import { useEffect, useState } from 'react';
import { Testimonial } from '@/utils/types';

interface TestimonialsProps {
    testimonials: Testimonial[];
    autoplay?: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, autoplay }) => {
    const [active, setActive] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Handle touch events
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrev();
        }
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay, handleNext]);

    const getCardPosition = (index: number) => {
        // Calculate the relative position from active
        const diff = index - active;

        // Handle wrapping for the carousel effect
        if (diff > testimonials.length / 2) return diff - testimonials.length;
        if (diff < -testimonials.length / 2) return diff + testimonials.length;

        return diff;
    };

    const getRotationY = (position: number) => {
        // Positive rotation for items on the left, negative for items on the right
        // This creates a curved/circular effect
        return position < 0 ? -60 : position > 0 ? 60 : 0;
    };

    return (
        <div
            className='flex flex-col items-center justify-center md:gap-2 relative w-full'
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className='relative flex items-center justify-center w-full h-auto min-h-[16rem] md:min-h-[22rem] px-4 overflow-hidden perspective-distant'>
                <AnimatePresence>
                    {testimonials.map((testimonial, index) => {
                        const position = getCardPosition(index);
                        const rotationY = getRotationY(position);

                        return (
                            <motion.div
                                key={index}
                                className='absolute'
                                style={{ zIndex: position === 0 ? 30 : 10 - Math.abs(position) }}
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                    rotateY: rotationY
                                }}
                                animate={{
                                    opacity: position === 0 ? 1 : 0.7 - (Math.abs(position) * 0.15),
                                    scale: position === 0 ? 1 : 0.9 - (Math.abs(position) * 0.05),
                                    // Responsive positioning based on screen size
                                    x: position * (typeof window !== 'undefined' ?
                                        (window.innerWidth < 768 ?
                                            window.innerWidth * 0.6 :
                                            window.innerWidth < 1024 ? 220 : 350) : 250),
                                    // Apply rotation based on which side the card is on
                                    rotateY: rotationY,
                                    // Add a slight z offset to create a 3D effect
                                    z: position === 0 ? 0 : -100,
                                    // Add perspective to enhance 3D effect
                                    perspective: 1000
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.8,
                                    rotateY: position < 0 ? -30 : position > 0 ? 30 : 0,
                                    transition: { duration: 0.3 }
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            >
                                <TestimonialCard
                                    name={testimonial.name}
                                    title={testimonial.title}
                                    testimonial={testimonial.testimonial}
                                    image={testimonial.image}
                                />
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>
            <div className="hidden md:flex  gap-0 md:gap-4 pt-8 md:pt-12 z-40">
                <Button onClick={handlePrev} variant={'dark-outline'} icon={<ArrowLeft />} iconPosition='left'>Previous</Button>
                <Button onClick={handleNext} variant={'dark-outline'} icon={<ArrowRight />} iconPosition='right'>Next</Button>
            </div>

            <div className='flex flex-col md:hidden w-full gap-4'>
                <button onClick={handlePrev} className='flex items-center justify-center py-2 w-full border-[0.2rem] border-primary rounded-full'>
                    Previous
                    <span className='w-8 h-8 text-primary overflow-hidden'>
                        <ArrowRight />
                    </span>
                </button>
                <button onClick={handleNext} className='flex items-center justify-center py-2 w-full border-[0.2rem] border-primary rounded-full'>
                    Next
                    <span className='w-8 h-8 text-primary overflow-hidden'>
                        <ArrowRight />
                    </span>
                </button>
            </div>
        </div>
    )
}