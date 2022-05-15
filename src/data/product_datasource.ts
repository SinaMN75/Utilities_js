import {httpGet} from "../utils/http_interceptor";
import {GenericResponse, ProductReadDto} from "./data";

export class ProductDataSource {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getProducts(onResponse: (response: GenericResponse<ProductReadDto>) => any,
                      onError: (response: Response) => any): Promise<GenericResponse<ProductReadDto>> {
        return await httpGet(`${this.baseUrl}api/Tutorial`,
            response => onResponse(response),
            response => onError(response)
        );
    }
}