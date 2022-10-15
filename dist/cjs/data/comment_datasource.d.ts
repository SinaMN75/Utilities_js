import { CommentCreateUpdateDto, Response, GenericResponse, ProductReadDto, CommentFilterDto } from "./data";
export declare class CommentDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    create(dto: CommentCreateUpdateDto, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
    update(dto: CommentCreateUpdateDto, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
    delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
    getByUser(id: string, onResponse: (response: GenericResponse<ProductReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    filter(dto: CommentFilterDto, onResponse: (response: GenericResponse<ProductReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
}
