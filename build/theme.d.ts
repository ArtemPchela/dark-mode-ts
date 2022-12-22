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
export declare const Theme: ({ darkIcon, lightIcon, altDark, altLight, imgWidth, imgHeight, myClass }: ThemeProps) => JSX.Element;
export {};
