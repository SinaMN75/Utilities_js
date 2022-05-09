"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePureComponent = exports.BaseComponent = void 0;
const react_1 = require("react");
class BaseComponent extends react_1.Component {
    showLoading() {
        console.log();
    }
}
exports.BaseComponent = BaseComponent;
class BasePureComponent extends react_1.PureComponent {
}
exports.BasePureComponent = BasePureComponent;
//# sourceMappingURL=base_component.js.map