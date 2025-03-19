interface ServiceCardProps {
    index: number;
    title: string;
    description: string;
    image: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, description, image }) => {
    return (
        <div
            className="flex items-end px-8 py-12 justify-end aspect-square relative rounded-2xl overflow-hidden"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            <div className="absolute bottom-0 inset-0 bg-gradient-to-t from-primary via-primary/90 to-transparent" />

            <p className="absolute -top-4 opacity-40 left-0 text-[8rem] leading-none text-white font-bold z-10">
                {index < 10 ? '0' : ''}{index}
            </p>

            <div className="text-white z-10 relative">
                <h3 className="font-medium text-xl">{title}</h3>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
};