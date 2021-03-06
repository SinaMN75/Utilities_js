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
exports.IdTitleDataSource = exports.IdTitleDataSourceType = void 0;
const http_interceptor_1 = require("../utils/http_interceptor");
var IdTitleDataSourceType;
(function (IdTitleDataSourceType) {
    IdTitleDataSourceType["brand"] = "brand";
    IdTitleDataSourceType["category"] = "category";
    IdTitleDataSourceType["reference"] = "reference";
    IdTitleDataSourceType["speciality"] = "speciality";
})(IdTitleDataSourceType = exports.IdTitleDataSourceType || (exports.IdTitleDataSourceType = {}));
class IdTitleDataSource {
    constructor(baseUrl, type) {
        this.baseUrl = baseUrl;
        this.type = type;
    }
    create(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpPost)(`${this.baseUrl}IdTitle/${this.type.toString()}`, dto, response => onResponse(response), response => onError(response));
        });
    }
    read(onResponse, viewModel, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpGet)(`${this.baseUrl}IdTitle/${this.type.toString()}`, response => {
                var _a, _b;
                let res = response;
                let list = [];
                (_a = res.result) === null || _a === void 0 ? void 0 : _a.forEach(x => {
                    var _a, _b;
                    if (x.parent == null) {
                        list.push({ id: (_a = x.id) !== null && _a !== void 0 ? _a : "", title: (_b = x.title) !== null && _b !== void 0 ? _b : "" });
                    }
                });
                (_b = res.result) === null || _b === void 0 ? void 0 : _b.forEach(x => {
                    list.forEach(y => {
                        var _a, _b, _c;
                        if (x.parent != null) {
                            (_a = y.children) === null || _a === void 0 ? void 0 : _a.push({ id: (_b = x.id) !== null && _b !== void 0 ? _b : "", title: (_c = x.title) !== null && _c !== void 0 ? _c : "" });
                        }
                    });
                });
                onResponse(response);
                viewModel(list);
            }, response => onError(response));
        });
    }
    update(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpPut)(`${this.baseUrl}IdTitle/${this.type.toString()}`, dto, response => onResponse(response), response => onError(response));
        });
    }
    delete(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpDelete)(`${this.baseUrl}IdTitle/${this.type.toString()}/${id}`, response => onResponse(response), response => onError(response));
        });
    }
    readById(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpGet)(`${this.baseUrl}IdTitle/${this.type.toString()}/${id}`, response => onResponse(response), response => onError(response));
        });
    }
    readeByUseCase(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, http_interceptor_1.httpGet)(`${this.baseUrl}IdTitle/${this.type.toString()}/${id}`, response => onResponse(response), response => onError(response));
        });
    }
}
exports.IdTitleDataSource = IdTitleDataSource;
//# sourceMappingURL=id_title_datasource.js.map