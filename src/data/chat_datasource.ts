import { httpGet, httpPost, httpPut } from "../utils/http_interceptor";
import { ChatCreateUpdateDto, ChatReadDto, GenericResponse, GroupChatMessageCreateUpdateDto, Response, GroupChatCreateUpdateDto, GroupChatReadDto, GroupChatMessage } from "./data";

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

	async CreateGroupChatMessage(dto: GroupChatMessageCreateUpdateDto,
		onResponse: (response: GenericResponse<ChatReadDto>) => any,
		onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}Chat/CreateGroupChatMessage`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async CreateGroupChat(dto: GroupChatCreateUpdateDto,
		onResponse: (response: GenericResponse<GroupChatReadDto>) => any,
		onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}Chat/CreateGroupChat`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
		
	}

	async UpdateGroupChatMessage(dto: GroupChatCreateUpdateDto,
        onResponse: (response: GenericResponse<GroupChatReadDto>) => any,
        onError: (response: Response) => any) {
        await httpPut(
            `${this.baseUrl}Chat/UpdateGroupChat`,
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

	async readGroupChatMessages(id: string,
		onResponse: (response: GenericResponse<GroupChatMessage[]>) => any,
		onError: (response: Response) => any) {
		await httpGet(
			`${this.baseUrl}Chat/ReadGroupChatMessages/${id}`,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async readGroupChatById(id: string,
		onResponse: (response: GenericResponse<GroupChatReadDto>) => any,
		onError: (response: Response) => any) {
		await httpGet(
			`${this.baseUrl}Chat/ReadGroupChatById/${id}`,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async readMyGroupChats(onResponse: (response: GenericResponse<GroupChatReadDto>) => any,
		onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}Chat/ReadMyGroupChats`,
			response => onResponse(response),
			response => onError(response)
		);
	}
}