import { ReportCreateUpdateDto } from "./dto/report";
import { ProductDataSourceType } from "./product_datasource";
export declare class ReportDatasource {
    baseUrl: string;
    constructor(baseUrl: string, type: ProductDataSourceType);
    create(dto: ReportCreateUpdateDto, onResponse: (response: Response) => any, onError: (response: Response) => any): Promise<void>;
}
