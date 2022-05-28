import {MediaReadDto} from "./dto";

export interface LocationReadDto {
    id?: string;
    title?: string;
    parentId?: number;
    parent?: string;
    latitude?: number;
    longitude?: number;
    media?: MediaReadDto[];
    type?: number;
}