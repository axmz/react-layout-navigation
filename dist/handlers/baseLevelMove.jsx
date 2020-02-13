"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlerPropsValidation_1 = __importDefault(require("./handlerPropsValidation"));
function baseLevelMove(e, step, handlerProps) {
    handlerPropsValidation_1.default(e, handlerProps);
    const baseLevel = 0;
    const currentEl = e.target;
    const baseEl = currentEl.closest(`[data-level="${baseLevel}"]`);
    let currentLevel = parseInt(currentEl.dataset.level);
    let currentIdx;
    if (currentLevel === -1) {
        currentLevel = 0;
        currentIdx = -1;
    }
    else {
        currentIdx = baseEl.tabIndex;
    }
    const parentEl = e.currentTarget;
    const tabbables = parentEl.querySelectorAll(`[data-level="0"][tabIndex]`);
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
    // // focus first child - doesnt work well
    // const firstArr = Array.from(nextElement.children) as HTMLElement[];
    // const first = firstArr.find((el: HTMLElement) => {
    //   if (el.dataset && el.dataset.level) {
    //     return parseInt(el.dataset.level) === currentLevel + 1;
    //   }
    // }) as WithLevel;
    // if (first) first.focus();
}
exports.default = baseLevelMove;
//# sourceMappingURL=baseLevelMove.jsx.map