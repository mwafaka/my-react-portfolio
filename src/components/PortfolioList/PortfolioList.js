import { jsx as _jsx } from "react/jsx-runtime";
import './PortfolioList';
function PortfolioList(_a) {
    var title = _a.title, active = _a.active, setSelected = _a.setSelected, id = _a.id;
    return (_jsx("li", { className: active ? 'portfolioList active' : 'portfolioList', onClick: function () { return setSelected(id); }, children: title }));
}
export default PortfolioList;
