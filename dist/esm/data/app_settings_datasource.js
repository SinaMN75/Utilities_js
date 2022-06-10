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
export class AppSettingsDataSource {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getEnums(onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}AppSettings`, response => onResponse(response), response => onError(response));
        });
    }
    readLocation(onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}AppSettings/ReadLocation`, response => onResponse(response), response => onError(response));
        });
    }
}
//# sourceMappingURL=app_settings_datasource.js.map