import {AxiosResponse, Method} from "axios";
import {getData} from "./local_storage";
import {UtilitiesConstants} from "../core/constants";

const axios = require('axios');

export async function request(method: Method,
                              url: string,
                              body: object | null,
                              onResponse: (response: any) => any,
                              onError: (error: any) => any) {
    await axios({
        method: method,
        url: url,
        headers: {'Authorization': getData(UtilitiesConstants.TOKEN)},
        data: body,
        responseType: "json",
        withCredentials: false,
    }).then(function (response: AxiosResponse) {
        onResponse(response.data);
        console.log("RESPOBNSE: ", response.data);
    }).catch(function (response: any) {
        onError(response);
        console.log("ERROR: ", response.data);
    }).then(function () {
        console.log("WTF");
    });

}

export async function httpGet(url: string,
                              onResponse: (response: any) => any,
                              onError: (response: any) => any) {
    await request("get",
        url,
        null,
        (response: any) => onResponse(response),
        (response: any) => onError(response));
}

export async function httpPost(url: string,
                               body: object | null = null,
                               onResponse: (response: any) => any,
                               onError: (response: any) => any) {
    await request("post",
        url,
        body,
        (response: any) => onResponse(response),
        (response: any) => onError(response));
}

export async function httpPut(url: string,
                              body: object | null = null,
                              onResponse: (response: any) => any,
                              onError: (response: any) => any) {
    await request("put",
        url,
        body,
        (response: any) => onResponse(response),
        (response: any) => onError(response));
}

export async function httpDelete(url: string,
                                 body: object | null = null,
                                 onResponse: (response: any) => any,
                                 onError: (response: any) => any) {
    await request("delete",
        url,
        body,
        (response: any) => onResponse(response),
        (response: any) => onError(response));
}