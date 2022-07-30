import { httpDelete, httpGet, httpPost, httpPut } from "../utils/http_interceptor";
import { GenericResponse, ProductCreateUpdateDto, ProductFilterDto, ProductReadDto } from "./data";

export class ProductDataSource {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async create(dto: ProductCreateUpdateDto,
        onResponse: (response: GenericResponse<ProductReadDto>) => any,
        onError: (response: Response) => any) {
        await httpPost(
            `${this.baseUrl}Product`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async read(onResponse: (response: GenericResponse<ProductReadDto[]>) => any,
        onError: (response: Response) => any) {
        await httpGet(`${this.baseUrl}Product`,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async readMine(onResponse: (response: GenericResponse<ProductReadDto[]>) => any,
        onError: (response: Response) => any) {
        await httpGet(`${this.baseUrl}Product/Mine`,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async update(dto: ProductCreateUpdateDto,
        onResponse: (response: GenericResponse<ProductReadDto>) => any,
        onError: (response: Response) => any) {
        await httpPut(
            `${this.baseUrl}Product`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async filter(dto: ProductFilterDto,
        onResponse: (response: GenericResponse<ProductReadDto[]>) => any,
        onError: (response: Response) => any) {
        await httpPost(`${this.baseUrl}Product/filter`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async filterV2(dto: ProductFilterDto,
        onResponse: (response: GenericResponse<ProductReadDto[]>) => any,
        onError: (response: Response) => any) {
        await httpPost(`${this.baseUrl}Product/FilterV2`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async readById(id: string,
        onResponse: (response: GenericResponse<ProductReadDto>) => any,
        onError: (response: Response) => any) {
        await httpGet(`${this.baseUrl}Product/${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any) {
        await httpDelete(
            `${this.baseUrl}Product/${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }
}