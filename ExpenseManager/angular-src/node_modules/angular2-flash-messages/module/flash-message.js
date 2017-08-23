"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FlashMessage = (function () {
    function FlashMessage(text, cssClass) {
        this.id = (FlashMessage.nextId++);
        this.text = 'default text';
        this.cssClass = '';
        this.text = text;
        this.cssClass = cssClass;
    }
    return FlashMessage;
}());
FlashMessage.nextId = 0;
exports.FlashMessage = FlashMessage;
//# sourceMappingURL=flash-message.js.map