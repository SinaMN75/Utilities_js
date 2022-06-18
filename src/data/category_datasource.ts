import {httpDelete, httpGet, httpPost, httpPut} from "../utils/http_interceptor";
import {CategoryCreateUpdateDto, CategoryReadDto, GenericResponse,} from "./data";

export class CategoryDataSource {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async create(dto: CategoryCreateUpdateDto,
	             onResponse: (response: GenericResponse<CategoryReadDto>) => any,
	             onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}Category`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async read(onResponse: (response: GenericResponse<CategoryReadDto[]>) => any,
	           onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}Category}`,
			response => onResponse(response),
			response => onError(response));
	}

	async update(dto: CategoryCreateUpdateDto,
	             onResponse: (response: GenericResponse<CategoryReadDto>) => any,
	             onError: (response: Response) => any) {
		await httpPut(
			`${this.baseUrl}Category`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any) {
		await httpDelete(
			`${this.baseUrl}Category/${id}`,
			response => onResponse(response),
			response => onError(response)
		);
	}
}