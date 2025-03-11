import { WorkSection } from "@/components";

const works = [
    {
        title: "Brand Identity Design",
        description: "Designed a modern brand identity for a tech startup, including logo, color scheme, and UI assets.",
        tools: ["Illustrator", "Photoshop", "Figma"],
        tags: ["Branding", "UI Design", "Graphic Design"],
        images: ["https://picsum.photos/200", "https://picsum.photos/300", "https://picsum.photos/400"]
    },
    {
        title: "3D Motion Graphics",
        description: "Created high-quality motion graphics and 3D animations for advertising campaigns.",
        tools: ["Blender", "Premiere Pro", "Photoshop"],
        tags: ["Motion Graphics", "3D Animation", "Video Editing"],
        images: ["https://picsum.photos/200", "https://picsum.photos/200"]
    },
    {
        title: "Editorial Design",
        description: "Developed engaging magazine layouts and editorial designs for a publishing company.",
        tools: ["InDesign", "Illustrator", "Photoshop"],
        tags: ["Print Design", "Editorial", "Typography"],
        images: ["https://picsum.photos/200", "https://picsum.photos/200"]
    }
];

export default function WorksPage() {
    return (
        <section className="flex flex-col gap-8 md:gap-0 pb-40">
            {works.map((work, index) => (
                <WorkSection key={index} title={work.title} description={work.description} tools={work.tools} tags={work.tags} images={work.images} variant={index%2===0? "right":"left"} />
            ))}
        </section>
    )
}