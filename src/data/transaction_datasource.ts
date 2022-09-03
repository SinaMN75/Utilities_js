import {httpDelete, httpGet, httpPost, httpPut} from "../utils/http_interceptor";
import {GenericResponse, ProductCreateUpdateDto, ProductReadDto} from "./data";
import {TransactionReadDto} from "./dto/transaction";

export class TransactionDataSource {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	

	async read(onResponse: (response: GenericResponse<TransactionReadDto[]>) => any,
	           onError: (response: Response) => any) {
		await httpGet(`${this.baseUrl}Transaction`,
			response => onResponse(response),
			response => onError(response)
		);
	}

}