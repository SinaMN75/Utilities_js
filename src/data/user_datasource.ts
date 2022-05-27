import {httpGet, httpPost} from "../utils/http_interceptor";
import {GenericResponse, GetMobileVerificationCodeForLoginDto, UserReadDto, VerifyMobileForLoginDto} from "./data";

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

	async getProfile(onResponse: (response: GenericResponse<UserReadDto>) => any,
	                 onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}user/GetProfile`,
			response => onResponse(response),
			response => onError(response)
		);
	}
}