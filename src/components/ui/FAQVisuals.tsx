import Image from 'next/image'

interface FAQVisualProps {
  image: string
}

export const FAQVisuals: React.FC<FAQVisualProps> = ({ image }) => {
  return (
    <Image height={400} width={400} src={image} alt={'FAQs'} className='w-full md:w-[30vw] h-full rounded-3xl' />
  )
}
