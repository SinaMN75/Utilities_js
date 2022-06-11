import { GenericResponse, IdTitleReadDto, ToggleBookmarkDto, ToggleBookmarkReadDto } from "./data";
export declare class BookmarkDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    toggleBookmark(dto: ToggleBookmarkDto, onResponse: (response: GenericResponse<IdTitleReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    readToggleBookmark(onResponse: (response: GenericResponse<ToggleBookmarkReadDto>) => any, onError: (response: Response) => any): Promise<void>;
}
