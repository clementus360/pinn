
import { WorkCard } from "@/components";

const works = [
    {
        title: "FitnessPoint Social Media Campaign",
        description: "Designed a series of social media posts for a fitness center to promote their new workout programs. The designs focused on vibrant colors and eye-catching visuals.",
        tools: ["Illustrator", "Photoshop", "Premiere Pro", "After Effects"],
        tags: ["Social Media", "Animation", "Graphic Design", "Poster Design"],
        image: "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741850572/Pinn/fielqz0oem0e6euygujd.png"
    },
    {
        title: "Funky Monkey Arcade Branding",
        description: "Created a new brand identity for a retro arcade bar that included a logo, color scheme, and typography. The design was inspired by 80s pop culture.",
        tools: ["Illustrator", "Photoshop"],
        tags: ["Branding", "Logo Design", "Graphic Design", "Color Theory"],
        image: "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741850571/Pinn/qdexqb4pipmjddwmiijw.png"
    },
    {
        title: "Ku Giti Cyawe Social Media Campaign",
        description: "Developed a social media campaign for a local restaurant to promote their new menu items. The designs focused on food photography and minimalistic layouts.",
        tools: ["Figma", "Illustrator", "Photoshop"],
        tags: ["Social Media", "Graphic Design", "Photography", "Layout Design"],
        image: "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741850571/Pinn/scht82p3op9x9neaz8yg.png"
    },
    {
        title: "Kawa Coffee Packaging Design",
        description: "Created packaging designs for a local coffee shop that included coffee bags, cups, and labels. The designs focused on a minimalist aesthetic and earthy tones.",
        tools: ["Illustrator", "Photoshop"],
        tags: ["Packaging Design", "Graphic Design", "Branding", "Color Theory"],
        image: "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741789358/Pinn/nppvrhsalvifcwszaeb8.png"
    },
    {
        title: "Smart Home App UI Design",
        description: "Designed the user interface for a smart home app that allows users to control their home devices remotely. The design focused on simplicity and ease of use.",
        tools: ["Figma", "Illustrator"],
        tags: ["UI Design", "App Design", "User Experience", "User Interface"],
        image: "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741850573/Pinn/xwibsnb9imged1ebispt.png"
    }

];

export default function Page() {
    return (
        <section className="w-full px-4 md:px-24 py-8 pb-40 h-max">
            <div className="columns-2 gap-24 space-y-24">
                {works.map((work, index) => (
                    <WorkCard
                        key={index}
                        title={work.title}
                        description={work.description}
                        tools={work.tools}
                        tags={work.tags}
                        image={work.image}
                    />
                ))}
            </div>
        </section>
    );
}

