"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const handlers_1 = require("../../handlers");
const Wrapper = (_a) => {
    var { component, children, preventDefault, stopPropagation, callback } = _a, otherProps = __rest(_a, ["component", "children", "preventDefault", "stopPropagation", "callback"]);
    const ref = react_1.useRef(null);
    const props = { preventDefault, callback, stopPropagation };
    const handler = (e) => {
        // tab
        if (e.keyCode === 9 && e.shiftKey) {
            handlers_1.baseLevelMove(e, -1, props);
            return;
        }
        // shift+tab
        if (e.keyCode === 9 && !e.shiftKey) {
            handlers_1.baseLevelMove(e, +1, props);
            return;
        }
        // ctrl+j DO NOTHING
        if (!e.shiftKey && e.ctrlKey && e.keyCode === 74) {
            e.preventDefault();
            return;
        }
        // ctrl+k DO NOTHING
        if (!e.shiftKey && e.ctrlKey && e.keyCode === 75) {
            e.preventDefault();
            return;
        }
        // ctrl+h DO NOTHING
        if (!e.shiftKey && e.ctrlKey && e.keyCode === 72) {
            e.preventDefault();
            return;
        }
        // ctrl+l DO NOTHING
        if (!e.shiftKey && e.ctrlKey && e.keyCode === 76) {
            e.preventDefault();
            return;
        }
    };
    react_1.useEffect(() => {
        const app = ref.current;
        if (app) {
            app.focus();
            app.addEventListener("keydown", handler);
        }
        return () => {
            var _a;
            (_a = app) === null || _a === void 0 ? void 0 : _a.removeEventListener("keydown", handler);
        };
    }, []);
    return react_1.default.createElement((component = "div"), Object.assign({ ref, "data-level": -1 }, otherProps), children);
};
exports.default = Wrapper;
//# sourceMappingURL=wrapper.jsx.map