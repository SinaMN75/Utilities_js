import { IdTitleReadDto, MediaReadDto } from "./dto";
export interface UserReadDto {
    token?: string;
    id?: string;
    fullName?: string;
    phoneNumber?: string;
    userName?: string;
    bio?: string;
    isAdmin?: boolean;
    appUserName?: string;
    appEmail?: string;
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
export interface LoginWithEmailPasswordDto {
    email?: string;
    password?: string;
}
export interface UserCreateUpdateDto {
    fullName?: string;
    bio?: string;
    headline?: string;
    website?: string;
    password?: string;
    appUserName?: string;
    appPhoneNumber?: string;
    appEmail?: string;
    colors?: string[];
    specialties?: string[];
    favorites?: string[];
    locations?: number[];
    birthDate?: string;
}
