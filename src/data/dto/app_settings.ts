import {IdTitleReadDto} from "./id_title";

export interface AppSettingsReadDto {
	language?: IdTitleReadDto[];
	colors?: IdTitleReadDto[];
	favorites?: IdTitleReadDto[];
	specialtyCategories?: IdTitleReadDto[];
	specialties?: IdTitleReadDto[];
	userRole?: IdTitleReadDto[];
	geoList?: IdTitleReadDto[];
	categories?: IdTitleReadDto[];
	formFieldType?: IdTitleReadDto[];
	categoryUseCase?: IdTitleReadDto[];
}