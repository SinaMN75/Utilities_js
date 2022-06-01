import { MediaReadDto } from "./media";
export interface NotificationReadDto {
    id?: number;
    title?: string;
    message?: string;
    link?: string;
    createdAt?: string;
    visited?: boolean;
    useCase?: number;
    media?: MediaReadDto[];
}
export interface NotificationCreateUpdateDto {
    title?: string;
    userId?: string;
    message?: string;
    link?: string;
    media?: string;
    useCase?: number;
}
