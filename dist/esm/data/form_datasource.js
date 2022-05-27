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
export class FormDataSource {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    createFormField(dto, categoryId, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}Form/CreateFormField`, dto, response => onResponse(response), response => onError(response));
        });
    }
    readFormFields(categoryId, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}Form/${categoryId}`, response => onResponse(response), response => onError(response));
        });
    }
    createForm(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}Form`, dto, response => onResponse(response), response => onError(response));
        });
    }
}
//# sourceMappingURL=form_datasource.js.map