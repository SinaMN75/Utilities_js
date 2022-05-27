import { FormBuilderFieldList, MediaReadDto } from "./dto";
export interface IdTitleReadDto {
    id?: string;
    title?: string;
    subtitle?: string;
    color?: string;
    link?: string;
    useCase?: number;
    formBuilderFieldLists?: FormBuilderFieldList[];
    media?: MediaReadDto[];
}
export interface IdTitleCreateUpdateDto {
    id?: string;
    title?: string;
    subtitle?: string;
    color?: string;
    link?: string;
    useCase?: number;
}
