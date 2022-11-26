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
export class OrderDataSource {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    create(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}Order`, dto, response => onResponse(response), response => onError(response));
        });
    }
    CreateOrderDetailToOrder(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}Order/CreateOrderDetailToOrder`, dto, response => onResponse(response), response => onError(response));
        });
    }
    update(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}Order/CreateOrderDetailToOrder`, dto, response => onResponse(response), response => onError(response));
        });
    }
    updateOrder(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPut(`${this.baseUrl}Order`, dto, response => onResponse(response), response => onError(response));
        });
    }
    filter(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}Order/filter`, dto, response => onResponse(response), response => onError(response));
        });
    }
    delete(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpDelete(`${this.baseUrl}Order/${id}`, response => onResponse(response), response => onError(response));
        });
    }
    deleteOrderDetail(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpDelete(`${this.baseUrl}Order/DeleteOrderDetail?id=${id}`, response => onResponse(response), response => onError(response));
        });
    }
    readById(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}Order/${id}`, response => onResponse(response), response => onError(response));
        });
    }
}
//# sourceMappingURL=order_datasource.js.map