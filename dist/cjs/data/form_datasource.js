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
exports.FormDataSource = void 0;
const http_interceptor_1 = require("../utils/http_interceptor");
class FormDataSource {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    createFormField(dto, categoryId, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpPost)(`${this.baseUrl}Form/CreateFormField`, dto, response => onResponse(response), response => onError(response));
        });
    }
    readFormFields(categoryId, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpGet)(`${this.baseUrl}Form/${categoryId}`, response => onResponse(response), response => onError(response));
        });
    }
    createForm(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpPost)(`${this.baseUrl}Form`, dto, response => onResponse(response), response => onError(response));
        });
    }
}
exports.FormDataSource = FormDataSource;
//# sourceMappingURL=form_datasource.js.map