import {httpGet, httpPost} from "../utils/http_interceptor";
import {
	GenericResponse,
	IdTitleCreateUpdateDto, IdTitleReadDto,
} from "./data";

export enum IdTitleDataSourceType {
	brand = "Brand",
	category = "Category",
	reference = "Reference"
}

export class IdTitleDataSource {
	baseUrl: string;
	type: IdTitleDataSourceType;

	constructor(baseUrl: string, type: IdTitleDataSourceType) {
		this.baseUrl = baseUrl;
		this.type = type;
	}

	async create(params: IdTitleCreateUpdateDto,
	             onResponse: (response: GenericResponse<IdTitleReadDto>) => any,
	             onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}${this.type.toString()}`,
			params,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async read(onResponse: (response: GenericResponse<IdTitleReadDto[]>) => any,
	           onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}${this.type.toString()}`,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async readById(id: string,
	               onResponse: (response: GenericResponse<IdTitleReadDto[]>) => any,
	               onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}${this.type.toString()}/${id}`,
			response => onResponse(response),
			response => onError(response)
		);
	}

}