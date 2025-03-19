import { WorksHero } from "@/components";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col">
            <WorksHero />
            {children}
        </div>
    )
}