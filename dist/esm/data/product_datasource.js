var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { httpDelete, httpGet, httpPost, httpPut } from "../utils/http_interceptor";
export var ProductDataSourceType;
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
})(ProductDataSourceType || (ProductDataSourceType = {}));
export class ProductDataSource {
    constructor(baseUrl, type) {
        this.baseUrl = baseUrl;
        this.type = type;
    }
    create(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}product/${this.type.toString()}`, dto, response => onResponse(response), response => onError(response));
        });
    }
    read(onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}product/${this.type.toString()}`, response => onResponse(response), response => onError(response));
        });
    }
    readMine(onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}product/${this.type.toString()}/Mine`, response => onResponse(response), response => onError(response));
        });
    }
    update(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPut(`${this.baseUrl}product/${this.type.toString()}`, dto, response => onResponse(response), response => onError(response));
        });
    }
    filter(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}product/${this.type.toString()}/filter`, dto, response => onResponse(response), response => onError(response));
        });
    }
    readById(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}product/${this.type.toString()}/${id}`, response => onResponse(response), response => onError(response));
        });
    }
    delete(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpDelete(`${this.baseUrl}product/${this.type.toString()}/${id}`, response => onResponse(response), response => onError(response));
        });
    }
}
//# sourceMappingURL=product_datasource.js.map