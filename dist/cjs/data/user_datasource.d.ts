import { GenericResponse, GetVerificationCodeForLoginDto, LoginWithEmailPasswordDto, UserCreateUpdateDto, UserReadDto, UserFilterDto, VerifyForLoginDto, UserRegisterDto, ResponseErr } from "./data";
export declare class UserDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    getVerificationCodeForLogin(body: GetVerificationCodeForLoginDto, onResponse: (response: GenericResponse<string>) => any, onError: (response: Response) => any): Promise<void>;
    verifyForLogin(body: VerifyForLoginDto, onResponse: (response: GenericResponse<UserReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    loginWithEmailPassword(body: LoginWithEmailPasswordDto, onResponse: (response: GenericResponse<UserReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    delete(id: string, onResponse: (response: GenericResponse<UserReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    create(dto: UserCreateUpdateDto, onResponse: (response: GenericResponse<UserReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    read(onResponse: (response: GenericResponse<UserReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    readById(id: string, onResponse: (response: GenericResponse<UserReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    updateUser(dto: UserCreateUpdateDto, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
    userFilter(dto: UserFilterDto, onResponse: (response: GenericResponse<UserReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    userRegister(dto: UserRegisterDto, onResponse: (response: GenericResponse<UserReadDto>) => any, onError: (response: ResponseErr) => any): Promise<void>;
}
