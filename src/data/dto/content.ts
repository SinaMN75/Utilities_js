import {MediaReadDto} from "./media";

export interface ContentCreateUpdateDto {
	id?: string;
	title?: string;
	subTitle?: string;
	description?: string;
	useCase?: number;
	approvalStatus?: number;
}

export interface ContentReadDto {
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	deletedAt?: string;
	title?: string;
	subTitle?: string;
	description?: string;
	useCase?: number;
	media?: MediaReadDto[];
}