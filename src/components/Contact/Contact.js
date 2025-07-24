import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Contact.scss";
var Contact = function () {
    return (_jsx("section", { className: "contact", id: "contact", children: _jsxs("div", { className: "contact__content", children: [_jsx("h2", { children: "Let\u2019s Connect" }), _jsx("p", { children: "I'm always open to discussing new projects, opportunities, or just talking tech. Feel free to drop me a message!" }), _jsxs("form", { className: "contact__form", onSubmit: function (e) { return e.preventDefault(); }, children: [_jsx("input", { type: "text", name: "name", placeholder: "Your Name", required: true }), _jsx("input", { type: "email", name: "email", placeholder: "Your Email", required: true }), _jsx("textarea", { name: "message", placeholder: "Your Message", rows: "5", required: true }), _jsx("button", { type: "submit", children: "Send Message" })] })] }) }));
};
export default Contact;
