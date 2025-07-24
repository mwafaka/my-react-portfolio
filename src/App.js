import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Work from './components/Work/Work';
import Menu from './components/menu/Menu';
import About from './components/About/About';
import Csharp from './components/Csharp/Csharp';
import Contact from './components/Contact/Contact';
import HireMe from './components/HireMe/HireMe';
import Footer from './components/Footer/Footer';
import MasteringCourse from './components/MasteringCourse/MasteringCourse';
import './App.scss';
import { useState } from 'react';
function App() {
    var _a = useState(false), menuOpen = _a[0], setMenuOpen = _a[1];
    return (_jsxs("div", { className: 'app', children: [_jsx(Topbar, { menuOpen: menuOpen, setMenuOpen: setMenuOpen }), _jsx(Menu, { menuOpen: menuOpen, setMenuOpen: setMenuOpen }), _jsxs("div", { className: "sections", children: [_jsx(Intro, {}), _jsx(About, {}), _jsx(Work, {}), _jsx(Csharp, {}), _jsx(MasteringCourse, {}), _jsx(HireMe, {}), _jsx(Contact, {}), _jsx(Footer, {})] })] }));
}
export default App;
