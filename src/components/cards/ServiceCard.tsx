interface ServiceCardProps {
    index: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, description }) => {
    return (
        <div className="flex items-end px-8 py-12 justify-end aspect-square relative bg-primary rounded-2xl overflow-hidden">
            <p className="absolute -top-4 opacity-20 left-0 text-[8rem] leading-none text-accent font-bold">
                {index < 10 ? '0' : ''}{index}
            </p>
            <div className="text-white">
                <h3 className="font-medium text-xl">{title}</h3>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}
