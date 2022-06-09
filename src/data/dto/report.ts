export interface ReportCreateUpdateDto {
	id?:           string;
	createdAt?:    string;
	updatedAt?:    string;
	deletedAt?:    string;
	title?:        string;
	description?:  string;
	productId?:    string;
	dailyPriceId?: string;
	projectId?:    string;
	tutorialId?:   string;
	eventId?:      string;
	adId?:         string;
	companyId?:    string;
	tenderId?:     string;
	serviceId?:    string;
	magazineId?:   string;
}