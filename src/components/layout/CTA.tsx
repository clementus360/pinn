import Link from "next/link"
import { ArrowTilted } from "../icons/ArrowTilted"
import { Button } from "../ui/Button"

export const CTA: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-40 px-8 md:px-32 py-24 bg-accent text-white">
            <h2 className="md:w-10/12 text-center md:text-start text-3xl md:text-5xl font-medium">Got an Awesome Idea? Let’s Make It Happen!</h2>
            <div className="flex flex-col items-center md:items-start gap-8 md:gap-4">
                <p className="text-center md:text-start">Whether you have a rough concept or a fully formed vision, we’re here to bring it to life. Let’s chat, brainstorm, and create something amazing together!</p>
                <Link href={"/contact"}>
                    <Button variant={"primary"} icon={<ArrowTilted />} iconPosition="right">Get A Quote</Button>
                </Link>
            </div>
        </section>
    )
}
