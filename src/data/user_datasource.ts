import {httpPost} from "../utils/http_interceptor";
import {UserReadDto } from "./data";


export class UserDataSource {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    async getMobileVerificationCodeForLogin(body: object,
        onResponse: (response: UserReadDto) => any,
        onError: (response: Response) => any): Promise<UserReadDto> {
        return await httpPost(`${this.baseUrl}api/user/GetMobileVerificationCodeForLogin`,
            body,
            response => onResponse(response),
            response => onError(response)
        );
    }
}