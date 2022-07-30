import { GenericResponse, TopProductCreateUpdateDto, TopProductReadDto } from "./data";
export declare class TopProductDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    create(dto: TopProductCreateUpdateDto, onResponse: (response: GenericResponse<TopProductReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    read(onResponse: (response: GenericResponse<TopProductReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
}
