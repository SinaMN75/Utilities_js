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
export class CommentDataSource {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    create(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}Comment`, dto, response => onResponse(response), response => onError(response));
        });
    }
    update(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPut(`${this.baseUrl}Comment`, dto, response => onResponse(response), response => onError(response));
        });
    }
    delete(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpDelete(`${this.baseUrl}Comment/${id}`, response => onResponse(response), response => onError(response));
        });
    }
    getByUser(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}Comment/${id}`, response => onResponse(response), response => onError(response));
        });
    }
    filter(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}Comment/Filter`, dto, response => onResponse(response), response => onError(response));
        });
    }
}
//# sourceMappingURL=comment_datasource.js.map