import { MediaReadDto } from "./dto";
export interface IdTitleReadDto {
    id?: string;
    title?: string;
    subTitle?: string;
    media?: MediaReadDto[];
}
