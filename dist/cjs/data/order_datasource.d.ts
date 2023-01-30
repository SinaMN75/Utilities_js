import { GenericResponse, OrderCreateUpdateDto, OrderDetailsCreateUpdateDto, OrderFilterDto, OrderCreateSummaryDto, OrderReadSummaryDto } from "./data";
export declare class OrderDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    create(dto: OrderCreateUpdateDto, onResponse: (response: GenericResponse<OrderFilterDto>) => any, onError: (response: Response) => any): Promise<void>;
    CreateOrderDetailToOrder(dto: OrderDetailsCreateUpdateDto, onResponse: (response: GenericResponse<OrderFilterDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    update(dto: OrderDetailsCreateUpdateDto, onResponse: (response: GenericResponse<OrderFilterDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    updateOrder(dto: OrderCreateUpdateDto, onResponse: (response: GenericResponse<OrderFilterDto>) => any, onError: (response: Response) => any): Promise<void>;
    filter(dto: OrderFilterDto, onResponse: (response: GenericResponse<OrderFilterDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    filterSummary(dto: OrderCreateSummaryDto, onResponse: (response: GenericResponse<OrderReadSummaryDto>) => any, onError: (response: Response) => any): Promise<void>;
    delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
    deleteOrderDetail(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
    readById(id: string, onResponse: (response: GenericResponse<OrderFilterDto>) => any, onError: (response: Response) => any): Promise<void>;
}
