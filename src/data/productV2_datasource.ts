import { httpDelete, httpGet, httpPost, httpPut } from "../utils/http_interceptor";
import { GenericResponse, ProductCreateUpdateDto, ProductV2FilterDto, ProductReadDto } from "./data";

export class ProductV2DataSource {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async create(dto: ProductCreateUpdateDto,
        onResponse: (response: GenericResponse<ProductReadDto>) => any,
        onError: (response: Response) => any) {
        await httpPost(
            `${this.baseUrl}ProductV2`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async update(dto: ProductCreateUpdateDto,
        onResponse: (response: GenericResponse<ProductReadDto>) => any,
        onError: (response: Response) => any) {
        await httpPut(
            `${this.baseUrl}ProductV2`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async filter(dto: ProductV2FilterDto,
        onResponse: (response: GenericResponse<ProductReadDto[]>) => any,
        onError: (response: Response) => any) {
        await httpPost(`${this.baseUrl}ProductV2/filter`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

   

    async readById(id: string,
        onResponse: (response: GenericResponse<ProductReadDto>) => any,
        onError: (response: Response) => any) {
        await httpGet(`${this.baseUrl}ProductV2/${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any) {
        await httpDelete(
            `${this.baseUrl}ProductV2/${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }
}