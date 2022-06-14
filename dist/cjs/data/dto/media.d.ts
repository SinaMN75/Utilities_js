export interface MediaReadDto {
    id?: string;
    type?: number;
    useCase?: string;
    link?: string;
}
export interface MediaCreateUpdateDto {
    UserId?: string;
    ProductId?: string;
    ProjectId?: string;
    TutorialId?: string;
    EventId?: string;
    PostId?: string;
    AdsId?: string;
    DailyPriceId?: string;
    CompanyId?: string;
    TenderId?: string;
    ServiceId?: string;
    MagazineId?: string;
    UseCase?: string;
    Files?: File[];
    Links?: string[];
}
