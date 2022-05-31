import { GenericResponse, IdTitleCreateUpdateDto, IdTitleReadDto } from "./data";
export declare enum IdTitleDataSourceType {
    brand = "Brand",
    category = "Category",
    reference = "Reference"
}
export declare class IdTitleDataSource {
    baseUrl: string;
    type: IdTitleDataSourceType;
    constructor(baseUrl: string, type: IdTitleDataSourceType);
    create(params: IdTitleCreateUpdateDto, onResponse: (response: GenericResponse<IdTitleReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    read(onResponse: (response: GenericResponse<IdTitleReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    update(params: IdTitleCreateUpdateDto, onResponse: (response: GenericResponse<IdTitleReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
    readById(id: string, onResponse: (response: GenericResponse<IdTitleReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    readeByUseCase(id: string, onResponse: (response: GenericResponse<IdTitleReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
}
