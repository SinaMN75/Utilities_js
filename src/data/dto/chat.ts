export interface ChatReadDto {
	id?: string;
	userId?: string;
	messageText?: string;
	fullName?: string;
	dateTime?: string;
	profileImage?: string;
	send?: boolean;
}

export interface ChatCreateUpdateDto {
	userId?: string;
	messageText?: string;
}
