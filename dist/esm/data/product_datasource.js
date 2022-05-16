var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { httpGet } from "../utils/http_interceptor";
export class ProductDataSource {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    read(onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield httpGet(`${this.baseUrl}api/Product`, response => onResponse(response), response => onError(response));
        });
    }
    readById(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield httpGet(`${this.baseUrl}api/Product/${id}`, response => onResponse(response), response => onError(response));
        });
    }
}
//# sourceMappingURL=product_datasource.js.map