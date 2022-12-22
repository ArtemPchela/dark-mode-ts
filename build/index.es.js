import React, { useState, useEffect } from 'react';

var Theme = function (_a) {
    var darkIcon = _a.darkIcon, lightIcon = _a.lightIcon, altDark = _a.altDark, altLight = _a.altLight, imgWidth = _a.imgWidth, imgHeight = _a.imgHeight, myClass = _a.myClass;
    var themeFromLocalStorage = localStorage.getItem('theme');
    var defaultTheme = themeFromLocalStorage === 'light' || themeFromLocalStorage === 'dark' ? themeFromLocalStorage : 'light';
    var _b = useState(defaultTheme), theme = _b[0], setTheme = _b[1];
    var toggleTheme = function () {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    useEffect(function () {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (React.createElement("div", { className: myClass, onClick: toggleTheme }, theme === 'dark' ? (React.createElement("img", { src: darkIcon, alt: altDark, width: imgWidth, height: imgHeight })) : (React.createElement("img", { src: lightIcon, alt: altLight, width: imgWidth, height: imgHeight }))));
};

export { Theme };
//# sourceMappingURL=index.es.js.map
