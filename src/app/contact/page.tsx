import { BehanceOutline, Button, GithubOutline, InstagramOutline, LinkedinOutline} from '@/components';
import { ContactTag } from '@/components/ui/ContactTag';
import { TextInput } from '@/components/ui/TextInput';
import Link from 'next/link';
import React from 'react'

interface ContactLink {
    title: string;
    type: "email" | "phone" | "address";
    link: string;
}

const contactLinks: ContactLink[] = [
    {
        title: 'Start A Project',
        type: 'email',
        link: 'hello@pinn.agency'
    },
    {
        title: 'Partner With Us',
        type: 'email',
        link: 'project@pinn.agency'
    },
    {
        title: 'Call Us',
        type: 'phone',
        link: '+250787123485'
    }
]

export default function Page() {
    return (
        <div className="flex flex-col gap-16 pb-24 px-4 md:px-24">
            <section className="flex flex-col md:grid md:grid-cols-[3fr_4fr] gap-16 px-4 py-24 md:py-24 items-center justify-center h-max text-primary dark:text-white">
                <div className="flex flex-col gap-8 items-center md:items-start justify-between">
                    <h1 className="text-4xl md:text-6xl text-center md:text-start  font-medium text-primary dark:text-white">Let’s Create, Collaborate, and Elevate!</h1>
                    <p className="text-center md:text-start text-primary dark:text-white">Got a project in mind? Need a creative boost? Or just want to say hi? We’re all ears (and keyboards). Whether it’s branding, web design, or social media magic, we’re here to bring your vision to life. Drop us a message, and let’s make something awesome together!</p>
                    <div className='flex gap-4'>
                        <span className='w-8 h-8 hover:scale-110 hover:text-accent transition-all rounded-full flex items-center justify-center'>
                            <Link href="">
                                <BehanceOutline />
                            </Link>
                        </span>
                        <span className='w-8 h-8 hover:scale-110 hover:text-accent transition-all rounded-full flex items-center justify-center'>
                            <Link href="">
                                <LinkedinOutline />
                            </Link>
                        </span>
                        <span className='w-8 h-8 hover:scale-110 hover:text-accent transition-all rounded-full flex items-center justify-center'>
                            <Link href="">
                                <InstagramOutline />
                            </Link>
                        </span>
                        <span className='w-8 h-8 hover:scale-110 hover:text-accent transition-all rounded-full flex items-center justify-center'>
                            <Link href="">
                                <GithubOutline />
                            </Link>
                        </span>
                        {/* <span className='w-8 h-8 hover:scale-110 hover:text-accent transition-all rounded-full flex items-center justify-center'>
                            <Link href="">
                                <TwitterOutline />
                            </Link>
                        </span> */}
                    </div>
                </div>

                <div className='bg-primary flex flex-col gap-8 px-8 py-8 w-full h-full rounded-4xl text-white'>
                    <h2 className="md:w-10/12 text-center md:text-start text-2xl md:text-4xl font-medium">Say Hello, We’re Listening!</h2>

                    <div className='flex flex-col'>
                        <TextInput label="Name" type="text" placeholder="Full name*" />
                        <div className='flex gap-4'>
                            <TextInput label="Company name" type="text" placeholder="Company name" />
                            <TextInput label="Email" type="email" placeholder="Email*" />
                        </div>
                        <TextInput label="Message" type="text" placeholder="Message" />
                    </div>

                    <Button variant={'tertiary'} className='w-full mt-8'>Contact Us</Button>

                    <div className='flex w-full justify-between'>
                        {contactLinks.map((link, index) => (
                            <ContactTag key={index} title={link.title} type={link.type} link={link.link} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
