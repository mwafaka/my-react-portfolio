import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
// Import images
import manImage from '../../assets/m.jpeg';
import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css.png';
import jsLogo from '../../assets/js.png';
import reactLogo from '../../assets/react.png';
import nodeLogo from '../../assets/node.png';
import pythonLogo from '../../assets/python.png';
import mongoLogo from '../../assets/mongo.png';
import java from '../../assets/java.png';
import net from '../../assets/.net.png';
function Intro() {
    var textRef = useRef();
    useEffect(function () {
        var timeout = setTimeout(function () {
            init(textRef.current, {
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                strings: ['Full Stack Web Developer']
            });
        }, 1000); // Delay matches the fadeIn animation
        return function () { return clearTimeout(timeout); }; // Cleanup
    }, []);
    return (_jsxs("div", { className: 'Intro', id: 'intro', children: [_jsx("div", { className: "left", children: _jsx("div", { className: "imgContainer", children: _jsx("img", { src: manImage, alt: "Man" }) }) }), _jsx("div", { className: "right", children: _jsxs("div", { className: "wrapper", children: [_jsx("h2", { children: "Hi There, I\u2019m" }), _jsx("h1", { children: "Mwafak (Mo) Arbash" }), _jsx("h3", { children: _jsx("span", { ref: textRef }) })] }) }), _jsxs("div", { className: "bubbles", children: [_jsx("img", { src: htmlLogo, alt: "HTML" }), _jsx("img", { src: net, alt: "net", className: "rounded-[24px]" }), _jsx("img", { src: java, alt: "java" }), _jsx("img", { src: cssLogo, alt: "CSS" }), _jsx("img", { src: jsLogo, alt: "JavaScript" }), _jsx("img", { src: reactLogo, alt: "React" }), _jsx("img", { src: nodeLogo, alt: "Node.js" }), _jsx("img", { src: pythonLogo, alt: "Python" }), _jsx("img", { src: mongoLogo, alt: "MongoDB" })] })] }));
}
export default Intro;
