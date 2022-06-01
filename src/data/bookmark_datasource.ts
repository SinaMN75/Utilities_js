import {httpPost} from "../utils/http_interceptor";
import {GenericResponse, IdTitleReadDto, ToggleBookmarkDto} from "./data";

export class BookmarkDataSource {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async toggleBookmark(dto: ToggleBookmarkDto,
	                     onResponse: (response: GenericResponse<IdTitleReadDto>) => any,
	                     onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}Bookmark/ToggleBookmark`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}

}