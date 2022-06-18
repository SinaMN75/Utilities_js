import { MediaReadDto } from "./dto";
export interface CategoryReadDto {
    id?: string;
    secondaryId?: number;
    title?: string;
    titleTr1?: string;
    subtitle?: string;
    color?: string;
    link?: string;
    useCase?: string;
    type?: string;
    parentId?: string;
    parent: CategoryReadDto;
    media?: MediaReadDto[];
}
export interface CategoryCreateUpdateDto {
    id?: string;
    title?: string;
    subtitle?: string;
    color?: string;
    link?: string;
    parentId?: string;
    useCase?: number;
}
