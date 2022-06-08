import { AppSettingsReadDto, GenericResponse, LocationReadDto } from "./data";
export declare class AppSettingsDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    getEnums(onResponse: (response: GenericResponse<AppSettingsReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    readLocation(onResponse: (response: GenericResponse<LocationReadDto>) => any, onError: (response: Response) => any): Promise<void>;
}
