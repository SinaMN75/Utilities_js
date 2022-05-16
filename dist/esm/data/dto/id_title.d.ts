import { MediaReadDto } from "./dto";
export interface IdTitleReadDto {
    Id?: string;
    Title?: string;
    SubTitle?: string;
    Media?: MediaReadDto[];
}
