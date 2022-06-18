import { CategoryCreateUpdateDto, CategoryReadDto, GenericResponse } from "./data";
export declare class CategoryDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    create(dto: CategoryCreateUpdateDto, onResponse: (response: GenericResponse<CategoryReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    read(onResponse: (response: GenericResponse<CategoryReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    update(dto: CategoryCreateUpdateDto, onResponse: (response: GenericResponse<CategoryReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
}
