import { FormFieldDto, CategoryReadDto, LocationReadDto, MediaReadDto, UserReadDto } from "./dto";
export interface ProductReadDto {
    id?: string;
    userId?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    details?: string;
    address?: string;
    author?: string;
    phoneNumber?: string;
    link?: string;
    website?: string;
    email?: string;
    type?: string;
    unit?: string;
    useCase?: string;
    isForSale?: boolean;
    enabled?: boolean;
    isBookmarked?: boolean;
    latitude?: number;
    longitude?: number;
    visitsCount?: number;
    minOrder?: number;
    maxOrder?: number;
    maxPrice?: number;
    price?: number;
    startDate?: string;
    minPrice?: number;
    endDate?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    status?: number;
    user?: UserReadDto;
    location?: LocationReadDto[];
    media?: MediaReadDto[];
    categories?: CategoryReadDto[];
    team?: CategoryReadDto[];
    tags?: CategoryReadDto[];
    forms?: FormFieldDto[];
    value: string;
    value1: string;
    value2: string;
    value3: string;
    value4: string;
    value5: string;
    value6: string;
    value7: string;
    value8: string;
    value9: string;
    value10: string;
    value11: string;
    value12: string;
    state: string;
    relatedIds?: string;
    responseTime?: number;
    onTimeDelivery?: number;
    discountPercent?: number;
    keyValues1?: string;
    keyValues2?: string;
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
    packaging?: string;
    port?: string;
    shipping?: string;
}
export interface ProductCreateUpdateDto {
    id?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    details?: string;
    address?: string;
    author?: string;
    phoneNumber?: string;
    link?: string;
    website?: string;
    email?: string;
    type?: string;
    unit?: string;
    useCase?: string;
    isForSale?: boolean;
    enabled?: boolean;
    latitude?: number;
    longitude?: number;
    visitsCount?: number;
    price?: number;
    startDate?: string;
    endDate?: string;
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
    minOrder?: number;
    maxOrder?: number;
    status?: number;
    locations?: number[];
    categories?: string[];
    forms?: string[];
    voteFields?: string[];
    reports?: string[];
    relatedIds?: string;
    responseTime?: number;
    onTimeDelivery?: number;
    discountPercent?: number;
}
export interface ProductFilterDto {
    title?: string;
    subTitle?: string;
    description?: string;
    details?: string;
    link?: string;
    website?: string;
    address?: string;
    author?: string;
    phoneNumber?: string;
    email?: string;
    type?: string;
    unit?: string;
    useCase?: string;
    startPriceRange?: number;
    endPriceRange?: number;
    enabled?: boolean;
    isForSale?: boolean;
    isBookmarked?: boolean;
    visitsCount?: number;
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
    minOrder?: number;
    maxOrder?: number;
    status?: number;
    startDate?: string;
    endDate?: string;
    locations?: number[];
    categories?: string[];
    filterOrder?: number;
    pageSize?: number;
    pageNumber?: number;
    pageCount?: number;
}
export interface ProductV2FilterDto {
    title?: string;
    subtitle?: string;
    description?: string;
    details?: string;
    link?: string;
    website?: string;
    address?: string;
    author?: string;
    phoneNumber?: string;
    email?: string;
    type?: string;
    unit?: string;
    useCase?: string;
    state?: string;
    packaging?: string;
    port?: string;
    shipping?: string;
    keyValues1?: string;
    keyValues2?: string;
    value?: string;
    value1?: string;
    value2?: string;
    value3?: string;
    value4?: string;
    value5?: string;
    value6?: string;
    value7?: string;
    value8?: string;
    value9?: string;
    value10?: string;
    value11?: string;
    value12?: string;
    userId?: string;
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
    minOrder?: number;
    maxOrder?: number;
    minPrice?: number;
    maxPrice?: number;
    startPriceRange?: number;
    endPriceRange?: number;
    enabled?: boolean;
    isForSale?: boolean;
    isBookmarked?: boolean;
    isFollowing?: boolean;
    showLocation?: boolean;
    showMedia?: boolean;
    showForms?: boolean;
    showCategories?: boolean;
    showCategoryMedia?: boolean;
    showVoteFields?: boolean;
    showVotes?: boolean;
    showReports?: boolean;
    showComments?: boolean;
    showTeams?: boolean;
    showCreator?: boolean;
    visitsCount?: number;
    pageSize?: number;
    pageNumber?: number;
    startDate?: Date;
    endDate?: Date;
    status?: number;
    locations?: number[];
    categories?: string[];
    filterOrder?: number;
    orderByVotes?: boolean;
    orderByAtoZ?: boolean;
    orderByZtoA?: boolean;
    orderByPriceAccending?: boolean;
    orderByPriceDecending?: boolean;
    orderByCreatedDate?: boolean;
    orderByCreaedDateDecending?: boolean;
    relatedIds?: string;
    responseTime?: number;
    onTimeDelivery?: number;
    discountPercent?: number;
}
