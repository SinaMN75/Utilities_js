import {httpDelete, httpGet, httpPost, httpPut} from "../utils/http_interceptor";
import {GenericResponse, ProductCreateUpdateDto, ProductFilterDto, ProductReadDto} from "./data";

export enum ProductDataSourceType {
    product = "product",
    tutorial = "tutorial",
    project = "project",
    company = "company",
    tender = "tender",
    magazine = "magazine",
    ad = "ad",
    dailyPrice = "dailyPrice",
    service = "service",
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
            `${this.baseUrl}product/${this.type.toString()}`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async read(onResponse: (response: GenericResponse<ProductReadDto[]>) => any,
               onError: (response: Response) => any) {
        await httpGet(`${this.baseUrl}product/${this.type.toString()}`,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async update(dto: ProductCreateUpdateDto,
                 onResponse: (response: GenericResponse<ProductReadDto>) => any,
                 onError: (response: Response) => any) {
        await httpPut(
            `${this.baseUrl}product/${this.type.toString()}`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async filter(dto: ProductFilterDto,
                 onResponse: (response: GenericResponse<ProductReadDto[]>) => any,
                 onError: (response: Response) => any) {
        await httpPost(`${this.baseUrl}product/${this.type.toString()}/filter`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async readById(id: string,
                   onResponse: (response: GenericResponse<ProductReadDto>) => any,
                   onError: (response: Response) => any) {
        await httpGet(`${this.baseUrl}product/${this.type.toString()}/${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any) {
        await httpDelete(
            `${this.baseUrl}product/${this.type.toString()}/${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }
}