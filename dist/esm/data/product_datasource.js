var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { httpGet, httpPost } from "../utils/http_interceptor";
export var ProductDataSourceType;
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
})(ProductDataSourceType || (ProductDataSourceType = {}));
export class ProductDataSource {
    constructor(baseUrl, type) {
        this.baseUrl = baseUrl;
        this.type = type;
    }
    create(params, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}api/${this.type.toString()}`, params, response => onResponse(response), response => onError(response));
        });
    }
    read(onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}api/${this.type.toString()}`, response => onResponse(response), response => onError(response));
        });
    }
    readById(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}api/${this.type.toString()}/${id}`, response => onResponse(response), response => onError(response));
        });
    }
}
//# sourceMappingURL=product_datasource.js.map