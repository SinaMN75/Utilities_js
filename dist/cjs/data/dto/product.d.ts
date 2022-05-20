import { IdTitleReadDto, LocationReadDto, MediaReadDto, UserReadDto, VoteReadDto } from "./dto";
export interface ProductReadDto {
    Id?: string;
    Title?: string;
    Subtitle?: string;
    Description?: string;
    Enabled?: boolean;
    IsForSale?: boolean;
    IsBookmarked?: boolean;
    Price?: number;
    VisitsCount?: number;
    StartDate?: string;
    EndDate?: string;
    User?: UserReadDto;
    Location?: LocationReadDto[];
    Media?: MediaReadDto[];
    Categories?: IdTitleReadDto[];
    Team?: IdTitleReadDto[];
    Tags?: IdTitleReadDto[];
    Votes?: VoteReadDto[];
    Brands?: IdTitleReadDto[];
    References?: IdTitleReadDto[];
    Specialities?: IdTitleReadDto[];
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
