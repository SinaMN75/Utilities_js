import {ReportCreateUpdateDto} from "./dto/report";
import {ProductDataSourceType} from "./product_datasource";
import {httpPost} from "../utils/http_interceptor";

class ReportDatasource {

	baseUrl: string;

	constructor(baseUrl: string, type: ProductDataSourceType) {
		this.baseUrl = baseUrl;
	}

	async create(dto: ReportCreateUpdateDto,
	             onResponse: (response: Response) => any,
	             onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}Report`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}
}