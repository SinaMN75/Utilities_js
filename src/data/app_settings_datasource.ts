import {httpGet} from "../utils/http_interceptor";
import {AppSettingsReadDto, GenericResponse} from "./data";

export class AppSettingsDataSource {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async getEnums(onResponse: (response: GenericResponse<AppSettingsReadDto>) => any,
	               onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}AppSettings/ReadAll`,
			response => onResponse(response),
			response => onError(response)
		);
	}
}