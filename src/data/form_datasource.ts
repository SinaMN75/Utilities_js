import {httpGet, httpPost} from "../utils/http_interceptor";
import {GenericResponse} from "./data";
import {FormCreateDto, FormFieldDto} from "./dto/form";

export class FormDataSource {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async createFormField(dto: FormFieldDto,
	                      onResponse: (response: GenericResponse<FormFieldDto>) => any,
	                      onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}Form/CreateFormField`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async readFormFields(categoryId: string,
	                     onResponse: (response: GenericResponse<FormFieldDto[]>) => any,
	                     onError: (response: Response) => any) {
		await httpGet(
			`${this.baseUrl}Form/${categoryId}`,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async createForm(dto: FormCreateDto,
	                 onResponse: (response: GenericResponse<FormFieldDto>) => any,
	                 onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}Form`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}

}