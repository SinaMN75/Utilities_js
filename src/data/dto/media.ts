export interface MediaReadDto {
    id?: string;
    type?: number;
    useCase?: string;
    url?: string;
    title?: string;
}

export interface MediaCreateUpdateDto {
    UserId?: string;
    ProductId?: string;
    CategoryId?:string;
    ContentId?:string;
    GroupChatId?:string;
    UseCase?: string;
    Files?: File[];
    Links?: string[];
}