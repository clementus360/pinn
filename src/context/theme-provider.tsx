'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
    children,
    defaultTheme = 'system',
    storageKey = 'theme',
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme | null>(null)

    useEffect(() => {
        const savedTheme = localStorage.getItem(storageKey) as Theme | null
        if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
            setTheme(savedTheme)
        } else {
            setTheme(defaultTheme)
        }
    }, [defaultTheme, storageKey])

    useEffect(() => {
        if (!theme) return

        const root = document.documentElement
        root.classList.remove('light', 'dark')

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
            root.classList.add(systemTheme)
        } else {
            root.classList.add(theme)
        }

        localStorage.setItem(storageKey, theme)
    }, [theme, storageKey])

    return (
        <ThemeProviderContext.Provider value={{ theme: theme ?? 'system', setTheme }}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)
    if (!context) throw new Error('useTheme must be used within a ThemeProvider')
    return context
}
