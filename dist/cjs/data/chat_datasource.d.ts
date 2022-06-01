import { ChatCreateUpdateDto, ChatReadDto, GenericResponse, Response } from "./data";
export declare class ChatDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    create(dto: ChatCreateUpdateDto, onResponse: (response: GenericResponse<ChatReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    read(onResponse: (response: GenericResponse<ChatReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    readByUserId(id: string, onResponse: (response: GenericResponse<ChatReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
}
