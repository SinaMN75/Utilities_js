import { IdTitleReadDto, MediaReadDto } from "./dto";
export interface UserReadDto {
    Token?: string;
    Id?: string;
    FullName?: string;
    phoneNumber?: string;
    UserName?: string;
    Bio?: string;
    AppUserName?: string;
    AppPhoneNumber?: string;
    BirthDate?: string;
    Media?: MediaReadDto[];
    Colors?: IdTitleReadDto[];
    Specialties?: IdTitleReadDto[];
    Favorites?: IdTitleReadDto[];
}
