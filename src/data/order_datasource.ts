import { httpDelete, httpGet, httpPost, httpPut } from "../utils/http_interceptor";
import { GenericResponse, OrderCreateUpdateDto, OrderDetailsCreateUpdateDto, ProductReadDto , OrderFilterDto} from "./data";

export class OrderDataSource {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async create(dto: OrderCreateUpdateDto,
        onResponse: (response: GenericResponse<OrderFilterDto>) => any,
        onError: (response: Response) => any) {
        await httpPost(
            `${this.baseUrl}Order`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }
    async CreateOrderDetailToOrder(dto: OrderDetailsCreateUpdateDto,
        onResponse: (response: GenericResponse<OrderFilterDto[]>) => any,
        onError: (response: Response) => any) {
        await httpPost(
            `${this.baseUrl}Order/CreateOrderDetailToOrder`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async update(dto: OrderDetailsCreateUpdateDto,
        onResponse: (response: GenericResponse<OrderFilterDto[]>) => any,
        onError: (response: Response) => any) {
        await httpPost(
            `${this.baseUrl}Order/CreateOrderDetailToOrder`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }
    async updateOrder(dto: OrderCreateUpdateDto,
        onResponse: (response: GenericResponse<OrderFilterDto>) => any,
        onError: (response: Response) => any) {
        await httpPut(
            `${this.baseUrl}Order`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }
    async filter(dto: OrderFilterDto,
        onResponse: (response: GenericResponse<OrderFilterDto[]>) => any,
        onError: (response: Response) => any) {
        await httpPost(`${this.baseUrl}Order/filter`,
            dto,
            response => onResponse(response),
            response => onError(response)
        );
    }
    async delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any) {
        await httpDelete(
            `${this.baseUrl}Order/${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }

    async deleteOrderDetail(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any) {
        await httpDelete(
            `${this.baseUrl}Order/DeleteOrderDetail?id=${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }
    async readById(id: string,
        onResponse: (response: GenericResponse<OrderFilterDto>) => any,
        onError: (response: Response) => any) {
        await httpGet(`${this.baseUrl}Order/${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }


    
    
}