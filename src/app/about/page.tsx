import { ArrowTilted, Button, ClientAvatars, Process, ResponsiveVideoPlayer, StatCounter } from "@/components";
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
            <section className="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-16 px-4 py-24 md:py-24 items-center justify-center h-max text-primary">
                <div className="flex flex-col gap-8 items-center md:items-start justify-between">
                    <h1 className="text-4xl md:text-6xl text-center md:text-start  font-medium text-primary">Redefining Creativity, One Design at a Time</h1>
                    <Link href={"/contact"}>
                        <Button variant="dark-outline" icon={<ArrowTilted />} iconPosition="right"> Let&rsquo;s Connect</Button>
                    </Link>
                </div>

                <div className="flex flex-col items-center md:items-start gap-4">
                    <ClientAvatars images={imageUrls} />
                    <p className="text-center md:text-start text-primary">Hi, we’re Pinn Creative—a collective of designers, strategists, and storytellers passionate about crafting bold, impactful brand experiences. From identity design to digital solutions, we bring ideas to life with precision, creativity, and purpose. Let’s create something unforgettable together.</p>
                </div>
            </section>

            <section className="">
                <ResponsiveVideoPlayer videoSrc={videoSrc} />
            </section>

            <section className="flex flex-col items-center md:items-start md:flex-row justify-center text-primary">
                {stats.map((stat, index) => (
                    <StatCounter key={index} index={index} title={stat.title} value={stat.value} type={stat.type} />
                ))}
            </section>

            <section className="flex flex-col gap-16 px-4 md:px-16 items-center py-16 border-2 border-primary rounded-4xl">
                <h2 className="md:w-10/12 text-center text-2xl md:text-4xl font-medium text-primary">Design Process</h2>
                <Process />
            </section>

            <section className="flex flex-col gap-16">
                <h2 className="text-center text-2xl md:text-4xl font-medium text-primary">Proudly Collaborated With</h2>

                <div className="flex w-full overflow-scroll items-center justify-center gap-16 md:gap-24">
                    {partners.map((partner, index) => (
                        <Image key={index} src={partner.logo} alt={partner.name} className="w-40" />
                    ))}
                </div>
            </section>
        </div>
    )
}