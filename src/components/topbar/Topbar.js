import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import './Topbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import Mail from '@mui/icons-material/Mail';
function Topbar(_a) {
    var menuOpen = _a.menuOpen, setMenuOpen = _a.setMenuOpen;
    return (_jsx("div", { className: 'topbar ' + (menuOpen && 'active'), children: _jsxs("div", { className: "wrapper", children: [_jsxs("div", { className: "left", children: [_jsx("a", { href: '#intro', className: 'logo', children: "Mwafak (Mo) Arbash" }), _jsxs("div", { className: "itemContainer", children: [_jsx(Mail, { className: 'icon' }), _jsx("span", { children: "mwarbash@gmail.com" })] })] }), _jsx("div", { className: "right", children: _jsxs("div", { className: "hamburger", onClick: function () { return setMenuOpen(!menuOpen); }, children: [_jsx("span", { className: 'line1' }), _jsx("span", { className: 'line2' }), _jsx("span", { className: 'line3' })] }) })] }) }));
}
export default Topbar;
