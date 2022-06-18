import {ReportCreateUpdateDto} from "./dto/report";
import {httpPost} from "../utils/http_interceptor";

export class ReportDatasource {

	baseUrl: string;

	constructor(baseUrl: string) {
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
