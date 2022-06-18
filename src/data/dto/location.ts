import {MediaReadDto} from "./dto";

export interface LocationReadDto {
    id?: number;
    title?: string;
    parentId?: number;
    parent?: string;
    latitude?: number;
    longitude?: number;
    type?: number;
    media?: MediaReadDto[];
}