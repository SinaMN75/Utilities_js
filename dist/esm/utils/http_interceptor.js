import { getData } from "./local_storage";
import { UtilitiesConstants } from "../core/constants";
const axios = require('axios');
export function request(method, url, body, onResponse, onError) {
    axios({
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
}
export function httpGet(url, onResponse, onError) {
    request("get", url, null, (response) => onResponse(response), (response) => onError(response));
}
export function httpPost(url, body = null, onResponse, onError) {
    request("post", url, body, (response) => onResponse(response), (response) => onError(response));
}
export function httpPut(url, body = null, onResponse, onError) {
    request("put", url, body, (response) => onResponse(response), (response) => onError(response));
}
export function httpDelete(url, body = null, onResponse, onError) {
    request("delete", url, body, (response) => onResponse(response), (response) => onError(response));
}
//# sourceMappingURL=http_interceptor.js.map