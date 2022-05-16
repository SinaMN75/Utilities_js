import { GenericResponse, ProductReadDto, ProductResult } from "./data";
export declare class ProductDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    read(onResponse: (response: GenericResponse<ProductResult[]>) => any, onError: (response: Response) => any): Promise<GenericResponse<ProductResult[]>>;
    readById(id: string, onResponse: (response: ProductReadDto) => any, onError: (response: Response) => any): Promise<ProductReadDto>;
}
