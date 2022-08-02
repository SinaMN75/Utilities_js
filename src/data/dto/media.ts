export interface MediaReadDto {
    id?: string;
    type?: number;
    useCase?: string;
    link?: string;
    title?: string;
}

export interface MediaCreateUpdateDto {
    UserId?: string;
    ProductId?: string;
    CategoryId?:string;
    UseCase?: string;
    Files?: File[];
    Links?: string[];
}