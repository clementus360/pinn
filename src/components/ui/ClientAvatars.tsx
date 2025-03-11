import { cn } from "@/utils/cn";

interface ClientAvatarProps {
    images: string[];
}

export const ClientAvatars: React.FC<ClientAvatarProps> = ({ images }) => {
    return (
        <div className="flex flex-col items-center justify-center w-max">
            <div className="flex items-center justify-center w-max">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={cn(
                            "w-12 h-12 bg-primary rounded-full",
                            index > 0 ? "-ml-4" : ""
                        )}
                        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></div>
                ))}
            </div>
            <p className="text-sm font-semibold text-center w-max">10+ Beloved Clients</p>
        </div>
    );

}