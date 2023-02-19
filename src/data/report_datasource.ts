import { ReportCompletationInformationDto, ReportCreateUpdateDto, ReportFilterDto, ReportReadDto, ReportTopWordsDto } from "./dto/report";
import { httpPost } from "../utils/http_interceptor";
import { GenericResponse } from "./data";

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
	async filter(dto: ReportFilterDto,
		onResponse: (response: GenericResponse<ReportReadDto[]>) => any,
		onError: (response: Response) => any) {
		await httpPost(`${this.baseUrl}Report/filter`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}
	async topWords(dto: ReportTopWordsDto,
		onResponse: (response: GenericResponse<string>) => any,
		onError: (response: Response) => any) {
		await httpPost(`${this.baseUrl}Report/TopReports`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}
	async completationInformation(dto: ReportTopWordsDto,
		onResponse: (response: GenericResponse<ReportCompletationInformationDto[]>) => any,
		onError: (response: Response) => any) {
		await httpPost(`${this.baseUrl}Report/CompletationInformation`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}
}
