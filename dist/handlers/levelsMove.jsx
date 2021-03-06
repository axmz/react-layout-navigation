"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlerPropsValidation_1 = __importDefault(require("./handlerPropsValidation"));
function levelsMove(e, step, handlerProps) {
    var _a;
    handlerPropsValidation_1.default(e, handlerProps);
    const currentEl = e.target;
    let currentLevel = parseInt(currentEl.dataset.level);
    const parentLevel = currentLevel === -1 ? -1 : currentLevel - 1;
    const parentParentLevel = parentLevel === -1 ? -1 : parentLevel - 1;
    const parentEl = currentEl.closest(`[data-level="${parentLevel}"]`);
    const parentParentEl = parentEl.closest(`[data-level="${parentParentLevel}"]`);
    const parentIndex = parentEl.tabIndex;
    const next = currentLevel + step;
    let tabbables = [];
    if (step > 0) {
        tabbables = currentEl.querySelectorAll(`[data-level="${next}"]`);
        if (tabbables.length > 0) {
            const nextElement = tabbables[0];
            nextElement.focus();
        }
        else {
            // callback
            if ((_a = handlerProps) === null || _a === void 0 ? void 0 : _a.callback) {
                handlerProps.callback(e);
            }
        }
    }
    else if (step < 0) {
        tabbables = parentParentEl.querySelectorAll(`[data-level="${next}"][tabIndex="${parentIndex}"]`);
        if (tabbables.length > 0) {
            const nextElement = tabbables[0];
            nextElement.focus();
        }
        else {
            parentEl.focus();
        }
    }
}
exports.levelsMove = levelsMove;
//# sourceMappingURL=levelsMove.jsx.map