import { ContactForm, ContactText } from '@/components';
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
            <div className="flex flex-col md:grid md:grid-cols-[3fr_4fr] gap-16 px-4 py-24 md:py-24 items-center justify-center h-max text-primary dark:text-white">
                <ContactText />
                <ContactForm contactLinks={contactLinks} />
            </div>
        </div>
    )
}
