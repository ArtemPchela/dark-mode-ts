/// <reference types="react" />
interface ThemeProps {
    darkIcon?: string;
    lightIcon?: string;
    altDark?: string;
    altLight?: string;
    imgWidth?: string;
    imgHeight?: string;
    myClass?: string;
}
type Theme = 'dark' | 'light';
declare const Theme: ({ darkIcon, lightIcon, altDark, altLight, imgWidth, imgHeight, myClass }: ThemeProps) => JSX.Element;
export default Theme;
