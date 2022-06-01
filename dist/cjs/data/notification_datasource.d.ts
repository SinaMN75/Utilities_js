import { GenericResponse } from "./data";
import { NotificationReadDto } from "./dto/notification";
export declare class NotificationDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    read(onResponse: (response: GenericResponse<NotificationReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    create(dto: NotificationReadDto, onResponse: (response: GenericResponse<NotificationReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
}
