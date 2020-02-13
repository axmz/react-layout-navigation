"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var handlerPropsValidation_1 = __importDefault(require("./handlerPropsValidation"));
function levelsMove(e, step, handlerProps) {
    var _a;
    handlerPropsValidation_1.default(e, handlerProps);
    var currentEl = e.target;
    var currentLevel = parseInt(currentEl.dataset.level);
    var parentLevel = currentLevel === -1 ? -1 : currentLevel - 1;
    var parentParentLevel = parentLevel === -1 ? -1 : parentLevel - 1;
    var parentEl = currentEl.closest("[data-level=\"" + parentLevel + "\"]");
    var parentParentEl = parentEl.closest("[data-level=\"" + parentParentLevel + "\"]");
    var parentIndex = parentEl.tabIndex;
    var next = currentLevel + step;
    var tabbables = [];
    if (step > 0) {
        tabbables = currentEl.querySelectorAll("[data-level=\"" + next + "\"]");
        if (tabbables.length > 0) {
            var nextElement = tabbables[0];
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
        tabbables = parentParentEl.querySelectorAll("[data-level=\"" + next + "\"][tabIndex=\"" + parentIndex + "\"]");
        if (tabbables.length > 0) {
            var nextElement = tabbables[0];
            nextElement.focus();
        }
        else {
            parentEl.focus();
        }
    }
}
exports.levelsMove = levelsMove;
//# sourceMappingURL=levelsMove.js.map