import {httpDelete, httpGet, httpPost, httpPut} from "../utils/http_interceptor";
import {CommentCreateUpdateDto, Response , GenericResponse, ProductReadDto , CommentFilterDto} from "./data";

export class CommentDataSource {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async create(dto: CommentCreateUpdateDto,
	             onResponse: (response: Response) => any,
	             onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}Comment`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async update(dto: CommentCreateUpdateDto,
	             onResponse: (response: Response) => any,
	             onError: (response: Response) => any) {
		await httpPut(
			`${this.baseUrl}Comment`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any) {
		await httpDelete(
			`${this.baseUrl}Comment/${id}`,
			response => onResponse(response),
			response => onError(response)
		);
	}
	async getByUser(id: string, onResponse: (response: GenericResponse<ProductReadDto[]>) => any, onError: (response: Response) => any) {
		await httpGet(
			`${this.baseUrl}Comment/${id}`,
			response => onResponse(response),
			response => onError(response)
		);
	}
	

	async filter(dto: CommentFilterDto,
        onResponse: (response: GenericResponse<ProductReadDto[]>) => any,
        onError: (response: Response) => any) {
        await httpPost(`${this.baseUrl}Comment/Filter`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }
}