import Image from "next/image";
import { Quotes } from "../icons/Quotes";

interface TestimonialCardProps {
  name: string;
  title: string;
  testimonial: string;
  image: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, testimonial, image }) => {
  return (
    <div className="relative flex flex-col gap-4 md:gap-8 justify-center px-4 sm:px-8 md:px-16 py-6 md:py-8 bg-primary text-white rounded-3xl md:rounded-4xl w-full max-w-[32rem]">
      <div className="flex flex-col gap-2 md:gap-4">
        <span className="w-8 h-8 md:w-16 md:h-16">
          <Quotes />
        </span>
        <p className="text-sm sm:text-base md:text-lg">{testimonial}</p>
      </div>
      <div className="flex items-center self-end gap-2 md:gap-4">
        <div className="flex items-end flex-col">
          <p className="font-medium text-sm sm:text-base">{name}</p>
          <p className="text-accent font-medium text-xs sm:text-sm">{title}</p>
        </div>
        <Image 
          width={100} 
          height={100} 
          src={image} 
          alt={name} 
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 aspect-square rounded-full"
        />
      </div>
    </div>
  )
}