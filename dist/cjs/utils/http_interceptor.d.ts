import { Method } from "axios";
export declare function request(method: Method, url: string, body: object | null, onResponse: (response: any) => any, onError: (error: any) => any): Promise<void>;
export declare function httpGet(url: string, onResponse: (response: any) => any, onError: (response: any) => any): Promise<void>;
export declare function httpPost(url: string, body: object | null | undefined, onResponse: (response: any) => any, onError: (response: any) => any): Promise<void>;
export declare function httpPut(url: string, body: object | null | undefined, onResponse: (response: any) => any, onError: (response: any) => any): Promise<void>;
export declare function httpDelete(url: string, body: object | null | undefined, onResponse: (response: any) => any, onError: (response: any) => any): Promise<void>;
