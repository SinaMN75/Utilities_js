import { ChatCreateUpdateDto, ChatReadDto, GenericResponse, GroupChatMessageCreateUpdateDto, Response, GroupChatCreateUpdateDto, GroupChatReadDto, GroupChatMessage } from "./data";
export declare class ChatDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    create(dto: ChatCreateUpdateDto, onResponse: (response: GenericResponse<ChatReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    CreateGroupChatMessage(dto: GroupChatMessageCreateUpdateDto, onResponse: (response: GenericResponse<ChatReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    CreateGroupChat(dto: GroupChatCreateUpdateDto, onResponse: (response: GenericResponse<GroupChatReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    UpdateGroupChatMessage(dto: GroupChatCreateUpdateDto, onResponse: (response: GenericResponse<GroupChatReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    read(onResponse: (response: GenericResponse<ChatReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    readByUserId(id: string, onResponse: (response: GenericResponse<ChatReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    readGroupChatMessages(id: string, onResponse: (response: GenericResponse<GroupChatMessage[]>) => any, onError: (response: Response) => any): Promise<void>;
    readGroupChatById(id: string, onResponse: (response: GenericResponse<GroupChatReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    readMyGroupChats(onResponse: (response: GenericResponse<GroupChatReadDto>) => any, onError: (response: Response) => any): Promise<void>;
}
