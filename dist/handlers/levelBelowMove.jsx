"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlerPropsValidation_1 = __importDefault(require("./handlerPropsValidation"));
function levelBelowMove(e, // KeyboardEvent
step, handlerProps) {
    var _a, _b;
    handlerPropsValidation_1.default(e, handlerProps);
    const parentEl = e.currentTarget;
    let currentIdx = e.target.tabIndex;
    const parentLevel = parseInt((_a = parentEl.dataset.level, (_a !== null && _a !== void 0 ? _a : "-1")));
    const currentLevel = parseInt((_b = e.target.dataset.level, (_b !== null && _b !== void 0 ? _b : "-1")));
    if (currentLevel === parentLevel) {
        currentIdx = -1;
    }
    const tabbables = parentEl.querySelectorAll(`[data-level="${parentLevel + 1}"][tabIndex]`);
    const l = tabbables.length;
    let nextIdx = currentIdx;
    if (currentIdx + step > l - 1) {
        nextIdx = 0;
    }
    else if (currentIdx + step < 0) {
        nextIdx = l - 1;
    }
    else {
        nextIdx = currentIdx + step;
    }
    const nextElement = tabbables[nextIdx];
    if (nextElement) {
        nextElement.focus();
    }
}
exports.default = levelBelowMove;
//# sourceMappingURL=levelBelowMove.jsx.map