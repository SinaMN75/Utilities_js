import {httpGet} from "../utils/http_interceptor";
import {GenericResponse, ProductReadDto, ProductResult} from "./data";

export class TutorialDataSource {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async read(onResponse: (response: GenericResponse<ProductResult[]>) => any,
               onError: (response: Response) => any): Promise<GenericResponse<ProductResult[]>> {
        return await httpGet(`${this.baseUrl}api/Tutorial`,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async readById(id: string, onResponse: (response: ProductReadDto) => any,
                   onError: (response: Response) => any): Promise<ProductReadDto> {
        return await httpGet(`${this.baseUrl}api/Tutorial/${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }
}