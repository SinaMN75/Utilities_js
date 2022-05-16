import { MediaReadDto } from "./dto";
export interface LocationReadDto {
    Id?: number;
    title?: string;
    ParentId?: number;
    Parent?: string;
    Latitude?: number;
    Longitude?: number;
    Media?: MediaReadDto[];
    Type?: number;
}
