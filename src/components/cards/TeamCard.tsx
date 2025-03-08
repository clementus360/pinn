import Image, { StaticImageData } from "next/image"

interface TeamCardProps {
    name: string,
    position: string,
    image: StaticImageData
}

export const TeamCard: React.FC<TeamCardProps> = ({name, position, image}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
        <div className="relative h-max rounded-4xl overflow-hidden" >
            <Image src={image} alt={name}  className="relative z-10 min-h-96 object-cover"/>
            <div className="absolute z-0 bottom-0 w-full h-[16rem] bg-primary rounded-4xl"></div>
        </div>
        <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg md:text-xl cursor-pointer">{name}</h3>
            <p className="text-lg text-accent">{position}</p>
        </div>
    </div>
  )
}
