import { GenericResponse, IdTitleCreateUpdateDto, IdTitleReadDto, ProductDataSourceType } from "./data";
export declare enum IdTitleDataSourceType {
    brand = "Brand",
    category = "Category",
    reference = "Reference"
}
export declare class IdTitleDataSource {
    baseUrl: string;
    type: ProductDataSourceType;
    constructor(baseUrl: string, type: ProductDataSourceType);
    create(params: IdTitleCreateUpdateDto, onResponse: (response: GenericResponse<IdTitleReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    read(onResponse: (response: GenericResponse<IdTitleReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    readById(id: string, onResponse: (response: GenericResponse<IdTitleReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
}
