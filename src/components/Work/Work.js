import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './Work.scss';
import { Reactx, FullApp, Backend, python } from '../../data';
function Work() {
    var _a = useState('ReactJs'), selected = _a[0], setSelected = _a[1];
    var _b = useState([]), data = _b[0], setData = _b[1];
    var list = [
        { id: 'ReactJs', title: 'React Projects' },
        { id: 'Vuejs', title: 'Vuejs Projects' },
        { id: 'Angular', title: 'Angular Projects' },
    ];
    useEffect(function () {
        switch (selected) {
            case 'ReactJs':
                setData(Reactx);
                break;
            case 'Vuejs':
                setData(FullApp);
                break;
            case 'Angular':
                setData(Backend);
                break;
            default: setData(Reactx);
        }
    }, [selected]);
    return (_jsxs("section", { className: "portfolio", id: "portfolio", children: [_jsx("h2", { children: "Javascript Projects" }), _jsx("ul", { className: "portfolio__list", children: list.map(function (item) { return (_jsx(PortfolioList, { title: item.title, active: selected === item.id, setSelected: setSelected, id: item.id }, item.id)); }) }), _jsx("div", { className: "portfolio__container", children: data.map(function (d) { return (_jsxs("a", { href: d.url, className: "portfolio__item", target: "_blank", rel: "noopener noreferrer", "aria-label": "View project: ".concat(d.title), children: [_jsx("img", { src: d.img, alt: d.title, loading: "lazy" }), _jsx("span", { className: "badge badge--".concat(d.level.toLowerCase()), children: d.level }), _jsx("h3", { children: d.title })] }, d.id)); }) })] }));
}
export default Work;
