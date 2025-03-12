import { StaticImageData } from "next/image";

export interface Testimonial {
    name: string;
    title: string;
    testimonial: string;
    image: string;
}

export interface Services {
    index: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface FAQ {
    question: string;
    answer: string;
};

export interface Team {
    name: string;
    position: string;
    image: StaticImageData;
}

export interface Work {
    title: string;
    description: string;
    image: StaticImageData;
}

export interface Tool {
    name: string;
    icon: React.ReactNode;
}

interface Perk {
    title: string;
    description: string
}

export interface ServiceType {
    title: string;
    description: string;
    cta: string;
    perks: Perk[];
    image: StaticImageData;
}