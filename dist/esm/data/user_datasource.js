var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { httpDelete, httpGet, httpPost } from "../utils/http_interceptor";
export class UserDataSource {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getMobileVerificationCodeForLogin(body, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}user/GetMobileVerificationCodeForLogin`, body, response => onResponse(response), response => onError(response));
        });
    }
    verifyMobileForLogin(body, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}user/VerifyMobileForLogin`, body, response => onResponse(response), response => onError(response));
        });
    }
    loginWithEmailPassword(body, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}user/LoginWithEmail`, body, response => onResponse(response), response => onError(response));
        });
    }
    delete(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpDelete(`${this.baseUrl}user`, response => onResponse(response), response => onError(response));
        });
    }
    create(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}user`, dto, response => onResponse(response), response => onError(response));
        });
    }
    getProfile(onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}user/GetProfile`, response => onResponse(response), response => onError(response));
        });
    }
    read(onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}user`, response => onResponse(response), response => onError(response));
        });
    }
    readById(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}user/${id}`, response => onResponse(response), response => onError(response));
        });
    }
}
//# sourceMappingURL=user_datasource.js.map