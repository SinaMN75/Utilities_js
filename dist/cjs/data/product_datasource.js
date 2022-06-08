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
exports.ProductDataSource = exports.ProductDataSourceType = void 0;
const http_interceptor_1 = require("../utils/http_interceptor");
var ProductDataSourceType;
(function (ProductDataSourceType) {
    ProductDataSourceType["product"] = "product";
    ProductDataSourceType["tutorial"] = "tutorial";
    ProductDataSourceType["project"] = "project";
    ProductDataSourceType["company"] = "company";
    ProductDataSourceType["tender"] = "tender";
    ProductDataSourceType["magazine"] = "magazine";
    ProductDataSourceType["ad"] = "ad";
    ProductDataSourceType["dailyPrice"] = "dailyPrice";
    ProductDataSourceType["service"] = "service";
})(ProductDataSourceType = exports.ProductDataSourceType || (exports.ProductDataSourceType = {}));
class ProductDataSource {
    constructor(baseUrl, type) {
        this.baseUrl = baseUrl;
        this.type = type;
    }
    create(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpPost)(`${this.baseUrl}product/${this.type.toString()}`, dto, response => onResponse(response), response => onError(response));
        });
    }
    read(onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpGet)(`${this.baseUrl}product/${this.type.toString()}`, response => onResponse(response), response => onError(response));
        });
    }
    readMine(onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpGet)(`${this.baseUrl}product/${this.type.toString()}/Mine`, response => onResponse(response), response => onError(response));
        });
    }
    update(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpPut)(`${this.baseUrl}product/${this.type.toString()}`, dto, response => onResponse(response), response => onError(response));
        });
    }
    filter(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpPost)(`${this.baseUrl}product/${this.type.toString()}/filter`, dto, response => onResponse(response), response => onError(response));
        });
    }
    readById(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpGet)(`${this.baseUrl}product/${this.type.toString()}/${id}`, response => onResponse(response), response => onError(response));
        });
    }
    delete(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpDelete)(`${this.baseUrl}product/${this.type.toString()}/${id}`, response => onResponse(response), response => onError(response));
        });
    }
}
exports.ProductDataSource = ProductDataSource;
//# sourceMappingURL=product_datasource.js.map