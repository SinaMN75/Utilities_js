import { GenericResponse, IdTitleCreateUpdateDto, IdTitleReadDto } from "./data";
export declare enum IdTitleDataSourceType {
    brand = "brand",
    category = "category",
    reference = "reference",
    speciality = "speciality"
}
export declare class IdTitleDataSource {
    baseUrl: string;
    type: IdTitleDataSourceType;
    constructor(baseUrl: string, type: IdTitleDataSourceType);
    create(dto: IdTitleCreateUpdateDto, onResponse: (response: GenericResponse<IdTitleReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    read(onResponse: (response: GenericResponse<IdTitleReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    update(dto: IdTitleCreateUpdateDto, onResponse: (response: GenericResponse<IdTitleReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
    readById(id: string, onResponse: (response: GenericResponse<IdTitleReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    readeByUseCase(id: string, onResponse: (response: GenericResponse<IdTitleReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
}
