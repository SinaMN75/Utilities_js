import {httpGet} from "../utils/http_interceptor";
import {AppSettingsReadDto, GenericResponse, LocationReadDto} from "./data";

export class AppSettingsDataSource {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async getEnums(onResponse: (response: GenericResponse<AppSettingsReadDto>) => any,
	               onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}AppSettings`,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async readLocation(onResponse: (response: GenericResponse<LocationReadDto>) => any,
	               onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}AppSettings/ReadLocation`,
			response => onResponse(response),
			response => onError(response)
		);
	}
}