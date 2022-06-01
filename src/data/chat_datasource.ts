import {httpGet, httpPost} from "../utils/http_interceptor";
import {ChatCreateUpdateDto, ChatReadDto, GenericResponse, Response} from "./data";

export class ChatDataSource {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async create(dto: ChatCreateUpdateDto,
	             onResponse: (response: GenericResponse<ChatReadDto>) => any,
	             onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}Chat`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async read(onResponse: (response: GenericResponse<ChatReadDto[]>) => any,
	           onError: (response: Response) => any) {
		await httpGet(
			`${this.baseUrl}Chat`,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async readByUserId(id: string,
	                   onResponse: (response: GenericResponse<ChatReadDto[]>) => any,
	                   onError: (response: Response) => any) {
		await httpGet(
			`${this.baseUrl}Chat/${id}`,
			response => onResponse(response),
			response => onError(response)
		);
	}
}