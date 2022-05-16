import { GenericResponse, ProductReadDto } from "./data";
export declare enum ProductDataSourceType {
    products = "Product",
    tutorials = "Tutorial",
    projects = "Project",
    companies = "Company",
    tenders = "Tender",
    magazine = "Magazine"
}
export declare class ProductDataSource {
    baseUrl: string;
    type: ProductDataSourceType;
    constructor(baseUrl: string, type: ProductDataSourceType);
    read(onResponse: (response: GenericResponse<ProductReadDto[]>) => any, onError: (response: Response) => any): Promise<GenericResponse<ProductReadDto[]>>;
    readById(id: string, onResponse: (response: ProductReadDto) => any, onError: (response: Response) => any): Promise<ProductReadDto>;
}
