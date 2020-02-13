"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var handlerPropsValidation_1 = __importDefault(require("./handlerPropsValidation"));
function sameLevelMove(e, step, handlerProps) {
    handlerPropsValidation_1.default(e, handlerProps);
    var currentEl = e.target;
    var currentLevel = parseInt(currentEl.dataset.level);
    var currentIdx = currentEl.tabIndex;
    var parentLevel = currentLevel - 1;
    var parentEl = currentEl.closest("[data-level=\"" + parentLevel + "\"]");
    var tabbables = parentEl.querySelectorAll("[data-level=\"" + currentLevel + "\"][tabIndex]");
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
}
exports.default = sameLevelMove;
//# sourceMappingURL=sameLevelMove.js.map