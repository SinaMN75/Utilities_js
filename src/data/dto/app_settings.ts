import {IdTitleReadDto} from "./id_title";

export interface AppSettingsReadDto {
	language?: IdTitleReadDto[];
	colors?: IdTitleReadDto[];
	favorites?: IdTitleReadDto[];
	specialtyCategories?: IdTitleReadDto[];
	specialties?: IdTitleReadDto[];
	userRole?: IdTitleReadDto[];
	geoList?: Category[];
	categories?: Category[];
	formFieldType?: IdTitleReadDto[];
	categoryUseCase?: IdTitleReadDto[];
}

export interface Category {
    key?: string;
    value?: string;
    image?: string;
    childs?: string[];
    parentId?: string;
    parentTitle?: string;
    languageId?: string;
    categoryFor?: number;
}

export interface FormBuilderFieldList {
    id?: string;
    value?: string;
    formFieldId?: string;
}
