import {httpDelete, httpGet, httpPost, httpPut} from "../utils/http_interceptor";
import {GenericResponse, ProductCreateUpdateDto, ProductReadDto} from "./data";
import {ContentCreateUpdateDto, ContentReadDto} from "./dto/content";

export class ContentDataSource {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async create(dto: ContentCreateUpdateDto,
	             onResponse: (response: GenericResponse<ContentReadDto>) => any,
	             onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}content`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async read(onResponse: (response: GenericResponse<ContentReadDto[]>) => any,
	           onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}content`,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async update(dto: ProductCreateUpdateDto,
	             onResponse: (response: GenericResponse<ContentReadDto>) => any,
	             onError: (response: Response) => any) {
		await httpPut(
			`${this.baseUrl}content`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async readById(id: string,
	               onResponse: (response: GenericResponse<ContentReadDto>) => any,
	               onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}content`,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any) {
		await httpDelete(
			`${this.baseUrl}content`,
			response => onResponse(response),
			response => onError(response)
		);
	}
}