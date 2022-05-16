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
    CreatedAt?: string;
    User?: UserReadDto;
    Location?: LocationReadDto[];
    Media?: MediaReadDto[];
    Categories?: IdTitleReadDto[];
    Team?: IdTitleReadDto[];
    Tags?: IdTitleReadDto[];
    Votes?: VoteReadDto[];
}
