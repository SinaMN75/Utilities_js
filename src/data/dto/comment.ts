export interface CommentReadDto {
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	deletedAt?: string;
	score?: number;
	comment?: string;
	parentId?: string;
	userId?: string;
}

export interface CommentCreateUpdateDto {
	parentId?: string;
	score?: number;
	comment?: string;
	userId?: string;
	productId?: string;
}

export interface CommentFilterDto {
	userId?: string,
	productId?: string,
	categoryId?: string,
	showProducts?: boolean

}