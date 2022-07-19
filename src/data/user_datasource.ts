import { httpDelete, httpGet, httpPost, httpPut } from "../utils/http_interceptor";
import {
	GenericResponse,
	GetVerificationCodeForLoginDto,
	LoginWithEmailPasswordDto,
	UserCreateUpdateDto,
	UserReadDto,
	UserFilterDto,
	VerifyForLoginDto,
	UserRegisterDto
} from "./data";

export class UserDataSource {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async getVerificationCodeForLogin(body: GetVerificationCodeForLoginDto,
		onResponse: (response: GenericResponse<string>) => any,
		onError: (response: Response) => any) {
		await httpPost(`${this.baseUrl}user/GetVerificationCodeForLogin`,
			body,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async verifyForLogin(body: VerifyForLoginDto,
		onResponse: (response: GenericResponse<UserReadDto>) => any,
		onError: (response: Response) => any) {
		await httpPost(`${this.baseUrl}user/VerifyCodeForLogin`,
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
		await httpDelete(`${this.baseUrl}user/${id}`,
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

	async updateUser(dto: UserCreateUpdateDto,
		onResponse: (response: Response) => any,
		onError: (response: Response) => any) {
		await httpPut(
			`${this.baseUrl}user`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}
	async userFilter(dto: UserFilterDto,
		onResponse: (response: GenericResponse<UserReadDto[]>) => any,
		onError: (response: Response) => any) {
		await httpPost(`${this.baseUrl}user/Filter`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}
	async userRegister(dto: UserRegisterDto,
		onResponse: (response: GenericResponse<UserReadDto>) => any,
		onError: (response: Response) => any) {
		await httpPost(`${this.baseUrl}user/Register`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}
}