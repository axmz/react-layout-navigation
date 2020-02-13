"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var handlerPropsValidation_1 = __importDefault(require("./handlerPropsValidation"));
function baseLevelMove(e, step, handlerProps) {
    handlerPropsValidation_1.default(e, handlerProps);
    var baseLevel = 0;
    var currentEl = e.target;
    var baseEl = currentEl.closest("[data-level=\"" + baseLevel + "\"]");
    var currentLevel = parseInt(currentEl.dataset.level);
    var currentIdx;
    if (currentLevel === -1) {
        currentLevel = 0;
        currentIdx = -1;
    }
    else {
        currentIdx = baseEl.tabIndex;
    }
    var parentEl = e.currentTarget;
    var tabbables = parentEl.querySelectorAll("[data-level=\"0\"][tabIndex]");
    var l = tabbables.length;
    var nextIdx = currentIdx;
    if (currentIdx + step > l - 1) {
        nextIdx = 0;
    }
    else if (currentIdx + step < 0) {
        nextIdx = l - 1;
    }
    else {
        nextIdx = currentIdx + step;
    }
    var nextElement = tabbables[nextIdx];
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
//# sourceMappingURL=baseLevelMove.js.map