"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = __importStar(require("react"));
var handlers_1 = require("../../../../handlers");
var Wrapper = function (_a) {
    var component = _a.component, children = _a.children, preventDefault = _a.preventDefault, stopPropagation = _a.stopPropagation, callback = _a.callback, otherProps = __rest(_a, ["component", "children", "preventDefault", "stopPropagation", "callback"]);
    var ref = react_1.useRef(null);
    var props = { preventDefault: preventDefault, callback: callback, stopPropagation: stopPropagation };
    var handler = function (e) {
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
    react_1.useEffect(function () {
        var app = ref.current;
        if (app) {
            app.focus();
            app.addEventListener("keydown", handler);
        }
        return function () {
            var _a;
            (_a = app) === null || _a === void 0 ? void 0 : _a.removeEventListener("keydown", handler);
        };
    }, []);
    return react_1.default.createElement((component = "div"), __assign({ ref: ref, "data-level": -1 }, otherProps), children);
};
exports.default = Wrapper;
//# sourceMappingURL=wrapper.js.map