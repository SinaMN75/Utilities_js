import { GenericResponse, CategoryReadDto, ToggleBookmarkDto, BookmarkReadDto } from "./data";
export declare class BookmarkDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    toggleBookmark(dto: ToggleBookmarkDto, onResponse: (response: GenericResponse<CategoryReadDto>) => any, onError: (response: Response) => any): Promise<void>;
    readToggleBookmark(onResponse: (response: GenericResponse<BookmarkReadDto>) => any, onError: (response: Response) => any): Promise<void>;
}
