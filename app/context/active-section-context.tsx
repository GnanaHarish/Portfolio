"use client";

import React, { useState, createContext, useContext } from 'react'
import { SectionName } from '../lib/types';


interface ActiveSectionContextProviderProps {
    children: React.ReactNode
}

interface ActiveSectionContextType {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
    timeOfLastClick: number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);


export default function ActiveSectionContextProvider({
    children
}: ActiveSectionContextProviderProps) {

    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);
    return (
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
        }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}



export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "Use it Inside ActiveSectionContext"
        )
    }

    return context;
}