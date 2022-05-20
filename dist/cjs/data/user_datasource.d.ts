import { UserReadDto } from "./data";
export declare class UserDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    getMobileVerificationCodeForLogin(body: object, onResponse: (response: UserReadDto) => any, onError: (response: Response) => any): Promise<void>;
}
