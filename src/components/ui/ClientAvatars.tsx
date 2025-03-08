import { cn } from "@/utils/cn";

interface ClientAvatarProps {
    images: string[];
}

export const ClientAvatars: React.FC<ClientAvatarProps> = ({ images }) => {
    return (
        <div>
            <div className="flex items-center justify-center">
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
            <p className="text-sm font-semibold text-center">10+ Beloved Clients</p>
        </div>
    );

}