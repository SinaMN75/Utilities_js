import { GenericResponse, GetMobileVerificationCodeForLoginDto, UserReadDto, VerifyMobileForLoginDto } from "./data";
export declare class UserDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    getMobileVerificationCodeForLogin(body: GetMobileVerificationCodeForLoginDto, onResponse: (response: GenericResponse<string>) => any, onError: (response: Response) => any): Promise<void>;
    verifyMobileForLogin(body: VerifyMobileForLoginDto, onResponse: (response: GenericResponse<UserReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    getProfile(onResponse: (response: GenericResponse<UserReadDto>) => any, onError: (response: Response) => any): Promise<void>;
}
