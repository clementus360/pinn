"use client"

import { cn } from "@/utils/cn";
import { useState } from "react";

interface FAQProps {
    question: string;
    answer: string;
}

export const FAQs: React.FC<FAQProps> = ({ question, answer }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleFaqs = () => {
        setOpen(!open);
    };

    return (
        <div className="flex flex-col gap-4 md:gap-2 w-full py-2 text-white border-b-[0.01rem] border-b-accent">
            <div className="w-full flex items-center justify-between">
                <h3
                    onClick={toggleFaqs}
                    className="font-semibold text-lg md:text-xl cursor-pointer"
                >
                    {question}
                </h3>
                <button
                    onClick={toggleFaqs}
                    className="text-5xl text-accent transition-transform cursor-pointer duration-300"
                >
                    {open ? "−" : "+"}
                </button>
            </div>

            <div
                className={cn(
                    "overflow-hidden transition-[max-height] duration-300 ease-in-out",
                    open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <p className="mb-2">{answer}</p>
            </div>
        </div>
    );
};
