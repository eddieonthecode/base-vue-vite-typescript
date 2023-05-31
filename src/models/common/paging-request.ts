export interface PagingRequest {
    PageIndex: number;
    PageSize: number;
    SearchValue: string;
    SearchColumns: string[];
    Sort: string;
}