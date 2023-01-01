'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Theme = function (_a) {
    var darkIcon = _a.darkIcon, lightIcon = _a.lightIcon, altDark = _a.altDark, altLight = _a.altLight, imgWidth = _a.imgWidth, imgHeight = _a.imgHeight, myClass = _a.myClass;
    var themeFromLocalStorage = localStorage.getItem('theme');
    var defaultTheme = themeFromLocalStorage === 'light' || themeFromLocalStorage === 'dark' ? themeFromLocalStorage : 'light';
    var _b = React.useState(defaultTheme), theme = _b[0], setTheme = _b[1];
    var toggleTheme = function () {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    React.useEffect(function () {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (React__default["default"].createElement("div", { className: myClass, onClick: toggleTheme }, theme === 'dark' ? (React__default["default"].createElement("img", { src: darkIcon, alt: altDark, width: imgWidth, height: imgHeight })) : (React__default["default"].createElement("img", { src: lightIcon, alt: altLight, width: imgWidth, height: imgHeight }))));
};

exports.Theme = Theme;
//# sourceMappingURL=index.js.map
