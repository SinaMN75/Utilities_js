import {FormFieldDto, IdTitleReadDto, LocationReadDto, MediaReadDto, UserReadDto, VoteReadDto} from "./dto";

export interface ProductReadDto {
    id?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    details?: string;
    address?: string;
    author?: string;
    phoneNumber?: string;
    email?: string;
    isForSale?: boolean;
    enabled?: boolean;
    isBookmarked?: boolean;
    latitude?: number;
    longitude?: number;
    visitsCount?: number;
    price?: number;
    startDate?: string;
    endDate?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    status?: number;
    user?: UserReadDto;
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
    details?: string;
    address?: string;
    author?: string;
    phoneNumber?: string;
    email?: string;
    isForSale?: boolean;
    enabled?: boolean;
    latitude?: number;
    longitude?: number;
    visitsCount?: number;
    price?: number;
    startDate?: string;
    endDate?: string;
    status?: number;
    locations?: number[];
    favorites?: string[];
    categories?: string[];
    references?: string[];
    brands?: string[];
    specialties?: string[];
    tags?: string[];
    forms?: string[];
    voteFields?: string[];
    reports?: string[];
}

export interface ProductFilterDto {
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
    author?: string,
    phoneNumber?: string,
    email?: string,
    latitude?: number,
    longitude?: number,
    locations?: number[];
    categories?: string[];
    reference?: string[];
    brands?: string[];
    specialties?: string[];
    tags?: string[];
}