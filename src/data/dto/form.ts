import {CategoryCreateUpdateDto} from "./category";

export interface FormFieldDto {
	id?: string;
	label?: string;
	title?: string;
	isRequired?: boolean;
	optionList?: string;
	type?: number;
	categoryId?: string;
}

export interface FormCreateDto {
	userId?: string;
	productId?: string;
	form?: CategoryCreateUpdateDto[];
}