import { GenericResponse, ProductCreateUpdateDto, ProductReadDto } from "./data";
export declare enum ProductDataSourceType {
    products = "Product",
    tutorials = "Tutorial",
    projects = "Project",
    companies = "Company",
    tenders = "Tender",
    magazine = "Magazine",
    ads = "Ad",
    dailyPrice = "DailyPrice",
    job = "Job"
}
export declare class ProductDataSource {
    baseUrl: string;
    type: ProductDataSourceType;
    constructor(baseUrl: string, type: ProductDataSourceType);
    create(params: ProductCreateUpdateDto, onResponse: (response: GenericResponse<ProductReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    read(onResponse: (response: GenericResponse<ProductReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    readById(id: string, onResponse: (response: ProductReadDto) => any, onError: (response: Response) => any): Promise<void>;
}
