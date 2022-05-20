"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDataSource = exports.ProductDataSourceType = void 0;
const http_interceptor_1 = require("../utils/http_interceptor");
var ProductDataSourceType;
(function (ProductDataSourceType) {
    ProductDataSourceType["products"] = "Product";
    ProductDataSourceType["tutorials"] = "Tutorial";
    ProductDataSourceType["projects"] = "Project";
    ProductDataSourceType["companies"] = "Company";
    ProductDataSourceType["tenders"] = "Tender";
    ProductDataSourceType["magazine"] = "Magazine";
    ProductDataSourceType["ads"] = "Ad";
    ProductDataSourceType["dailyPrice"] = "DailyPrice";
    ProductDataSourceType["job"] = "Job";
})(ProductDataSourceType = exports.ProductDataSourceType || (exports.ProductDataSourceType = {}));
class ProductDataSource {
    constructor(baseUrl, type) {
        this.baseUrl = baseUrl;
        this.type = type;
    }
    create(params, onResponse, onError) {
        (0, http_interceptor_1.httpPost)(`${this.baseUrl}api/${this.type.toString()}`, params, response => onResponse(response), response => onError(response));
    }
    read(onResponse, onError) {
        (0, http_interceptor_1.httpGet)(`${this.baseUrl}api/${this.type.toString()}`, response => onResponse(response), response => onError(response));
    }
    readById(id, onResponse, onError) {
        (0, http_interceptor_1.httpGet)(`${this.baseUrl}api/${this.type.toString()}/${id}`, response => onResponse(response), response => onError(response));
    }
}
exports.ProductDataSource = ProductDataSource;
//# sourceMappingURL=product_datasource.js.map