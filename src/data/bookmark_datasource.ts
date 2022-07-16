import { httpPost } from "../utils/http_interceptor";
import { GenericResponse, CategoryReadDto, ToggleBookmarkDto,BookmarkReadDto } from "./data";

export class BookmarkDataSource {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async toggleBookmark(dto: ToggleBookmarkDto,
		onResponse: (response: GenericResponse<CategoryReadDto>) => any,
		onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}FollowBookmark/ToggleBookmark`,
			dto,
			response => onResponse(response),
			response => onError(response)
		);
	}
	async readToggleBookmark(
		onResponse: (response: GenericResponse<BookmarkReadDto>) => any,
		onError: (response: Response) => any) {
		await httpPost(
			`${this.baseUrl}FollowBookmark/ReadBookmarks`,
			null,
			response => onResponse(response),
			response => onError(response)
		);
	}
}