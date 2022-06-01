import {httpDelete, httpGet, httpPost} from "../utils/http_interceptor";
import {
	GenericResponse,
	GetMobileVerificationCodeForLoginDto,
	LoginWithEmailPasswordDto,
	UserCreateUpdateDto,
	UserReadDto,
	VerifyMobileForLoginDto
} from "./data";

export class UserDataSource {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async getMobileVerificationCodeForLogin(body: GetMobileVerificationCodeForLoginDto,
	                                        onResponse: (response: GenericResponse<string>) => any,
	                                        onError: (response: Response) => any) {
		await httpPost(`${this.baseUrl}user/GetMobileVerificationCodeForLogin`,
			body,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async verifyMobileForLogin(body: VerifyMobileForLoginDto,
	                           onResponse: (response: GenericResponse<UserReadDto>) => any,
	                           onError: (response: Response) => any) {
		await httpPost(`${this.baseUrl}user/VerifyMobileForLogin`,
			body,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async loginWithEmailPassword(body: LoginWithEmailPasswordDto,
	                             onResponse: (response: GenericResponse<UserReadDto>) => any,
	                             onError: (response: Response) => any) {
		await httpPost(`${this.baseUrl}user/LoginWithEmail`,
			body,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async delete(id: string,
	             onResponse: (response: GenericResponse<UserReadDto>) => any,
	             onError: (response: Response) => any) {
		await httpDelete(`${this.baseUrl}user`,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async create(dto: UserCreateUpdateDto,
	             onResponse: (response: GenericResponse<UserReadDto>) => any,
	             onError: (response: Response) => any) {
		await httpPost(`${this.baseUrl}user`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async getProfile(onResponse: (response: GenericResponse<UserReadDto>) => any,
	                 onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}user/GetProfile`,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async read(onResponse: (response: GenericResponse<UserReadDto[]>) => any,
	           onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}user`,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async readById(id: string, onResponse: (response: GenericResponse<UserReadDto>) => any,
	               onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}user/${id}`,
			response => onResponse(response),
			response => onError(response)
		);
	}
}