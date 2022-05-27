import { FormFieldDto, IdTitleReadDto, LocationReadDto, MediaReadDto, UserReadDto, VoteReadDto } from "./dto";
export interface ProductReadDto {
    id?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    enabled?: boolean;
    isForSale?: boolean;
    updatedAt?: string;
    isBookmarked?: boolean;
    price?: number;
    visitsCount?: number;
    startDate?: string;
    endDate?: string;
    user?: UserReadDto;
    createdAt?: string;
    location?: LocationReadDto[];
    media?: MediaReadDto[];
    categories?: IdTitleReadDto[];
    team?: IdTitleReadDto[];
    tags?: IdTitleReadDto[];
    votes?: VoteReadDto[];
    brands?: IdTitleReadDto[];
    references?: IdTitleReadDto[];
    specialities?: IdTitleReadDto[];
    forms?: FormFieldDto[];
}
export interface ProductCreateUpdateDto {
    id?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    subTitle?: string;
    price?: number;
    isForSale?: boolean;
    enabled?: boolean;
    address?: string;
    startDate?: string;
    endDate?: string;
    locations?: number[];
    categories?: string[];
    reference?: string[];
    brands?: string[];
    specialties?: string[];
    tags?: string[];
}
