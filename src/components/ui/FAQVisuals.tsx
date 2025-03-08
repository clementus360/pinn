import Image from 'next/image'
import FAQImage from '@/assets/FAQs.png'

export const FAQVisuals = () => {
  return (
    <Image src={FAQImage} alt={'FAQs'} className='w-full md:w-[30vw] h-full rounded-3xl'/> 
  )
}
