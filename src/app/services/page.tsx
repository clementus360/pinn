import { Service } from "@/components";
import { ServiceType } from "@/utils/types";

const services: ServiceType[] = [
    {
        title: "Logo & Branding",
        description: "Your brand is more than just a logo—it’s the first impression, the heartbeat, and the personality of your business. At Pinn Creative Hub, we don’t just slap a logo on your business; we create a brand identity that makes you unforgettable. ",
        cta: "Let’s Build Your Brand",
        perks: [
            {
                title: "Brand Discovery",
                description: "We get to know your business and audience to build a brand that truly represents you."
            },
            {
                title: "Logo Design",
                description: "Crafting logos that are timeless, memorable, and speak your brand’s language."
            },
            {
                title: "Brand Guidelines",
                description: "Ensuring your brand is consistent and looks amazing everywhere."
            },
            {
                title: "Brand Strategy",
                description: "Positioning your brand for success with a strong, cohesive identity."
            },
        ],
        image: "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741851334/branding_c2fypi.png"
    },
    {
        title: "Web Design",
        description: "Your website should be more than just a page— it should be an experience. We bring together stunning design, smooth functionality, and smart strategies to ensure your site works as hard as you do.",
        cta: "Let’s Build Your Site",
        perks: [
            {
                title: "Custom Web Design",
                description: "We create unique websites tailored to your brand, with the perfect mix of creativity and functionality."
            },
            {
                title: "User Experience (UX) Design",
                description: "We focus on making your site intuitive and easy to navigate, so visitors actually want to stay."
            },
            {
                title: "Responsive Design",
                description: "Your site will look great on any device—whether it’s a phone, tablet, or desktop."
            },
            {
                title: "E-commerce Solutions",
                description: "Need a store? We design user-friendly e-commerce sites that make shopping a breeze."
            },
            {
                title: "SEO-Optimized Design",
                description: "We make sure your website is optimized for search engines, so you get found by your audience."
            },
        ],
        image: "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741851333/web_st3zkc.png"
    },
    {
        title: "Social Media Marketing",
        description: "Your audience is scrolling right now. The question is—are they finding you? At Pinn Creative Hub, we create social media strategies that make your brand impossible to ignore. Whether it's Instagram, Facebook, Twitter, or TikTok, we design campaigns that drive engagement, build communities, and turn followers into loyal customers.",
        cta: "Let’s Get Social!",
        perks: [
            {
                title: "Strategy Development",
                description: "We create custom social media strategies that align with your brand’s goals and connect you with the right audience."
            },
            {
                title: "Content Creation",
                description: "From eye-catching graphics to snappy copy, we craft content that stands out in crowded feeds."
            },
            {
                title: "Community Engagement",
                description: "We build and nurture your online community, ensuring you stay top of mind and foster lasting relationships."
            },
            {
                title: "Ad Campaigns",
                description: "Running ads? We create and optimize campaigns to increase reach, drive traffic, and boost conversions."
            },
            {
                title: "Analytics & Reporting",
                description: "We track performance and tweak strategies to ensure your social media is always evolving and improving."
            },
        ],
        image: "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741851325/social_leb6ou.png"
    }
]


export default function Page() {
    return (
        <div className="flex flex-col gap-16 pb-24 px-4 md:px-24 text-primary dark:text-white">
            <section className="flex flex-col gap-4 px-4 md:px-40 py-20 md:py-24 items-center justify-center h-max">
                <h1 className="text-4xl md:text-6xl text-center font-medium text-primary dark:text-white">Your Brand Deserves a Glow-Up!</h1>
                <p className="text-center text-primary dark:text-white md:w-8/12">At Pinn Creative Hub, we don’t just design—we Pinnpoint exactly what makes your brand shine (see what we did there?). Need a logo that slaps? A website that doesn’t make people rage-quit? We’ve got you. Let’s make your brand unforgettable</p>
            </section>

            <section className="flex w-full flex-col items-center justify-center gap-24 ">
                {services.map((service, index) => (
                    <Service key={index} title={service.title} description={service.description} cta={service.cta} perks={service.perks} image={service.image} variant={index % 2 === 0 ? "right" : "left"} />
                ))}
            </section>
        </div>
    )
}
