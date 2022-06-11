import { httpPost } from "../utils/http_interceptor";
import { GenericResponse, IdTitleReadDto, ToggleBookmarkDto,ToggleBookmarkReadDto } from "./data";

export class BookmarkDataSource {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async toggleBookmark(dto: ToggleBookmarkDto,
		onResponse: (response: GenericResponse<IdTitleReadDto>) => any,
		onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}FollowBookmark/ToggleBookmark/ToggleBookmark`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}
	async readToggleBookmark(
		onResponse: (response: GenericResponse<ToggleBookmarkReadDto>) => any,
		onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}FollowBookmark/ReadBookmarks/ReadBookmarks`,
			null,
			response => onResponse(response),
			response => onError(response)
		);
	}
}