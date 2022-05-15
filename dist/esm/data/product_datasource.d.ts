import { GenericResponse, ProductReadDto } from "./data";
export declare class ProductDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    getProducts(onResponse: (response: GenericResponse<ProductReadDto>) => any, onError: (response: GenericResponse<ProductReadDto>) => any): Promise<GenericResponse<ProductReadDto>>;
}
