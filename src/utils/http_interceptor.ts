import {AxiosResponse, Method} from "axios";
import {getData} from "./local_storage";
import {UtilitiesConstants} from "../core/constants";

const axios = require('axios');

export async function request(method: Method,
                              url: string,
                              body: object | null,
                              onResponse: (response: any) => any,
                              onError: (error: any) => any): Promise<any> {
    return await axios({
        method: method,
        url: url,
        headers: {'Authorization': getData(UtilitiesConstants.TOKEN)},
        data: body,
        responseType: "json",
    }).then(function (response: AxiosResponse) {
        onResponse(response.data);
        console.log(response.data);
    }).catch(function (response: any) {
        onError(response);
    }).then(function () {
    });

}

export function httpGet<T>(url: string,
                           onResponse: (response: T) => any,
                           onError: (response: T) => any): Promise<T> {
    return request("get",
        url,
        null,
        (response: any) => onResponse(response),
        (response: any) => onError(response));
}

export function httpPost(url: string,
                         body: object | null = null,
                         onResponse: (response: any) => any,
                         onError: (response: any) => any): Promise<any> {
    return request("post",
        url,
        body,
        (response: any) => onResponse(response),
        (response: any) => onError(response));
}

export function httpPut(url: string,
                        body: object | null = null,
                        onResponse: (response: any) => any,
                        onError: (response: any) => any): Promise<any> {
    return request("put",
        url,
        body,
        (response: any) => onResponse(response),
        (response: any) => onError(response));
}

export function httpDelete(url: string,
                           body: object | null = null,
                           onResponse: (response: any) => any,
                           onError: (response: any) => any): Promise<any> {
    return request("delete",
        url,
        body,
        (response: any) => onResponse(response),
        (response: any) => onError(response));
}