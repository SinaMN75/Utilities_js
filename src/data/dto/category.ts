import {MediaReadDto} from "./dto";

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
    parent: CategoryReadDto,
    children?:Array<any>,
    media?: MediaReadDto[];
}

export interface CategoryCreateUpdateDto {
    id?: string;
    parentId?: string
    title?: string;
    subtitle?: string;
    link?: string;
    color?: string;
    useCase?: string;
    type?: string;
}