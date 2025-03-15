import { cn } from "@/utils/cn";
import Link from "next/link";

interface ContactTagProps {
    title: string;
    type: "email" | "phone" | "address";
    link: string;
}

export const ContactTag: React.FC<ContactTagProps> = ({ title, type, link }) => {
    return (
        <div className="flex flex-col text-white">
            <h3 className="text-xs text-gray-400">{title}</h3>
            <Link
                href={type === "email" ? `mailto:${link}` : type === "phone" ? `tel:${link}` : link}
                className={cn(
                    "text-sm text-white hover:text-accent px-6 py-2 border-[0.06rem] border-white hover:border-accent hover:underline transition-all rounded-full"
                )}
            >
                {link}
            </Link>
        </div>
    )
}