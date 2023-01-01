import React, {useEffect, useState} from 'react'

interface ThemeProps {
    darkIcon?: string
    lightIcon?: string
    altDark?: string
    altLight?: string
    imgWidth?: string
    imgHeight?: string
    myClass?: string
}

type Theme = 'dark' | 'light'

export const Theme = ({darkIcon, lightIcon, altDark, altLight, imgWidth, imgHeight, myClass}: ThemeProps) => {
    const themeFromLocalStorage = localStorage.getItem('theme')
    const defaultTheme =
        themeFromLocalStorage === 'light' || themeFromLocalStorage === 'dark' ? themeFromLocalStorage : 'light'
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div className={myClass} onClick={toggleTheme}>
            {theme === 'dark' ? (
                <img src={darkIcon} alt={altDark} width={imgWidth} height={imgHeight}/>
            ) : (
                <img src={lightIcon} alt={altLight} width={imgWidth} height={imgHeight}/>
            )}
        </div>
    )
}
