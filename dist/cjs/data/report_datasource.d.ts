import { ReportCreateUpdateDto, ReportFilterDto, ReportReadDto } from "./dto/report";
import { GenericResponse } from "./data";
export declare class ReportDatasource {
    baseUrl: string;
    constructor(baseUrl: string);
    create(dto: ReportCreateUpdateDto, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
    filter(dto: ReportFilterDto, onResponse: (response: GenericResponse<ReportReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
}
