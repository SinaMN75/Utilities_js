import { MediaReadDto } from "./media";
import { ProductV2FilterDto } from "./product";
import { UserReadDto } from "./user";
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
export interface GroupChatCreateUpdateDto {
    id?: string;
    title?: string;
    description?: string;
    value?: string;
    type?: string;
    useCase?: string;
    department?: string;
    chatStatus?: number;
    priority?: number;
    userIds?: string[];
    productIds?: string[];
}
export interface GroupChatReadDto {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    title?: string;
    description?: string;
    value?: string;
    type?: string;
    useCase?: string;
    department?: string;
    chatStatus?: number;
    priority?: number;
    media?: MediaReadDto[];
    users?: UserReadDto[];
    products?: ProductV2FilterDto[];
    groupChatMessage?: GroupChatMessage[];
}
export interface GroupChatMessage {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    message?: string;
    type?: string;
    useCase?: string;
    groupChat?: string;
    groupChatId?: string;
    user?: UserReadDto;
    userId?: string;
    media?: MediaReadDto[];
}
export interface GroupChatMessageCreateUpdateDto {
    message?: string;
    type?: string;
    useCase?: string;
    groupChatId?: string;
}
