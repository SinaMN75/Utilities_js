import {httpDelete, httpGet, httpPost, httpPut} from "../utils/http_interceptor";
import {GenericResponse, IdTitleCreateUpdateDto, IdTitleReadDto,} from "./data";

export enum IdTitleDataSourceType {
	brand = "brand",
	category = "category",
	reference = "reference",
	speciality = "speciality"
}

export class IdTitleDataSource {
	baseUrl: string;
	type: IdTitleDataSourceType;

	constructor(baseUrl: string, type: IdTitleDataSourceType) {
		this.baseUrl = baseUrl;
		this.type = type;
	}

	async create(dto: IdTitleCreateUpdateDto,
	             onResponse: (response: GenericResponse<IdTitleReadDto>) => any,
	             onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}IdTitle/${this.type.toString()}`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async read(onResponse: (response: GenericResponse<IdTitleReadDto[]>) => any,
	           viewModel: (viewModel: IdTitleViewModel[]) => any,
	           onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}IdTitle/${this.type.toString()}`,
			response => {
				let res = response as GenericResponse<IdTitleReadDto[]>
				let list: IdTitleViewModel[] = []
				res.result?.forEach(x => {
					if (x.parent == null) {
						list.push({id: x.id ?? "", title: x.title ?? ""})
					}
				});

				res.result?.forEach(x => {
					list.forEach(y => {
						if (x.parent != null) {
							y.children?.push({id: x.id ?? "", title: x.title ?? ""})
						}
					});
				});

				onResponse(response);
				viewModel(list);
			},
			response => onError(response)
		);
	}

	async update(dto: IdTitleCreateUpdateDto,
	             onResponse: (response: GenericResponse<IdTitleReadDto>) => any,
	             onError: (response: Response) => any) {
		await httpPut(
			`${this.baseUrl}IdTitle/${this.type.toString()}`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any) {
		await httpDelete(
			`${this.baseUrl}IdTitle/${this.type.toString()}/${id}`,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async readById(id: string,
	               onResponse: (response: GenericResponse<IdTitleReadDto[]>) => any,
	               onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}IdTitle/${this.type.toString()}/${id}`,
			response => onResponse(response),
			response => onError(response)
		);
	}

	async readeByUseCase(id: string,
	                     onResponse: (response: GenericResponse<IdTitleReadDto[]>) => any,
	                     onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}IdTitle/${this.type.toString()}/${id}`,
			response => onResponse(response),
			response => onError(response)
		);
	}

}