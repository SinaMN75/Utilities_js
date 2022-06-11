export interface ToggleBookmarkDto {
    productId?: string;
    projectId?: string;
    tutorialId?: string;
    eventId?: string;
    adId?: string;
    companyId?: string;
    tenderId?: string;
    serviceId?: string;
    magazineId?: string;
    tagId?: string;
    specialityId?: string;
    colorId?: string;
}
export interface ToggleBookmarkReadDto {
    products?: any[];
    dailyPrices?: any[];
    projects?: any[];
    tutorials?: any[];
    ads?: any[];
    companies?: any[];
    tenders?: any[];
    services?: any[];
    magazines?: any[];
}
