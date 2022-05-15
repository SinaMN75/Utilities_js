export interface GenericResponse<T> {
    status?: number;
    message?: string;
    result?: T;
}
export interface Response {
    status?: number;
    message?: string;
}
