export interface FormFieldDto {
	id?: string;
	value?: string;
	label?: string;
	isRequired?: boolean;
	optionList?: string;
	type?: number;
	categoryId?: string;
}

export interface FormCreateDto {
	userId?: string;
	productId?: string;
	projectId?: string;
	tutorialId?: string;
	eventId?: string;
	adId?: string;
	companyId?: string;
	tenderId?: string;
	serviceId?: string;
	magazineId?: string;
	kvvm?: Kvvm[];
}

export interface Kvvm {
	key?: string;
	value?: string;
}
