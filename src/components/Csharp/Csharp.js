import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './Csharp.scss';
import { Csharpx } from '../../data';
function Csharp() {
    var _a = useState('Csharp'), selected = _a[0], setSelected = _a[1];
    var _b = useState([]), data = _b[0], setData = _b[1];
    var list = [
        { id: 'Csharp', title: '.Net Projects' },
    ];
    useEffect(function () {
        switch (selected) {
            case 'Csharp':
                setData(Csharpx);
                break;
            default: setData(Csharpx);
        }
    }, [selected]);
    return (_jsxs("section", { className: "portfolio", id: "portfolio", children: [_jsx("h2", { className: 'section-title', children: "C# Projects" }), _jsx("ul", { className: "portfolio__list", children: list.map(function (item) { return (_jsx(PortfolioList, { title: item.title, active: selected === item.id, setSelected: setSelected, id: item.id }, item.id)); }) }), _jsx("div", { className: "portfolio__container", children: data.map(function (d) { return (_jsxs("a", { href: d.url, className: "portfolio__item", target: "_blank", rel: "noopener noreferrer", "aria-label": "View project: ".concat(d.title), children: [_jsx("img", { src: d.img, alt: d.title, loading: "lazy" }), _jsx("span", { className: "badge badge--".concat(d.level.toLowerCase()), children: d.level }), _jsx("h3", { children: d.title })] }, d.id)); }) })] }));
}
export default Csharp;
