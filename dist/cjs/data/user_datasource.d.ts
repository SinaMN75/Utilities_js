import { GenericResponse, GetMobileVerificationCodeForLoginDto, LoginWithEmailPasswordDto, UserCreateUpdateDto, UserReadDto, UserFilterDto, VerifyMobileForLoginDto } from "./data";
export declare class UserDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    getMobileVerificationCodeForLogin(body: GetMobileVerificationCodeForLoginDto, onResponse: (response: GenericResponse<string>) => any, onError: (response: Response) => any): Promise<void>;
    verifyMobileForLogin(body: VerifyMobileForLoginDto, onResponse: (response: GenericResponse<UserReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    loginWithEmailPassword(body: LoginWithEmailPasswordDto, onResponse: (response: GenericResponse<UserReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    delete(id: string, onResponse: (response: GenericResponse<UserReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    create(dto: UserCreateUpdateDto, onResponse: (response: GenericResponse<UserReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    read(onResponse: (response: GenericResponse<UserReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    readById(id: string, onResponse: (response: GenericResponse<UserReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    updateUser(dto: UserCreateUpdateDto, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
    userFilter(dto: UserFilterDto, onResponse: (response: GenericResponse<UserReadDto>) => any, onError: (response: Response) => any): Promise<void>;
}
