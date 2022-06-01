import { GenericResponse, ProductCreateUpdateDto, ProductFilterDto, ProductReadDto } from "./data";
export declare enum ProductDataSourceType {
    products = "Product",
    tutorials = "Tutorial",
    projects = "Project",
    companies = "Company",
    tenders = "Tender",
    magazine = "Magazine",
    ads = "Ad",
    dailyPrice = "DailyPrice",
    service = "DailyPrice",
    job = "Job"
}
export declare class ProductDataSource {
    baseUrl: string;
    type: ProductDataSourceType;
    constructor(baseUrl: string, type: ProductDataSourceType);
    create(dto: ProductCreateUpdateDto, onResponse: (response: GenericResponse<ProductReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    read(onResponse: (response: GenericResponse<ProductReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    update(dto: ProductCreateUpdateDto, onResponse: (response: GenericResponse<ProductReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    filter(dto: ProductFilterDto, onResponse: (response: GenericResponse<ProductReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    readById(id: string, onResponse: (response: GenericResponse<ProductReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
}
