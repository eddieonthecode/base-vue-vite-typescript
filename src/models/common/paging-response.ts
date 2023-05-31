export interface PagingResponse<Entity> {
    PageData?: Entity[];
    SummaryData?: object;
    Total?: number;
}