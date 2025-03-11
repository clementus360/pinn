export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col">
            <section className="flex flex-col gap-4 px-4 md:px-40 py-24 md:py-24 items-center justify-center h-max">
                <h1 className="md:w-6/12 text-4xl md:text-6xl text-center font-medium text-primary">Welcome to the Pinn Hall of Fame!</h1>
                <p className="text-center text-primary md:w-8/12">We don’t just make things look good—we make them work. Whether it’s branding, web design, or ads that stop thumbs mid-scroll, our projects speak for themselves . Check out what we’ve done, then let’s talk about what we can do for you!</p>
            </section>
            {children}
        </div>
    )
}