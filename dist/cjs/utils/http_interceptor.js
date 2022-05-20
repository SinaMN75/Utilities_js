"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpDelete = exports.httpPut = exports.httpPost = exports.httpGet = exports.request = void 0;
const local_storage_1 = require("./local_storage");
const constants_1 = require("../core/constants");
const axios = require('axios');
function request(method, url, body, onResponse, onError) {
    axios({
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
}
exports.request = request;
function httpGet(url, onResponse, onError) {
    request("get", url, null, (response) => onResponse(response), (response) => onError(response));
}
exports.httpGet = httpGet;
function httpPost(url, body = null, onResponse, onError) {
    request("post", url, body, (response) => onResponse(response), (response) => onError(response));
}
exports.httpPost = httpPost;
function httpPut(url, body = null, onResponse, onError) {
    request("put", url, body, (response) => onResponse(response), (response) => onError(response));
}
exports.httpPut = httpPut;
function httpDelete(url, body = null, onResponse, onError) {
    request("delete", url, body, (response) => onResponse(response), (response) => onError(response));
}
exports.httpDelete = httpDelete;
//# sourceMappingURL=http_interceptor.js.map