"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDataSource = void 0;
const http_interceptor_1 = require("../utils/http_interceptor");
class ProductDataSource {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    read(onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, http_interceptor_1.httpGet)(`${this.baseUrl}api/Tutorial`, response => onResponse(response), response => onError(response));
        });
    }
    readById(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, http_interceptor_1.httpGet)(`${this.baseUrl}api/Tutorial/${id}`, response => onResponse(response), response => onError(response));
        });
    }
}
exports.ProductDataSource = ProductDataSource;
//# sourceMappingURL=product_datasource.js.map