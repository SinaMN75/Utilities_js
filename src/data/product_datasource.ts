import {httpGet} from "../utils/http_interceptor";
import {ProductReadDto} from "./data";

export class ProductDataSource {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getProducts(onResponse: (response: ProductReadDto) => any,
                      onError: (response: Response) => any): Promise<ProductReadDto> {
        return await httpGet(`${this.baseUrl}api/Tutorial`,
            response => onResponse(response),
            response => onError(response)
        );
    }
}