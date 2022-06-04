import {httpDelete, httpGet, httpPost, httpPut} from "../utils/http_interceptor";
import {GenericResponse, ProductCreateUpdateDto, ProductFilterDto, ProductReadDto} from "./data";

export enum ProductDataSourceType {
    products = "Product",
    tutorials = "Tutorial",
    projects = "Project",
    companies = "Company",
    tenders = "Tender",
    magazine = "Magazine",
    ads = "Ad",
    dailyPrice = "DailyPrice",
    service = "Service",
    job = "Job",
}

export class ProductDataSource {
    baseUrl: string;
    type: ProductDataSourceType;

    constructor(baseUrl: string, type: ProductDataSourceType) {
        this.baseUrl = baseUrl;
        this.type = type;
    }

    async create(dto: ProductCreateUpdateDto,
                 onResponse: (response: GenericResponse<ProductReadDto>) => any,
                 onError: (response: Response) => any) {
        await httpPost(
            `${this.baseUrl}${this.type.toString()}`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async read(onResponse: (response: GenericResponse<ProductReadDto[]>) => any,
               onError: (response: Response) => any) {
        await httpGet(`${this.baseUrl}${this.type.toString()}`,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async update(dto: ProductCreateUpdateDto,
                 onResponse: (response: GenericResponse<ProductReadDto>) => any,
                 onError: (response: Response) => any) {
        await httpPut(
            `${this.baseUrl}${this.type.toString()}`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async filter(dto: ProductFilterDto,
                 onResponse: (response: GenericResponse<ProductReadDto[]>) => any,
                 onError: (response: Response) => any) {
        await httpPost(`${this.baseUrl}${this.type.toString()}/filter`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async readById(id: string,
                   onResponse: (response: GenericResponse<ProductReadDto>) => any,
                   onError: (response: Response) => any) {
        await httpGet(`${this.baseUrl}${this.type.toString()}/${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any) {
        await httpDelete(
            `${this.baseUrl}${this.type.toString()}/${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }
}