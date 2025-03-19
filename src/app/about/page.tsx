import { AboutHero, ArrowTilted, Button, ClientAvatars, Process, ResponsiveVideoPlayer, StatCounter } from "@/components";
import Link from "next/link";

import logo1 from "@/assets/logo1.png"
import logo2 from "@/assets/logo2.png"
import logo3 from "@/assets/logo3.png"
import Image, { StaticImageData } from "next/image";

const imageUrls: string[] = [
    'https://randomuser.me/api/portraits/men/4.jpg',
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/women/61.jpg',
    'https://randomuser.me/api/portraits/men/15.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
];

interface Stat {
    title: string;
    value: number;
    type: "exact" | "plus" | "k" | "k-plus"
}

const stats: Stat[] = [
    {
        title: "Years of experience",
        value: 10,
        type: "plus"
    },
    {
        title: "Hours spent on craft",
        value: 2,
        type: "k-plus"
    },
    {
        title: "Review Rate",
        value: 4.8,
        type: "exact"
    }
]

const partners: { name: string; logo: StaticImageData }[] = [
    {
        name: "Youth Researchers",
        logo: logo1
    },
    {
        name: "K&FJ Consultants",
        logo: logo2
    },
    {
        name: "Independent Commission for Aid Impact",
        logo: logo3
    }
]

const videoSrc = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"

export default function About() {
    return (
        <div className="flex flex-col gap-16 pb-24 px-4 md:px-24">
            
            <AboutHero imageUrls={imageUrls} />

            <section className="">
                <ResponsiveVideoPlayer videoSrc={videoSrc} />
            </section>

            <section className="flex flex-col items-center md:items-start md:flex-row justify-center text-primary dark:text-white">
                {stats.map((stat, index) => (
                    <StatCounter key={index} index={index} title={stat.title} value={stat.value} type={stat.type} />
                ))}
            </section>

            <section className="flex flex-col gap-16 px-4 md:px-16 items-center py-16 border-2 border-primary dark:border-white rounded-4xl">
                <h2 className="md:w-10/12 text-center text-2xl md:text-4xl font-medium text-primary dark:text-white">Design Process</h2>
                <Process />
            </section>

            <section className="flex flex-col gap-16">
                <h2 className="text-center text-2xl md:text-4xl font-medium text-primary dark:text-white">Proudly Collaborated With</h2>

                <div className="flex flex-col md:flex-row w-full items-center justify-center gap-16 md:gap-24">
                    {partners.map((partner, index) => (
                        <Image key={index} src={partner.logo} alt={partner.name} className="w-40" />
                    ))}
                </div>
            </section>
        </div>
    )
}