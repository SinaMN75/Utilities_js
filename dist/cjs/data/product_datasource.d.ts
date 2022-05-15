import { GenericResponse, ProductReadDto } from "./data";
export declare class ProductDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    getProducts(onResponse: (response: GenericResponse<ProductReadDto>) => any, onError: (response: Response) => any): Promise<GenericResponse<ProductReadDto>>;
}
