import { ReportCompletationInformationDto, ReportCreateUpdateDto, ReportFilterDto, ReportReadDto, ReportTopWordsDto } from "./dto/report";
import { GenericResponse } from "./data";
export declare class ReportDatasource {
    baseUrl: string;
    constructor(baseUrl: string);
    create(dto: ReportCreateUpdateDto, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
    filter(dto: ReportFilterDto, onResponse: (response: GenericResponse<ReportReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
    topWords(dto: ReportTopWordsDto, onResponse: (response: GenericResponse<string>) => any, onError: (response: Response) => any): Promise<void>;
    completationInformation(dto: ReportTopWordsDto, onResponse: (response: GenericResponse<ReportCompletationInformationDto[]>) => any, onError: (response: Response) => any): Promise<void>;
}
