"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlerPropsValidation_1 = __importDefault(require("./handlerPropsValidation"));
function sameLevelMove(e, step, handlerProps) {
    handlerPropsValidation_1.default(e, handlerProps);
    const currentEl = e.target;
    let currentLevel = parseInt(currentEl.dataset.level);
    let currentIdx = currentEl.tabIndex;
    let parentLevel = currentLevel - 1;
    const parentEl = currentEl.closest(`[data-level="${parentLevel}"]`);
    const tabbables = parentEl.querySelectorAll(`[data-level="${currentLevel}"][tabIndex]`);
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
exports.default = sameLevelMove;
//# sourceMappingURL=sameLevelMove.jsx.map