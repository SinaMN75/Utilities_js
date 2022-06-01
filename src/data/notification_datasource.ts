import {httpGet, httpPost} from "../utils/http_interceptor";
import {GenericResponse} from "./data";
import {NotificationReadDto} from "./dto/notification";

export class NotificationDataSource {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async read(onResponse: (response: GenericResponse<NotificationReadDto[]>) => any,
	           onError: (response: Response) => any) {
		await httpGet(
			`${this.baseUrl}Notification`,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async create(dto: NotificationReadDto,
	             onResponse: (response: GenericResponse<NotificationReadDto[]>) => any,
	             onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}Notification`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}
}