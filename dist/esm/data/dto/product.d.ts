import { IdTitleReadDto, LocationReadDto, MediaReadDto, UserReadDto, VoteReadDto } from "./dto";
export interface ProductReadDto {
    status?: number;
    message?: string;
    result?: ProductReadDto[];
}
export interface ProductResult {
    id?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    enabled?: boolean;
    isForSale?: boolean;
    isBookmarked?: boolean;
    price?: number;
    visitsCount?: number;
    createdAt?: string;
    user?: UserReadDto;
    location?: LocationReadDto[];
    media?: MediaReadDto[];
    categories?: IdTitleReadDto[];
    team?: IdTitleReadDto[];
    tags?: IdTitleReadDto[];
    votes?: VoteReadDto[];
}
