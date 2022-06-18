import { CategoryReadDto } from "./category";
export interface AppSettingsReadDto {
    userRole?: CategoryReadDto[];
    geoList?: CategoryReadDto[];
    categories?: CategoryReadDto[];
    formFieldType?: CategoryReadDto[];
    categoryUseCase?: CategoryReadDto[];
}
