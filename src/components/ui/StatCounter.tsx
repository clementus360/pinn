"use client"

import CountUp from "react-countup";

interface StatCounterProps {
    index: number;
    title: string;
    value: number;
    type: "exact" | "plus" | "k" | "k-plus"
}

export const StatCounter: React.FC<StatCounterProps> = ({ index, title, value, type }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between">
            {index > 0 && <div className="w-[8rem] md:w-[0.1rem] h-[0.1rem] md:h-[8rem] bg-accent mx-24"></div>}
            <div className="flex flex-col items-center py-8 px-4">
                <h3 className="text-6xl text-center font-semibold">
                    <CountUp
                        enableScrollSpy
                        end={value}
                    />{type === "k" || type === "k-plus" && "k"} {type === "k-plus" || type === "plus" && "+"}</h3>
                <p className="text-center">{title}</p>
            </div>
        </div>
    )
}
