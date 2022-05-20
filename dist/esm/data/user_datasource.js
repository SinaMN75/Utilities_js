import { httpPost } from "../utils/http_interceptor";
export class UserDataSource {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getMobileVerificationCodeForLogin(body, onResponse, onError) {
        httpPost(`${this.baseUrl}api/user/GetMobileVerificationCodeForLogin`, body, response => onResponse(response), response => onError(response));
    }
}
//# sourceMappingURL=user_datasource.js.map