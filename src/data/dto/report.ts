import { CategoryReadDto } from "./category";
import { FormFieldDto } from "./form";
import { MediaReadDto } from "./media";

export interface ReportCreateUpdateDto {
	id?: string;
	title?: string;
	description?: string;
	productId?: string;
}

export interface ReportFilterDto {
	user?: boolean;
	product?: boolean;
}


export interface ReportReadDto {
	id?: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
	title?: string;
	subtitle?: string;
	description?: string;
	details?: string;
	address?: string;
	author?: string;
	phoneNumber?: string;
	link?: string;
	website?: string;
	email?: string;
	type?: string;
	useCase?: string;
	unit?: string;
	latitude?: number;
	longitude?: number;
	length?: number;
	width?: number;
	height?: number;
	weight?: number;
	minOrder?: number;
	maxOrder?: number;
	price?: number;
	isForSale?: boolean;
	enabled?: boolean;
	visitsCount?: number;
	startDate?: Date;
	endDate?: Date;
	status?: number;
	userId?: string;
	user?: string;
	locations?: Location[];
	media?: MediaReadDto[];
	forms?: FormFieldDto[];
	categories?: CategoryReadDto[];
	voteFields?: CategoryReadDto[];
	reports?: any;
	bookmarks?:any;
	comments?: Comment[];
	teams?: CategoryReadDto[];
}


export interface ReportTopWordsDto {
	user?:          boolean;
    product?:       boolean;
    reportType?:    number;
    userId?:        string;
    creatorUserId?: string;
    count?:         number;
}



export interface ReportCompletationInformationDto {
    title?:     string;
    month?:     number;
    year?:      number;
    day?:       number;
    count?:     number;
    total?:     number;
    productId?: string;
}

