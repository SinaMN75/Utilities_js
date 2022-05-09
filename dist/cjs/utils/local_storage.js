"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = exports.setData = void 0;
function setData(key, value) {
    localStorage.setItem(key, value);
}
exports.setData = setData;
function getData(key) {
    return localStorage.getItem(key);
}
exports.getData = getData;
//# sourceMappingURL=local_storage.js.map