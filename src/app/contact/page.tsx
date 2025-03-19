import { BehanceOutline, Button, ContactForm, GithubOutline, InstagramOutline, LinkedinOutline} from '@/components';
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
        <div className="flex flex-col gap-16 pb-24 md:px-24">
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

                <ContactForm contactLinks={contactLinks} />
            </section>
        </div>
    )
}
