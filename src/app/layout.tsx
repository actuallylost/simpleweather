import type { Metadata } from "next";
import Script from "next/script";
import { Comfortaa } from "@next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-comfortaa",
    display: "swap",
});

export const metadata: Metadata = {
    title: "SimpleWeather",
    description: "A simple and easy-to-use weather web application.",
    viewport: "width=device-width, initial-scale=1",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    keywords: ["weather", "simpleweather"],
    authors: [{ name: "Argyris" }, { name: "Lost" }],
    openGraph: {
        type: "website",
        title: "SimpleWeather",
        description: "A simple and easy-to-use weather web application.",
        url: "http://localhost:3000/",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${comfortaa.variable}`}>
            <head>
                <Script id="theme-script" strategy="afterInteractive">{`
                let userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && userPrefersDark)) {
                    document.documentElement.classList.add('dark')
                    localStorage.theme = 'dark'
                } else {
                    document.documentElement.classList.remove('dark')
                    localStorage.theme = 'light'
                }
            `}</Script>
            </head>
            <body>{children}</body>
        </html>
    );
}
