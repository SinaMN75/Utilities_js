export interface GenericResponse<T> {
    Status?: number;
    Message?: string;
    Result?: T;
}
export interface Response {
    Status?: number;
    Message?: string;
}
