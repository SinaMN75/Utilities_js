import {httpDelete, httpGet, httpPost, httpPut} from "../utils/http_interceptor";
import {GenericResponse, MediaCreateUpdateDto, ProductCreateUpdateDto, ProductFilterDto, ProductReadDto} from "./data";

export class MediaDataSource {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async create(dto: MediaCreateUpdateDto,
                 onResponse: (response: Response) => any,
                 onError: (response: Response) => any) {
        await httpPost(
            `${this.baseUrl}Media`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

}