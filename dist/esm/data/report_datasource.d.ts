import { ReportCreateUpdateDto } from "./dto/report";
export declare class ReportDatasource {
    baseUrl: string;
    constructor(baseUrl: string);
    create(dto: ReportCreateUpdateDto, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
}
