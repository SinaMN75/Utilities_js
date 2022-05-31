import { GenericResponse, IdTitleReadDto, ToggleBookmarkDto } from "./data";
export declare class BookmarkDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    toggleBookmark(params: ToggleBookmarkDto, onResponse: (response: GenericResponse<IdTitleReadDto>) => any, onError: (response: Response) => any): Promise<void>;
}
