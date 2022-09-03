import { GenericResponse, ProductCreateUpdateDto } from "./data";
import { ContentCreateUpdateDto, ContentReadDto } from "./dto/content";
export declare class ContentDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    create(dto: ContentCreateUpdateDto, onResponse: (response: GenericResponse<ContentReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    read(onResponse: (response: GenericResponse<ContentReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    update(dto: ProductCreateUpdateDto, onResponse: (response: GenericResponse<ContentReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    readById(id: string, onResponse: (response: GenericResponse<ContentReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
}
