import { MediaCreateUpdateDto } from "./data";
export declare class MediaDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    create(dto: MediaCreateUpdateDto, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
}
