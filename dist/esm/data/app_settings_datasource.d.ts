import { AppSettingsReadDto, GenericResponse } from "./data";
export declare class AppSettingsDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    getEnums(onResponse: (response: GenericResponse<AppSettingsReadDto>) => any, onError: (response: Response) => any): Promise<void>;
}
