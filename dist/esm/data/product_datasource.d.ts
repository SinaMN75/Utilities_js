import { ProductReadDto } from "./data";
export declare class ProductDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    getProducts(onResponse: (response: ProductReadDto) => any, onError: (response: Response) => any): Promise<ProductReadDto>;
}
