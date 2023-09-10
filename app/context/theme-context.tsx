"use client";

import React, { createContext, useContext, useEffect, useState } from 'react'

interface ThemeProps {
    light: "light",
    dark: "dark"
}

interface ThemeContextProviderProps{
    children: React.ReactNode
}

interface ThemeContextType{
    theme: keyof ThemeProps,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null);


export default function ThemeContextProvider({
    children
} : ThemeContextProviderProps) {

    

const [theme, setTheme] = useState<keyof ThemeProps>("light");


    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        if (newTheme === "dark") {
            document.documentElement.classList.remove("light");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
        document.documentElement.classList.add(newTheme);
        window.localStorage.setItem("theme", newTheme);
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as keyof ThemeProps | null;

        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === "dark") {
                document.documentElement.classList.remove("light");
            }
            else {
                document.documentElement.classList.remove("dark");
            }
            document.documentElement.classList.add(localTheme);
        }
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
        }
    }, [])
    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
    
}


export function useTheme(){
    const context = useContext(ThemeContext);

    if(context === null){
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
}