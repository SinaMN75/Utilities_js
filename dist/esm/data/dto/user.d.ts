import { IdTitleReadDto, MediaReadDto } from "./dto";
export interface UserReadDto {
    token?: string;
    id?: string;
    fullName?: string;
    phoneNumber?: string;
    userName?: string;
    bio?: string;
    appUserName?: string;
    appPhoneNumber?: string;
    birthDate?: string;
    media?: MediaReadDto[];
    colors?: IdTitleReadDto[];
    specialties?: IdTitleReadDto[];
    favorites?: IdTitleReadDto[];
}
export interface GetMobileVerificationCodeForLoginDto {
    mobile?: string;
    sendSMS?: boolean;
}
export interface VerifyMobileForLoginDto {
    mobile?: string;
    verificationCode?: string;
}
