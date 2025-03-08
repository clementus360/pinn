import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { GradientBackground, Footer, Header } from "@/components";
import { CTA } from "@/components/layout/CTA";

const gilroy = localFont({
  src: [
    {
      path: '../fonts/Gilroy-Thin.ttf',
      weight: '100',
      style: 'thin',
    },
    {
      path: '../fonts/Gilroy-Light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../fonts/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-gilroy',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Pinn Creative Hub",
  description: "Pinn Creative Hub is a platform for creative professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroy.variable} antialiased`}
      >
        <GradientBackground>
          <Header />
          <div className="pt-24">
            {children}
          </div>
          <CTA/>
          <Footer />
        </GradientBackground>
      </body>
    </html>
  );
}
