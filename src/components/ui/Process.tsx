import React from 'react';

interface ProcessStepProps {
    title: string;
    steps: string[];
    linesCount: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ title, steps, linesCount }) => {
    return (
        <div className="flex flex-col w-full text-primary gap-4">
            <p className="font-semibold text-center">{title}</p>
            <div className="flex flex-col gap-16">
                <div className="border-t-2 border-x-2 border-primary h-8 rounded-t-xl md:rounded-t-4xl"></div>
                <div className="relative flex justify-between w-full h-full">
                    <div className="absolute z-10 top-12 w-full h-max flex p-2 items-center justify-center gap-2 md:gap-0">
                        {steps.map((step, index) => (
                            <div key={index} className="w-full h-max flex p-2 items-center justify-center bg-primary border-[0.1rem] border-accent text-white rounded-full text-sm md:text-base">
                                <p>{step}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex absolute justify-between w-full h-40">
                        {Array.from({ length: linesCount }).map((_, index) => (
                            <div key={index} className="bg-primary w-px h-full"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Process: React.FC = () => {
    const processSteps = [
        {
            title: 'Discovery',
            steps: ['User Interview'],
            linesCount: 3,
        },
        {
            title: 'Design',
            steps: ['Research & Strategy', 'Moodboard', 'Wireframing'],
            linesCount: 6,
        },
        {
            title: 'Final Design',
            steps: ['Visual Design'],
            linesCount: 3,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr_1fr] gap-8 md:gap-0 min-h-64 w-full">
            {processSteps.map((step, index) => (
                <ProcessStep key={index} title={step.title} steps={step.steps} linesCount={step.linesCount} />
            ))}
        </div>
    );
};

export default Process;