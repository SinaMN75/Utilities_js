var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { httpPost } from "../utils/http_interceptor";
export class UserDataSource {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getMobileVerificationCodeForLogin(body, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}api/user/GetMobileVerificationCodeForLogin`, body, response => onResponse(response), response => onError(response));
        });
    }
}
//# sourceMappingURL=user_datasource.js.map