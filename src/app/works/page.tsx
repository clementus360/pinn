import { WorkSection } from "@/components";

const works = [
    {
        title: "Iwacu Finance Social Media Campaign",
        description: "Iwacu Finance is a non-deposit-taking financial service provider in Rwanda, licensed by the National Bank of Rwanda. It offers tailored loan and guarantee services to individuals and businesses, aiming to empower clients to achieve their financial goals with ease and confidence.",
        tools: ["Illustrator", "Photoshop", "Premiere Pro", "After Effects"],
        tags: ["Social Media", "Animation", "Graphic Design", "Poster Design"],
        images: ["https://res.cloudinary.com/dpfonnjv3/image/upload/v1741788442/Pinn/bbzikhu8xwudae2d9sml.png", "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741788442/Pinn/uz51saglwefq3wnm8zln.png", "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741788441/Pinn/ivs2palxfuwoxbanyujw.png", "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741788441/Pinn/mygz5obbrpjro2umphug.png", "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741788439/Pinn/svloiccygbnatt7g2sau.png", "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741788436/Pinn/any7mli4sarbfvkol9jl.png"]
    },
    {
        title: "Kawa Coffee Shop Branding",
        description: "Kawa Coffee Shop is a fictional coffee shop that offers a variety of coffee blends and pastries. The brand identity was designed to reflect the shop's cozy and welcoming atmosphere.",
        tools: ["Illustrator", "Photoshop", "inDesign"],
        tags: ["Branding", "Logo Design", "Typography", "Color Theory"],
        images: ["https://res.cloudinary.com/dpfonnjv3/image/upload/v1741789358/Pinn/nppvrhsalvifcwszaeb8.png", "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741789341/Pinn/im2im2kqz1ujthrwatew.png", "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741789340/Pinn/iddb4jnqczdtlgsiilem.png"]
    },
    {
        title: "Smart Home App UI Design",
        description: "Designed a user-friendly interface for a smart home app that allows users to control their home devices remotely. The design focused on simplicity and ease of use.",
        tools: ["Figma", "Illustrator"],
        tags: ["UI/UX Design", "Mobile App Design", "User Interface", "User Experience"],
        images: ["https://res.cloudinary.com/dpfonnjv3/image/upload/v1741789596/Pinn/coerprho6hrvjxi2ovfn.png", "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741790864/Pinn/hxajzz3o0k66ccrq7q0j.png", "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741790867/Pinn/mub4a6f1gsivtyskrjkp.png", "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741790962/Pinn/pyg0snwvtpqsmtfne3fo.png"]
    }
];

export default function Page() {
    return (
        <section className="flex flex-col gap-8 md:gap-0 pb-40">
            {works.map((work, index) => (
                <WorkSection key={index} title={work.title} description={work.description} tools={work.tools} tags={work.tags} images={work.images} variant={index%2===0? "right":"left"} />
            ))}
        </section>
    )
}