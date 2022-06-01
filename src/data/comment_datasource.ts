import {httpDelete, httpGet, httpPost, httpPut} from "../utils/http_interceptor";
import {CommentCreateUpdateDto, Response} from "./data";

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

	//TODO
	async read(onResponse: (response: Response) => any,
	           onError: (response: Response) => any) {
		await httpGet(
			`${this.baseUrl}Comment`,
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
}