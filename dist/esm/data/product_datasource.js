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
        httpPost(`${this.baseUrl}api/${this.type.toString()}`, params, response => onResponse(response), response => onError(response));
    }
    read(onResponse, onError) {
        httpGet(`${this.baseUrl}api/${this.type.toString()}`, response => onResponse(response), response => onError(response));
    }
    readById(id, onResponse, onError) {
        httpGet(`${this.baseUrl}api/${this.type.toString()}/${id}`, response => onResponse(response), response => onError(response));
    }
}
//# sourceMappingURL=product_datasource.js.map