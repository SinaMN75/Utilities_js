import { CategoryReadDto, GenderReadDto, MediaReadDto, LocationReadDto } from "./dto";

export interface UserReadDto {
    token?: string;
    id?: string;
    fullName?: string;
    phoneNumber?: string;
    userName?: string;
    bio?: string;
    appUserName?: string;
    appPhoneNumber?: string;
    appEmail?: string;
    email?: string;
    type?: string;
    firstName?: string;
    lastName?: string;
    headline?: string;
    website?: string;
    region?: string;
    activity?: string;
    wallet?: number;
    showContactInfo?: boolean;
    isAdmin?: boolean;
    suspend?: boolean;
    birthDate?: string;
    gender?: GenderReadDto;
    media?: MediaReadDto[];
    colors?: CategoryReadDto[];
    specialties?: CategoryReadDto[];
    locations?: LocationReadDto[];
    categories?: CategoryReadDto[];
    favorites?: CategoryReadDto[];
    passwordHash?:string;
	products?: any[];
    accessLevel?:string;
}

export interface GetVerificationCodeForLoginDto {
    mobile?: string;
    sendSMS?: boolean;
}

export interface VerifyForLoginDto {
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
    email?: string;
    categories?: string[];
    locations?: number[];
    birthDate?: string;
    accessLevel?:string;
}


export interface UserFilterDto {
    userId?: string;
    userName?: string;
    showGender?: boolean;
    showMedia?: boolean;
    showCategories?: boolean;
    showLocations?: boolean;
    showForms?: boolean;
    showProducts?: boolean;
    showTransactions?: boolean;
    showFollowings?: boolean;
}
export interface UserRegisterDto {
    userName?: string;
    firstName?: string,
    lastName?: string,
    email?: string;
    phoneNumber?: string;
    password?: string;
    sendSMS?: boolean;
    accessLevel?:string;
}


