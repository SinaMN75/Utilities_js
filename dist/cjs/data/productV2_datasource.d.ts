import { GenericResponse, ProductCreateUpdateDto, ProductV2FilterDto, ProductReadDto } from "./data";
export declare class ProductV2DataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    create(dto: ProductCreateUpdateDto, onResponse: (response: GenericResponse<ProductReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    update(dto: ProductCreateUpdateDto, onResponse: (response: GenericResponse<ProductReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    filter(dto: ProductV2FilterDto, onResponse: (response: GenericResponse<ProductReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    readById(id: string, onResponse: (response: GenericResponse<ProductReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
}
