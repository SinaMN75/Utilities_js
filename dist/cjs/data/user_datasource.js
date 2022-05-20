"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataSource = void 0;
const http_interceptor_1 = require("../utils/http_interceptor");
class UserDataSource {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getMobileVerificationCodeForLogin(body, onResponse, onError) {
        (0, http_interceptor_1.httpPost)(`${this.baseUrl}api/user/GetMobileVerificationCodeForLogin`, body, response => onResponse(response), response => onError(response));
    }
}
exports.UserDataSource = UserDataSource;
//# sourceMappingURL=user_datasource.js.map