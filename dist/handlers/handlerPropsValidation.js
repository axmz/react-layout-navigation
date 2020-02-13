"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handlerPropsValidation(e, handlerProps) {
    if (handlerProps.preventDefault === false) {
    }
    else {
        e.preventDefault();
    }
    if (handlerProps.stopPropagation === true) {
        e.stopPropagation();
    }
}
exports.default = handlerPropsValidation;
//# sourceMappingURL=handlerPropsValidation.js.map