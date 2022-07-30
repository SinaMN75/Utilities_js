import { httpGet, httpPost } from "../utils/http_interceptor";
import { GenericResponse, TopProductCreateUpdateDto, TopProductReadDto } from "./data";

export class TopProductDataSource {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async create(dto: TopProductCreateUpdateDto,
        onResponse: (response: GenericResponse<TopProductReadDto>) => any,
        onError: (response: Response) => any) {
        await httpPost(
            `${this.baseUrl}TopProduct`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async read(onResponse: (response: GenericResponse<TopProductReadDto[]>) => any,
        onError: (response: Response) => any) {
        await httpGet(`${this.baseUrl}TopProduct`,
            response => onResponse(response),
            response => onError(response)
        );
    }

}