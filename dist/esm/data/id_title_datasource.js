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
export var IdTitleDataSourceType;
(function (IdTitleDataSourceType) {
    IdTitleDataSourceType["brand"] = "Brand";
    IdTitleDataSourceType["category"] = "Category";
    IdTitleDataSourceType["reference"] = "Reference";
})(IdTitleDataSourceType || (IdTitleDataSourceType = {}));
export class IdTitleDataSource {
    constructor(baseUrl, type) {
        this.baseUrl = baseUrl;
        this.type = type;
    }
    create(params, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}${this.type.toString()}`, params, response => onResponse(response), response => onError(response));
        });
    }
    edit(id, params, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPut(`${this.baseUrl}${this.type.toString()}/${id}`, params, response => onResponse(response), response => onError(response));
        });
    }
    read(onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}${this.type.toString()}`, response => onResponse(response), response => onError(response));
        });
    }
    delete(id, params, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpDelete(`${this.baseUrl}${this.type.toString()}/${id}`, params, response => onResponse(response), response => onError(response));
        });
    }
    readById(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}${this.type.toString()}/${id}`, response => onResponse(response), response => onError(response));
        });
    }
    readeByUseCase(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}${this.type.toString()}/${id}`, response => onResponse(response), response => onError(response));
        });
    }
}
//# sourceMappingURL=id_title_datasource.js.map