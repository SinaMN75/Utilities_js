import { MediaCreateUpdateDto } from "./data";
export declare class MediaDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    create(dto: MediaCreateUpdateDto, onResponse: () => any, onError: () => any): Promise<void>;
}
