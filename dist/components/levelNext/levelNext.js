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
var handlers_1 = require("../../handlers");
var LevelNext = function (_a) {
    var component = _a.component, children = _a.children, stopPropagation = _a.stopPropagation, preventDefault = _a.preventDefault, callback = _a.callback, otherProps = __rest(_a, ["component", "children", "stopPropagation", "preventDefault", "callback"]);
    var ref = react_1.useRef(null);
    var handlerProps = { preventDefault: preventDefault, callback: callback, stopPropagation: stopPropagation };
    var handler = function (e) {
        // ctrl+j
        if (!e.shiftKey && e.ctrlKey && e.keyCode === 74) {
            handlers_1.sameLevelMove(e, +1, handlerProps);
            return;
        }
        // ctrl+k
        if (!e.shiftKey && e.ctrlKey && e.keyCode === 75) {
            handlers_1.sameLevelMove(e, +1, handlerProps);
            return;
        }
        // enter / ctrl+l
        if ((e.keyCode === 13 && !e.ctrlKey) || (!e.shiftKey && e.ctrlKey && e.keyCode === 76)) {
            handlers_1.levelsMove(e, +1, handlerProps);
            return;
        }
        // esc / ctrl+h
        if (e.keyCode === 27 || (!e.shiftKey && e.ctrlKey && e.keyCode === 72)) {
            handlers_1.levelsMove(e, -1, handlerProps);
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
    var c = component ? component : "div";
    return react_1.default.createElement(c, __assign({ ref: ref }, otherProps), children);
};
exports.default = LevelNext;
//# sourceMappingURL=levelNext.js.map