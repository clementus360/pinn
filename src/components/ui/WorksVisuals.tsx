import Image, { StaticImageData } from "next/image";

interface WorkVisualsProps {
    title: string;
    description: string;
    image: StaticImageData;
}
export const WorksVisuals: React.FC<WorkVisualsProps> = ({title, description, image}) => {
    return (
        <div className="group relative w-full hover:w-[1000%] bg-red-400 transition-all duration-600">
            <div className="absolute -bottom-56 group-hover:bottom-0 px-4 py-8 w-full text-white bg-lineat-to-t bg-black/30 rounded-t-xl transition-all">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p>{description && description}</p>
            </div>
            <Image src={image} alt={title} className="w-full h-full object-cover" />
        </div>
    )
}