var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getData } from "./local_storage";
import { UtilitiesConstants } from "../core/constants";
const axios = require('axios');
export function request(method, url, body, onResponse, onError) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios({
            method: method,
            url: url,
            headers: { 'Authorization': getData(UtilitiesConstants.TOKEN) },
            data: body,
            responseType: "json",
        }).then(function (response) {
            onResponse(response.data);
            console.log("RESPOBNSE: ", response.data);
        }).catch(function (response) {
            onError(response);
            console.log("ERROR: ", response.data);
        }).then(function () {
            console.log("WTF");
        });
    });
}
export function httpGet(url, onResponse, onError) {
    return __awaiter(this, void 0, void 0, function* () {
        yield request("get", url, null, (response) => onResponse(response), (response) => onError(response));
    });
}
export function httpPost(url, body = null, onResponse, onError) {
    return __awaiter(this, void 0, void 0, function* () {
        yield request("post", url, body, (response) => onResponse(response), (response) => onError(response));
    });
}
export function httpPut(url, body = null, onResponse, onError) {
    return __awaiter(this, void 0, void 0, function* () {
        yield request("put", url, body, (response) => onResponse(response), (response) => onError(response));
    });
}
export function httpDelete(url, body = null, onResponse, onError) {
    return __awaiter(this, void 0, void 0, function* () {
        yield request("delete", url, body, (response) => onResponse(response), (response) => onError(response));
    });
}
//# sourceMappingURL=http_interceptor.js.map