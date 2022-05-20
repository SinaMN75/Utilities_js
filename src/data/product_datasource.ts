import {httpGet, httpPost} from "../utils/http_interceptor";
import {GenericResponse, ProductCreateUpdateDto, ProductReadDto} from "./data";

export enum ProductDataSourceType {
    products = "Product",
    tutorials = "Tutorial",
    projects = "Project",
    companies = "Company",
    tenders = "Tender",
    magazine = "Magazine",
    ads = "Ad",
    dailyPrice = "DailyPrice",
    job = "Job",
}

export class ProductDataSource {
    baseUrl: string;
    type: ProductDataSourceType;

    constructor(baseUrl: string, type: ProductDataSourceType) {
        this.baseUrl = baseUrl;
        this.type = type;
    }

    create(params: ProductCreateUpdateDto,
           onResponse: (response: GenericResponse<ProductReadDto>) => any,
           onError: (response: Response) => any) {
        httpPost(
            `${this.baseUrl}api/${this.type.toString()}`,
            params,
            response => onResponse(response),
            response => onError(response)
        );
    }

    read(onResponse: (response: GenericResponse<ProductReadDto[]>) => any,
         onError: (response: Response) => any) {
        httpGet(`${this.baseUrl}api/${this.type.toString()}`,
            response => onResponse(response),
            response => onError(response)
        );
    }

    readById(id: string,
             onResponse: (response: ProductReadDto) => any,
             onError: (response: Response) => any) {
        httpGet(`${this.baseUrl}api/${this.type.toString()}/${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }
}