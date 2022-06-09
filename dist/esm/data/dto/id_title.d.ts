import { MediaReadDto } from "./dto";
export interface IdTitleReadDto {
    id?: string;
    title?: string;
    subtitle?: string;
    color?: string;
    link?: string;
    useCase?: number;
    parent: IdTitleReadDto;
    parentId: string;
    media?: MediaReadDto[];
}
export interface IdTitleCreateUpdateDto {
    id?: string;
    title?: string;
    subtitle?: string;
    color?: string;
    link?: string;
    parentId?: string;
    useCase?: number;
}
