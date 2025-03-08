import Image from 'next/image';
import logo from '@/assets/logo-w.png';
import { Button } from '../ui/Button';
import Link from 'next/link';

interface NavItem {
    title: string;
    link: string;
}

const navItems: NavItem[] = [
    { title: 'About Us', link: '#' },
    { title: 'Our Work', link: '#' },
    { title: 'Our Services', link: '#' },
];

export const Footer: React.FC = () => {
    return (
        <footer className='flex flex-col gap-8 md:gap-4 px-4 md:px-24 py-8 items-center justify-center h-max bg-primary'>
            <div className='flex flex-col md:flex-row gap-12 md:gap-0 items-center justify-between w-full'>
                <Link href={'/'}>
                    <Image src={logo} alt='Pinn Creative Hub' className='w-auto h-16' />
                </Link>

                <nav>
                    <ul className='flex flex-col md:flex-row items-center md:items-start gap-8 text-white font-medium'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <Button variant='secondary'>Get Started</Button>
                </div>
            </div>
            <div className='h-[0.4px] w-full bg-white'></div>

            <p className='text-center'>©2025 Pinn Creative Hub, All Rights Reserved</p>
        </footer>
    );
}