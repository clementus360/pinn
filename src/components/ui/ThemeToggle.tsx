import { useTheme } from "@/context/theme-provider"
import { LightMode } from "../icons/DarkMode"
import { DarkMode } from "../icons/LightMode"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md text-primary dark:text-white hover:text-white hover:bg-primary dark:hover:bg-accent transition-colors cursor-pointer"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <LightMode /> : <DarkMode />}
        </button>
    )
}
