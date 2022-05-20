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
exports.httpDelete = exports.httpPut = exports.httpPost = exports.httpGet = exports.request = void 0;
const local_storage_1 = require("./local_storage");
const constants_1 = require("../core/constants");
const axios = require('axios');
function request(method, url, body, onResponse, onError) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios({
            method: method,
            url: url,
            headers: { 'Authorization': (0, local_storage_1.getData)(constants_1.UtilitiesConstants.TOKEN) },
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
exports.request = request;
function httpGet(url, onResponse, onError) {
    return __awaiter(this, void 0, void 0, function* () {
        yield request("get", url, null, (response) => onResponse(response), (response) => onError(response));
    });
}
exports.httpGet = httpGet;
function httpPost(url, body = null, onResponse, onError) {
    return __awaiter(this, void 0, void 0, function* () {
        yield request("post", url, body, (response) => onResponse(response), (response) => onError(response));
    });
}
exports.httpPost = httpPost;
function httpPut(url, body = null, onResponse, onError) {
    return __awaiter(this, void 0, void 0, function* () {
        yield request("put", url, body, (response) => onResponse(response), (response) => onError(response));
    });
}
exports.httpPut = httpPut;
function httpDelete(url, body = null, onResponse, onError) {
    return __awaiter(this, void 0, void 0, function* () {
        yield request("delete", url, body, (response) => onResponse(response), (response) => onError(response));
    });
}
exports.httpDelete = httpDelete;
//# sourceMappingURL=http_interceptor.js.map