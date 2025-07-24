import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Menu.scss';
function Menu(_a) {
    var menuOpen = _a.menuOpen, setMenuOpen = _a.setMenuOpen;
    return (_jsx("div", { className: 'menu ' + (menuOpen && 'active'), children: _jsxs("ul", { children: [_jsx("li", { onClick: function () { return setMenuOpen(false); }, children: _jsx("a", { href: '#intro', children: "Home" }) }), _jsx("li", { onClick: function () { return setMenuOpen(false); }, children: _jsx("a", { href: '#portfolio', children: "Projects" }) }), _jsx("li", { onClick: function () { return setMenuOpen(false); }, children: _jsx("a", { href: '#contact', children: "Contact" }) })] }) }));
}
export default Menu;
