"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { cn } from "@/utils/cn"; // Ensure you have a class merging utility
import { usePathname } from "next/navigation";
import ThemeToggle from "../ui/ThemeToggle";
import { Logo } from "..";

interface NavItem {
    title: string;
    link: string;
}

const navItems: NavItem[] = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Our Work", link: "/works" },
    { title: "Our Services", link: "/services" },
];

export const Header: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 w-full bg-white dark:bg-primary shadow-md z-50">
            <div className="flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
                {/* Logo */}
                <Link href="/">
                    <Logo className="w-24 md:w-40" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-6 text-primary dark:text-white font-medium">
                        {navItems.map((item, index) => (
                            <li key={index} className={cn(
                                pathname === item.link ? "border-b-[0.1rem] border-accent transition-all" : ""
                            )}>
                                <Link
                                    href={item.link}
                                    className={cn(
                                        "hover:text-accent transition",
                                        pathname === item.link ? "text-accent font-bold" : ""
                                    )}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>


                <div className="flex gap-4">
                    <div className="hidden md:block">
                        <Link href={"/contact"}>
                            <Button variant="primary" className={cn(
                                pathname === "/contact" ? "border-[0.18rem] border-accent transition-all" : ""
                            )}>Get Started</Button>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl text-primary dark:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={cn(
                    "md:hidden fixed inset-0 bg-black/50 transition-opacity",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                onClick={() => setIsOpen(false)}
            ></div>

            <div
                className={cn(
                    "md:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-primary shadow-lg flex flex-col gap-6 p-6 transition-transform",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="w-full flex justify-between items-center">
                    <ThemeToggle />
                    <button
                        className="self-end text-3xl text-primary dark:text-white"
                        onClick={() => setIsOpen(false)}
                    >
                        ✕
                    </button>
                </div>
                <nav>
                    <ul className="flex flex-col gap-4 text-primary dark:text-white font-medium">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.link}
                                    className={cn(
                                        pathname === item.link ? "text-accent font-bold border-b-[0.1rem] border-b-accent" : ""
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Link href={"/contact"}>
                    <Button variant="primary">
                        Get Started
                    </Button>
                </Link>
            </div>
        </header>
    );
};
